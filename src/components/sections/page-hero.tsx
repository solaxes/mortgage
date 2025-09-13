"use client";

import React from "react";
import { motion } from "framer-motion";

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
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(97,177,129,0.2)_1px,transparent_0)] bg-[length:32px_32px] opacity-40" />
        );
      case "grid":
        return (
          <div className="absolute inset-0 bg-[linear-gradient(rgba(97,177,129,0.15)_1px,transparent_1px),linear-gradient(90deg,rgba(97,177,129,0.15)_1px,transparent_1px)] bg-[length:24px_24px] opacity-40" />
        );
      case "waves":
        return (
          <div className="absolute inset-0 overflow-hidden">
            <svg
              className="absolute bottom-0 w-full h-16 text-primary/15"
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
    <section className={`relative py-8 lg:py-12 overflow-hidden ${className}`}>
      {/* Animated Background Pattern */}
      {getBackgroundPattern()}

      {/* Darker Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-background/95 to-primary/30" />

      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-1/4 left-1/4 w-32 h-32 rounded-full bg-primary/10 blur-xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute top-3/4 right-1/4 w-24 h-24 rounded-full bg-primary/15 blur-lg"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.4, 0.7, 0.4],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
        />
      </div>

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="mb-6"
          >
            {icon && (
              <motion.div
                initial={{ scale: 0, rotate: -180 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
                className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-primary/20 text-primary mb-4 shadow-lg backdrop-blur-sm border border-primary/30"
              >
                {icon}
              </motion.div>
            )}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
              className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-3 bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text"
            >
              {title}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
              className="text-base sm:text-lg text-primary font-semibold mb-3"
            >
              {subtitle}
            </motion.p>
            {description && (
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5, ease: "easeOut" }}
                className="text-sm sm:text-base text-muted-foreground max-w-2xl mx-auto leading-relaxed"
              >
                {description}
              </motion.p>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
