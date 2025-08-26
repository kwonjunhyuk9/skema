"use client";
import styles from "./footer.module.css";
import React, { Fragment, useEffect, useState } from "react";
import TypeWriter from "@/components/typewriter";
import Underliner from "@/components/underliner";

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
    <footer className={styles.container}>
      <div className={styles.empty} />
      <div className={styles.location}>
        {error ? (
          <TypeWriter text={`${error}`} duration={2} steps={15} delay={0} />
        ) : (
          <Fragment>
            <TypeWriter text={`LAT: ${latitude}`} duration={2} steps={15} delay={0} />
            <TypeWriter text={`LONG: ${longitude}`} duration={2} steps={15} delay={0.5} />
            <TypeWriter text={`ACC: ${accuracy}m`} duration={1} steps={10} delay={1} />
          </Fragment>
        )}
      </div>
      <address className={styles.contacts}>
        <a className={styles.link} href="tel:+821058551427">
          <Underliner text="Phone" />
        </a>
        <br />
        <a className={styles.link} href="mailto:kwonjunhyuk9@icloud.com">
          <Underliner text="Email" />
        </a>
        <br />
        <a className={styles.link} href="https://www.linkedin.com/in/jun-hyuk-kwon-3a9551355" target="_blank">
          <Underliner text="LinkedIn" />
        </a>
        <br />
      </address>
    </footer>
  );
}
