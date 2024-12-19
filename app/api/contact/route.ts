import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: Request) {
  try {
    const { name, email, message } = await req.json();

    // Create transporter with App Password
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_APP_PASSWORD
      }
    });

    // Verify connection configuration
    await transporter.verify();
    console.log('Server is ready to take our messages');

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
      subject: `Portfolio Contact: ${name}`,
      html: `
        <div style="
          font-family: Arial, sans-serif;
          max-width: 600px;
          margin: 0 auto;
          padding: 20px;
          background: #1a1a1a;
          border-radius: 10px;
          color: #ffffff;
        ">
          <div style="text-align: center; margin-bottom: 30px;">
            <h1 style="
              color: #2196F3;
              margin: 0;
              font-size: 24px;
              background: linear-gradient(45deg, #2196F3, #64B5F6);
              -webkit-background-clip: text;
              -webkit-text-fill-color: transparent;
            ">
              New Contact Form Submission
            </h1>
          </div>

          <div style="
            background: rgba(255, 255, 255, 0.05);
            padding: 20px;
            border-radius: 8px;
            border: 1px solid rgba(255, 255, 255, 0.1);
            margin-bottom: 20px;
          ">
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid rgba(255, 255, 255, 0.1);">
                  <strong style="color: #64B5F6;">Name:</strong>
                </td>
                <td style="padding: 10px 0; border-bottom: 1px solid rgba(255, 255, 255, 0.1);">
                  ${name}
                </td>
              </tr>
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid rgba(255, 255, 255, 0.1);">
                  <strong style="color: #64B5F6;">Email:</strong>
                </td>
                <td style="padding: 10px 0; border-bottom: 1px solid rgba(255, 255, 255, 0.1);">
                  <a href="mailto:${email}" style="color: #2196F3; text-decoration: none;">
                    ${email}
                  </a>
                </td>
              </tr>
            </table>
          </div>

          <div style="
            background: rgba(255, 255, 255, 0.05);
            padding: 20px;
            border-radius: 8px;
            border: 1px solid rgba(255, 255, 255, 0.1);
          ">
            <h2 style="
              color: #64B5F6;
              margin: 0 0 15px 0;
              font-size: 18px;
            ">
              Message:
            </h2>
            <div style="
              white-space: pre-line;
              line-height: 1.6;
              color: rgba(255, 255, 255, 0.9);
            ">
              ${message}
            </div>
          </div>

          <div style="
            margin-top: 30px;
            text-align: center;
            font-size: 12px;
            color: rgba(255, 255, 255, 0.5);
          ">
            <p>This message was sent from your portfolio contact form.</p>
            <p>Received on: ${new Date().toLocaleString()}</p>
          </div>
        </div>
      `
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({ 
      success: true,
      message: 'Email sent successfully' 
    });
  } catch (error) {
    console.error('Email error:', error);
    return NextResponse.json(
      { 
        success: false,
        error: 'Failed to send email',
        details: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 500 }
    );
  }
} 