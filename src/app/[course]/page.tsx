"use client";
import styles from "./page.module.css"
import { Chapter } from "@/types/curriculum";
import React, { use, useEffect, useState } from "react";
import supabase from "@/utils/supabase";
import Article from "@/app/[course]/article";

export default function Page({ params }: { params: Promise<{ course: string }> }): React.ReactElement {
  const course: string = use(params).course.replace(/-/g, " ");
  const [chapters, setChapters] = useState<{ chapter_id: number; chapter_name: string }[]>([]);

  useEffect((): void => {
    (async (): Promise<void> => {
      await getChapters();
    })();
  });

  async function getChapters(): Promise<void> {
    const { data: course_id } = await supabase.from("courses").select("course_id").eq("course_name", course);
    if (!course_id?.length) return;
    const { data: chaptersData } = await supabase.from("chapters").select().eq("course_id", course_id[0].course_id);

    setChapters(chaptersData || []);
  }

  return (
    <main className={styles.main}>
      <h1>{course.toUpperCase()}</h1>
      {chapters.map(
        ({ chapter_id, chapter_name }: Chapter): React.ReactElement => (
          <Article key={`chapter-${chapter_id}`} chapter_id={chapter_id} chapter_name={chapter_name} />
        ),
      )}
    </main>
  );
}
