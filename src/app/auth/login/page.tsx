"use client";
import styles from "./page.module.css";
import { createClient } from "@/lib/client";
import { Button } from "@/components/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/card";
import React, { useState } from "react";

export default function Page(): React.ReactElement {
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleSocialLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    const supabase = createClient();
    setError("hello");
    setIsLoading(true);

    try {
      const { error } = await supabase.auth.signInWithOAuth({
        provider: "github",
        options: { redirectTo: `${window.location.origin}/auth/oauth?next=/protected` },
      });

      if (error) throw error;
    } catch (error) {
      setError(error instanceof Error ? error.message : "An error occurred");
      setIsLoading(false);
    }
  };

  return (
    <div className={styles.container}>
      <Card>
        <CardHeader>
          <CardTitle>WELCOME!</CardTitle>
          <CardDescription>Sign in to your account to continue.</CardDescription>
        </CardHeader>
        <CardContent>
          <form className={styles.form} onSubmit={handleSocialLogin}>
            {error ? (
              <p className={styles.error}>{error}</p>
            ) : (
              <Button type="submit" disabled={isLoading}>
                {isLoading ? "Logging in..." : "Continue with GitHub"}
              </Button>
            )}
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
