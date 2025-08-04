"use client";
import React, { Fragment, useEffect, useState } from "react";
import Link from "next/link";
import TypeWriter from "@/app/typewriter";

export default function Header(): React.ReactElement {
  const [systemTime, setSystemTime] = useState("");
  const [localTime, setLocalTime] = useState("");
  const [offset, setOffset] = useState("");
  const [hardware, setHardware] = useState("");
  const [os, setOs] = useState("");
  const [browser, setBrowser] = useState("");

  useEffect((): (() => void) => {
    function updateTime(): void {
      const now = new Date();
      const utc: string = now.toUTCString();
      const local: string = now.toLocaleTimeString("en-US");
      const offset: string =
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
    const timer: NodeJS.Timeout = setInterval(updateTime, 1000);
    return (): void => clearInterval(timer);
  }, []);

  useEffect((): void => {
    const userAgent: string = window.navigator.userAgent;

    const hardwareInfo: string = ((): string => {
      const ua: string = navigator.userAgent;
      if (/Android|iPhone|iPad|iPod|Windows Phone|BlackBerry|IEMobile|Opera Mini/.test(ua)) {
        return "MOBILE";
      }
      if (/Windows|Macintosh|Linux/.test(ua)) {
        return "DESKTOP";
      }
      return "Unknown";
    })();

    const osInfo: string = ((): string => {
      const ua: string = navigator.userAgent;
      if (/Windows/.test(ua)) return "WINDOWS";
      if (/Macintosh/.test(ua)) return "MACOS";
      if (/Linux/.test(ua)) return "LINUX";
      if (/iPhone|iPad|iPod/.test(ua)) return "IOS";
      if (/Android/.test(ua)) return "ANDROID";
      return "UNKNOWN";
    })();

    const browserInfo: string = ((): string => {
      const ua: string = userAgent.toLowerCase();
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
    <Fragment>
      <header className="container">
        <div className="home">
          <Link href="/" style={{ color: "inherit", textDecoration: "none" }}>
            DANCING WITH LIFE
          </Link>
        </div>
        <div className="time">
          <TypeWriter text={`SYSTEM TIME: ${systemTime} UTC`} duration={3} steps={20} delay={0} />
          <TypeWriter text={`LOCAL TIME: ${localTime}`} duration={2} steps={15} delay={0.5} />
          <TypeWriter text={`OFFSET: ${offset}`} duration={1} steps={10} delay={1} />
        </div>
        <div className="info">
          <TypeWriter text={`> HARDWARE: ${hardware}`} duration={2} steps={15} delay={1.5} />
          <TypeWriter text={`> OS: ${os}`} duration={2} steps={15} delay={2} />
          <TypeWriter text={`> BROWSER: ${browser}`} duration={2} steps={15} delay={2.5} />
        </div>
      </header>
      <style jsx>{`
        .container {
          position: fixed;
          width: 100%;
          height: 80px;
          top: 0;
          left: 0;
          z-index: 100;

          box-sizing: border-box;
          padding: 20px;

          display: flex;
          gap: 20px;

          font-size: 0.75rem;

          background: linear-gradient(to bottom, rgba(0, 0, 0, 1) 60%, rgba(0, 0, 0, 0));

          & .home {
            min-width: 12rem;

            flex: 7;
          }

          & .time {
            min-width: 15rem;

            margin: 0;

            flex: 4;
          }

          & .info {
            min-width: 12rem;

            margin: 0;

            flex: 2;
          }
        }
      `}</style>
    </Fragment>
  );
}
