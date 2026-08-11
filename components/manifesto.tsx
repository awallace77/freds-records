"use client";

import { motion } from "motion/react";

export function Manifesto() {
  return (
    <section className="bg-[#171512] px-6 py-32 text-[#f3efe6] md:px-12">
      <div className="mx-auto max-w-7xl">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-8 text-sm uppercase tracking-[0.25em] text-[#d97855]"
        >
          02 / The idea
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="max-w-5xl font-display text-5xl leading-[0.95] tracking-[-0.04em] md:text-8xl"
        >
          Music sounds different when you can hold it.
        </motion.h2>
      </div>
    </section>
  );
}
