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
  MenuIcon,
  Moon,
  Sun,
  X,
  Home,
  MessageCircle,
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

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

import Logo from "@/assets/logo.png";
import LightLogo from "@/assets/LightLogo.png";
import EnhancedMortgageCalculator from "@/components/ui/enhanced-mortgage-calculator";
import ClientOnly from "@/components/ui/client-only";

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
      "Alternative financing when traditional banks say no. Learn more about our history and mission.",
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
          <ClientOnly
            fallback={
              <Image
                src={Logo}
                alt="Mortgage Arsenal"
                className="h-14 w-auto"
              />
            }
          >
            <Image
              src={theme === "dark" ? LightLogo : Logo}
              alt="Mortgage Arsenal"
              className="h-14 w-auto"
            />
          </ClientOnly>
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
                <ClientOnly fallback={<div className="h-9 w-9" />}>
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
                </ClientOnly>
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
  const [open, setOpen] = React.useState(false);

  const closeMenu = () => setOpen(false);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger
        aria-label="Open navigation menu"
        className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-border/50 bg-background/80 backdrop-blur-sm hover:bg-accent/50 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary/20"
      >
        <MenuIcon className="h-5 w-5" aria-hidden="true" />
      </SheetTrigger>

      <SheetContent
        side="right"
        className="w-full max-w-sm p-0 bg-background/95 backdrop-blur-xl border-l border-border/50"
      >
        {/* Header with Logo and Close */}
        <div className="flex items-center justify-between p-6 border-b border-border/50">
          <ClientOnly
            fallback={
              <Image src={Logo} alt="Mortgage Arsenal" className="h-8 w-auto" />
            }
          >
            <Image
              src={isDark ? LightLogo : Logo}
              alt="Mortgage Arsenal"
              className="h-8 w-auto"
            />
          </ClientOnly>
          <Button
            variant="ghost"
            size="icon"
            onClick={closeMenu}
            className="h-8 w-8 rounded-full hover:bg-accent/50"
            aria-label="Close menu"
          >
            <X className="h-4 w-4" />
          </Button>
        </div>

        {/* Navigation Content */}
        <div className="flex flex-col h-full">
          {/* Main Navigation */}
          <nav className="flex-1 px-6 py-4 space-y-1">
            {/* Home */}
            <Link
              href="/"
              className={`flex items-center gap-3 rounded-xl px-4 py-3 text-base font-medium transition-all duration-200 ${
                isActive("/")
                  ? "bg-primary text-primary-foreground shadow-sm"
                  : "text-foreground hover:bg-accent/50 hover:text-accent-foreground"
              }`}
              onClick={closeMenu}
            >
              <Home className="h-5 w-5" />
              Home
            </Link>

            {/* About Section */}
            <div className="space-y-1">
              <div className="px-4 py-2">
                <h3 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                  About Us
                </h3>
              </div>

              {aboutLinks.map(({ title, href, icon: Icon, description }) => (
                <Link
                  key={title}
                  href={href}
                  className={`flex items-start gap-3 rounded-xl px-4 py-3 transition-all duration-200 group ${
                    isActive(href)
                      ? "bg-primary text-primary-foreground shadow-sm"
                      : "text-foreground hover:bg-accent/50 hover:text-accent-foreground"
                  }`}
                  onClick={closeMenu}
                >
                  <Icon className="h-5 w-5 mt-0.5 flex-shrink-0" />
                  <div className="flex flex-col min-w-0">
                    <span className="text-sm font-medium">{title}</span>
                    <span className="text-xs text-muted-foreground group-hover:text-accent-foreground/70">
                      {description}
                    </span>
                  </div>
                </Link>
              ))}
            </div>

            {/* Contact */}
            <Link
              href="/contact-us"
              className={`flex items-center gap-3 rounded-xl px-4 py-3 text-base font-medium transition-all duration-200 ${
                isActive("/contact-us")
                  ? "bg-primary text-primary-foreground shadow-sm"
                  : "text-foreground hover:bg-accent/50 hover:text-accent-foreground"
              }`}
              onClick={closeMenu}
            >
              <MessageCircle className="h-5 w-5" />
              Contact Us
            </Link>
          </nav>

          {/* Bottom Section - Calculator & Theme Toggle */}
          <div className="border-t border-border/50 p-6 space-y-4">
            {/* Mortgage Calculator */}
            <div className="space-y-2">
              <h3 className="text-sm font-semibold text-foreground">
                Quick Tools
              </h3>
              <div className="p-4 bg-muted/30 rounded-xl border border-border/50">
                <EnhancedMortgageCalculator />
              </div>
            </div>

            {/* Theme Toggle */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Sun className="h-4 w-4 text-muted-foreground" />
                <span className="text-sm font-medium">Theme</span>
              </div>
              <ClientOnly
                fallback={<div className="h-9 w-16 rounded-full bg-muted" />}
              >
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setTheme(isDark ? "light" : "dark")}
                  className="h-9 w-16 rounded-full border-border/50 hover:bg-accent/50 transition-all duration-200"
                >
                  <div className="flex items-center justify-center gap-1">
                    {isDark ? (
                      <>
                        <Sun className="h-3 w-3" />
                        <span className="text-xs">Light</span>
                      </>
                    ) : (
                      <>
                        <Moon className="h-3 w-3" />
                        <span className="text-xs">Dark</span>
                      </>
                    )}
                  </div>
                </Button>
              </ClientOnly>
            </div>

            {/* Company Info */}
            <div className="pt-2 border-t border-border/30">
              <p className="text-xs text-muted-foreground text-center">
                Mortgage Arsenal
              </p>
              <p className="text-xs text-muted-foreground text-center mt-1">
                Alternative Real Estate Lending
              </p>
            </div>
          </div>
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
