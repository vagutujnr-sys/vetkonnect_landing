import { createFileRoute } from "@tanstack/react-router";
import nodemailer from "nodemailer";

const BETA_SIGNUP_RECIPIENT_EMAIL = "vagutujnr@gmail.com";

export const Route = createFileRoute("/api/beta-signup")({
  server: {
    handlers: {
      POST: async ({ request }) => {
        let email = "";

        try {
          const body = (await request.json()) as { email?: unknown };
          email = typeof body.email === "string" ? body.email.trim() : "";
        } catch {
          return Response.json({ success: false, error: "Invalid request." }, { status: 400 });
        }

        if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
          return Response.json(
            { success: false, error: "Enter a valid email address." },
            { status: 400 },
          );
        }

        const gmailUser = process.env.GMAIL_USER;
        const gmailPassword = process.env.GMAIL_PASSWORD;
        if (!gmailUser || !gmailPassword) {
          return Response.json(
            { success: false, error: "Beta signups are temporarily unavailable." },
            { status: 503 },
          );
        }

        try {
          const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: { user: gmailUser, pass: gmailPassword },
          });

          await transporter.sendMail({
            from: gmailUser,
            to: BETA_SIGNUP_RECIPIENT_EMAIL,
            replyTo: email,
            subject: `New Beta Signup: ${email}`,
            text: `New VetKonnect beta signup\nEmail: ${email}\nDate: ${new Date().toISOString()}`,
          });

          return Response.json({ success: true });
        } catch (error) {
          console.error("Beta signup error:", error);
          return Response.json(
            { success: false, error: "Failed to submit email. Please try again later." },
            { status: 503 },
          );
        }
      },
    },
  },
});
