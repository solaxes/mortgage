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
        eyebrow="Quick. Reliable. Trusted."
        title={
          <>
            Mortgage Arsenal provides{" "}
            <span className="text-primary">alternative</span> financing when
            traditional banks say no.
          </>
        }
        subtitle={
          <>
            We deliver quick, tailored, and reliable lending solutions for
            individual owners, real estate investors, and businesses in need of
            capital across Canada.
          </>
        }
        primaryCta={{ href: "/who-we-are", label: "Learn More" }}
        secondaryCta={{ href: "/contact-us", label: "Contact Us" }}
      />

      <ScrollAnimation>
        <Stats
          items={[
            { value: "24-48hrs", label: "Quick approval turnaround" },
            { value: "2023", label: "Founded" },
            { value: "38+ Years", label: "CEO banking experience" },
            { value: "1st & 2nd", label: "Mortgage solutions" },
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
                "Conservative and transparent lending approach trusted by mortgage brokers, lawyers, and accountants.",
            },
            {
              icon: <Zap className="w-full h-full" />,
              title: "Quick Approval",
              description:
                "Fast turnaround with quick approval and turnaround in 24-48 hours, getting you the funding you need when timing matters most.",
            },
            {
              icon: <Users className="w-full h-full" />,
              title: "Trusted Network",
              description:
                "Quick responses and transparent terms so everyone stays on the same page.",
            },
            {
              icon: <Target className="w-full h-full" />,
              title: "Tailored Solutions",
              description:
                "Personalized mortgage solutions for residential, commercial, and industrial properties that meet each borrower's unique needs.",
            },
            {
              icon: <Award className="w-full h-full" />,
              title: "Expert Leadership",
              description:
                "Led by experienced professionals with 38+ years of banking and financial industry experience including 21 years with (RBC) Royal Bank of Canada.",
            },
            {
              icon: <TrendingUp className="w-full h-full" />,
              title: "Innovative Approach",
              description:
                "Rigorous due diligence and industry expertise to find high-quality mortgage investments in Canada's strong real estate market.",
            },
          ]}
        />
      </ScrollAnimation>

      <ScrollAnimation delay={0.6}>
        <Process
          items={[
            {
              number: "1",
              title: "Apply",
              description:
                "Apply by email at info@mortgagearsenal.com or fill out the application form available on our website.",
            },
            {
              number: "2",
              title: "Quick Approval",
              description:
                "Get quick approval and turnaround in 24-48 hours with our streamlined review process.",
            },
            {
              number: "3",
              title: "Legal Review",
              description:
                "Provide lawyer details to our lender's lawyer for document preparation and review.",
            },
            {
              number: "4",
              title: "Receive Funding",
              description:
                "Receive funding as soon as documents are signed and all conditions are met, with flexible repayment options.",
            },
          ]}
        />
      </ScrollAnimation>

      <ScrollAnimation delay={0.8}>
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-semibold mb-4">

          </h2>
        </div>
        {/* <Testimonials
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
        /> */}
      </ScrollAnimation>

      <ScrollAnimation delay={1.0}>
        <CTA />
      </ScrollAnimation>
    </>
  );
}
