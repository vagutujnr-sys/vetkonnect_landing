import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";

export const Route = createFileRoute("/beta")({
  component: BetaPage,
  head: () => ({
    meta: [
      {
        title: "Join VetKonnect Beta — Get Early Access",
      },
      {
        name: "description",
        content:
          "Join the VetKonnect beta testing program. Be among the first to test our new features.",
      },
    ],
  }),
});

function BetaPage() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      // Send email to your API endpoint
      const response = await fetch("/api/beta-signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      const result = await response.json();

      if (result.success) {
        setSuccess(true);
        setEmail("");
        setTimeout(() => setSuccess(false), 5000);
      } else {
        setError(result.error || "Failed to submit email. Please try again.");
      }
    } catch (err) {
      setError("An error occurred. Please try again.");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Header */}
      <header className="border-b border-slate-200 bg-white shadow-sm">
        <div className="mx-auto max-w-6xl px-4 py-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <a
              href="/"
              className="flex items-center gap-2 text-2xl font-bold text-emerald-600"
            >
              <img
                src="/logo.png"
                alt="VetKonnect logo"
                className="h-8 w-8 object-contain"
              />
              <span>VetKonnect</span>
            </a>
            <nav className="hidden items-center gap-6 md:flex">
              <a
                href="/privacy"
                className="text-sm text-slate-600 hover:text-slate-900"
              >
                Privacy
              </a>
              <a
                href="/terms"
                className="text-sm text-slate-600 hover:text-slate-900"
              >
                Terms
              </a>
              <a
                href="/beta"
                className="text-sm font-semibold text-emerald-600"
              >
                Join Beta
              </a>
            </nav>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="mx-auto max-w-2xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="space-y-8">
          {/* Hero Section */}
          <div className="text-center">
            <div className="mb-4 inline-block rounded-full bg-emerald-100 px-4 py-2">
              <span className="text-sm font-semibold text-emerald-700">
                Early Access
              </span>
            </div>
            <h1 className="mb-4 text-4xl font-bold text-slate-900">
              Be the First to Try VetKonnect
            </h1>
            <p className="text-lg text-slate-600">
              Join our beta testing program and help shape the future of pet
              care. Get early access to new features and be part of our growing
              community.
            </p>
          </div>

          {/* Form Section */}
          <div className="rounded-lg border border-slate-200 bg-white p-8 shadow-md">
            <div className="mb-6">
              <h2 className="text-2xl font-semibold text-slate-900">
                Join the Beta
              </h2>
              <p className="mt-2 text-slate-600">
                Enter your email and we'll add you to our testing waitlist.
                We'll reach out soon with more details.
              </p>
            </div>

            {success && (
              <div className="mb-6 rounded-lg bg-emerald-50 p-4 text-emerald-700">
                ✓ Thanks for joining! Check your email for next steps.
              </div>
            )}

            {error && (
              <div className="mb-6 rounded-lg bg-red-50 p-4 text-red-700">
                ✗ {error}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-slate-900"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  disabled={loading}
                  placeholder="your@email.com"
                  className="mt-2 w-full rounded-lg border border-slate-300 px-4 py-3 text-slate-900 placeholder-slate-400 focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/20"
                />
              </div>

              <button
                type="submit"
                disabled={loading || !email}
                className="w-full rounded-lg bg-emerald-600 px-6 py-3 font-semibold text-white transition-colors hover:bg-emerald-700 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? "Submitting..." : "Join the Beta"}
              </button>
            </form>

            <p className="mt-4 text-center text-xs text-slate-500">
              We'll never spam you. Unsubscribe at any time.
            </p>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-200 bg-white py-8 text-center text-sm text-slate-600">
        © 2026 VetKonnect. Made for pets and the people who love them.
      </footer>
    </div>
  );
}
