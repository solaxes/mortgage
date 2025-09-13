import React from "react";
import ScrollAnimation from "@/components/ui/scroll-animation";
import {
  Target,
  Eye,
  Heart,
  TrendingUp,
  Shield,
  Users,
  Award,
  Lightbulb,
} from "lucide-react";

export default function OurPurpose() {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
      {/* Hero Section */}
      <ScrollAnimation>
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-semibold mb-6">
            Our Purpose
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our vision is to define the standard of excellence for real estate
            financing in Canada. We are built to move fast, structure
            creatively, and lend with confidence.
          </p>
        </div>
      </ScrollAnimation>

      {/* Mission Statement */}
      <ScrollAnimation delay={0.2}>
        <div className="mb-16">
          <div className="relative rounded-2xl border p-12 bg-gradient-to-r from-primary/5 to-primary/10">
            <div className="text-center max-w-4xl mx-auto">
              <Target className="h-16 w-16 text-primary mx-auto mb-6" />
              <h2 className="text-3xl font-semibold mb-6">Our Mission</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                To provide innovative, flexible, and reliable financing
                solutions that empower real estate developers and investors to
                achieve their goals while contributing to the growth and
                prosperity of Canadian communities.
              </p>
            </div>
          </div>
        </div>
      </ScrollAnimation>

      {/* Vision Statement */}
      <ScrollAnimation delay={0.4}>
        <div className="mb-16">
          <div className="relative rounded-2xl border p-12 bg-gradient-to-r from-primary/5 to-primary/10">
            <div className="text-center max-w-4xl mx-auto">
              <Eye className="h-16 w-16 text-primary mx-auto mb-6" />
              <h2 className="text-3xl font-semibold mb-6">Our Vision</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                To be the leading alternative real estate lender in Canada,
                recognized for our innovation, integrity, and commitment to
                client success. We envision a future where every viable real
                estate project has access to the financing it needs to thrive.
              </p>
            </div>
          </div>
        </div>
      </ScrollAnimation>

      {/* Core Values */}
      <ScrollAnimation delay={0.6}>
        <div className="mb-16">
          <h2 className="text-3xl font-semibold text-center mb-12">
            Our Core Values
          </h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div className="text-center group">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                <Heart className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Passion</h3>
              <p className="text-muted-foreground">
                We are passionate about real estate and the positive impact it
                has on communities across Canada.
              </p>
            </div>
            <div className="text-center group">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                <Shield className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Integrity</h3>
              <p className="text-muted-foreground">
                We conduct business with the highest ethical standards and
                complete transparency.
              </p>
            </div>
            <div className="text-center group">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                <Users className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Partnership</h3>
              <p className="text-muted-foreground">
                We build lasting relationships based on trust, mutual respect,
                and shared success.
              </p>
            </div>
            <div className="text-center group">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                <Lightbulb className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Innovation</h3>
              <p className="text-muted-foreground">
                We continuously innovate to provide creative solutions that meet
                evolving market needs.
              </p>
            </div>
            <div className="text-center group">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                <Award className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Excellence</h3>
              <p className="text-muted-foreground">
                We strive for excellence in everything we do, from underwriting
                to client service.
              </p>
            </div>
            <div className="text-center group">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                <TrendingUp className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Growth</h3>
              <p className="text-muted-foreground">
                We support the growth of our clients, our team, and the
                communities we serve.
              </p>
            </div>
          </div>
        </div>
      </ScrollAnimation>

      {/* What We Stand For */}
      <ScrollAnimation delay={0.8}>
        <div className="mb-16">
          <h2 className="text-3xl font-semibold text-center mb-12">
            What We Stand For
          </h2>
          <div className="grid gap-8 md:grid-cols-2">
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Shield className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">
                    Responsible Lending
                  </h3>
                  <p className="text-muted-foreground">
                    We believe in responsible lending practices that support
                    viable projects while protecting our investors and the
                    broader market.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">
                    Community Impact
                  </h3>
                  <p className="text-muted-foreground">
                    We're committed to supporting projects that contribute
                    positively to Canadian communities and economic growth.
                  </p>
                </div>
              </div>
            </div>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Lightbulb className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">
                    Creative Solutions
                  </h3>
                  <p className="text-muted-foreground">
                    We pride ourselves on finding creative financing solutions
                    that traditional lenders cannot or will not provide.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Award className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">
                    Industry Leadership
                  </h3>
                  <p className="text-muted-foreground">
                    We aim to set the standard for excellence in alternative
                    real estate lending across Canada.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </ScrollAnimation>

      {/* Impact Statement */}
      <ScrollAnimation delay={1.0}>
        <div className="mb-16">
          <div className="relative rounded-2xl border p-12 bg-gradient-to-r from-primary/5 to-primary/10">
            <div className="text-center max-w-4xl mx-auto">
              <TrendingUp className="h-16 w-16 text-primary mx-auto mb-6" />
              <h2 className="text-3xl font-semibold mb-6">Our Impact</h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                Since 2001, we have helped fund over 2,000 real estate projects
                across Canada, contributing to the development of communities
                and the growth of the Canadian economy. Our commitment to
                excellence and innovation continues to drive us forward.
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">
                    $2.0B+
                  </div>
                  <div className="text-sm text-muted-foreground">
                    Total Funded
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">
                    2,000+
                  </div>
                  <div className="text-sm text-muted-foreground">
                    Projects Funded
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">
                    15+
                  </div>
                  <div className="text-sm text-muted-foreground">
                    Cities Served
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">
                    24+
                  </div>
                  <div className="text-sm text-muted-foreground">
                    Years of Service
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </ScrollAnimation>
    </div>
  );
}
