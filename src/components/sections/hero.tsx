"use client";
import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

type Cta = { href: string; label: string };

interface HeroProps {
  eyebrow?: string;
  title: React.ReactNode;
  subtitle?: React.ReactNode;
  primaryCta: Cta;
  secondaryCta?: Cta;
}

export default function Hero({
  eyebrow,
  title,
  subtitle,
  primaryCta,
  secondaryCta,
}: HeroProps) {
  return (
    <section className="relative isolate overflow-hidden">
      {/* Darker gradient background */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-primary/15 via-background to-primary/20" />

      {/* Enhanced animated background effects */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-[-10%] h-96 w-96 -translate-x-1/2 rounded-full bg-gradient-to-r from-primary/40 to-primary/20 blur-3xl animate-[pulse_6s_ease-in-out_infinite]" />
        <div className="absolute left-[10%] top-[50%] h-64 w-64 rounded-full bg-gradient-to-r from-primary/30 to-transparent blur-2xl animate-[pulse_7s_ease-in-out_infinite]" />
        <div className="absolute right-[10%] top-[30%] h-80 w-80 rounded-full bg-gradient-to-l from-primary/30 to-transparent blur-3xl animate-[pulse_8s_ease-in-out_infinite]" />
        <div className="absolute bottom-0 left-0 h-32 w-full bg-gradient-to-t from-primary/10 to-transparent" />

        {/* Additional floating elements */}
        <div className="absolute right-[20%] top-[20%] h-32 w-32 rounded-full bg-primary/20 blur-xl animate-[float_8s_ease-in-out_infinite]" />
        <div className="absolute left-[20%] bottom-[20%] h-24 w-24 rounded-full bg-primary/25 blur-lg animate-[float_10s_ease-in-out_infinite]" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-20 lg:py-28">
        <div className="grid gap-8 lg:gap-12 lg:grid-cols-2 items-center">
          {/* Left side content */}
          <div className="max-w-3xl order-2 lg:order-1">
            {eyebrow && (
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs text-muted-foreground animate-[fadeInUp_1s_ease-out]">
                <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />{" "}
                {eyebrow}
              </div>
            )}
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight animate-[fadeInUp_1s_ease-out_0.2s_both]">
              {title}
            </h1>
            {subtitle && (
              <p className="mt-4 sm:mt-5 text-sm sm:text-base md:text-lg text-muted-foreground max-w-2xl animate-[fadeInUp_1s_ease-out_0.4s_both]">
                {subtitle}
              </p>
            )}
            <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row gap-3 animate-[fadeInUp_1s_ease-out_0.6s_both]">
              <Button
                asChild
                className="hover:scale-105 transition-transform w-full sm:w-auto"
              >
                <Link href={primaryCta.href}>{primaryCta.label}</Link>
              </Button>
              {secondaryCta && (
                <Button
                  asChild
                  variant="outline"
                  className="hover:scale-105 transition-transform w-full sm:w-auto"
                >
                  <Link href={secondaryCta.href}>{secondaryCta.label}</Link>
                </Button>
              )}
            </div>
          </div>

          {/* Right side content */}
          <div className="relative order-1 lg:order-2">
            <div className="relative rounded-2xl border bg-gradient-to-br from-primary/10 to-primary/5 p-6 sm:p-8 backdrop-blur-sm">
              {/* Floating stats cards - hidden on mobile */}
              <div className="hidden sm:block absolute -top-4 -right-4 bg-white dark:bg-gray-800 rounded-lg shadow-lg p-3 sm:p-4 animate-[float_3s_ease-in-out_infinite]">
                <div className="text-lg sm:text-2xl font-bold text-primary">
                  $2.0B+
                </div>
                <div className="text-xs text-muted-foreground">
                  Total Funded
                </div>
              </div>

              <div className="hidden sm:block absolute -bottom-4 -left-4 bg-white dark:bg-gray-800 rounded-lg shadow-lg p-3 sm:p-4 animate-[float_3s_ease-in-out_infinite_1s]">
                <div className="text-lg sm:text-2xl font-bold text-primary">
                  24+
                </div>
                <div className="text-xs text-muted-foreground">
                  Years Experience
                </div>
              </div>

              {/* Main content area */}
              <div className="text-center">
                <div className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 mx-auto mb-4 sm:mb-6 rounded-full bg-gradient-to-r from-primary to-primary/80 flex items-center justify-center animate-[pulse_2s_ease-in-out_infinite]">
                  <span className="text-lg sm:text-xl lg:text-2xl font-bold text-white">
                    MA
                  </span>
                </div>
                <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4">
                  Why Choose Mortgage Arsenal?
                </h3>
                <div className="space-y-2 sm:space-y-3 text-xs sm:text-sm text-muted-foreground">
                  <div className="flex items-center justify-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-primary"></div>
                    <span>Swift 3-5 day processing</span>
                  </div>
                  <div className="flex items-center justify-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-primary"></div>
                    <span>Flexible loan structures</span>
                  </div>
                  <div className="flex items-center justify-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-primary"></div>
                    <span>Expert market knowledge</span>
                  </div>
                  <div className="flex items-center justify-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-primary"></div>
                    <span>Personalized service</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
