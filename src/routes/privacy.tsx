import { createFileRoute } from "@tanstack/react-router";
import { LegalPage } from "@/components/LegalPage";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy — VetKonnect" },
      {
        name: "description",
        content: "How VetKonnect collects, uses and protects your data in the mobile app.",
      },
      { property: "og:title", content: "Privacy Policy — VetKonnect" },
      {
        property: "og:description",
        content: "How VetKonnect collects, uses and protects your data.",
      },
    ],
  }),
  component: Privacy,
});

function Privacy() {
  return (
    <LegalPage
      title="Privacy Policy"
      intro="We keep it simple: we collect only what the app needs to work well for you and your pets."
    >
      <p>
        <strong>What we collect.</strong> Your account details (name, email), pet profiles,
        and the posts or messages you choose to share in the community.
      </p>
      <p>
        <strong>How we use it.</strong> To run your account, connect you with vets, show
        community content, and improve the app.
      </p>
      <p>
        <strong>Sharing.</strong> We do not sell your data. Information is shared only with
        service providers that help us operate VetKonnect, or when the law requires it.
      </p>
      <p>
        <strong>Your choices.</strong> You can update your profile at any time, or request
        full deletion of your account and data from the Terminate page.
      </p>
    </LegalPage>
  );
}
