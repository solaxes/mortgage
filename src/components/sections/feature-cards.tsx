"use client";
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

interface Feature {
  title: string;
  desc: string;
  href: string;
  badge?: string;
}

export default function FeatureCards({ items }: { items: Feature[] }) {
  return (
    <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
      <div className="grid gap-6 md:grid-cols-3">
        {items.map((f, index) => (
          <motion.div
            key={f.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Link
              href={f.href}
              className="group rounded-xl border p-6 transition-all duration-300 hover:bg-accent hover:shadow-lg hover:border-primary/20 block"
            >
              <div className="flex items-start justify-between">
                <h3 className="text-lg font-semibold">{f.title}</h3>
                {f.badge && (
                  <span className="rounded-full border px-2 py-0.5 text-[10px] text-muted-foreground">
                    {f.badge}
                  </span>
                )}
              </div>
              <p className="mt-2 text-sm text-muted-foreground">{f.desc}</p>
              <div className="mt-4 text-sm text-primary group-hover:translate-x-1 transition-transform duration-300">
                Learn more →
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
