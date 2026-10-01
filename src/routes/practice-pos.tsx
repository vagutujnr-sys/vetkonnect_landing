import { Link, createFileRoute } from "@tanstack/react-router";
import {
  Activity,
  ArrowRight,
  ClipboardList,
  CreditCard,
  Package,
  Pill,
  Printer,
  ShieldCheck,
  Stethoscope,
  WifiOff,
} from "lucide-react";
import { SiteLayout } from "@/components/SiteLayout";

export const Route = createFileRoute("/practice-pos")({
  head: () => ({
    meta: [
      { title: "Practice P.O.S — VetKonnect Premium" },
      {
        name: "description",
        content:
          "A connected, offline-ready practice P.O.S for veterinary teams, linked to pet owners on VetKonnect.",
      },
      { property: "og:title", content: "Practice P.O.S — VetKonnect Premium" },
      {
        property: "og:description",
        content:
          "Reception, visits, payments, pharmacy, stock, vets and financial reports in one connected veterinary workspace.",
      },
    ],
  }),
  component: PracticePosPage,
});

const workflows = [
  {
    name: "Reception",
    description:
      "Welcome clients, find owner profiles and keep the day moving from one front desk.",
    icon: ClipboardList,
  },
  {
    name: "Visits",
    description: "Keep appointments and visit details connected to the right pet and owner.",
    icon: Activity,
  },
  {
    name: "Point of sale",
    description: "Bring services and products together for a clear, simple checkout.",
    icon: CreditCard,
  },
  {
    name: "Client receipts",
    description:
      "Print receipts for VetKonnect member owners or walk-in clients, with no account required for walk-ins.",
    icon: Printer,
  },
  {
    name: "Pharmacy",
    description: "Keep medicines part of the same clinic workflow as visits and sales.",
    icon: Pill,
  },
  {
    name: "Stock",
    description: "Track the products and supplies your practice relies on every day.",
    icon: Package,
  },
  {
    name: "Vets",
    description: "Give your veterinary team a shared view of practice activity.",
    icon: Stethoscope,
  },
  {
    name: "Financial reports",
    description: "See the numbers behind your clinic's sales and day-to-day operations.",
    icon: Activity,
  },
];

