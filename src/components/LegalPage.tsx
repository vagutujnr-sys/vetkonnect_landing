import { Link } from "@tanstack/react-router";
import type { ReactNode } from "react";
import { SiteLayout } from "@/components/SiteLayout";

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
    <SiteLayout>
      <main className="mx-auto w-full max-w-3xl flex-1 px-6 py-10 sm:py-14">
        <h1 className="text-3xl font-black tracking-tight">{title}</h1>
        <p className="mt-3 text-sm text-muted-foreground">{intro}</p>
        <div className="mt-8 space-y-5 border-t border-border pt-6 text-sm leading-7">{children}</div>
        <Link to="/" className="mt-10 inline-block text-sm font-semibold text-primary hover:opacity-80">
          Back home
        </Link>
      </main>
    </SiteLayout>
  );
}
