import React from "react";
import PageHero from "@/components/sections/page-hero";
import ScrollAnimation from "@/components/ui/scroll-animation";
import { Shield, Zap, Users, Award, Clock, TrendingUp } from "lucide-react";

export default function WhyChooseUs() {
  return (
    <>
      <PageHero
        title="Why Choose Us"
        subtitle="Your Trusted Partner in Real Estate Finance"
        description="Discover what sets Mortgage Arsenal apart in the competitive landscape of alternative real estate lending across Canada."
        icon={<Award className="h-8 w-8" />}
        backgroundPattern="dots"
      />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <ScrollAnimation>
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-6">What Makes Us Different</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              We combine institutional expertise with the agility of a boutique
              lender to deliver exceptional results for our clients.
            </p>
          </div>
        </ScrollAnimation>

        <ScrollAnimation delay={0.2}>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            <div className="text-center p-6 rounded-xl border bg-card">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                <Shield className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">
                Proven Track Record
              </h3>
              <p className="text-muted-foreground">
                Over $2B in successful transactions with a 99.8% completion rate
                across all our lending programs.
              </p>
            </div>

            <div className="text-center p-6 rounded-xl border bg-card">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                <Zap className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Rapid Response</h3>
              <p className="text-muted-foreground">
                Pre-approval in 24 hours, full underwriting in 5-7 days, and
                closing in as little as 10 days.
              </p>
            </div>

            <div className="text-center p-6 rounded-xl border bg-card">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                <Users className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Expert Team</h3>
              <p className="text-muted-foreground">
                Senior professionals with 15+ years average experience in real
                estate finance and alternative lending.
              </p>
            </div>

            <div className="text-center p-6 rounded-xl border bg-card">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                <Award className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Flexible Solutions</h3>
              <p className="text-muted-foreground">
                Customized lending structures tailored to unique project
                requirements and market conditions.
              </p>
            </div>

            <div className="text-center p-6 rounded-xl border bg-card">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                <Clock className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">24/7 Support</h3>
              <p className="text-muted-foreground">
                Dedicated relationship managers available around the clock to
                address your needs and concerns.
              </p>
            </div>

            <div className="text-center p-6 rounded-xl border bg-card">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                <TrendingUp className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Market Leadership</h3>
              <p className="text-muted-foreground">
                Pioneering innovative lending products and setting industry
                standards for transparency and efficiency.
              </p>
            </div>
          </div>
        </ScrollAnimation>
      </div>
    </>
  );
}
