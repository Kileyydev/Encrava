import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  console.log("🔑 RESEND_API_KEY exists:", !!process.env.RESEND_API_KEY);

  try {
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

    if (!process.env.RESEND_API_KEY) {
      throw new Error("RESEND_API_KEY is missing in environment variables");
    }

    const { data, error } = await resend.emails.send({
      from: "Encrava Consultations <onboarding@resend.dev>", 
      to: ["youractualemail@gmail.com"],        // ← CHANGE THIS
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
      return NextResponse.json({ success: false, resendError: error }, { status: 500 });
    }

    console.log("✅ Email sent successfully!", data);
    return NextResponse.json({ success: true });

  } catch (error: any) {
    console.error("🚨 Full Server Error:", error);
    console.error("Error Message:", error.message);
    console.error("Error Stack:", error.stack);

    return NextResponse.json({ 
      success: false, 
      error: error.message || "Unknown server error",
      type: error.name
    }, { status: 500 });
  }
}