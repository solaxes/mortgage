"use client";
import React from "react";

interface Value {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export default function Values({ items }: { items: Value[] }) {
  return (
    <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-semibold mb-4">Our Values</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          The principles that guide everything we do
        </p>
      </div>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {items.map((value, index) => (
          <div
            key={index}
            className="group rounded-xl border p-8 text-center hover:shadow-lg transition-all duration-300 hover:border-primary/20"
          >
            <div className="w-12 h-12 mx-auto mb-4 text-primary group-hover:scale-110 transition-transform duration-300">
              {value.icon}
            </div>
            <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
            <p className="text-muted-foreground">{value.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
