"use client";
import { Concept, Topic } from "@/types/curriculum";
import React, { Fragment, useEffect, useState } from "react";
import supabase from "@/utils/supabase";

export default function Section({ topic_id, topic_name }: Topic): React.ReactElement {
  const [concepts, setConcepts] = useState<{ concept_id: number; concept_name: string }[]>([]);

  useEffect((): void => {
    (async (): Promise<void> => {
      await getConcepts();
    })();
  }, []);

  async function getConcepts(): Promise<void> {
    const { data: conceptsData } = await supabase.from("concepts").select().eq("topic_id", topic_id);
    setConcepts(conceptsData || []);
  }

  return (
    <Fragment>
      <section>
        <h3>{topic_name}</h3>
        <ul className="concepts">
          {concepts.map(
            ({ concept_id, concept_name }: Concept): React.ReactElement => (
              <li key={concept_id}>{concept_name}</li>
            ),
          )}
        </ul>
      </section>
      <style jsx>{`
        .concepts {
          padding: 0 20px;
        }
      `}</style>
    </Fragment>
  );
}
