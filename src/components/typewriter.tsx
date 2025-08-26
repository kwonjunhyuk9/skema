import styles from "./typewriter.module.css";
import { TypeWriterProps } from "@/types/props";
import React from "react";

export default function TypeWriter({ text, duration, steps, delay }: TypeWriterProps): React.ReactElement {
  return (
    <div className={styles.container}>
      <div
        className={styles.typewriter}
        style={
          {
            "--duration": `${duration}s`,
            "--steps": `${steps}`,
            "--delay": `${delay}s`,
          } as React.CSSProperties
        }
      >
        {text}
      </div>
    </div>
  );
}
