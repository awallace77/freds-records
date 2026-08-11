"use client";
import Link from "next/link";
import Image from "next/image";
import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import { NewsItem } from "@/lib/news";

export function NewsCard({ paper }: { paper: NewsItem }) {
  const accent = paper.accent ?? "#b24a2f";

  return (
    <Link href={`/news/${paper.slug}`}>
      <motion.article whileHover="hover" className="group">
        <div className="relative aspect-square overflow-visible rounded-sm bg-[#ded7c8]">
          {/* Back page — the "article" peeking out behind the cover */}
          <motion.div
            initial={{ rotate: -3 }}
            variants={{ hover: { x: 50, rotate: -6 } }}
            transition={{ type: "spring", stiffness: 200, damping: 18 }}
            className="absolute inset-[8%] rounded-sm shadow-xl overflow-hidden bg-[#f3efe6]"
          >
            {/* Newsprint texture: faint ruled lines */}
            <div
              className="absolute inset-0 opacity-40"
              style={{
                backgroundImage:
                  "repeating-linear-gradient(to bottom, transparent 0px, transparent 18px, #171512 18px, #171512 19px)",
              }}
            />

            <div className="relative flex h-full flex-col gap-3 p-6">
              <span
                className="text-[10px] font-bold uppercase tracking-[0.25em]"
                style={{ color: accent }}
              >
                {paper.subtitle}
              </span>
              <div className="h-3 w-3/4 rounded-sm bg-[#171512]/70" />
              <div className="h-2 w-full rounded-sm bg-[#171512]/30" />
              <div className="h-2 w-5/6 rounded-sm bg-[#171512]/30" />
              <div className="h-2 w-2/3 rounded-sm bg-[#171512]/30" />
            </div>
          </motion.div>

          {/* Front cover — headline + image, slides the opposite way on hover */}
          <motion.div
            variants={{ hover: { rotate: 4, scale: 1.06 } }}
            transition={{ type: "spring", stiffness: 200, damping: 18 }}
            className="absolute inset-[8%] overflow-hidden rounded-sm shadow-xl"
          >
            <Image
              src={paper.image}
              alt={`${paper.title} cover`}
              fill
              sizes="(max-width: 768px) 50vw, 400px"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/10 to-black/60" />
            <div className="relative flex h-full flex-col justify-between p-8 text-white">
              <span className="text-xs font-bold uppercase tracking-[0.25em]">
                {paper.subtitle}
              </span>
              <div>
                <p className="font-display text-4xl leading-none">
                  {paper.title}
                </p>
                <p className="mt-2 text-sm opacity-70">{paper.date}</p>
              </div>
            </div>
          </motion.div>

          <div className="absolute bottom-5 right-5 flex h-11 w-11 items-center justify-center rounded-full bg-white text-black opacity-0 transition group-hover:opacity-100">
            <ArrowUpRight size={18} />
          </div>
        </div>

        <div className="mt-5 flex flex-col items-start justify-between gap-4">
          <span className="text-sm whitespace-nowrap opacity-55">
            {paper.date}
          </span>

          <h3 className="font-display text-2xl">{paper.title}</h3>
          {paper.description && (
            <p className="mt-1 text-sm opacity-55">{paper.description}</p>
          )}
        </div>
      </motion.article>
    </Link>
  );
}
