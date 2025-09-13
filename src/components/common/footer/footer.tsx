"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import Logo from "@/assets/logo.png";
import LightLogo from "@/assets/LightLogo.png";
import { useTheme } from "next-themes";

function Footer() {
  const { theme } = useTheme();
  const isDark = theme === "dark";
  return (
    <footer className="w-full border-t bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-4">
          <div className="md:col-span-2">
            <Link href="/" className="inline-block">
              <Image
                src={isDark ? LightLogo : Logo}
                alt="Mortgage Arsenal"
                className="h-10 w-auto"
              />
            </Link>
            <p className="mt-4 text-sm text-muted-foreground max-w-md">
              Alternative real estate lender focused on reliability,
              flexibility, and swift execution across Canada.
            </p>
          </div>
          <div>
            <h3 className="text-sm font-semibold">Company</h3>
            <ul className="mt-3 space-y-2 text-sm">
              <li>
                <Link className="hover:underline" href="/who-we-are">
                  Who We Are
                </Link>
              </li>
              <li>
                <Link className="hover:underline" href="/our-purpose">
                  Our Purpose
                </Link>
              </li>
              <li>
                <Link className="hover:underline" href="/our-team">
                  Our Team
                </Link>
              </li>
              <li>
                <Link className="hover:underline" href="/contact-us">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold">Resources</h3>
            <ul className="mt-3 space-y-2 text-sm">
              <li>
                <Link className="hover:underline" href="/legal/privacy-policy">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link className="hover:underline" href="/legal/disclaimer">
                  Legal Disclaimer
                </Link>
              </li>
              <li>
                <Link className="hover:underline" href="/contact-us">
                  Support
                </Link>
              </li>
              <li>
                <Link className="hover:underline" href="/contact-us">
                  Careers
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-between gap-4 border-t pt-6">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Mortgage Arsenal. All rights reserved.
          </p>
          <div className="flex items-center gap-4 text-xs">
            <Link className="hover:underline" href="/legal/privacy-policy">
              Privacy Policy
            </Link>
            <Link className="hover:underline" href="/legal/disclaimer">
              Legal Disclaimer
            </Link>
            <Link className="hover:underline" href="/contact-us">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
