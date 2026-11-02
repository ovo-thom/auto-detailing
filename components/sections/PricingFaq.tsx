"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { pricingFaq } from "@/lib/pricing";

export default function PricingFaq() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="section-pad">
      <div className="container-site">
        <p className="eyebrow">Questions fréquentes</p>

        <h2 className="display text-3xl sm:text-4xl lg:text-5xl">
          Tout savoir avant de venir.
        </h2>

        <div className="mt-10 divide-y divide-black/10 border-y border-black/10">
          {pricingFaq.map(([question, answer], index) => {
            const isOpen = openIndex === index;

            return (
              <div key={question} className="py-6">
                <button
                  type="button"
                  aria-expanded={isOpen}
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="flex w-full cursor-pointer items-center justify-between gap-6 text-left font-display text-sm md:text-lg font-bold"
                >
                  <span>{question}</span>

                  <motion.span
                    animate={{ rotate: isOpen ? 45 : 0 }}
                    transition={{ duration: 0.2, ease: "easeOut" }}
                    className="text-2xl font-normal text-aqua-dark"
                  >
                    ＋
                  </motion.span>
                </button>

                <motion.div
                  initial={false}
                  animate={{
                    height: isOpen ? "auto" : 0,
                    opacity: isOpen ? 1 : 0,
                  }}
                  transition={{ duration: 0.25, ease: [0.4, 0, 0.2, 1] }}
                  className="overflow-hidden"
                >
                  <p className="mt-4 max-w-2xl text-sm sm:text-base leading-7 text-black/55">
                    {answer}
                  </p>
                </motion.div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
