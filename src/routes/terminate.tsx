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
        account, and confirm. Your account is removed immediately.
      </p>
      <p>
        <strong>By email.</strong> Send a request from your registered email address to{" "}
        <a href="mailto:support@vetkonnect.org" className="font-semibold text-primary">
          support@vetkonnect.org
        </a>{" "}
        with the subject "Delete my account".
      </p>
      <p>
        <strong>What is deleted.</strong> Your profile, pet profiles, posts, comments and
        messages. Requests are processed within 30 days.
      </p>
      <p>
        <strong>What may be kept.</strong> Limited records we are legally required to retain,
        stored securely and never used for marketing.
      </p>
    </LegalPage>
  );
}
