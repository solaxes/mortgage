import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function CTA() {
  return (
    <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
      <div className="relative overflow-hidden rounded-2xl border p-8 md:p-10">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_right,theme(colors.primary/15),transparent_60%)] dark:bg-[radial-gradient(ellipse_at_top_right,theme(colors.primary/10),transparent_60%)]" />
        <div className="max-w-2xl">
          <h2 className="text-2xl md:text-3xl font-semibold">
            Smart lending. Swift execution.
          </h2>
          <p className="mt-2 text-sm text-muted-foreground">
            Talk to our team to structure the financing your project needs.
          </p>
          <div className="mt-6 flex gap-3">
            <Button asChild>
              <Link href="/contact-us">Contact Us</Link>
            </Button>
            <Button asChild variant="outline">
              <Link href="/who-we-are">About Us</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
