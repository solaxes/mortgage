import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/common/header/navbar";
import Footer from "@/components/common/footer/footer";
import { ThemeProvider } from "@/components/theme-provider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Mortgage Arsenal – Alternative Real Estate Lending in Canada",
    template: "%s • Mortgage Arsenal",
  },
  description:
    "Mortgage Arsenal provides flexible commercial and residential mortgage solutions with swift execution across Canada.",
  metadataBase: new URL("https://www.mortgagearsenal.example"),
  icons: { icon: "/favicon.ico" },
  openGraph: {
    title: "Mortgage Arsenal – Alternative Real Estate Lending in Canada",
    description:
      "Flexible commercial and residential mortgage solutions. Public. Proven. Trusted.",
    url: "/",
    siteName: "Mortgage Arsenal",
    locale: "en_CA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mortgage Arsenal – Alternative Real Estate Lending in Canada",
    description:
      "Flexible commercial and residential mortgage solutions. Public. Proven. Trusted.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        suppressHydrationWarning
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          <main>{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
