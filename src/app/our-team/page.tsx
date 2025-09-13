import React from "react";
import ScrollAnimation from "@/components/ui/scroll-animation";
import PageHero from "@/components/sections/page-hero";
import {
  Users,
  Award,
  Briefcase,
  GraduationCap,
  MapPin,
  Mail,
  Phone,
} from "lucide-react";

export default function OurTeam() {
  const teamMembers = [
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
  ];

  return (
    <>
      <PageHero
        title="Our Team"
        subtitle="Experienced Professionals Driving Success"
        description="Meet the dedicated professionals who bring decades of experience in real estate finance and alternative lending to Mortgage Arsenal."
        icon={<Users className="h-8 w-8" />}
        backgroundPattern="grid"
      />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        {/* Team Stats */}
        <ScrollAnimation delay={0.2}>
          <div className="mb-16">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 rounded-2xl border p-8 bg-gradient-to-r from-primary/5 to-primary/10">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">25+</div>
                <div className="text-sm text-muted-foreground">
                  Years Combined Experience
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">50+</div>
                <div className="text-sm text-muted-foreground">
                  Team Members
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">15+</div>
                <div className="text-sm text-muted-foreground">
                  Cities Served
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">98%</div>
                <div className="text-sm text-muted-foreground">
                  Client Satisfaction
                </div>
              </div>
            </div>
          </div>
        </ScrollAnimation>

        {/* Leadership Team */}
        <ScrollAnimation delay={0.4}>
          <div className="mb-16">
            <h2 className="text-3xl font-semibold text-center mb-12">
              Leadership Team
            </h2>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-2">
              {teamMembers.map((member, index) => (
                <ScrollAnimation key={member.name} delay={0.6 + index * 0.1}>
                  <div className="rounded-2xl border p-8 hover:shadow-lg transition-all duration-300 group">
                    <div className="flex items-start gap-6">
                      {/* Image Placeholder */}
                      <div className="w-24 h-24 rounded-full bg-gradient-to-r from-primary/20 to-primary/10 border-2 border-dashed border-primary/30 flex items-center justify-center flex-shrink-0 group-hover:border-primary/50 transition-colors">
                        <Users className="h-8 w-8 text-primary/60" />
                      </div>

                      <div className="flex-1">
                        <h3 className="text-xl font-semibold mb-2">
                          {member.name}
                        </h3>
                        <p className="text-primary font-medium mb-3">
                          {member.position}
                        </p>

                        <div className="space-y-2 mb-4">
                          <div className="flex items-center gap-2 text-sm text-muted-foreground">
                            <Briefcase className="h-4 w-4" />
                            <span>{member.experience} experience</span>
                          </div>
                          <div className="flex items-center gap-2 text-sm text-muted-foreground">
                            <GraduationCap className="h-4 w-4" />
                            <span>{member.education}</span>
                          </div>
                          <div className="flex items-center gap-2 text-sm text-muted-foreground">
                            <MapPin className="h-4 w-4" />
                            <span>{member.location}</span>
                          </div>
                        </div>

                        <p className="text-sm text-muted-foreground mb-4">
                          {member.bio}
                        </p>

                        <div className="flex gap-4">
                          <a
                            href={`mailto:${member.email}`}
                            className="flex items-center gap-1 text-sm text-primary hover:underline"
                          >
                            <Mail className="h-4 w-4" />
                            Email
                          </a>
                          <a
                            href={`tel:${member.phone}`}
                            className="flex items-center gap-1 text-sm text-primary hover:underline"
                          >
                            <Phone className="h-4 w-4" />
                            Call
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </ScrollAnimation>
              ))}
            </div>
          </div>
        </ScrollAnimation>

        {/* Team Values */}
        <ScrollAnimation delay={1.0}>
          <div className="mb-16">
            <h2 className="text-3xl font-semibold text-center mb-12">
              What Drives Our Team
            </h2>
            <div className="grid gap-8 md:grid-cols-3">
              <div className="text-center group">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <Award className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Excellence</h3>
                <p className="text-muted-foreground">
                  We strive for the highest standards in everything we do, from
                  underwriting to client service.
                </p>
              </div>
              <div className="text-center group">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <Users className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Collaboration</h3>
                <p className="text-muted-foreground">
                  We work together as a team, leveraging each other&apos;s
                  strengths to deliver exceptional results.
                </p>
              </div>
              <div className="text-center group">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <Briefcase className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Integrity</h3>
                <p className="text-muted-foreground">
                  We conduct business with honesty, transparency, and the
                  highest ethical standards.
                </p>
              </div>
            </div>
          </div>
        </ScrollAnimation>
      </div>
    </>
  );
}
