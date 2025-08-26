import styles from "./underliner.module.css";
import { UnderLinerProps } from "@/types/props";

export default function Underliner({ text }: UnderLinerProps) {
  return <span className={styles.underliner}>{text}</span>;
}
