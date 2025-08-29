"use client";
import styles from "./header.module.css";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import TypeWriter from "@/components/typewriter";
import Underliner from "@/components/underliner";

export default function Header(): React.ReactElement {
  const [systemTime, setSystemTime] = useState("");
  const [localTime, setLocalTime] = useState("");
  const [offset, setOffset] = useState("");
  const [hardware, setHardware] = useState("");
  const [os, setOs] = useState("");
  const [browser, setBrowser] = useState("");

  useEffect(() => {
    function updateTime() {
      const now = new Date();
      const utc = now.toUTCString();
      const local = now.toLocaleTimeString("en-US");
      const offset =
        new Intl.DateTimeFormat("en-US", {
          timeZoneName: "longOffset",
          hour: "numeric",
          minute: "numeric",
        })
          .format(now)
          .match(/GMT([+-]\d{1,2}:\d{2})/)?.[1] || "";

      setSystemTime(utc);
      setLocalTime(local);
      setOffset(offset);
    }

    updateTime();
    const timer = setInterval(updateTime, 1000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const userAgent = window.navigator.userAgent;

    const hardwareInfo = (() => {
      const ua = navigator.userAgent;
      if (/Android|iPhone|iPad|iPod|Windows Phone|BlackBerry|IEMobile|Opera Mini/.test(ua)) {
        return "MOBILE";
      }
      if (/Windows|Macintosh|Linux/.test(ua)) {
        return "DESKTOP";
      }
      return "Unknown";
    })();

    const osInfo = (() => {
      const ua = navigator.userAgent;
      if (/Windows/.test(ua)) return "WINDOWS";
      if (/Macintosh/.test(ua)) return "MACOS";
      if (/Linux/.test(ua)) return "LINUX";
      if (/iPhone|iPad|iPod/.test(ua)) return "IOS";
      if (/Android/.test(ua)) return "ANDROID";
      return "UNKNOWN";
    })();

    const browserInfo = (() => {
      const ua = userAgent.toLowerCase();
      if (ua.includes("firefox")) return "FIREFOX";
      if (ua.includes("chrome")) return "CHROME";
      if (ua.includes("safari")) return "SAFARI";
      if (ua.includes("edge")) return "EDGE";
      if (ua.includes("opera")) return "OPERA";
      return "UNKNOWN";
    })();

    setHardware(hardwareInfo);
    setOs(osInfo);
    setBrowser(browserInfo);
  }, []);

  return (
    <header className={styles.container}>
      <div className={styles.home}>
        <Link href="/" style={{ color: "inherit", textDecoration: "none" }}>
          <Underliner text="DANCING WITH LIFE" />
        </Link>
      </div>
      <div className={styles.time}>
        <TypeWriter text={`SYSTEM TIME: ${systemTime} UTC`} duration={3} steps={20} delay={0} />
        <TypeWriter text={`LOCAL TIME: ${localTime}`} duration={2} steps={15} delay={0.5} />
        <TypeWriter text={`OFFSET: ${offset}`} duration={1} steps={10} delay={1} />
      </div>
      <div className={styles.info}>
        <TypeWriter text={`> HARDWARE: ${hardware}`} duration={2} steps={15} delay={1.5} />
        <TypeWriter text={`> OS: ${os}`} duration={2} steps={15} delay={2} />
        <TypeWriter text={`> BROWSER: ${browser}`} duration={2} steps={15} delay={2.5} />
      </div>
    </header>
  );
}
