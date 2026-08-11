import { notFound } from "next/navigation";
import Link from "next/link";
import { Vinyl } from "@/components/vinyl";
import { news } from "@/lib/news";
import { NewsPaper } from "@/components/news-paper";

export function generateStaticParams() {
  return news.map((paper) => ({ slug: paper.slug }));
}

export default async function NewsPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const paper = news.find((item) => item.slug === slug);

  if (!paper) notFound();

  return (
    <main className="min-h-screen bg-[#171512] px-6 py-10 text-[#f3efe6] md:px-12 pt-28">
      <div className="mx-auto max-w-7xl">
        <Link
          href="/news"
          className="text-sm uppercase tracking-[0.2em] opacity-60 hover:opacity-100"
        >
          ← Back to news
        </Link>

        <div className="grid min-h-[75vh] items-center gap-16 py-16 lg:grid-cols-2">
          <NewsPaper
            accent={paper.accent}
            label={paper.title}
            image={paper.image}
            large
          />

          <div>
            <p className="mb-4 text-sm uppercase tracking-[0.25em] text-[#d97855]">
              {paper.subtitle}
            </p>
            <p className="mb-4 text-sm tracking-[0.15em] whitespace-nowrap opacity-55">
              {paper.date}
            </p>
            <h1 className="font-display text-6xl leading-[0.9] tracking-[-0.05em] md:text-8xl">
              {paper.title}
            </h1>
            <p className="mt-5 text-xl opacity-60">Author: {paper.author}</p>
            <p className="mt-8 max-w-lg text-base leading-7 opacity-70">
              {paper.description}
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
