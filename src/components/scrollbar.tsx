import { ScrollbarProps } from "@/types/props";
import styles from "./scrollbar.module.css";
import React from "react";
import Image from "next/image";

export default function Scrollbar({ pageRefs, buttonCount, direction }: ScrollbarProps): React.ReactElement {
  const buttons = Array.from({ length: buttonCount }, (_, i) => i);

  function scrollToIndex(index: number): void {
    const el = pageRefs.current[index];
    if (el) {
      if (direction === "row") {
        el.scrollIntoView({ behavior: "smooth", block: "center", inline: "start" });
      } else {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  }

  return (
    <nav className={styles.container} style={{ "--direction": `${direction}` } as React.CSSProperties}>
      {direction === "row" && <Image src="/icons/left.svg" alt="left" width={24} height={24} />}
      {direction === "column" && <Image src="/icons/up.svg" alt="up" width={24} height={24} />}
      {buttons.map((index) => (
        <button
          key={index}
          className={styles.button}
          style={{ "--margin": direction === "row" ? "0 4px" : "4px 0" } as React.CSSProperties}
          onClick={() => scrollToIndex(index)}
        >
          <Image src="/icons/circle.svg" alt="circle" width={12} height={12} />
        </button>
      ))}
      {direction === "row" && <Image src="/icons/right.svg" alt="right" width={24} height={24} />}
      {direction === "column" && <Image src="/icons/down.svg" alt="down" width={24} height={24} />}
    </nav>
  );
}
