const APP_STORE_URL = "https://testflight.apple.com/join/thyDyeUa";
const PLAY_STORE_URL =
  "https://play.google.com/store/apps/details?id=com.astra.affordables&pcampaignid=web_share";

type StoreBadgeProps = {
  label: string;
  store: string;
  href?: string;
  icon: "apple" | "google";
};

export function AppDownloadSection() {
  return (
    <section className="px-4 py-20">
      <div className="mx-auto max-w-6xl overflow-hidden rounded-[2rem] bg-[linear-gradient(135deg,#0f172a_0%,#1d4ed8_55%,#60a5fa_100%)] px-6 py-12 text-white shadow-[0_30px_80px_rgba(29,78,216,0.22)] md:px-10 md:py-16">
        <div className="grid items-center gap-10 md:grid-cols-[1.2fr_0.8fr]">
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.22em] text-blue-100">
              Download UNIA
            </p>
            <h2 className="max-w-2xl text-3xl font-bold tracking-tight md:text-5xl">
              Take your campus marketplace with you.
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-7 text-blue-50/90 md:text-lg">
              Buy, sell, and discover student businesses from your phone.
              Download UNIA on the App Store or Google Play.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-1">
            <StoreBadge
              label="Download on the"
              store="App Store"
              href={APP_STORE_URL}
              icon="apple"
            />
            <StoreBadge
              label="Get it on"
              store="Google Play"
              href={PLAY_STORE_URL}
              icon="google"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function StoreBadge({ label, store, href, icon }: StoreBadgeProps) {
  const isLive = Boolean(href);
  const classes =
    "flex min-h-20 items-center justify-between rounded-2xl border border-white/20 bg-white/10 px-5 py-4 backdrop-blur-sm transition duration-200";

  const content = (
    <>
      <div className="flex items-center gap-4">
        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-slate-950">
          {icon === "apple" ? <AppleIcon /> : <GooglePlayIcon />}
        </div>
        <div>
          <p className="text-xs font-medium uppercase tracking-[0.18em] text-blue-100">
            {label}
          </p>
          <p className="text-xl font-semibold">{store}</p>
        </div>
      </div>
      {/* <span className="rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-blue-50">
        {isLive ? "Open" : "Unavailable"}
      </span> */}
    </>
  );

  if (!isLive) {
    return (
      <div aria-disabled="true" className={classes}>
        {content}
      </div>
    );
  }

  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className={`${classes} hover:-translate-y-0.5 hover:bg-white/15`}
    >
      {content}
    </a>
  );
}

function AppleIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M16.365 1.43c0 1.14-.465 2.217-1.223 3.024-.82.866-2.157 1.533-3.316 1.439-.146-1.102.37-2.236 1.12-3.023.82-.86 2.225-1.486 3.42-1.44zM20.8 17.246c-.597 1.36-.88 1.965-1.648 3.164-1.071 1.672-2.58 3.757-4.45 3.772-1.663.015-2.09-1.084-4.347-1.07-2.258.014-2.727 1.091-4.39 1.076-1.87-.015-3.3-1.89-4.372-3.562-2.994-4.67-3.31-10.156-1.46-13.07 1.316-2.076 3.393-3.292 5.346-3.292 1.99 0 3.24 1.092 4.883 1.092 1.593 0 2.563-1.094 4.867-1.094 1.74 0 3.582.95 4.895 2.593-4.306 2.359-3.61 8.45.676 10.39z" />
    </svg>
  );
}

function GooglePlayIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path d="M3.172 2.75 13.3 12 3.172 21.25A1.75 1.75 0 0 1 2.5 19.9V4.1c0-.53.239-1.032.672-1.35Z" fill="#34A853" />
      <path d="m16.742 15.14-3.442-3.14 3.442-3.14 4.117 2.28c.942.522.942 1.877 0 2.399l-4.117 2.281Z" fill="#FBBC04" />
      <path d="M13.3 12 3.172 2.75c.339-.25.76-.332 1.157-.15l12.413 5.497L13.3 12Z" fill="#4285F4" />
      <path d="M13.3 12 16.742 15.14 4.329 20.637a1.23 1.23 0 0 1-1.157-.15L13.3 12Z" fill="#EA4335" />
    </svg>
  );
}
