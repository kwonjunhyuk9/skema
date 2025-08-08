"use client";
import { Course, Subject } from "@/types/curriculum";
import React, { Fragment, useEffect, useRef, useState } from "react";
import Link from "next/link";
import Scrollbar from "@/app/scrollbar";

export default function Page(): React.ReactElement {
  const [pages, setPages] = useState<Subject[]>([]);
  const pageRefs: React.RefObject<(HTMLElement | null)[]> = useRef<(HTMLElement | null)[]>([]);

  useEffect((): void => {
    fetch("/data/pages.json")
      .then((response: Response): Promise<Subject[]> => response.json())
      .then((data: Subject[]): void => setPages(data));
  }, []);

  return (
    <Fragment>
      <main>
        {pages.map(
          ({ subject, courses, description }: Subject, index: number): React.ReactElement => (
            <article
              className="container"
              key={subject}
              ref={(el: HTMLElement | null): void => {
                (pageRefs.current as (HTMLElement | null)[])[index] = el;
              }}
            >
              <h1 className="title">{subject}</h1>
              {courses.map(
                (course: Course): React.ReactElement => (
                  <span className="link" key={course}>
                    <Link href={`/${course}`} style={{ color: "inherit", textDecoration: "none" }}>
                      {course.toUpperCase()}
                    </Link>
                  </span>
                ),
              )}
              <p className="description">{description}</p>
            </article>
          ),
        )}
        <div className="scrollbar">
          <Scrollbar pageRefs={pageRefs} buttonCount={7} direction="column" />
        </div>
      </main>
      <style jsx>{`
        .container {
          position: relative;

          padding: 80px 0;
          height: 100vh;
          box-sizing: border-box;

          & .title {
            position: relative;

            margin: 0;

            font-size: 7rem;
          }

          & .link {
            position: relative;

            margin: 1px;
            border: 1px solid var(--cyber-white);
            padding: 10px;
          }

          & .description {
            position: absolute;
            bottom: 80px;

            margin: 0;

            font-size: 2rem;
          }
        }

        .scrollbar {
          position: fixed;
          top: 50%;
          left: 95%;

          transform: translate(-50%, -50%);
        }
      `}</style>
    </Fragment>
  );
}
