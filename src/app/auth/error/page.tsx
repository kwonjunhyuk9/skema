import styles from "./page.module.css";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/card";
import React from "react";

export default async function Page({
  searchParams,
}: {
  searchParams: Promise<{ error: string }>;
}): Promise<React.ReactElement> {
  const params = await searchParams;

  return (
    <div className={styles.container}>
      <Card>
        <CardHeader>
          <CardTitle>ERROR!</CardTitle>
          <CardDescription>Check the details below.</CardDescription>
        </CardHeader>
        <CardContent>
          {params?.error ? (
            <p className={styles.error}>Code error: {params.error}</p>
          ) : (
            <p className={styles.error}>An unspecified error occurred.</p>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
