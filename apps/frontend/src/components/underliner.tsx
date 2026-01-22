import { UnderLinerProps } from "@/types/props";
import styles from "./underliner.module.css";
import React from "react";

export default function Underliner({ text }: UnderLinerProps): React.ReactElement {
  return <span className={styles.underliner}>{text}</span>;
}
