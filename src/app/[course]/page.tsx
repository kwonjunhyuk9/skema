"use client";
import React, { Fragment, use, useEffect, useState } from "react";
import Article from "@/app/[course]/article";
import { Chapter } from "@/types/curriculum";

export default function Page({ params }: { params: Promise<{ course: string }> }): React.ReactElement {
  const { course } = use(params);
  const [pages, setPages] = useState<Chapter[]>([]);

  useEffect((): void => {
    fetch(`/data/${course}.json`)
      .then((response: Response): Promise<Chapter[]> => response.json())
      .then((data: Chapter[]): void => setPages(data));
  }, [course]);

  // TODO: Add SQL
  // TODO: Use Project Data
  return (
    <Fragment>
      <main className="main">
        <h1 className="course">{course.toUpperCase()}</h1>
        {pages.map(
          ({ chapter, topics }: Chapter): React.ReactElement => (
            <Article key={chapter} chapter={chapter} topics={topics} />
          ),
        )}
      </main>
      <style jsx>{`
        .main {
          padding: 80px 0;
          overflow: clip;
        }
      `}</style>
    </Fragment>
  );
}
