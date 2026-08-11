import Link from "next/link";
import { records } from "@/lib/records";
import { RecordCard } from "./record-card";

export function FeaturedRecords() {
  return (
    <section id="featured" className="px-6 py-28 md:px-12">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 flex items-end justify-between gap-6">
          <div>
            <p className="mb-3 text-sm uppercase tracking-[0.25em] text-[#b24a2f]">01 / Featured</p>
            <h2 className="font-display text-5xl tracking-[-0.04em] md:text-7xl">Fresh cuts.</h2>
          </div>
          <Link href="/shop" className="hidden text-sm uppercase tracking-[0.2em] underline underline-offset-8 md:block">
            View all
          </Link>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {records.slice(0, 3).map((record) => (
            <RecordCard key={record.id} record={record} />
          ))}
        </div>
      </div>
    </section>
  );
}