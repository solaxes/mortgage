import React from "react";
import ScrollAnimation from "@/components/ui/scroll-animation";
import TeamCarousel from "@/components/ui/team-carousel";
import PageHero from "@/components/sections/page-hero";
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
    <>
      <PageHero
        title="Who We Are"
        subtitle="Building the Future of Real Estate Finance"
        description="Discover the story behind Mortgage Arsenal and the dedicated team that's revolutionizing alternative lending in Canada."
        icon={<Building2 className="h-8 w-8" />}
        backgroundPattern="dots"
      />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <ScrollAnimation>
          <div className="text-center mb-16">
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Mortgage Arsenal provides alternative financing when traditional banks say no.
              Founded in 2023 by Fazal Nathani and Amandeep Gandhi, we began as a private
              lending business offering 1st and 2nd mortgages against residential and
              commercial properties. We are relationship-focused and known for reliability,
              flexibility, and fast turnaround.
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
            <div className="grid gap-8 md:grid-cols-2">
              {/* <div className="text-center group">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <Shield className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Public</h3>
                <p className="text-muted-foreground">
                  Listed on the TSX as a Mortgage Investment Corporation,
                  providing transparency and accountability to our investors and
                  clients.
                </p>
              </div> */}
              <div className="text-center group border-2 border-primary/20 rounded-2xl p-8">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <Award className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Proven</h3>
                <p className="text-muted-foreground">
                Over 2 years of experience with the brokers, accountant, lawyers and borrowers in timely closing the deals.
                </p>
              </div>
              <div className="text-center group border-2 border-primary/20 rounded-2xl p-8">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <Users className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Trusted</h3>
                <p className="text-muted-foreground">
                  Recognized for responsive underwriting and dependable
                  execution, building lasting relationships with our clients and
                  partners.
                </p>
              </div>
            </div>
          </div>
        </ScrollAnimation>

        {/* Company Story */}
        <ScrollAnimation delay={0.6}>
          <div className="mb-16">
            <div className="prose prose-lg max-w-none">
              <div className="space-y-6 text-muted-foreground">
                <p>
                  Mortgage Arsenal was founded in 2023 by Fazal Nathani, an experienced
                  banker, stock market broker, and successful businessman, and Amandeep
                  Gandhi, an experienced businessman in the field of smoke and smoke
                  accessories. What began as a small private lending vertical under the
                  Arsenal Group of Companies started with conservative lending as 1st and
                  2nd mortgages against residential properties, using their own and family
                  funds.
                </p>
                <p>
                  Early business came primarily through referrals from mortgage brokers,
                  lawyers, and accountants who trusted the team&apos;s conservative and
                  transparent lending approach. Drawing on Fazal&apos;s extensive experience
                  as a banker, stock market broker, and successful entrepreneur, and
                  Amandeep&apos;s strong business background in multiple industry verticals,
                  Mortgage Arsenal began offering 1st and 2nd mortgages secured by residential
                  and commercial properties.
                </p>
                <p>
                  In 2024, Shamim Junejo joined the company as Chief Executive Officer. With
                  over 38 years of international and Canadian banking experience, including
                  21 years with RBC Royal Bank in senior roles such as Vice President of Sales,
                  Shamim brought deep expertise in credit, lending, and strategic growth.
                  Under his leadership, the company adopted the business name &quot;Mortgage
                  Arsenal&quot; and renewed its focus on expanding its portfolio to include
                  both residential and commercial mortgages across Canada.
                </p>
                <p>
                  During the 2023–2025 property market crisis, as banks tightened their lending
                  policies and introduced tough lending guidelines, there was a growing need
                  in the market for private lending solutions. Mortgage Arsenal stepped in to
                  fill the gap — offering borrowers flexible, fast, and fair private funding
                  options when traditional banks couldn&apos;t deliver.
                </p>
              </div>
            </div>
          </div>
        </ScrollAnimation>

        {/* Stats Section */}
        <ScrollAnimation delay={0.8}>
          <div className="mb-16">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 rounded-2xl border p-8 bg-gradient-to-r from-primary/5 to-primary/10">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">
                  24-48hrs
                </div>
                <div className="text-sm text-muted-foreground">
                  Quick Approval
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">2023</div>
                <div className="text-sm text-muted-foreground">
                  Founded
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">
                  38+ Years
                </div>
                <div className="text-sm text-muted-foreground">
                  CEO Banking Experience
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">
                  21 Years
                </div>
                <div className="text-sm text-muted-foreground">
                  RBC Experience
                </div>
              </div>
            </div>
          </div>
        </ScrollAnimation>

        {/* What Sets Us Apart */}
        <ScrollAnimation delay={1.0}>
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
                      Quick Approval & Turnaround
                    </h3>
                    <p className="text-muted-foreground">
                      Our streamlined processes enable quick approval and turnaround
                      in 24-48 hours, getting you the funding you need when timing
                      matters most.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <TrendingUp className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">
                      Innovative Investment Approach
                    </h3>
                    <p className="text-muted-foreground">
                      Our innovative approach to the investment selection process,
                      rigorous due diligence, and industry expertise allows us to
                      find high-quality mortgage investments that capitalize on
                      Canada&apos;s traditionally strong real estate market.
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
                      Tailored Solutions
                    </h3>
                    <p className="text-muted-foreground">
                      We offer borrowers a selection of tailored mortgage solutions
                      that are personalized to each borrower&apos;s unique needs,
                      whether residential, commercial, or industrial properties.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Users className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">
                      Trusted Network
                    </h3>
                    <p className="text-muted-foreground">
                      We work closely with mortgage brokers, lawyers, and accountants
                      who trust our conservative and transparent lending approach,
                      building lasting relationships across the industry.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </ScrollAnimation>

        {/* Team Carousel */}
        <ScrollAnimation delay={1.2}>
          <div className="mb-16">
            <h2 className="text-3xl font-semibold text-center mb-12">
              Meet Our Leadership Team
            </h2>
            <TeamCarousel
              members={[
                {
                  name: "Fazal Nathani",
                  position: "Chairman",
                  experience: "Experienced",
                  education: "Banking & Finance",
                  location: "Canada",
                  email: "info@mortagearsenal.com",
                  phone: "",
                  bio: "An experienced banker, stock market broker, and successful businessman. Fazal co-founded Mortgage Arsenal in 2023 with a vision to provide alternative financing solutions when traditional banks say no.",
                  image: "fazal-nathani.jpg",
                },
                {
                  name: "Shamim Junejo",
                  position: "CEO",
                  experience: "38+ years",
                  education: "Banking & Finance",
                  location: "Canada",
                  email: "info@mortagearsenal.com",
                  phone: "",
                  bio: "With over 38 years of international and Canadian banking experience, including 21 years with RBC Royal Bank in various capacities including credit, sales, and Vice President of Sales managing a sales team across Canada. Shamim brings deep expertise in structuring innovative funding solutions tailored to diverse client needs.",
                  image: "shamim-junejo.jpg",
                },

                {
                  name: "Amandeep Gandhi",
                  position: "Director",
                  experience: "Experienced",
                  education: "Business",
                  location: "Canada",
                  email: "info@mortagearsenal.com",
                  phone: "",
                  bio: "An experienced businessman with a strong background in multiple industry verticals, including smoke and smoke accessories. Amandeep co-founded Mortgage Arsenal to provide flexible, reliable financing solutions.",
                  image: "amandeep-gandhi.jpg",
                },
                {
                  name: "Harpal Singh",
                  position: "Chief Accountant",
                  experience: "Experienced",
                  education: "",
                  location: "Canada",
                  email: "info@mortagearsenal.com",
                  phone: "",
                  bio: "An experienced accountant with a strong background in accounting and finance.",
                  image: "amandeep-gandhi.jpg",
                },
              ]}
            />
          </div>
        </ScrollAnimation>
      </div>
    </>
  );
}
