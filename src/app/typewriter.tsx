"use client";
import { TypeWriterProps } from "@/types/props";
import React, { Fragment } from "react";

export default function TypeWriter({ text, duration, steps, delay }: TypeWriterProps): React.ReactElement {
  return (
    <Fragment>
      <div className="container">
        <div className="typewriter">{text}</div>
      </div>
      <style jsx>{`
        .container {
          width: max-content;
        }

        .typewriter {
          width: 0;

          border-right: 2px solid var(--cyber-white);

          overflow: hidden;
          white-space: nowrap;

          animation:
            typing ${duration}s steps(${steps}, end) forwards,
            blink 0.7s steps(1, end) forwards 10;
          animation-delay: ${delay}s;
        }
      `}</style>
    </Fragment>
  );
}
