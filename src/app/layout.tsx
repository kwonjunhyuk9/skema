"use client";
import { VT323 } from "next/font/google";
import "@/styles/globals.css";
import { LayoutProps } from "@/types/props";
import React from "react";
import { NextFont } from "next/dist/compiled/@next/font";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import Header from "@/app/header";
import Footer from "@/app/footer";

const vt323: NextFont = VT323({
  weight: "400",
  subsets: ["latin"],
});

export default function Layout({ children }: LayoutProps): React.ReactElement {
  return (
    <html lang="en" className={vt323.className}>
      <body>
        <Header />
        {children}
        <Analytics />
        <SpeedInsights />
        <Footer />
      </body>
    </html>
  );
}
