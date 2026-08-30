import nodemailer from "nodemailer";

const BETA_SIGNUP_RECIPIENT_EMAIL = "vagutujnr@gmail.com";

export default defineEventHandler(async (event) => {
  if (event.node.req.method !== "POST") {
    return { success: false, error: "Method not allowed" };
  }

  try {
    const { email } = await readBody(event);
    const trimmedEmail = typeof email === "string" ? email.trim() : "";

    if (!trimmedEmail || !trimmedEmail.includes("@")) {
      return { success: false, error: "Invalid email address" };
    }

    const gmailUser = process.env.GMAIL_USER || BETA_SIGNUP_RECIPIENT_EMAIL;
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: gmailUser,
        pass: process.env.GMAIL_PASSWORD,
      },
    });

    await transporter.sendMail({
      from: gmailUser,
      to: BETA_SIGNUP_RECIPIENT_EMAIL,
      replyTo: trimmedEmail,
      subject: `New Beta Signup: ${trimmedEmail}`,
      html: `
        <h2>New VetKonnect Beta Signup</h2>
        <p><strong>Email:</strong> ${trimmedEmail}</p>
        <p><strong>Date:</strong> ${new Date().toLocaleString()}</p>
      `,
    });

    return { success: true };
  } catch (error) {
    console.error("Beta signup error:", error);
    return {
      success: false,
      error: "Failed to submit email. Please try again later.",
    };
  }
});
