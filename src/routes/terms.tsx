import { createFileRoute } from "@tanstack/react-router";
import { LegalPage } from "@/components/LegalPage";

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { title: "Terms & Conditions — VetKonnect" },
      {
        name: "description",
        content: "The rules for using the VetKonnect app and community.",
      },
      { property: "og:title", content: "Terms & Conditions — VetKonnect" },
      {
        property: "og:description",
        content: "The rules for using the VetKonnect app and community.",
      },
    ],
  }),
  component: Terms,
});

function Terms() {
  return (
    <LegalPage
      title="Terms & Conditions"
      intro="By using VetKonnect you agree to the terms below."
    >
      <p>
        <strong>Your account.</strong> Keep your details accurate and your login secure. You
        are responsible for activity on your account.
      </p>
      <p>
        <strong>Community conduct.</strong> Be kind. No abuse, animal cruelty content, spam
        or misleading medical claims. We may remove content or accounts that break this.
      </p>
      <p>
        <strong>Not emergency care.</strong> Guidance in the app supports, but does not
        replace, in-person veterinary treatment. In an emergency, contact a vet directly.
      </p>
      <p>
        <strong>Changes.</strong> We may update these terms as the app grows and will note
        material changes in the app.
      </p>
    </LegalPage>
  );
}
