import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

// ✅ Bu satır şart!
export const runtime = "nodejs";

export async function POST(request: Request) {
  const body = await request.json();

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: "b.eybek9307@gmail.com",
    subject: "Yeni Form Mesajı",
    html: `
    <div style="
      border: 1px solid #ddd; 
      padding: 20px; 
      border-radius: 8px; 
      font-family: Arial, sans-serif;
      max-width: 600px;
      background-color: #f9f9f9;
    ">
      <h2 style="color: #333;">Porfolio Web Sitesi - Yeni Mesaj</h2>
      <p><strong>İsim:</strong> ${body.name}</p>
      <p><strong>Email:</strong> ${body.email}</p>
      <p><strong>Mesaj:</strong></p>
      <p style="background: #fff; padding: 10px; border-radius: 4px; border: 1px solid #ccc;">${body.message}</p>
    </div>
  `,
  };

  try {
    await transporter.sendMail(mailOptions);
    return NextResponse.json(
      { message: "E-posta gönderildi!" },
      { status: 200 }
    );
  } catch (error) {
    console.error("E-posta gönderilemedi:", error);
    return NextResponse.json(
      { message: "E-posta gönderilemedi." },
      { status: 500 }
    );
  }
}
