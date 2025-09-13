import Hero from "@/components/sections/hero";
import Stats from "@/components/sections/stats";
import Testimonials from "@/components/sections/testimonials";
import Process from "@/components/sections/process";
import Values from "@/components/sections/values";
import CTA from "@/components/sections/cta";
import ScrollAnimation from "@/components/ui/scroll-animation";
import { Shield, Zap, Users, Target, Award, TrendingUp } from "lucide-react";

export default function Home() {
  return (
    <>
      <Hero
        eyebrow="Public. Proven. Trusted."
        title={
          <>
            Mortgage Arsenal is a leading{" "}
            <span className="text-primary">alternative</span> real estate lender
            in Canada.
          </>
        }
        subtitle={
          <>
            Built to move fast, structure creatively, and lend with confidence —
            for commercial and residential borrowers across major Canadian
            markets.
          </>
        }
        primaryCta={{ href: "/who-we-are", label: "Learn More" }}
        secondaryCta={{ href: "/contact-us", label: "Contact Us" }}
      />

      <ScrollAnimation>
        <Stats
          items={[
            { value: "$2.0B+", label: "Total funded historically" },
            { value: "24+", label: "Years in market" },
            { value: "TSX: MAR", label: "Publicly listed MIC" },
            { value: "2,000+", label: "Mortgages funded" },
          ]}
        />
      </ScrollAnimation>

      <ScrollAnimation delay={0.4}>
        <Values
          items={[
            {
              icon: <Shield className="w-full h-full" />,
              title: "Reliability",
              description:
                "Consistent, dependable service with a track record of successful closings across all market conditions.",
            },
            {
              icon: <Zap className="w-full h-full" />,
              title: "Speed",
              description:
                "Fast turnaround times with responsive underwriting that gets deals done when timing matters most.",
            },
            {
              icon: <Users className="w-full h-full" />,
              title: "Relationships",
              description:
                "Long-term partnerships built on trust, transparency, and mutual success with our clients.",
            },
            {
              icon: <Target className="w-full h-full" />,
              title: "Flexibility",
              description:
                "Creative structuring and tailored solutions that meet the unique needs of each project.",
            },
            {
              icon: <Award className="w-full h-full" />,
              title: "Excellence",
              description:
                "Setting the standard for alternative lending with innovative approaches and superior execution.",
            },
            {
              icon: <TrendingUp className="w-full h-full" />,
              title: "Growth",
              description:
                "Supporting the growth of Canadian real estate through strategic financing and market expertise.",
            },
          ]}
        />
      </ScrollAnimation>

      <ScrollAnimation delay={0.6}>
        <Process
          items={[
            {
              number: "1",
              title: "Application",
              description:
                "Submit your project details and financial information through our streamlined application process.",
            },
            {
              number: "2",
              title: "Review",
              description:
                "Our experienced team conducts thorough due diligence and market analysis of your project.",
            },
            {
              number: "3",
              title: "Structuring",
              description:
                "We create a customized financing solution tailored to your specific needs and timeline.",
            },
            {
              number: "4",
              title: "Closing",
              description:
                "Fast, efficient closing process with clear communication throughout the final stages.",
            },
          ]}
        />
      </ScrollAnimation>

      <ScrollAnimation delay={0.8}>
        <Testimonials
          items={[
            {
              quote:
                "Mortgage Arsenal's team understood our complex project needs and delivered a financing solution that exceeded our expectations. Their speed and flexibility were crucial to our success.",
              author: "Sarah Chen",
              role: "Development Director",
              company: "Metro Properties",
            },
            {
              quote:
                "Working with Mortgage Arsenal has been a game-changer for our portfolio. Their expertise in alternative lending has opened doors we never thought possible.",
              author: "Michael Rodriguez",
              role: "Managing Partner",
              company: "Urban Capital Group",
            },
            {
              quote:
                "The team's responsiveness and creative structuring helped us close a challenging deal when traditional lenders couldn't deliver. Highly recommended.",
              author: "Jennifer Walsh",
              role: "CEO",
              company: "Walsh Development Corp",
            },
          ]}
        />
      </ScrollAnimation>

      <ScrollAnimation delay={1.0}>
        <CTA />
      </ScrollAnimation>
    </>
  );
}
