import Link from "next/link";
import { records } from "@/lib/records";
import { RecordCard } from "@/components/record-card";

export default function NewReleasesPage() {
  return (
    <main className="min-h-screen bg-[#f3efe6] px-6 py-10 text-[#171512] md:px-12 pt-28">
      <div className="mx-auto max-w-7xl">
        <Link
          href="/"
          className="text-sm uppercase tracking-[0.2em] opacity-60 hover:opacity-100"
        >
          ← Fred&apos;s Records
        </Link>
        <header className="mb-12 mt-16 max-w-3xl">
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.25em] text-[#b24a2f]">
            New Releases — in store
          </p>
          <h1 className="font-display text-6xl leading-[0.9] tracking-[-0.05em] md:text-8xl">
            The newest in-store releases.
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-8 opacity-70">
            New pressings, classic cuts, and records worth getting off the couch
            for.
          </p>
        </header>
        TODO: Add new-releases page content
      </div>
    </main>
  );
}
