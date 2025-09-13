"use client";
import React from "react";

interface Testimonial {
  quote: string;
  author: string;
  role: string;
  company: string;
}

export default function Testimonials({ items }: { items: Testimonial[] }) {
  return (
    <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-semibold mb-4">
          What Our Clients Say
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Trusted by developers, investors, and borrowers across Canada
        </p>
      </div>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {items.map((testimonial, index) => (
          <div
            key={index}
            className="group rounded-xl border p-6 hover:shadow-lg transition-all duration-300 hover:border-primary/20"
          >
            <div className="mb-4">
              <svg
                className="w-8 h-8 text-primary/20"
                fill="currentColor"
                viewBox="0 0 32 32"
              >
                <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
              </svg>
            </div>
            <blockquote className="text-sm text-muted-foreground mb-4">
              &ldquo;{testimonial.quote}&rdquo;
            </blockquote>
            <div>
              <div className="font-semibold text-sm">{testimonial.author}</div>
              <div className="text-xs text-muted-foreground">
                {testimonial.role}, {testimonial.company}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
