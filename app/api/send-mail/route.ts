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

export async function POST(request: Request) {
  const { name, email, phone, service, message } =
    (await request.json()) as ContactPayload

  if (!name?.trim() || !email?.trim() || !phone?.trim() || !service?.trim() || !message?.trim()) {
    return NextResponse.json(
      { success: false, error: 'All fields are required.' },
      { status: 400 }
    )
  }

  const gmailUser = process.env.EMAIL
  const appPassword = process.env.APP_PASSWORD

  if (!gmailUser || !appPassword) {
    return NextResponse.json(
      { success: false, error: 'Email service is not configured.' },
      { status: 500 }
    )
  }

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: gmailUser,
      pass: appPassword,
    },
  })

  try {
    await transporter.sendMail({
      from: gmailUser,
      to: process.env.MAIL_TO ?? CONTACT.email,
      replyTo: email,
      subject: `New Contact Form: ${service}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><b>Name:</b> ${name}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Phone:</b> ${phone}</p>
        <p><b>Service:</b> ${service}</p>
        <p><b>Message:</b></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
      `,
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Failed to send email:', error)
    return NextResponse.json(
      { success: false, error: 'Failed to send message. Please try again.' },
      { status: 500 }
    )
  }
}
