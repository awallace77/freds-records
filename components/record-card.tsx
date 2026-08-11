"use client";
import Link from "next/link";
import Image from "next/image";
import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import type { RecordItem } from "@/lib/records";

export function RecordCard({ record }: { record: RecordItem }) {
  return (
    <Link href={`/product/${record.slug}`}>
      <motion.article whileHover="hover" className="group">
        <div className="relative aspect-square overflow-visible rounded-sm bg-[#ded7c8]">
          <motion.div
            variants={{ hover: { x: 60 } }}
            transition={{ type: "spring", stiffness: 200, damping: 18 }}
            className="absolute right-[15%] top-[15%] aspect-square w-[70%] rounded-full bg-[#111] shadow-xl opacity-95"
            style={{
              backgroundImage: `repeating-radial-gradient(
                circle at center, 
                color-mix(in srgb, ${record.accent} 85%, black 15%) 0px, 
                color-mix(in srgb, ${record.accent} 85%, black 15%) 2px,
                color-mix(in srgb, ${record.accent} 60%, black 40%) 3px,
                color-mix(in srgb, ${record.accent} 85%, black 15%) 5px
                )`,
            }}
          />
          <motion.div
            variants={{ hover: { rotate: 4, scale: 1.06 } }}
            transition={{ type: "spring", stiffness: 200, damping: 18 }}
            className="absolute inset-[8%] overflow-hidden rounded-sm shadow-xl"
          >
            {/* Cover art as background */}
            <Image
              src={record.image}
              alt={`${record.title} cover`}
              fill
              sizes="(max-width: 768px) 50vw, 400px"
              className="object-cover "
            />
            {/* Gradient overlay so text stays legible over any image */}
            <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/10 to-black/60" />

            <div className="relative flex h-full flex-col justify-between p-8 text-white">
              <span className="text-xs font-bold uppercase tracking-[0.25em]">
                {record.genre}
              </span>
              <div>
                <p className="font-display text-4xl leading-none">
                  {record.title}
                </p>
                <p className="mt-2 text-sm opacity-70">{record.artist}</p>
              </div>
            </div>
          </motion.div>
          <div className="absolute bottom-5 right-5 flex h-11 w-11 items-center justify-center rounded-full bg-white text-black opacity-0 transition group-hover:opacity-100">
            <ArrowUpRight size={18} />
          </div>
        </div>
        <div className="mt-5 flex items-start justify-between gap-4">
          <div>
            <h3 className="font-display text-2xl">{record.title}</h3>
            <p className="mt-1 text-sm opacity-55">{record.artist}</p>
          </div>
          <span className="text-sm">${record.price.toFixed(2)}</span>
        </div>
      </motion.article>
    </Link>
  );
}
