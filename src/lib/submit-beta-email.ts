export async function submitBetaEmail(data: { email: string }) {
  try {
    const email = data.email.trim();

    if (!email || !email.includes("@")) {
      return { success: false, error: "Invalid email address" };
    }

    const response = await fetch("/api/beta-signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email }),
    });

    const result = await response.json();

    if (!response.ok || !result?.success) {
      return {
        success: false,
        error: result?.error || "Failed to submit email. Please try again later.",
      };
    }

    return { success: true };
  } catch (error) {
    console.error("Email submission error:", error);
    return {
      success: false,
      error: "Failed to submit email. Please try again later.",
    };
  }
}
