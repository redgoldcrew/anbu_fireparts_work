import { NextResponse } from 'next/server'
import nodemailer from 'nodemailer'
import { CONTACT } from '@/lib/constants'

interface ContactPayload {
  name?: string
  email?: string
  phone?: string
  service?: string
  message?: string
}

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
}

export async function POST(request: Request) {
  let payload: ContactPayload

  try {
    payload = (await request.json()) as ContactPayload
  } catch {
    return NextResponse.json(
      { success: false, error: 'Invalid request body.' },
      { status: 400 }
    )
  }

  const name = payload.name?.trim()
  const email = payload.email?.trim()
  const phone = payload.phone?.trim()
  const service = payload.service?.trim()
  const message = payload.message?.trim()

  if (!name || !email || !phone || !service || !message) {
    return NextResponse.json(
      { success: false, error: 'All fields are required.' },
      { status: 400 }
    )
  }

  const gmailUser = process.env.EMAIL?.trim()
  const appPassword = process.env.APP_PASSWORD?.replace(/\s/g, '')

  if (!gmailUser || !appPassword) {
    console.error('Email service misconfigured: EMAIL or APP_PASSWORD is missing')
    return NextResponse.json(
      { success: false, error: 'Email service is not configured.' },
      { status: 500 }
    )
  }

  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
      user: gmailUser,
      pass: appPassword,
    },
  })

  try {
    await transporter.sendMail({
      from: `"Anbu Fire Part Works" <${gmailUser}>`,
      to: process.env.MAIL_TO?.trim() ?? CONTACT.email,
      replyTo: email,
      subject: `New Contact Form: ${service}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><b>Name:</b> ${escapeHtml(name)}</p>
        <p><b>Email:</b> ${escapeHtml(email)}</p>
        <p><b>Phone:</b> ${escapeHtml(phone)}</p>
        <p><b>Service:</b> ${escapeHtml(service)}</p>
        <p><b>Message:</b></p>
        <p>${escapeHtml(message).replace(/\n/g, '<br>')}</p>
      `,
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    const smtpError =
      error instanceof Error ? error.message : 'Unknown SMTP error'
    console.error('Failed to send email:', smtpError)
    return NextResponse.json(
      { success: false, error: 'Failed to send message. Please try again.' },
      { status: 500 }
    )
  }
}
