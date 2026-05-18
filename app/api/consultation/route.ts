import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(request: NextRequest) {
  try {
    const apiKey = process.env.RESEND_API_KEY;

    console.log("🔑 RESEND_API_KEY exists:", !!apiKey);

    if (!apiKey) {
      return NextResponse.json(
        { success: false, error: "Missing RESEND_API_KEY" },
        { status: 500 }
      );
    }

    const resend = new Resend(apiKey);

    const formData = await request.formData();

    const fullName = formData.get("fullName") as string;
    const company = formData.get("company") as string;
    const email = formData.get("email") as string;
    const phone = formData.get("phone") as string;
    const language = formData.get("language") as string;
    const date = formData.get("date") as string;
    const time = formData.get("time") as string;
    const details = formData.get("details") as string;

    console.log("📧 Attempting to send email for:", fullName);

    const { data, error } = await resend.emails.send({
      from: "Encrava Consultations <onboarding@resend.dev>",
      to: ["youractualemail@gmail.com"],
      subject: `New Consultation Request - ${fullName}`,
      html: `
        <h2>New Consultation Booking</h2>
        <p><strong>Name:</strong> ${fullName}</p>
        <p><strong>Company:</strong> ${company || "Not provided"}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Language:</strong> ${language}</p>
        <p><strong>Date:</strong> ${date}</p>
        <p><strong>Time:</strong> ${time}</p>
        <p><strong>Details:</strong></p>
        <p>${details || "No details provided"}</p>
      `,
    });

    if (error) {
      console.error("❌ Resend API Error:", error);
      return NextResponse.json(
        { success: false, resendError: error },
        { status: 500 }
      );
    }

    console.log("✅ Email sent successfully!", data);
    return NextResponse.json({ success: true });

  } catch (error: any) {
    console.error("🚨 Full Server Error:", error);

    return NextResponse.json(
      {
        success: false,
        error: error.message || "Unknown server error",
        type: error.name,
      },
      { status: 500 }
    );
  }
}