"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import {
  UsersIcon,
  UserCogIcon,
  Goal,
  Landmark,
  Building2,
  Home,
  FileText,
  BarChart3,
  Newspaper,
  ScrollText,
  ShieldCheck,
  LineChart,
  MenuIcon,
  Moon,
  Sun,
  type LucideIcon,
} from "lucide-react";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import Logo from "@/assets/logo.png";
import LightLogo from "@/assets/LightLogo.png";
import EnhancedMortgageCalculator from "@/components/ui/enhanced-mortgage-calculator";

const aboutLinks: {
  title: string;
  href: string;
  icon: LucideIcon;
  description: string;
}[] = [
  {
    title: "Who We Are",
    href: "/who-we-are",
    icon: UsersIcon,
    description:
      "Public. Proven. Trusted. Learn more about our history and mission.",
  },
  {
    title: "Our Purpose",
    href: "/our-purpose",
    icon: Goal,
    description:
      "Our vision is to define the standard of excellence in lending.",
  },
  {
    title: "Our Team",
    href: "/our-team",
    icon: UserCogIcon,
    description:
      "Meet the leadership and professionals behind swift execution.",
  },
];

export function Navbar() {
  const pathname = usePathname();
  const { theme, setTheme } = useTheme();
  const isDark = theme === "dark";

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname?.startsWith(href);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="mx-auto flex h-20 items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Brand */}
        <Link href="/" className="font-semibold">
          <Image
            src={theme === "dark" ? LightLogo : Logo}
            alt="Mortgage Arsenal"
            className="h-14 w-auto"
          />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:block">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuLink
                  asChild
                  className={navigationMenuTriggerStyle()}
                  aria-current={isActive("/") ? "page" : undefined}
                >
                  <Link href="/">Home</Link>
                </NavigationMenuLink>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger
                  onPointerMove={(e) => e.preventDefault()}
                  onPointerLeave={(e) => e.preventDefault()}
                >
                  About
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[460px] gap-2 p-3 sm:w-[520px] md:w-[560px] md:grid-cols-1 lg:w-[420px]">
                    {aboutLinks.map((component) => (
                      <ListItem
                        key={component.title}
                        title={component.title}
                        href={component.href}
                        icon={component.icon}
                      >
                        {component.description}
                      </ListItem>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuLink
                  asChild
                  className={navigationMenuTriggerStyle()}
                  aria-current={isActive("/contact-us") ? "page" : undefined}
                >
                  <Link href="/contact-us">Contact Us</Link>
                </NavigationMenuLink>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <EnhancedMortgageCalculator />
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Button
                  variant="outline"
                  size="icon"
                  className="cursor-pointer"
                  onClick={() => setTheme(isDark ? "light" : "dark")}
                >
                  <Sun className="h-[1.2rem] w-[1.2rem] scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90" />
                  <Moon className="absolute h-[1.2rem] w-[1.2rem] scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0" />
                  <span className="sr-only">Toggle theme</span>
                </Button>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </nav>

        {/* Mobile nav (Sheet) */}
        <div className="md:hidden">
          <MobileNav pathname={pathname} />
        </div>
      </div>
    </header>
  );
}

function MobileNav({ pathname }: { pathname?: string | null }) {
  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname?.startsWith(href);
  const { theme, setTheme } = useTheme();
  const isDark = theme === "dark";
  return (
    <Sheet>
      <SheetTrigger
        aria-label="Open menu"
        className="inline-flex h-9 w-9 items-center justify-center rounded-md border bg-background hover:bg-accent"
      >
        <MenuIcon className="h-5 w-5" aria-hidden="true" />
      </SheetTrigger>
      <SheetContent side="left" className="w-[88vw] sm:max-w-sm">
        <SheetHeader className="text-left">
          <SheetTitle>Menu</SheetTitle>
        </SheetHeader>

        <div className="mt-4 flex flex-col gap-2">
          {/* Top-level links */}
          <Link
            href="/"
            className={`rounded-md px-3 py-2 text-sm ${
              isActive("/") ? "bg-accent font-semibold" : "hover:bg-accent"
            }`}
            aria-current={isActive("/") ? "page" : undefined}
          >
            Home
          </Link>

          {/* About group as accordion */}
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="about">
              <AccordionTrigger className="rounded-md px-3 py-2 text-sm hover:no-underline hover:bg-accent">
                About
              </AccordionTrigger>
              <AccordionContent className="px-1">
                <ul className="flex flex-col gap-1">
                  {aboutLinks.map(
                    ({ title, href, icon: Icon, description }) => (
                      <li key={title}>
                        <Link
                          href={href}
                          className={`flex items-start gap-3 rounded-md p-3 hover:bg-accent ${
                            isActive(href) ? "bg-accent" : ""
                          }`}
                          aria-current={isActive(href) ? "page" : undefined}
                        >
                          <Icon className="mt-0.5 h-5 w-5" aria-hidden="true" />
                          <div className="flex flex-col">
                            <span className="text-sm font-medium">{title}</span>
                            <span className="text-xs text-muted-foreground">
                              {description}
                            </span>
                          </div>
                        </Link>
                      </li>
                    )
                  )}
                </ul>
              </AccordionContent>
            </AccordionItem>
          </Accordion>

          <Link
            href="/contact-us"
            className={`rounded-md px-3 py-2 text-sm ${
              isActive("/contact-us")
                ? "bg-accent font-semibold"
                : "hover:bg-accent"
            }`}
            aria-current={isActive("/contact-us") ? "page" : undefined}
          >
            Contact Us
          </Link>

          <div className="px-3 py-2">
            <EnhancedMortgageCalculator />
          </div>
          <Button
            variant="outline"
            size="icon"
            className="cursor-pointer ml-2"
            onClick={() => setTheme(isDark ? "light" : "dark")}
          >
            <Sun className="h-[1.2rem] w-[1.2rem] scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90" />
            <Moon className="absolute h-[1.2rem] w-[1.2rem] scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0" />
            <span className="sr-only">Toggle theme</span>
          </Button>
        </div>
      </SheetContent>
    </Sheet>
  );
}

interface ListItemProps extends React.ComponentPropsWithoutRef<"li"> {
  title: string;
  href: string;
  icon: LucideIcon;
  children: React.ReactNode;
}

function ListItem({
  title,
  children,
  href,
  icon: Icon,
  ...props
}: ListItemProps) {
  return (
    <li {...props}>
      <NavigationMenuLink asChild>
        <Link
          href={href}
          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent focus:bg-accent"
        >
          <div className="flex items-center gap-2 text-sm font-medium leading-none">
            <Icon className="h-5 w-5" aria-hidden="true" />
            <span className="font-semibold">{title}</span>
          </div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </Link>
      </NavigationMenuLink>
    </li>
  );
}
