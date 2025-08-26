"use client";
import styles from "./page.module.css";
import { Course, Subject } from "@/types/curriculum";
import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Scrollbar from "@/components/scrollbar";

export default function Page(): React.ReactElement {
  const [pages, setPages] = useState<Subject[]>([]);
  const pageRefs: React.RefObject<(HTMLElement | null)[]> = useRef<(HTMLElement | null)[]>([]);

  useEffect((): void => {
    fetch("/data/pages.json")
      .then((response: Response): Promise<Subject[]> => response.json())
      .then((data: Subject[]): void => setPages(data));
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
      {pages.map(
        ({ subject, courses, description }: Subject, index: number): React.ReactElement => (
          <article
            className={styles.container}
            key={subject}
            ref={(el: HTMLElement | null): void => {
              (pageRefs.current as (HTMLElement | null)[])[index] = el;
            }}
          >
            <h1 className={styles.title}>{subject}</h1>
            {courses.map(
              (course: Course): React.ReactElement => (
                <span className={styles.link} key={course}>
                  <Link href={`/${course}`} style={{ color: "inherit", textDecoration: "none" }}>
                    {course.toUpperCase()}
                  </Link>
                </span>
              ),
            )}
            <p className={styles.description}>{description}</p>
          </article>
        ),
      )}
      <div className={styles.scrollbar}>
        <Scrollbar pageRefs={pageRefs} buttonCount={pages.length} direction="column" />
      </div>
    </main>
  );
}
