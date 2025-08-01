"use client";
import { ScrollbarProps } from "@/types/props";
import React, { Fragment } from "react";
import Image from "next/image";

export default function Scrollbar({
  pageRefs,
  buttonCount,
  direction,
}: ScrollbarProps): React.ReactElement {
  const buttons: number[] = Array.from(
    { length: buttonCount },
    (_: undefined, i: number): number => i,
  );

  function scrollToIndex(index: number): void {
    const el: HTMLElement | null = pageRefs.current[index];
    if (el) {
      if (direction === "row") {
        el.scrollIntoView({ behavior: "smooth", inline: "start" });
      } else {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  }

  return (
    <Fragment>
      <nav className="container">
        {direction === "row" && (
          <Image src="/icons/left.svg" alt="left" width={24} height={24} />
        )}
        {direction === "column" && (
          <Image src="/icons/up.svg" alt="up" width={24} height={24} />
        )}
        {buttons.map(
          (index: number): React.ReactElement => (
            <button
              key={index}
              className="button"
              onClick={(): void => scrollToIndex(index)}
            >
              <Image
                src="/icons/circle.svg"
                alt="circle"
                width={12}
                height={12}
              />
            </button>
          ),
        )}
        {direction === "row" && (
          <Image src="/icons/right.svg" alt="right" width={24} height={24} />
        )}
        {direction === "column" && (
          <Image src="/icons/down.svg" alt="down" width={24} height={24} />
        )}
      </nav>
      <style jsx>{`
        .container {
          display: flex;
          flex-direction: ${direction};

          & .button {
            width: 24px;
            height: 24px;
            
            padding: 0;
            border: none;
            margin: ${direction === "row" ? "0 4px" : "4px 0"};
            
            background: transparent;
            
            cursor: pointer;
          }
        }
      `}</style>
    </Fragment>
  );
}
