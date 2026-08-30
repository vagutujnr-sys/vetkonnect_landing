import { server$ } from "@tanstack/start";
import nodemailer from "nodemailer";

export const submitBetaEmail = server$(async (data: { email: string }) => {
  try {
    const { email } = data;

    // Validate email
    if (!email || !email.includes("@")) {
      return { success: false, error: "Invalid email address" };
    }

    // Create transporter using Gmail SMTP
    // For production, use environment variables
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_PASSWORD,
      },
    });

    // Send email to your address
    await transporter.sendMail({
      from: process.env.GMAIL_USER,
      to: "vagutujnr@gmail.com",
      subject: `New Beta Signup: ${email}`,
      html: `
        <h2>New VetKonnect Beta Signup</h2>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Date:</strong> ${new Date().toLocaleString()}</p>
      `,
    });

    return { success: true };
  } catch (error) {
    console.error("Email submission error:", error);
    return {
      success: false,
      error: "Failed to submit email. Please try again later.",
    };
  }
});
