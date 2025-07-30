import React from "react";

export interface LayoutProps {
  children: React.ReactNode;
}

export interface ScrollbarProps {
  pageRefs: React.RefObject<(HTMLElement | null)[]>;
  buttonCount: number;
  direction: "row" | "column";
}
