import React from "react";
import Image from "next/image";
import ScrollAnimation from "@/components/ui/scroll-animation";
import TeamCarousel from "@/components/ui/team-carousel";
import {
  Building2,
  Users,
  Award,
  TrendingUp,
  Shield,
  Clock,
} from "lucide-react";

export default function WhoWeAre() {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
      {/* Hero Section */}
      <ScrollAnimation>
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-semibold mb-6">
            Who We Are
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Founded in 2001, Mortgage Arsenal serves commercial and residential
            real estate communities across major Canadian markets. We are
            relationship-focused and known for reliability, flexibility, and
            fast turnaround.
          </p>
        </div>
      </ScrollAnimation>

      {/* Image Placeholder */}
      <ScrollAnimation delay={0.2}>
        <div className="mb-16">
          <div className="relative h-96 w-full rounded-2xl bg-gradient-to-r from-primary/10 to-primary/5 border-2 border-dashed border-primary/20 flex items-center justify-center">
            <div className="text-center">
              <Building2 className="h-16 w-16 text-primary/40 mx-auto mb-4" />
              <p className="text-primary/60 font-medium">
                Company Office Image
              </p>
              <p className="text-sm text-muted-foreground">
                Replace with actual office photo
              </p>
            </div>
          </div>
        </div>
      </ScrollAnimation>

      {/* Core Values */}
      <ScrollAnimation delay={0.4}>
        <div className="mb-16">
          <h2 className="text-3xl font-semibold text-center mb-12">
            Our Core Values
          </h2>
          <div className="grid gap-8 md:grid-cols-3">
            <div className="text-center group">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                <Shield className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Public</h3>
              <p className="text-muted-foreground">
                Listed on the TSX as a Mortgage Investment Corporation,
                providing transparency and accountability to our investors and
                clients.
              </p>
            </div>
            <div className="text-center group">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                <Award className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Proven</h3>
              <p className="text-muted-foreground">
                Over two decades of experience with a long track record of
                assessing and closing loans efficiently across all market
                conditions.
              </p>
            </div>
            <div className="text-center group">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                <Users className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Trusted</h3>
              <p className="text-muted-foreground">
                Recognized for responsive underwriting and dependable execution,
                building lasting relationships with our clients and partners.
              </p>
            </div>
          </div>
        </div>
      </ScrollAnimation>

      {/* Stats Section */}
      <ScrollAnimation delay={0.6}>
        <div className="mb-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 rounded-2xl border p-8 bg-gradient-to-r from-primary/5 to-primary/10">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">$2.0B+</div>
              <div className="text-sm text-muted-foreground">Total Funded</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">24+</div>
              <div className="text-sm text-muted-foreground">
                Years Experience
              </div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">2,000+</div>
              <div className="text-sm text-muted-foreground">Loans Funded</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">
                TSX: AI
              </div>
              <div className="text-sm text-muted-foreground">
                Publicly Listed
              </div>
            </div>
          </div>
        </div>
      </ScrollAnimation>

      {/* What Sets Us Apart */}
      <ScrollAnimation delay={0.8}>
        <div className="mb-16">
          <h2 className="text-3xl font-semibold text-center mb-12">
            What Sets Us Apart
          </h2>
          <div className="grid gap-8 md:grid-cols-2">
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Clock className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">
                    Swift Execution
                  </h3>
                  <p className="text-muted-foreground">
                    Our streamlined processes and experienced team enable us to
                    close deals faster than traditional lenders, often in days
                    rather than weeks.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <TrendingUp className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">
                    Market Expertise
                  </h3>
                  <p className="text-muted-foreground">
                    Deep knowledge of Canadian real estate markets allows us to
                    structure creative solutions that traditional lenders cannot
                    offer.
                  </p>
                </div>
              </div>
            </div>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Shield className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">
                    Risk Management
                  </h3>
                  <p className="text-muted-foreground">
                    Sophisticated underwriting processes and risk assessment
                    tools ensure we make sound lending decisions while
                    supporting viable projects.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">
                    Relationship Focus
                  </h3>
                  <p className="text-muted-foreground">
                    We build long-term partnerships with our clients,
                    understanding their needs and providing ongoing support
                    throughout their projects.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </ScrollAnimation>

      {/* Team Carousel */}
      <ScrollAnimation delay={1.0}>
        <div className="mb-16">
          <h2 className="text-3xl font-semibold text-center mb-12">
            Meet Our Leadership Team
          </h2>
          <TeamCarousel
            members={[
              {
                name: "Robert Goodall",
                position: "CEO & Founder",
                experience: "25+ years",
                education: "MBA, Finance",
                location: "Toronto, ON",
                email: "robert@mortgagearsenal.ca",
                phone: "(416) 555-0101",
                bio: "Founded Mortgage Arsenal in 2001 with a vision to provide flexible, reliable financing solutions for Canadian real estate developers and investors.",
                image: "robert-goodall.jpg",
              },
              {
                name: "Sarah Mitchell",
                position: "Chief Operating Officer",
                experience: "18+ years",
                education: "CPA, CFA",
                location: "Vancouver, BC",
                email: "sarah@mortgagearsenal.ca",
                phone: "(604) 555-0102",
                bio: "Oversees day-to-day operations and ensures our lending processes remain efficient and client-focused.",
                image: "sarah-mitchell.jpg",
              },
              {
                name: "David Chen",
                position: "Head of Underwriting",
                experience: "15+ years",
                education: "BSc, Economics",
                location: "Calgary, AB",
                email: "david@mortgagearsenal.ca",
                phone: "(403) 555-0103",
                bio: "Leads our underwriting team with extensive experience in risk assessment and loan structuring.",
                image: "david-chen.jpg",
              },
              {
                name: "Jennifer Walsh",
                position: "Director of Business Development",
                experience: "12+ years",
                education: "BA, Business",
                location: "Montreal, QC",
                email: "jennifer@mortgagearsenal.ca",
                phone: "(514) 555-0104",
                bio: "Builds and maintains relationships with key clients and partners across major Canadian markets.",
                image: "jennifer-walsh.jpg",
              },
            ]}
          />
        </div>
      </ScrollAnimation>
    </div>
  );
}
