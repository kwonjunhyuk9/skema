"use client";
import React, { Fragment, useEffect, useState } from "react";
import TypeWriter from "@/app/typewriter";

export default function Footer(): React.ReactElement {
  const [latitude, setLatitude] = useState(0);
  const [longitude, setLongitude] = useState(0);
  const [accuracy, setAccuracy] = useState(0);
  const [error, setError] = useState("");

  useEffect((): void => {
    if (!navigator.geolocation) {
      setError("Geolocation is not supported");
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (position: GeolocationPosition): void => {
        setLatitude(position.coords.latitude);
        setLongitude(position.coords.longitude);
        setAccuracy(position.coords.accuracy);
        setError("");
      },
      (error: GeolocationPositionError): void => {
        setError(error.message);
      },
      {
        enableHighAccuracy: true,
        timeout: 5000,
        maximumAge: 0,
      },
    );
  }, []);

  return (
    <Fragment>
      <footer className="container">
        <div className="empty" />
        <div className="location">
          {error ? (
            <TypeWriter text={`${error}`} duration={2} steps={20} delay={0} />
          ) : (
            <Fragment>
              <TypeWriter text={`LAT: ${latitude}`} duration={2} steps={15} delay={0} />
              <TypeWriter text={`LONG: ${longitude}`} duration={2} steps={15} delay={0.5} />
              <TypeWriter text={`ACC: ${accuracy}m`} duration={1} steps={10} delay={1} />
            </Fragment>
          )}
        </div>
        <address className="contacts">
          <a className="link" href="tel:+821058551427">
            Phone
          </a>
          <br />
          <a className="link" href="mailto:kwonjunhyuk9@icloud.com">
            Email
          </a>
          <br />
          <a className="link" href="https://www.linkedin.com/in/jun-hyuk-kwon-3a9551355" target="_blank">
            LinkedIn
          </a>
          <br />
        </address>
      </footer>
      <style jsx>{`
        .container {
          position: fixed;
          width: 100%;
          height: 80px;
          bottom: 0;
          left: 0;
          z-index: 100;

          box-sizing: border-box;
          padding: 20px;

          display: flex;
          gap: 20px;

          font-size: 0.75rem;

          background: linear-gradient(to top, rgba(0, 0, 0, 1) 60%, rgba(0, 0, 0, 0));

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
