import { profile } from "@/lib/data";

export const metadata = { title: "Page not found", robots: { index: false } };

export default function NotFound() {
  return (
    <main className="grid min-h-screen place-items-center px-6 text-center">
      <div>
        <p className="eyebrow">Error 404</p>
        <h1 className="mt-3 text-5xl font-bold tracking-tight">Page not found</h1>
        <p className="mx-auto mt-4 max-w-md text-muted">
          The page you&apos;re looking for doesn&apos;t exist. Head back to {profile.shortName}&apos;s portfolio.
        </p>
        <a href="./" className="btn btn-primary mt-8">
          Back to portfolio
        </a>
      </div>
    </main>
  );
}
