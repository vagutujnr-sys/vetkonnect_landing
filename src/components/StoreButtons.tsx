export const PLAY_STORE_URL =
  "https://play.google.com/store/apps/details?id=org.vetkonnect.app";

export function StoreButtons() {
  return (
    <div className="flex flex-wrap items-center gap-3">
      <a
        href={PLAY_STORE_URL}
        target="_blank"
        rel="noreferrer"
        className="btn-store shadow-soft"
      >
        <svg viewBox="0 0 24 24" aria-hidden="true" className="h-6 w-6 fill-current">
          <path d="M3.6 1.8a1 1 0 0 0-.5.9v18.6a1 1 0 0 0 .5.9l9.3-10.2L3.6 1.8Zm10.6 8.6 2.7-2.9-9.6-5.4 6.9 8.3Zm0 3.2-6.9 8.3 9.6-5.4-2.7-2.9Zm4.2-1.6 2.7-1.5c.7-.4.7-1.6 0-2l-2.7-1.5-2.4 2.5 2.4 2.5Z" />
        </svg>
        <span className="text-left leading-tight">
          <span className="block text-[0.65rem] uppercase tracking-wide opacity-80">
            Get it on
          </span>
          <span className="block text-sm">Google Play</span>
        </span>
      </a>

      <span
        aria-disabled="true"
        title="Coming soon to the App Store"
        className="btn-store-disabled"
      >
        <svg viewBox="0 0 24 24" aria-hidden="true" className="h-6 w-6 fill-current">
          <path d="M16.4 12.7c0-2.2 1.8-3.3 1.9-3.4-1-1.5-2.6-1.7-3.2-1.7-1.4-.1-2.6.8-3.3.8-.7 0-1.7-.8-2.8-.8-1.5 0-2.8.9-3.6 2.2-1.5 2.6-.4 6.5 1.1 8.6.7 1 1.6 2.2 2.7 2.1 1.1 0 1.5-.7 2.8-.7s1.6.7 2.8.7c1.1 0 1.9-1.1 2.6-2.1.5-.8.8-1.5 1-2-2.1-.8-2-3.4-2-3.7ZM14.3 5.9c.6-.7 1-1.7.9-2.7-.9 0-2 .6-2.6 1.3-.6.6-1 1.7-.9 2.6 1 .1 2-.5 2.6-1.2Z" />
        </svg>
        <span className="text-left leading-tight">
          <span className="block text-[0.65rem] uppercase tracking-wide">Coming soon</span>
          <span className="block text-sm">App Store</span>
        </span>
      </span>
    </div>
  );
}
