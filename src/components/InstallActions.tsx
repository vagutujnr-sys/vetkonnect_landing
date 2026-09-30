import { useState } from "react";
import { Download, Share, Smartphone } from "lucide-react";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

const APP_URL = "https://app.vetkonnect.org";

type InstallPlatform = "android" | "ios";

export function InstallActions() {
  const [platform, setPlatform] = useState<InstallPlatform>("android");
  const [open, setOpen] = useState(false);
  const isIos = platform === "ios";

  return (
    <div className="mt-3 flex flex-wrap items-center gap-2">
      <button
        type="button"
        onClick={() => {
          setPlatform("android");
          setOpen(true);
        }}
        className="inline-flex min-h-10 items-center gap-2 rounded-md border border-primary px-3 py-2 text-sm font-semibold text-primary transition-colors hover:bg-secondary"
      >
        <Download aria-hidden="true" className="h-4 w-4" />
        Install on Android
      </button>
      <button
        type="button"
        onClick={() => {
          setPlatform("ios");
          setOpen(true);
        }}
        className="inline-flex min-h-10 items-center gap-2 rounded-md border border-input bg-background px-3 py-2 text-sm font-semibold text-foreground transition-colors hover:bg-muted"
      >
        <Share aria-hidden="true" className="h-4 w-4" />
        Add on iPhone or iPad
      </button>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="max-w-md">
          <DialogHeader>
            <DialogTitle>
              {isIos ? "Add VetKonnect to your Home Screen" : "Install VetKonnect on Android"}
            </DialogTitle>
            <DialogDescription>
              {isIos
                ? "Open the app in Safari, then add it to your Home Screen."
                : "Open the app in Chrome, then use the browser menu to add it to your Home Screen or install it."}
            </DialogDescription>
          </DialogHeader>
          <ol className="list-decimal space-y-3 pl-5 text-sm leading-6 text-foreground">
            <li>
              Open{" "}
              <a
                href={APP_URL}
                target="_blank"
                rel="noreferrer"
                className="font-semibold text-primary underline underline-offset-4"
              >
                VetKonnect
              </a>{" "}
              {isIos ? "in Safari." : "in Chrome."}
            </li>
            {isIos ? (
              <>
                <li>Tap the Share button in Safari.</li>
                <li>Choose “Add to Home Screen”.</li>
                <li>Tap “Add” to finish.</li>
              </>
            ) : (
              <>
                <li>Open the browser menu using the three dots.</li>
                <li>Choose “Install app” or “Add to Home screen”.</li>
                <li>Confirm the prompt to finish.</li>
              </>
            )}
          </ol>
          <a
            href={APP_URL}
            className="inline-flex min-h-10 items-center justify-center gap-2 rounded-md bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground hover:opacity-90"
          >
            <Smartphone aria-hidden="true" className="h-4 w-4" />
            Open VetKonnect
          </a>
        </DialogContent>
      </Dialog>
    </div>
  );
}
