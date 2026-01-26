"use client";
import styles from "./button.module.css";
import React from "react";
import { ButtonProps } from "@/types/props";

export default function Button({ children, className }: ButtonProps): React.ReactElement {
  const buttonClassName = className ? `${styles.button} ${className}` : styles.button;
  return <div className={buttonClassName}>{children}</div>;
}
