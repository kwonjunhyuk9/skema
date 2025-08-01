"use client";
import React, { Fragment } from "react";

// TODO: Add Real Time Data to Footer, Animate Typing Elements
export default function Footer(): React.ReactElement {
  return (
    <Fragment>
      <footer className="container">
        <p className="empty" />
        <p className="location">
          LAT: 37°32&apos;52.6&quot;N
          <br />
          LONG: 126°55&apos;31.4&quot;E
          <br />
          SECTOR: NT-7
          <br />
          ZONE: RED-2
          <br />
          GRID: 255.128.064
          <br />
        </p>
        <address className="contacts">
          <a className="link" href="tel:+821058551427">
            Phone
          </a>
          <br />
          <a className="link" href="mailto:kwonjunhyuk9@icloud.com">
            Email
          </a>
          <br />
          <a
            className="link"
            href="https://www.linkedin.com/in/jun-hyuk-kwon-3a9551355"
            target="_blank"
          >
            LinkedIn
          </a>
          <br />
        </address>
      </footer>
      <style jsx>{`
        .container {
          position: fixed;
          width: 100%;
          height: 7rem;
          bottom: 0;
          left: 0;
          z-index: 100;

          box-sizing: border-box;
          padding: 1rem;

          display: flex;
          gap: 1rem;

          font-size: 0.75rem;

          background: linear-gradient(
            to top,
            rgba(0, 0, 0, 1) 60%,
            rgba(0, 0, 0, 0)
          );

          & .empty {
            min-width: 12rem;
            
            margin: 0;

            flex: 6;
          }

          & .location {
            min-width: 12rem;
            
            margin: 0;
            
            flex: 2;
          }

          & .contacts {
            min-width: 6rem;
            
            flex: 1;

            & .link {
              font-style: normal;
              text-decoration: none;
              color: inherit;
            }
          }
        }
      `}</style>
    </Fragment>
  );
}
