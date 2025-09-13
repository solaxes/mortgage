"use client";
import React, { useState } from "react";
import { ChevronLeft, ChevronRight, Mail, Phone, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

interface TeamMember {
  name: string;
  position: string;
  experience: string;
  education: string;
  location: string;
  email: string;
  phone: string;
  bio: string;
  image: string;
}

interface TeamCarouselProps {
  members: TeamMember[];
}

export default function TeamCarousel({ members }: TeamCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextMember = () => {
    setCurrentIndex((prev) => (prev + 1) % members.length);
  };

  const prevMember = () => {
    setCurrentIndex((prev) => (prev - 1 + members.length) % members.length);
  };

  const goToMember = (index: number) => {
    setCurrentIndex(index);
  };

  const currentMember = members[currentIndex];

  return (
    <div className="relative">
      {/* Main carousel */}
      <div className="relative rounded-2xl border bg-gradient-to-br from-primary/5 to-primary/10 p-8 min-h-[400px]">
        <div className="flex items-start gap-8">
          {/* Image placeholder */}
          <div className="w-32 h-32 rounded-full bg-gradient-to-r from-primary/20 to-primary/10 border-2 border-dashed border-primary/30 flex items-center justify-center flex-shrink-0">
            <span className="text-2xl font-bold text-primary/60">
              {currentMember.name
                .split(" ")
                .map((n) => n[0])
                .join("")}
            </span>
          </div>

          <div className="flex-1">
            <h3 className="text-2xl font-semibold mb-2">
              {currentMember.name}
            </h3>
            <p className="text-primary font-medium mb-4">
              {currentMember.position}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <span className="font-medium">Experience:</span>
                <span>{currentMember.experience}</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <span className="font-medium">Education:</span>
                <span>{currentMember.education}</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <MapPin className="h-4 w-4" />
                <span>{currentMember.location}</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Mail className="h-4 w-4" />
                <span>{currentMember.email}</span>
              </div>
            </div>

            <p className="text-muted-foreground mb-6 leading-relaxed">
              {currentMember.bio}
            </p>

            <div className="flex gap-4">
              <a
                href={`mailto:${currentMember.email}`}
                className="flex items-center gap-2 text-sm text-primary hover:underline"
              >
                <Mail className="h-4 w-4" />
                Email
              </a>
              <a
                href={`tel:${currentMember.phone}`}
                className="flex items-center gap-2 text-sm text-primary hover:underline"
              >
                <Phone className="h-4 w-4" />
                Call
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation controls */}
      <div className="flex items-center justify-between mt-6">
        <div className="flex gap-2">
          <Button
            variant="outline"
            size="icon"
            onClick={prevMember}
            className="hover:bg-primary/10"
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            onClick={nextMember}
            className="hover:bg-primary/10"
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>

        {/* Dots indicator */}
        <div className="flex gap-2">
          {members.map((_, index) => (
            <button
              key={index}
              onClick={() => goToMember(index)}
              className={`w-3 h-3 rounded-full transition-colors ${
                index === currentIndex
                  ? "bg-primary"
                  : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
              }`}
            />
          ))}
        </div>
      </div>

      {/* Member names */}
      <div className="mt-4 flex flex-wrap gap-2 justify-center">
        {members.map((member, index) => (
          <button
            key={index}
            onClick={() => goToMember(index)}
            className={`px-3 py-1 rounded-full text-sm transition-colors ${
              index === currentIndex
                ? "bg-primary text-primary-foreground"
                : "bg-muted hover:bg-muted-foreground/20"
            }`}
          >
            {member.name}
          </button>
        ))}
      </div>
    </div>
  );
}
