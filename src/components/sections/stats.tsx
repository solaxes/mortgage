"use client";
import React from "react";
import { motion } from "framer-motion";

interface Stat {
  value: string;
  label: string;
}

export default function Stats({ items }: { items: Stat[] }) {
  return (
    <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
      <div className="grid grid-cols-2 gap-6 rounded-xl border p-6 sm:grid-cols-4">
        {items.map((s, index) => (
          <motion.div
            key={s.label}
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <div className="text-3xl font-semibold tracking-tight">
              {s.value}
            </div>
            <div className="mt-1 text-xs text-muted-foreground">{s.label}</div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
