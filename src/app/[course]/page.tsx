"use client";
import styles from "./page.module.css";
import React, { use, useEffect, useState } from "react";
import Article from "@/app/[course]/article";
import { Chapter } from "@/types/curriculum";

export default function Page({ params }: { params: Promise<{ course: string }> }): React.ReactElement {
  const course = decodeURIComponent(use(params).course).replace(/-/g, " ");
  const [chapters, setChapters] = useState<Chapter[]>([]);
  const supabase = createClient();

  useEffect(() => {
    async function getChapters(): Promise<void> {
      const { data: course_id } = await supabase.from("courses").select("course_id").eq("course_name", course);
      if (!course_id?.length) return;
      const { data: chaptersData } = await supabase
        .from("chapters")
        .select()
        .eq("course_id", course_id[0].course_id)
        .order("chapter_order", { ascending: true });
      setChapters(chaptersData || []);
    }

    void getChapters();
  }, [supabase, course]);

  return (
    <main className={styles.main}>
      <h1>{course.toUpperCase()}</h1>
      {chapters.map(({ chapter_id, chapter_name }) => (
        <Article key={`chapter-${chapter_id}`} chapter_id={chapter_id} chapter_name={chapter_name} />
      ))}
    </main>
  );
}
