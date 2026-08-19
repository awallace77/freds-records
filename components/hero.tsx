"use client";
import Link from "next/link";
import { motion } from "motion/react";
import { ArrowDown, Disc3 } from "lucide-react";
import { Vinyl } from "./vinyl";
import Image from "next/image";

export function Hero() {
  return (
    <section className="noise relative flex min-h-screen flex-col px-6 py-6 md:px-12">
      <div className="relative mx-auto mt-5 flex w-full max-w-7xl flex-1 flex-col items-center lg:flex-row">
        {/* Mobile: normal flow, sits above text and pushes it down */}
        <div className="lg:hidden">
          <Vinyl accent="#b24a2f" label="Fred's" large={true} />
        </div>

        <div className="z-10 max-w-4xl lg:-mt-10">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="mb-6 flex flex-col items-left gap-0 lg:gap-2 text-sm uppercase tracking-[0.25em] text-[#b24a2f]"
          >
            <Disc3 size={24} />
            <span>
              The Most Complete Source for Newfoundland Music and DVDs!
            </span>
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.1 }}
            className="font-display text-[17vw] leading-[0.78] tracking-[-0.08em] md:text-[12vw]"
          >
            Sound
            <br />
            <span className="italic">matters.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="mt-10 max-w-md text-base leading-4 opacity-65 md:text-lg"
          >
            Records for people who still believe music should take up physical
            space.
          </motion.p>
        </div>

        {/* Desktop only: absolute, overlapping on the right */}
        <div className="absolute right-0 top-1/2 hidden -translate-y-1/2 lg:block">
          <Vinyl accent="#b24a2f" label="FR" />
        </div>
      </div>
      <motion.a
        href="#featured"
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="flex items-center gap-3 text-xs uppercase tracking-[0.25em] opacity-60"
      >
        <ArrowDown size={16} /> Explore the collection
      </motion.a>
    </section>
  );
}
