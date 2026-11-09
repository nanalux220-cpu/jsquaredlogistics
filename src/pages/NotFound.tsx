import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <main className="flex min-h-svh flex-col items-center justify-center px-5 text-center">
      <p className="font-display text-[clamp(96px,18vw,180px)] font-bold leading-none tracking-[-0.06em] text-brand">404</p>
      <h1 className="mt-4 text-[clamp(24px,3vw,34px)] font-bold tracking-[-0.03em]">This page doesn't exist.</h1>
      <p className="mt-3 max-w-[40ch] text-ink-muted">The link may be old or mistyped. Head back to the homepage to find what you need.</p>
      <a href={__BASE_PATH__ || "/"} className="btn-primary mt-8">
        <ArrowLeft className="h-4 w-4" aria-hidden="true" /> Back to homepage
      </a>
    </main>
  );
}
