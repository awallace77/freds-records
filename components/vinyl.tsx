"use client";

import { motion } from "motion/react";

export function Vinyl({
  accent = "#b24a2f",
  label = "NG",
  large = false,
  image = "",
}: {
  accent?: string;
  label?: string;
  large?: boolean;
  image?: string;
}) {
  const size = large ? "w-[min(70vw,560px)]" : "w-[min(42vw,460px)]";

  return (
    <motion.div
      initial={{ rotate: -18, scale: 0.8, opacity: 0 }}
      animate={{ rotate: 0, scale: 1, opacity: 1 }}
      transition={{ type: "spring", stiffness: 80, damping: 16 }}
      whileHover={{ rotate: 8, scale: 1.03 }}
      className={`relative aspect-square ${size} rounded-full bg-[#111] shadow-2xl`}
      style={{
        backgroundImage:
          "repeating-radial-gradient(circle at center, #111 0px, #111 2px, #1c1c1c 3px, #111 5px)",
      }}
    >
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 9, ease: "linear" }}
        className="absolute inset-[24%] rounded-full"
        style={{ background: accent }}
      >
        <div className="absolute inset-[40%] rounded-full bg-[#171512]" />
        <span className="absolute inset-0 flex items-center justify-center text-xs font-bold uppercase tracking-widest text-white/80">
          {label}
        </span>
      </motion.div>
    </motion.div>
  );
}
