"use client";

import { motion, type Transition } from "motion/react";
import Image from "next/image";
import { useState } from "react";

interface VinylCoverProps {
  accent?: string;
  label?: string;
  large?: boolean;
  coverImage?: string;
}

const SPRING: Transition = { type: "spring", stiffness: 80, damping: 16 };

export function VinylCover({
  accent = "#b24a2f",
  label = "NG",
  large = false,
  coverImage = "",
}: VinylCoverProps) {
  const [hovering, setHovering] = useState(false);
  const size = large ? "w-[min(70vw,560px)]" : "w-[min(42vw,460px)]";

  return (
    <div className={`relative aspect-square ${size}`}>
      {/* Vinyl disc: entrance animation (settle into place) */}
      <motion.div
        initial={{ rotate: -18, scale: 0.8, opacity: 0 }}
        animate={{ rotate: 0, scale: 1, opacity: 1 }}
        transition={SPRING}
        whileHover={{ scale: 1.03 }}
        onHoverStart={() => setHovering(true)}
        onHoverEnd={() => setHovering(false)}
        className="absolute inset-0 rounded-full bg-[#111] shadow-2xl overflow-hidden"
      >
        {/* Spins only while hovering */}
        <motion.div
          animate={{ rotate: hovering ? 360 : 0 }}
          transition={
            hovering
              ? { repeat: Infinity, duration: 25, ease: "linear" }
              : { duration: 0.4, ease: "easeOut" }
          }
          className="absolute inset-0 rounded-full overflow-hidden"
          style={
            !coverImage
              ? {
                  backgroundImage:
                    "repeating-radial-gradient(circle at center, #111 0px, #111 2px, #1c1c1c 3px, #111 5px)",
                }
              : undefined
          }
        >
          {coverImage && (
            <Image
              src={coverImage}
              alt={`${label} album cover`}
              fill
              className="object-cover"
            />
          )}

          <div className="absolute inset-[30%] rounded-full bg-[#171512]">
            <span className="absolute inset-0 flex items-center justify-center text-xs font-bold uppercase tracking-widest text-[#d97855]">
              {label}
            </span>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}
