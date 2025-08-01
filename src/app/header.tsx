"use client";
import React, { Fragment } from "react";
import Link from "next/link";

// TODO: Add Real Time Data to Header, Animate Typing Elements
export default function Header(): React.ReactElement {
  return (
    <Fragment>
      <header className="container">
        <div className="home">
          <Link href="/" style={{ color: "inherit", textDecoration: "none" }}>
            DANCING WITH LIFE
          </Link>
        </div>
        <p className="time">
          LOCAL TIME: 23:42:17
          <br />
          SYSTEM TIME: 0x7E2C4B
          <br />
          UPTIME: 847:23:16
          <br />
          LAST SYNC: 2025.07.16_04:23
          <br />
        </p>
        <p className="status">
          &gt; SYSTEM STATUS: ONLINE
          <br />
          &gt; CPU LOAD: 42%
          <br />
          &gt; MEMORY: 16.4 GB / 32 GB
          <br />
          &gt; PING: 23ms
          <br />
          &gt; ENCRYPTION: ENABLED
          <br />
          &gt; SECURITY LEVEL: ALPHA
          <br />
        </p>
      </header>
      <style jsx>{`
        .container {
          position: fixed;
          width: 100%;
          height: 7rem;
          top: 0;
          left: 0;
          z-index: 100;

          box-sizing: border-box;
          padding: 1rem;

          display: flex;
          gap: 1rem;
          
          font-size: 0.75rem;
          
          background: linear-gradient(
            to bottom,
            rgba(0, 0, 0, 1) 60%,
            rgba(0, 0, 0, 0)
          );
          
          & .home {
            min-width: 12rem;
          
            flex: 7;
          }

          & .time {
            min-width: 12rem;
          
            margin: 0;
          
            flex: 4;
          }

          & .status {
            min-width: 12rem;
          
            margin: 0;
          
            flex: 2;
          }
        }
      `}</style>
    </Fragment>
  );
}
