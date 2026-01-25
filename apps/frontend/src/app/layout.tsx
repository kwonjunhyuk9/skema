import { VT323 } from "next/font/google";
import "@/styles/globals.css";
import { LayoutProps } from "@/types/props";
import React from "react";
import type { Metadata } from "next";
import { NextFont } from "next/dist/compiled/@next/font";
import Header from "@/app/header";
import Footer from "@/app/footer";
import styles from "./layout.module.css";

export const metadata: Metadata = {
  title: "Skema",
  description: "A Unified Learning Support Platform",
};

const vt323: NextFont = VT323({
  weight: "400",
  subsets: ["latin"],
});

export default function Layout({ children }: LayoutProps): React.ReactElement {
  return (
    <html lang="en" className={vt323.className}>
      <body className={styles.body}>
        <Header />
        {children}
      </body>
    </html>
  );
}
