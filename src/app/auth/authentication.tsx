"use client";
import styles from "./authentication.module.css";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { createClient } from "@/lib/client";

export function Authentication(): React.ReactElement | null {
  const router = useRouter();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const supabase = createClient();

  useEffect(() => {
    const checkSession = async () => {
      const {
        data: { session },
      } = await supabase.auth.getSession();
      setIsLoggedIn(!!session);
    };

    void checkSession();

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((event, session) => {
      setIsLoggedIn(!!session);
    });

    return () => subscription.unsubscribe();
  }, []);

  const login = () => {
    router.push("/auth/login");
  };

  const logout = async () => {
    await supabase.auth.signOut();
    router.push("/");
  };

  return (
    <button className={styles.button} onClick={isLoggedIn ? logout : login}>
      {isLoggedIn ? "LOGOUT" : "LOGIN"}
    </button>
  );
}
