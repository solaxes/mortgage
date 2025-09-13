"use client";

import React from "react";

interface PageHeroProps {
  title: string;
  subtitle: string;
  description?: string;
  icon?: React.ReactNode;
  backgroundPattern?: "dots" | "grid" | "waves" | "none";
  className?: string;
}

export default function PageHero({
  title,
  subtitle,
  description,
  icon,
  backgroundPattern = "dots",
  className = "",
}: PageHeroProps) {
  const getBackgroundPattern = () => {
    switch (backgroundPattern) {
      case "dots":
        return (
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(97,177,129,0.15)_1px,transparent_0)] bg-[length:24px_24px] opacity-30" />
        );
      case "grid":
        return (
          <div className="absolute inset-0 bg-[linear-gradient(rgba(97,177,129,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(97,177,129,0.1)_1px,transparent_1px)] bg-[length:20px_20px] opacity-30" />
        );
      case "waves":
        return (
          <div className="absolute inset-0 overflow-hidden">
            <svg
              className="absolute bottom-0 w-full h-20 text-primary/10"
              viewBox="0 0 1200 120"
              preserveAspectRatio="none"
            >
              <path
                d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
                fill="currentColor"
              />
            </svg>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <section className={`relative py-16 lg:py-20 overflow-hidden ${className}`}>
      {/* Background Pattern */}
      {getBackgroundPattern()}

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-primary/10" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="mb-6">
            {icon && (
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary mb-4">
                {icon}
              </div>
            )}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
              {title}
            </h1>
            <p className="text-lg sm:text-xl text-primary font-semibold mb-4">
              {subtitle}
            </p>
            {description && (
              <p className="text-base sm:text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                {description}
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
