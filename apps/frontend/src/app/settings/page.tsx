import React from "react";
import styles from "./page.module.css";
import Dropdown from "@/components/dropdown";

const themeOptions = [
  { value: "system", label: "System" },
  { value: "light", label: "Light" },
  { value: "dark", label: "Dark" },
];

const languageOptions = [
  { value: "en", label: "EN" },
  { value: "ko", label: "KOR" },
];

export default function SettingsPage(): React.ReactElement {
  return (
    <main className={styles.page}>
      <section className={styles.panel}>
        <header className={styles.header}>
          <h1 className={styles.title}>Settings</h1>
          <p className={styles.subtitle}>Customize your experience.</p>
        </header>
        <hr className={styles.divider} />
        <div className={styles.group}>
          <Dropdown label="Theme" name="theme" options={themeOptions} defaultValue="system" />
          <Dropdown label="Language" name="language" options={languageOptions} defaultValue="en" />
        </div>
      </section>
    </main>
  );
}
