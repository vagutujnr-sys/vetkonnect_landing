import { createFileRoute } from "@tanstack/react-router";
import { LegalPage } from "@/components/LegalPage";

export const Route = createFileRoute("/terminate")({
  head: () => ({
    meta: [
      { title: "Terminate Account — VetKonnect" },
      {
        name: "description",
        content: "Request deletion of your VetKonnect account and associated data.",
      },
      { property: "og:title", content: "Terminate Account — VetKonnect" },
      {
        property: "og:description",
        content: "Request deletion of your VetKonnect account and data.",
      },
    ],
  }),
  component: Terminate,
});

function Terminate() {
  return (
    <LegalPage
      title="Terminate Account"
      intro="Request permanent deletion of your VetKonnect account and data."
    >
      <p>
        <strong>In the app.</strong> Open VetKonnect, go to Profile → Settings → Delete
        account, and follow the confirmation steps.
      </p>
      <p>
        <strong>By email.</strong> Send your request from the email address registered to
        your account. Use the button below to open a prefilled email request.
      </p>
      <p>
        <strong>What is deleted.</strong> Your profile, pet profiles, posts, comments and
        messages. Email requests are processed within 30 days.
      </p>
      <p>
        <strong>What may be kept.</strong> Limited records we are legally required to retain,
        stored securely and never used for marketing.
      </p>
      <p>
        <a
          href="mailto:support@vetkonnect.org?subject=Delete%20my%20VetKonnect%20account&body=Please%20delete%20my%20VetKonnect%20account%20and%20associated%20data.%0A%0ARegistered%20email:%20"
          className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 font-semibold text-primary-foreground hover:opacity-90"
        >
          Request account deletion
        </a>
      </p>
    </LegalPage>
  );
}
