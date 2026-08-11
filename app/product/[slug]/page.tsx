import { notFound } from "next/navigation";
import Link from "next/link";
import { records } from "@/lib/records";
import { AddToCartButton } from "@/components/add-to-cart-button";
import { Vinyl } from "@/components/vinyl";
import { VinylCover } from "@/components/vinyl-cover";

export function generateStaticParams() {
  return records.map((record) => ({ slug: record.slug }));
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const record = records.find((item) => item.slug === slug);

  if (!record) notFound();

  return (
    <main className="min-h-screen bg-[#171512] px-6 py-10 text-[#f3efe6] md:px-12">
      <div className="mx-auto max-w-7xl">
        <Link
          href="/shop"
          className="text-sm uppercase tracking-[0.2em] opacity-60 hover:opacity-100"
        >
          ← Back to shop
        </Link>

        <div className="grid min-h-[75vh] items-center gap-16 py-16 lg:grid-cols-2">
          <VinylCover
            accent={record.accent}
            label={record.title}
            coverImage={record.image}
            large
          />

          <div>
            <p className="mb-4 text-sm uppercase tracking-[0.25em] text-[#d97855]">
              {record.genre}
            </p>
            <h1 className="font-display text-6xl leading-[0.9] tracking-[-0.05em] md:text-8xl">
              {record.title}
            </h1>
            <p className="mt-5 text-xl opacity-60">{record.artist}</p>
            <p className="mt-5 text-md opacity-60">{record.year}</p>
            <p className="mt-8 max-w-lg text-base leading-7 opacity-70">
              {record.description}
            </p>

            <div className="mt-10 flex items-center gap-6">
              <span className="text-2xl">${record.price.toFixed(2)}</span>
              <AddToCartButton record={record} />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
