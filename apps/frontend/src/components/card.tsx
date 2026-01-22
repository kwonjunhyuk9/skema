import styles from "./card.module.css";
import * as React from "react";

export function Card({ ...props }: React.ComponentProps<"div">): React.ReactElement {
  return <div className={styles.card} {...props} />;
}

export function CardHeader({ ...props }: React.ComponentProps<"div">): React.ReactElement {
  return <div className={styles.cardHeader} {...props} />;
}

export function CardContent({ ...props }: React.ComponentProps<"div">): React.ReactElement {
  return <div className={styles.cardContent} {...props} />;
}

export function CardTitle({ ...props }: React.ComponentProps<"h2">): React.ReactElement {
  return <h2 className={styles.cardTitle} {...props} />;
}

export function CardDescription({ ...props }: React.ComponentProps<"p">): React.ReactElement {
  return <p className={styles.cardDescription} {...props} />;
}
