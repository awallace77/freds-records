import Link from "next/link";
import { records } from "@/lib/records";
import { RecordCard } from "@/components/record-card";
import { news } from "@/lib/news";
import { NewsCard } from "@/components/news-card";

export default function ShopPage() {
  return (
    <main className="min-h-screen bg-[#f3efe6] px-6 py-10 text-[#171512] md:px-12 pt-24">
      <div className="mx-auto max-w-7xl">
        <header className="mb-12 mt-16 max-w-3xl">
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.25em] text-[#b24a2f]">
            The news
          </p>
          <h1 className="font-display text-6xl leading-[0.9] tracking-[-0.05em] md:text-8xl">
            Learn more.
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-8 opacity-70">
            The latest news, keeping you up to date with the newest releases,
            events, and more.
          </p>
        </header>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {news.map((paper) => (
            <NewsCard key={paper.id} paper={paper} />
          ))}
        </div>
      </div>
    </main>
  );
}
