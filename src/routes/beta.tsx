import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";

import { submitBetaEmail } from "../lib/submit-beta-email";

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
      const result = await submitBetaEmail({ email });

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
    <div className="flex min-h-screen flex-col lg:h-screen lg:min-h-0 lg:overflow-hidden">
      {/* Header - Consistent with homepage */}
      <header className="grid grid-cols-[minmax(0,1fr)_auto] items-center gap-4 border-b border-slate-200 px-6 py-4 sm:flex sm:justify-between lg:px-12">
        <a href="/" className="flex min-w-0 items-center gap-3">
          <img src="/logo.png" alt="VetKonnect logo" className="h-10 w-10 shrink-0 object-contain" />
          <span className="truncate text-lg font-extrabold tracking-tight text-foreground">VetKonnect</span>
        </a>
        <nav className="flex items-center gap-4 text-sm text-muted-foreground">
          <a href="/beta" className="font-semibold text-emerald-600 hover:text-emerald-700">
            Join Beta
          </a>
          <a href="/privacy" className="hover:text-foreground">
            Privacy
          </a>
          <a href="/terms" className="hover:text-foreground">
            Terms
          </a>
          <a href="/terminate" className="hover:text-foreground">
            Terminate
          </a>
        </nav>
      </header>

      {/* Main Content - 2 Column Layout */}
      <main className="flex flex-1 items-center px-6 pb-10 lg:overflow-hidden lg:px-12">
        <div className="mx-auto grid w-full max-w-6xl items-center gap-10 lg:grid-cols-2">
          {/* Left Column - Info */}
          <section>
            <span className="inline-flex rounded-full bg-secondary px-3 py-1 text-xs font-semibold uppercase tracking-wide text-secondary-foreground">
              Early Access
            </span>
            <h1 className="mt-4 text-4xl font-black leading-[1.05] tracking-tight sm:text-5xl">
              Be the First to Try
              <span className="block bg-brand-gradient bg-clip-text text-transparent">
                VetKonnect
              </span>
            </h1>
            <p className="mt-4 max-w-lg text-base text-muted-foreground">
              Join our beta testing program and help shape the future of pet care. Get early access to new features and be part of our growing community.
            </p>
            <p className="mt-3 text-sm text-muted-foreground">
              Enter your email and we'll add you to our testing waitlist. We'll reach out soon with more details.
            </p>
          </section>

          {/* Right Column - Compact Form */}
          <section className="flex justify-center lg:justify-end">
            <div className="w-full max-w-sm rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
              <h2 className="text-xl font-semibold text-foreground">
                Join the Beta
              </h2>

              {success && (
                <div className="mb-4 mt-4 rounded-lg bg-emerald-50 p-3 text-sm text-emerald-700">
                  ✓ Thanks for joining!
                </div>
              )}

              {error && (
                <div className="mb-4 mt-4 rounded-lg bg-red-50 p-3 text-sm text-red-700">
                  ✗ {error}
                </div>
              )}

              <form onSubmit={handleSubmit} className="mt-4 space-y-3">
                <div>
                  <label
                    htmlFor="email"
                    className="block text-xs font-medium text-foreground"
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
                    className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 text-sm text-foreground placeholder-slate-400 focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/20"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading || !email}
                  className="w-full rounded-md bg-emerald-600 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-emerald-700 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {loading ? "Submitting..." : "Join the Beta"}
                </button>
              </form>

              <p className="mt-3 text-center text-xs text-muted-foreground">
                We'll never spam you.
              </p>
            </div>
          </section>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-200 px-6 py-4 text-center text-xs text-muted-foreground lg:px-12">
        © {new Date().getFullYear()} VetKonnect. Made for pets and the people who love them.
      </footer>
    </div>
  );
}
