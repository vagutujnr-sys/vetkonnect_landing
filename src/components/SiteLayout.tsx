import { Link } from "@tanstack/react-router";
import { Apple, ChevronDown, Menu, Play, X } from "lucide-react";
import type { ReactNode } from "react";
import { PLAY_STORE_URL } from "@/components/StoreButtons";
import { useState } from "react";

export function SiteLayout({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className={`flex min-h-screen flex-col ${className}`}>
      <header className="relative z-30 flex flex-col border-b border-border px-5 py-4 sm:flex-row sm:items-center sm:justify-between sm:px-8 lg:px-12">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex min-w-0 items-center gap-3">
            <img
              src="/logo.png"
              alt="VetKonnect logo"
              className="h-10 w-10 shrink-0 object-contain"
            />
            <span className="truncate text-lg font-extrabold tracking-tight">VetKonnect</span>
          </Link>
          <button
            type="button"
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileMenuOpen}
            aria-controls="main-navigation"
            onClick={() => setMobileMenuOpen((open) => !open)}
            className="grid h-10 w-10 place-items-center rounded-md text-foreground hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring sm:hidden"
          >
            {mobileMenuOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
          </button>
        </div>
        <nav
          id="main-navigation"
          aria-label="Main navigation"
          className={`${mobileMenuOpen ? "flex" : "hidden"} mt-4 w-full flex-col gap-1 text-sm text-muted-foreground sm:mt-0 sm:flex sm:w-auto sm:flex-row sm:items-center sm:gap-x-5 sm:gap-y-2`}
        >
          <Link
            to="/beta"
            onClick={() => setMobileMenuOpen(false)}
            className="rounded-md px-2 py-2 font-semibold text-primary hover:bg-secondary sm:px-0 sm:py-1"
          >
            Join Beta
          </Link>
          <details className="group relative">
            <summary className="flex cursor-pointer list-none items-center justify-between gap-1 rounded-md px-2 py-2 hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring sm:py-1">
              Store Presence
              <ChevronDown
                aria-hidden="true"
                className="h-4 w-4 transition-transform group-open:rotate-180"
              />
            </summary>
            <div className="mt-1 space-y-1 rounded-md border border-border bg-background p-1 sm:absolute sm:right-0 sm:top-full sm:z-50 sm:mt-2 sm:w-56 sm:shadow-md">
              <a
                href={PLAY_STORE_URL}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 rounded px-2 py-2 text-foreground hover:bg-muted"
              >
                <Play aria-hidden="true" className="h-4 w-4" />
                <span>Android · Google Play</span>
              </a>
              <div
                aria-disabled="true"
                className="flex cursor-not-allowed items-center gap-2 rounded px-2 py-2 text-muted-foreground opacity-60"
                title="No iOS App Store listing is available"
              >
                <Apple aria-hidden="true" className="h-4 w-4" />
                <span>iOS · App Store</span>
              </div>
            </div>
          </details>
          <Link
            to="/privacy"
            onClick={() => setMobileMenuOpen(false)}
            className="rounded-md px-2 py-2 hover:bg-muted hover:text-foreground sm:px-0 sm:py-1"
          >
            Privacy
          </Link>
          <Link
            to="/terms"
            onClick={() => setMobileMenuOpen(false)}
            className="rounded-md px-2 py-2 hover:bg-muted hover:text-foreground sm:px-0 sm:py-1"
          >
            Terms
          </Link>
          <Link
            to="/terminate"
            onClick={() => setMobileMenuOpen(false)}
            className="rounded-md px-2 py-2 hover:bg-muted hover:text-foreground sm:px-0 sm:py-1"
          >
            Terminate
          </Link>
        </nav>
      </header>
      {children}
      <footer className="mt-auto border-t border-border px-5 py-4 text-xs text-muted-foreground sm:px-8 lg:px-12">
        <span>
          © {new Date().getFullYear()} VetKonnect. Made for pets and the people who love them.
        </span>
      </footer>
    </div>
  );
}
