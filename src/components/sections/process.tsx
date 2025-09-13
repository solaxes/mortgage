"use client";
import React from "react";

interface ProcessStep {
  number: string;
  title: string;
  description: string;
}

export default function Process({ items }: { items: ProcessStep[] }) {
  return (
    <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-semibold mb-4">Our Process</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          From application to closing, we make the lending process simple and
          efficient
        </p>
      </div>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
        {items.map((step, index) => (
          <div key={index} className="text-center group">
            <div className="relative mb-6">
              <div className="w-16 h-16 mx-auto rounded-full bg-gradient-to-r from-primary to-primary/80 flex items-center justify-center text-white font-bold text-xl group-hover:scale-110 transition-transform duration-300">
                {step.number}
              </div>
              {index < items.length - 1 && (
                <div className="hidden lg:block absolute top-8 left-1/2 w-full h-0.5 bg-gradient-to-r from-primary/50 to-transparent transform translate-x-8" />
              )}
            </div>
            <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
            <p className="text-sm text-muted-foreground">{step.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