function PracticePosPage() {
  return (
    <SiteLayout>
      <main>
        <section className="relative isolate overflow-hidden border-b border-border bg-[radial-gradient(ellipse_at_85%_20%,oklch(0.91_0.09_94)_0%,transparent_32%),linear-gradient(120deg,oklch(0.98_0.025_150)_0%,var(--color-background)_58%)] px-6 py-16 sm:py-20 lg:px-12 lg:py-24">
          <div className="mx-auto grid w-full max-w-6xl items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
            <div>
              <span className="inline-flex items-center gap-2 rounded-sm bg-foreground px-3 py-1.5 text-xs font-bold uppercase tracking-widest text-background">
                <ShieldCheck aria-hidden="true" className="h-4 w-4" />
                Premium feature · Coming soon
              </span>
              <p className="mt-6 text-sm font-semibold uppercase tracking-widest text-primary">
                Practice P.O.S
              </p>
              <h1 className="mt-3 max-w-2xl text-4xl font-black leading-[1.05] text-foreground sm:text-5xl lg:text-6xl">
                Your clinic day, connected.
              </h1>
              <p className="mt-5 max-w-xl text-lg leading-8 text-muted-foreground">
                A practice workspace for veterinary teams, built to bring reception, care and clinic
                operations together with the VetKonnect owner accounts your clients already use.
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <Link
                  to="/beta"
                  className="inline-flex min-h-12 items-center gap-2 rounded-md bg-primary px-5 py-3 text-sm font-bold text-primary-foreground transition-transform hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                >
                  Get product updates
                  <ArrowRight aria-hidden="true" className="h-4 w-4" />
                </Link>
                <span className="text-sm text-muted-foreground">
                  Designed for veterinary practices
                </span>
              </div>
            </div>

            <div className="relative mx-auto w-full max-w-lg">
              <div className="absolute -inset-5 -rotate-2 border border-primary/20 bg-primary/5" />
              <div className="relative border border-border bg-card shadow-[0_24px_70px_-32px_rgba(20,50,38,0.45)]">
                <div className="flex items-center justify-between border-b border-border px-5 py-4">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                      Product preview
                    </p>
                    <p className="mt-1 text-lg font-bold">Example clinic day</p>
                  </div>
                  <span className="rounded-sm bg-secondary px-2.5 py-1.5 text-xs font-semibold text-secondary-foreground">
                    VetKonnect
                  </span>
                </div>
                <div className="grid grid-cols-2 gap-px bg-border">
                  {[
                    ["Reception", "Client check-ins"],
                    ["Visits", "Care in progress"],
                    ["Pharmacy", "Dispensing"],
                    ["Stock", "Clinic supplies"],
                  ].map(([title, detail]) => (
                    <div key={title} className="bg-card px-5 py-5">
                      <p className="text-sm font-bold">{title}</p>
                      <p className="mt-1 text-xs text-muted-foreground">{detail}</p>
                    </div>
                  ))}
                </div>
                <div className="flex items-center gap-3 border-t border-border bg-muted/70 px-5 py-4">
                  <WifiOff aria-hidden="true" className="h-5 w-5 shrink-0 text-primary" />
                  <p className="text-sm leading-6 text-foreground">
                    <span className="font-semibold">Offline-ready PWA.</span> Planned sync when your
                    connection returns.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto w-full max-w-6xl px-6 py-16 sm:py-20 lg:px-12">
          <div className="grid gap-10 md:grid-cols-[0.8fr_1.2fr] md:gap-16">
            <div>
              <p className="text-sm font-semibold uppercase tracking-widest text-primary">
                One practice workspace
              </p>
              <h2 className="mt-3 text-3xl font-black leading-tight sm:text-4xl">
                The moving parts of a clinic, working together.
              </h2>
              <p className="mt-4 leading-7 text-muted-foreground">
                Keep the front desk, veterinary team and back-office workflows connected around the
                same practice and client records.
              </p>
            </div>
            <div className="grid gap-x-8 sm:grid-cols-2">
              {workflows.map(({ name, description, icon: Icon }) => (
                <article key={name} className="border-t border-border py-5">
                  <div className="flex items-center gap-3">
                    <span className="grid h-9 w-9 place-items-center bg-secondary text-secondary-foreground">
                      <Icon aria-hidden="true" className="h-4 w-4" />
                    </span>
                    <h3 className="font-bold">{name}</h3>
                  </div>
                  <p className="mt-3 text-sm leading-6 text-muted-foreground">{description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="border-y border-border bg-secondary/40 px-6 py-12 sm:py-14 lg:px-12">
          <div className="mx-auto flex w-full max-w-6xl flex-col gap-5 sm:flex-row sm:items-start sm:gap-8">
            <span className="grid h-12 w-12 shrink-0 place-items-center bg-background text-primary">
              <Printer aria-hidden="true" className="h-6 w-6" />
            </span>
            <div className="max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-widest text-primary">
                Planned offline workflow
              </p>
              <h2 className="mt-2 text-2xl font-black leading-tight sm:text-3xl">
                Print client receipts, online or offline.
              </h2>
              <p className="mt-3 leading-7 text-muted-foreground">
                Prepare receipts for VetKonnect member owners and walk-in clients alike; walk-ins do
                not need a VetKonnect account. When internet is unavailable, the planned offline
                flow can queue sale and receipt records on the device and print through a supported
                printer that is still connected locally. Queued records sync when the connection
                returns.
              </p>
            </div>
          </div>
        </section>

        <section className="border-y border-border bg-foreground px-6 py-14 text-background sm:py-16 lg:px-12">
          <div className="mx-auto grid w-full max-w-6xl gap-8 md:grid-cols-2 md:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-widest text-emerald-300">
                Coming to VetKonnect Premium
              </p>
              <h2 className="mt-3 text-3xl font-black leading-tight sm:text-4xl">
                Practice records meet owner accounts.
              </h2>
            </div>
            <div>
              <p className="leading-7 text-background/75">
                Practice P.O.S is being designed to connect clinic workflows with VetKonnect owner
                accounts, so the practice and the people caring for each pet are part of one
                ecosystem. It is planned as a progressive web app, with offline support and sync
                when connectivity is restored.
              </p>
              <Link
                to="/beta"
                className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-background underline decoration-emerald-300 underline-offset-4 hover:text-emerald-200"
              >
                Join VetKonnect beta
                <ArrowRight aria-hidden="true" className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </section>
      </main>
    </SiteLayout>
  );
}
