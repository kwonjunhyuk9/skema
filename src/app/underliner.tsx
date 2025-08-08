"use client";
import { UnderLinerProps } from "@/types/props";
import { Fragment } from "react";

export default function Underliner({ text }: UnderLinerProps) {
  return (
    <Fragment>
      <span className="underliner">{text}</span>
      <style jsx>{`
        .underliner {
          position: relative;
          
          padding: 1px;

          color: var(--cyber-white);
        }

        .underliner::after {
          position: absolute;
          bottom: 0;
          left: 0;

          width: 100%;
          height: 1px;

          background: var(--cyber-white);

          transform: scaleX(0);
          transform-origin: left;
          transition: transform 0.5s ease;
          content: "";
        }

        .underliner:hover::after {
          transform: scaleX(1);
        }
      `}</style>
    </Fragment>
  );
}
