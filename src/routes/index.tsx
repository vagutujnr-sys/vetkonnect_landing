import { createFileRoute } from "@tanstack/react-router";
import { InstallActions } from "@/components/InstallActions";
import { SiteLayout } from "@/components/SiteLayout";
import { UserNetworkBackground } from "@/components/UserNetworkBackground";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "VetKonnect — Vet Care & Pet Community App" },
      {
        name: "description",
        content:
          "Trusted vets, pet care tips and a warm animal-loving community — all in one app. Download VetKonnect on Google Play.",
      },
      { property: "og:title", content: "VetKonnect — Vet Care & Pet Community App" },
      {
        property: "og:description",
        content: "Trusted vets, care tips and a caring pet community in one app.",
      },
    ],
  }),
  component: Home,
});

const highlights = [
  "Chat with trusted vets near you",
  "Share stories in a pet-loving community",
  "Care tips, rescue and education feeds",
];

function Home() {
  return (
    <SiteLayout className="lg:h-screen lg:min-h-0 lg:overflow-hidden">
      <main className="flex flex-1 items-center px-6 pb-10 lg:overflow-hidden lg:px-12">
        <div className="relative z-10 mx-auto grid w-full max-w-6xl items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <section>
            <span className="inline-flex rounded-full bg-secondary px-3 py-1 text-xs font-semibold uppercase tracking-wide text-secondary-foreground">
              For pet lovers
            </span>
            <h1 className="mt-4 text-4xl font-black leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">
              Every pet deserves
              <span className="block bg-brand-gradient bg-clip-text text-transparent">
                great care.
              </span>
            </h1>
            <p className="mt-4 max-w-lg text-base text-muted-foreground">
              VetKonnect brings vets, pet owners and animal lovers together — advice, community and
              care for the animals you love.
            </p>
            <ul className="mt-5 space-y-2 text-sm">
              {highlights.map((item) => (
                <li key={item} className="flex items-center gap-2">
                  <span className="grid h-5 w-5 shrink-0 place-items-center rounded-full bg-accent text-[0.7rem] font-bold text-accent-foreground">
                    ✓
                  </span>
                  {item}
                </li>
              ))}
            </ul>
            <div className="mt-7">
              <InstallActions />
            </div>
          </section>

          <section className="relative isolate flex justify-center py-8 lg:py-0">
            <UserNetworkBackground />
            <div className="animate-phone-float phone-frame-silver relative z-10 rounded-[2.2rem] p-[3px] shadow-[0_25px_60px_rgba(15,23,42,0.2)]">
              <div className="rounded-[2rem] bg-[#111820] p-1">
                <img
                  src="/community.png"
                  alt="VetKonnect community feed in the mobile app"
                  className="h-auto w-56 rounded-[1.7rem] object-cover sm:w-64 lg:max-h-[65vh] lg:w-auto"
                />
              </div>
            </div>
          </section>
        </div>
      </main>
    </SiteLayout>
  );
}
