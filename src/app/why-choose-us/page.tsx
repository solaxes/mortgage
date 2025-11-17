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
                Experienced Leadership
              </h3>
              <p className="text-muted-foreground">
                Led by CEO with 38+ years of banking experience, including 21 years 
                with RBC Royal Bank in credit, sales, and senior management roles.
              </p>
            </div>

            <div className="text-center p-6 rounded-xl border bg-card">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                <Zap className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Quick Approval</h3>
              <p className="text-muted-foreground">
                Quick approval and turnaround in 24-48 hours, getting you the funding 
                you need when timing matters most.
              </p>
            </div>

            <div className="text-center p-6 rounded-xl border bg-card">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                <Users className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Conservative Approach</h3>
              <p className="text-muted-foreground">
                Trusted by mortgage brokers, lawyers, and accountants for our 
                conservative and transparent lending approach.
              </p>
            </div>

            <div className="text-center p-6 rounded-xl border bg-card">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                <Award className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Tailored Solutions</h3>
              <p className="text-muted-foreground">
                Personalized mortgage solutions for residential, commercial, and 
                industrial properties that reflect each borrower&apos;s unique financial situation.
              </p>
            </div>

            <div className="text-center p-6 rounded-xl border bg-card">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                <Clock className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Rigorous Due Diligence</h3>
              <p className="text-muted-foreground">
                Our innovative investment approach and rigorous due diligence process 
                ensures we identify high-quality mortgage investments.
              </p>
            </div>

            <div className="text-center p-6 rounded-xl border bg-card">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                <TrendingUp className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">When Banks Say No</h3>
              <p className="text-muted-foreground">
                We provide alternative financing solutions when traditional banks 
                can&apos;t deliver, especially during challenging market conditions.
              </p>
            </div>
          </div>
        </ScrollAnimation>
      </div>
    </>
  );
}
