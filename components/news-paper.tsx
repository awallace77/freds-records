"use client";
import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "motion/react";
import Image from "next/image";

export function NewsPaper({
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
  const [isOpen, setIsOpen] = useState(false);
  const size = large ? "w-[min(70vw,560px)]" : "w-[min(42vw,460px)]";
  const layoutId = `news-image-${label}`;

  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setIsOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [isOpen]);

  return (
    <>
      <motion.div
        initial="hidden"
        animate="rest"
        whileHover="hover"
        variants={{
          hidden: { rotate: -18, scale: 0.8, opacity: 0 },
          rest: { rotate: 0, scale: 1, opacity: 1 },
          hover: { rotate: 4, scale: 1.03 },
        }}
        transition={{ type: "spring", stiffness: 80, damping: 16 }}
        onClick={() => image && setIsOpen(true)}
        className={`relative aspect-square ${size} rounded-sm bg-[#e3e3e3] shadow-2xl ${
          image ? "cursor-pointer" : ""
        }`}
      >
        {/* Newsprint texture: faint ruled lines */}
        <div
          className="absolute inset-0 opacity-40"
          style={{
            backgroundImage:
              "repeating-linear-gradient(to bottom, transparent 0px, transparent 18px, #171512 18px, #171512 19px)",
          }}
        />
        {image && !isOpen && (
          <motion.div
            layoutId={layoutId}
            variants={{
              hidden: { x: "-20%", opacity: 0 },
              rest: { x: "0%", opacity: 1 },
              hover: { x: "-18%", opacity: 1 },
            }}
            transition={{
              type: "spring",
              stiffness: 80,
              damping: 16,
              delay: 0.05,
            }}
            className="absolute inset-0 rounded-sm shadow-2xl overflow-hidden"
          >
            <Image
              src={image}
              alt={`${label} news`}
              fill
              sizes="(max-width: 768px) 60vw, 560px"
              className="object-cover"
            />
          </motion.div>
        )}
      </motion.div>

      {typeof document !== "undefined" &&
        createPortal(
          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setIsOpen(false)}
                className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-6"
              >
                <motion.div
                  layoutId={layoutId}
                  transition={{ type: "spring", stiffness: 120, damping: 20 }}
                  onClick={(e) => e.stopPropagation()}
                  className="relative shadow-2xl"
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={image}
                    alt={`${label} news, full size`}
                    className="max-h-[90vh] max-w-[90vw] w-auto h-auto rounded-sm object-contain"
                  />
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>,
          document.body,
        )}
    </>
  );
}
