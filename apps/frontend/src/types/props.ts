import React from "react";

export interface LayoutProps {
  children: React.ReactNode;
}

export interface ScrollbarProps {
  pageRefs: React.RefObject<(HTMLElement | null)[]>;
  buttonCount: number;
  direction: "row" | "column";
}

export interface TypeWriterProps {
  text: string;
  duration: number;
  steps: number;
  delay: number;
}

export interface UnderLinerProps {
  text: string;
}

export interface ButtonProps {
  children: React.ReactNode;
  className?: string;
}
