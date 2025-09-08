"use client";
import styles from "./section.module.css";
import { Concept, Topic } from "@/types/curriculum";
import React, { useEffect, useState } from "react";
import { createClient } from "@/lib/client";

export default function Section({ topic_id, topic_name }: Topic): React.ReactElement {
  const [concepts, setConcepts] = useState<Concept[]>([]);
  const supabase = createClient();

  useEffect(() => {
    async function getConcepts(): Promise<void> {
      const { data: conceptsData } = await supabase
        .from("concepts")
        .select()
        .eq("topic_id", topic_id)
        .order("concept_order", { ascending: true });
      setConcepts(conceptsData || []);
    }

    void getConcepts();
  }, [supabase, topic_id]);

  return (
    <section>
      <h3>{topic_name}</h3>
      <ul className={styles.concepts}>
        {concepts.map(({ concept_id, concept_name }) => (
          <li key={`concept-${concept_id}`}>{concept_name}</li>
        ))}
      </ul>
    </section>
  );
}
