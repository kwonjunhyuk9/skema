import styles from "./button.module.css";
import React from "react";

export function Button({ ...props }: React.ComponentProps<"button">): React.ReactElement {
  return <button className={styles.button} {...props} />;
}
