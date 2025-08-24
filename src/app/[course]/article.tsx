"use client";
import { Chapter, Topic } from "@/types/curriculum";
import React, { Fragment, useEffect, useRef, useState } from "react";
import supabase from "@/utils/supabase";
import Section from "@/app/[course]/section";
import Scrollbar from "@/app/scrollbar";

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
    <Fragment>
      <article className="article">
        <h2>{chapter_name}</h2>
        <div className="container">
          {topics.map(
            ({ topic_id, topic_name }: Topic): React.ReactElement => (
              <div
                className="card"
                key={`topic-${topic_id}`}
                ref={(el: HTMLElement | null): void => {
                  (pageRefs.current as (HTMLElement | null)[])[topic_id] = el;
                }}
              >
                <Section topic_id={topic_id} topic_name={topic_name} />
              </div>
            ),
          )}
        </div>
        <Scrollbar pageRefs={pageRefs} buttonCount={topics.length} direction="row" />
      </article>
      <style jsx>{`
        .article {
          display: flex;

          flex-flow: column nowrap;

          & .container {
            display: flex;

            padding-right: 100vw;
            width: 100vw;
            overflow: auto;
            box-sizing: border-box;

            flex-flow: row nowrap;
            gap: 10px;

            & .card {
              margin: 1px;
              border: 1px solid var(--cyber-white);
              padding: 10px;
              min-width: 20rem;
              max-width: 20rem;
            }
          }
        }
      `}</style>
    </Fragment>
  );
}