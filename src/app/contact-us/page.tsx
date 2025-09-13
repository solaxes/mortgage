"use client";
import React, { useState } from "react";
import ScrollAnimation from "@/components/ui/scroll-animation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  MessageSquare,
  Send,
  CheckCircle,
  AlertCircle,
} from "lucide-react";

export default function ContactUs() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    company: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");
  const [submitMessage, setSubmitMessage] = useState("");

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok) {
        setSubmitStatus("success");
        setSubmitMessage(result.message);
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          company: "",
          subject: "",
          message: "",
        });
      } else {
        setSubmitStatus("error");
        setSubmitMessage(result.error || "Failed to send message");
      }
    } catch (error) {
      setSubmitStatus("error");
      setSubmitMessage("Network error. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
      {/* Hero Section */}
      <ScrollAnimation>
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-semibold mb-6">
            Contact Us
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to discuss your financing needs? Get in touch with our team of
            experts who are here to help you find the right solution for your
            project.
          </p>
        </div>
      </ScrollAnimation>

      <div className="grid gap-12 lg:grid-cols-2">
        {/* Contact Information */}
        <ScrollAnimation delay={0.2}>
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-semibold mb-6">Get in Touch</h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Head Office</h3>
                    <p className="text-muted-foreground">
                      456 Granville Street, Suite 300
                      <br />
                      Vancouver, BC V6C 1T1
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Phone className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Phone</h3>
                    <p className="text-muted-foreground">
                      Main: (416) 555-0100
                      <br />
                      Toll-free: 1-800-555-0100
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Email</h3>
                    <p className="text-muted-foreground">
                      General: info@mortgagearsenal.ca
                      <br />
                      Applications: applications@mortgagearsenal.ca
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Clock className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Business Hours</h3>
                    <p className="text-muted-foreground">
                      Monday - Friday: 8:00 AM - 6:00 PM
                      <br />
                      Saturday: 9:00 AM - 2:00 PM
                      <br />
                      Sunday: Closed
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </ScrollAnimation>

        {/* Contact Form */}
        <ScrollAnimation delay={0.4}>
          <div className="bg-muted/50 rounded-2xl p-8">
            <h2 className="text-2xl font-semibold mb-6">Send us a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="firstName">First Name *</Label>
                  <Input
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    placeholder="John"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName">Last Name *</Label>
                  <Input
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    placeholder="Doe"
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email *</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="john@example.com"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone">Phone</Label>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder="(416) 555-0100"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="company">Company</Label>
                <Input
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleInputChange}
                  placeholder="Your Company Name"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="subject">Subject</Label>
                <Input
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  placeholder="How can we help you?"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">Message *</Label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleInputChange}
                  className="flex w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
                  placeholder="Tell us about your project and financing needs..."
                  required
                />
              </div>

              {/* Status Messages */}
              {submitStatus === "success" && (
                <div className="flex items-center gap-2 p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                  <span className="text-green-800 dark:text-green-200">
                    {submitMessage}
                  </span>
                </div>
              )}

              {submitStatus === "error" && (
                <div className="flex items-center gap-2 p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg">
                  <AlertCircle className="h-5 w-5 text-red-600" />
                  <span className="text-red-800 dark:text-red-200">
                    {submitMessage}
                  </span>
                </div>
              )}

              <Button
                type="submit"
                className="w-full"
                size="lg"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="h-4 w-4 mr-2" />
                    Send Message
                  </>
                )}
              </Button>
            </form>
          </div>
        </ScrollAnimation>
      </div>

      {/* Map Placeholder */}
      <ScrollAnimation delay={0.6}>
        <div className="mt-16">
          <h2 className="text-3xl font-semibold text-center mb-8">Find Us</h2>
          <div className="relative h-96 w-full rounded-2xl bg-gradient-to-r from-primary/10 to-primary/5 border-2 border-dashed border-primary/20 flex items-center justify-center">
            <div className="text-center">
              <MapPin className="h-20 w-20 text-primary/40 mx-auto mb-4" />
              <p className="text-primary/60 font-medium text-lg">
                Interactive Map
              </p>
              <p className="text-sm text-muted-foreground">
                Replace with actual map showing office locations
              </p>
            </div>
          </div>
        </div>
      </ScrollAnimation>

      {/* FAQ Section */}
      <ScrollAnimation delay={0.8}>
        <div className="mt-16">
          <h2 className="text-3xl font-semibold text-center mb-12">
            Frequently Asked Questions
          </h2>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="space-y-4">
              <div className="border rounded-lg p-6">
                <h3 className="font-semibold mb-2">
                  How quickly can you process a loan application?
                </h3>
                <p className="text-sm text-muted-foreground">
                  We typically process applications within 3-5 business days,
                  depending on the complexity of the project and completeness of
                  documentation.
                </p>
              </div>
              <div className="border rounded-lg p-6">
                <h3 className="font-semibold mb-2">
                  What types of properties do you finance?
                </h3>
                <p className="text-sm text-muted-foreground">
                  We finance a wide range of commercial and residential
                  properties including office buildings, retail spaces,
                  multi-family units, and development projects.
                </p>
              </div>
              <div className="border rounded-lg p-6">
                <h3 className="font-semibold mb-2">
                  What are your minimum and maximum loan amounts?
                </h3>
                <p className="text-sm text-muted-foreground">
                  Our loan amounts typically range from $500,000 to $50 million,
                  depending on the project and borrower qualifications.
                </p>
              </div>
            </div>
            <div className="space-y-4">
              <div className="border rounded-lg p-6">
                <h3 className="font-semibold mb-2">
                  Do you require a personal guarantee?
                </h3>
                <p className="text-sm text-muted-foreground">
                  Personal guarantees are typically required for most loans, but
                  we work with borrowers to structure guarantees that are
                  appropriate for their situation.
                </p>
              </div>
              <div className="border rounded-lg p-6">
                <h3 className="font-semibold mb-2">
                  What documentation do I need to apply?
                </h3>
                <p className="text-sm text-muted-foreground">
                  Required documentation includes property details, financial
                  statements, project plans, and borrower information. We'll
                  provide a complete checklist during the application process.
                </p>
              </div>
              <div className="border rounded-lg p-6">
                <h3 className="font-semibold mb-2">
                  Can I speak with someone before applying?
                </h3>
                <p className="text-sm text-muted-foreground">
                  Absolutely! We encourage potential borrowers to contact us for
                  an initial consultation to discuss their project and financing
                  needs.
                </p>
              </div>
            </div>
          </div>
        </div>
      </ScrollAnimation>
    </div>
  );
}
