import React from "react";
import styles from "./dropdown.module.css";

export interface DropdownOption {
  value: string;
  label: string;
}

export interface DropdownProps {
  label: string;
  name: string;
  options: DropdownOption[];
  defaultValue?: string;
}

export default function Dropdown({
  label,
  name,
  options,
  defaultValue,
}: DropdownProps): React.ReactElement {
  return (
    <label className={styles.field}>
      <span className={styles.label}>{label}</span>
      <span className={styles.selectWrapper}>
        <select className={styles.select} name={name} defaultValue={defaultValue}>
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </span>
    </label>
  );
}
