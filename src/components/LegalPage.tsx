import { Link } from "@tanstack/react-router";
import type { ReactNode } from "react";

export function LegalPage({
  title,
  intro,
  children,
}: {
  title: string;
  intro: string;
  children: ReactNode;
}) {
  return (
    <div className="min-h-screen">
      <header className="border-b border-border px-6 py-4 lg:px-12">
        <Link to="/" className="flex items-center gap-3">
          <img src="/logo.png" alt="VetKonnect logo" className="h-9 w-9 shrink-0 object-contain" />
          <span className="text-base font-extrabold tracking-tight">VetKonnect</span>
        </Link>
      </header>
      <main className="mx-auto max-w-2xl px-6 py-12">
        <h1 className="text-3xl font-black tracking-tight">{title}</h1>
        <p className="mt-3 text-sm text-muted-foreground">{intro}</p>
        <div className="mt-8 space-y-5 text-sm leading-relaxed">{children}</div>
        <Link to="/" className="mt-10 inline-block text-sm font-semibold text-primary">
          ← Back home
        </Link>
      </main>
    </div>
  );
}
