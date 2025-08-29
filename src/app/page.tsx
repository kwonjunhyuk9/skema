"use client";
import styles from "./page.module.css";
import { Subject } from "@/types/curriculum";
import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Scrollbar from "@/components/scrollbar";

export default function Page(): React.ReactElement {
  const [pages, setPages] = useState<Subject[]>([]);
  const pageRefs = useRef<(HTMLElement | null)[]>([]);

  useEffect(() => {
    fetch("/data/pages.json")
      .then((response) => response.json())
      .then((data) => setPages(data));
  }, []);

  // TODO:
  //  Profile - Animation
  //  Math - Vector, Matrix, Set, Number, Prob, Differentiation, Integration, Laplace, Fourier
  //  Science - Animation
  //  Electronics - Animation
  //  Frontend - Animation
  //  Backend - Animation
  //  AI - Animation
  return (
    <main>
      {pages.map(({ subject, courses, description }, index) => {
        return (
          <article
            className={styles.container}
            key={subject}
            ref={(el) => {
              (pageRefs.current as (HTMLElement | null)[])[index] = el;
            }}
          >
            <h1 className={styles.title}>{subject}</h1>
            {courses.map((course) => (
              <span className={styles.link} key={course}>
                <Link href={`/${course}`} style={{ color: "inherit", textDecoration: "none" }}>
                  {course.toUpperCase()}
                </Link>
              </span>
            ))}
            <p className={styles.description}>{description}</p>
          </article>
        );
      })}
      <div className={styles.scrollbar}>
        <Scrollbar pageRefs={pageRefs} buttonCount={pages.length} direction="column" />
      </div>
    </main>
  );
}
