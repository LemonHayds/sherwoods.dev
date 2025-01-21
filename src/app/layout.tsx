import { GoogleAnalytics } from "@next/third-parties/google";
import { Inter } from "next/font/google";

import Footer from "../components/footer";
import Navbar from "../components/navbar/navbar";

import "./globals.css";

import type { Metadata } from "next";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Hayden Sherwood | Portfolio",
  description: "Creative fullstack developer based in London / San Francisco",
  openGraph: {
    title: "Hayden Sherwood | Portfolio",
    description: "Creative fullstack developer based in London / San Francisco",
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
        <GoogleAnalytics gaId={process.env.GOOGLE_ANALYTICS_ID || ""} />
      </head>
      <body className={`${inter.variable} antialiased`}>
        <div className="min-h-screen max-w-screen-lg mx-auto flex flex-col">
          <Navbar />
          <div className="flex-1 h-full w-full px-6 lg:px-2">{children}</div>
          <Footer />
        </div>
      </body>
    </html>
  );
}
