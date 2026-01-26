"use client";
import styles from "./page.module.css";
import React from "react";
import Link from "next/link";
import Button from "@/components/button";

const providers = [
  { id: "apple", label: "Continue with Apple" },
  { id: "google", label: "Continue with Google" },
  { id: "naver", label: "Continue with Naver" },
  { id: "kakao", label: "Continue with Kakao" },
];

export default function AuthPage(): React.ReactElement {
  return (
    <main className={styles.container}>
      <section className={styles.panel}>
        <header className={styles.header}>
          <h1 className={styles.title}>SIGN IN</h1>
          <p className={styles.subtitle}>Choose a provider to continue.</p>
        </header>
        <div className={styles.oauthList}>
          {providers.map((provider) => (
            <Button key={provider.id} className={styles.oauthButton}>
              <Link className={styles.oauthLink} href={`/auth/${provider.id}`}>
                {provider.label}
              </Link>
            </Button>
          ))}
        </div>
        <p className={styles.footer}>By continuing, you agree to the terms and privacy policy.</p>
      </section>
    </main>
  );
}
