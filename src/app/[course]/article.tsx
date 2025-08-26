"use client";
import styles from "./article.module.css";
import { Chapter, Topic } from "@/types/curriculum";
import React, { useEffect, useRef, useState } from "react";
import supabase from "@/utils/supabase";
import Section from "@/app/[course]/section";
import Scrollbar from "@/components/scrollbar";

export default function Article({ chapter_id, chapter_name }: Chapter): React.ReactElement {
  const [topics, setTopics] = useState<{ topic_id: number; topic_name: string }[]>([]);
  const pageRefs: React.RefObject<(HTMLElement | null)[]> = useRef<(HTMLElement | null)[]>([]);

  useEffect((): void => {
    (async (): Promise<void> => {
      await getTopics();
    })();
  });

  async function getTopics(): Promise<void> {
    const { data: topicsData } = await supabase.from("topics").select().eq("chapter_id", chapter_id);
    setTopics(topicsData || []);
  }

  return (
    <article className={styles.article}>
      <h2>{chapter_name}</h2>
      <div className={styles.container}>
        {topics.map(
          ({ topic_id, topic_name }: Topic, index: number): React.ReactElement => (
            <div
              className={styles.card}
              key={`topic-${topic_id}`}
              ref={(el: HTMLElement | null): void => {
                (pageRefs.current as (HTMLElement | null)[])[index] = el;
              }}
            >
              <Section topic_id={topic_id} topic_name={topic_name} />
            </div>
          ),
        )}
      </div>
      <Scrollbar pageRefs={pageRefs} buttonCount={topics.length} direction="row" />
    </article>
  );
}
