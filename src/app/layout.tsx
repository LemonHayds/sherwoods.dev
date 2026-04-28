import { GoogleAnalytics } from "@next/third-parties/google";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Inter } from "next/font/google";

import Footer from "../components/footer";
import Navbar from "../components/navbar/navbar";

import "./globals.css";

import type { Metadata } from "next";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const META_TITLE = "Hayden Sherwood | Portfolio";
const META_DESCRIPTION =
  "Creative fullstack developer based in London / San Francisco";

export const metadata: Metadata = {
  title: META_TITLE,
  description: META_DESCRIPTION,
  openGraph: {
    title: META_TITLE,
    description: META_DESCRIPTION,
    type: "website",
    locale: "en_US",
    url: "https://sherwoods.dev",
    siteName: "sherwoods.dev",
  },
  robots: {
    index: true,
    follow: false,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="theme-color" content="#0f0f0f" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black" />
        <GoogleAnalytics gaId={process.env.GOOGLE_ANALYTICS_ID || ""} />
      </head>
      <body className={`${inter.variable} antialiased`}>
        <div className="fixed top-0 left-0 right-0 h-2 bg-[#0f0f0f] z-40 md:hidden" />
        <div className="min-h-screen max-w-screen-lg mx-auto flex flex-col">
          <Navbar />
          <div className="flex-1 h-full w-full px-6 lg:px-2">{children}</div>
          <Footer />
        </div>
        <SpeedInsights />
      </body>
    </html>
  );
}
