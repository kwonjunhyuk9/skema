"use client";
import styles from "./page.module.css";
import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Scrollbar from "@/components/scrollbar";
import Button from "@/components/button";
import { Schema, Card } from "@/types/curriculum";

async function mockFetchSchemas(): Promise<Schema[]> {
  return [
    { schema_id: 1, schema_name: "Next" },
    { schema_id: 2, schema_name: "Nest" },
  ];
}

async function mockFetchCards(): Promise<Card[]> {
  return [
    { card_id: 101, card_name: "Ecosystem" },
    { card_id: 102, card_name: "Habitat" },
    { card_id: 103, card_name: "Adaptation" },
    { card_id: 104, card_name: "Predator" },
    { card_id: 105, card_name: "Prey" },
  ];
}

export default function Page(): React.ReactElement {
  const [schemas, setSchemas] = useState<Schema[]>([]);
  const [cards, setCards] = useState<Card[]>([]);
  const pageRefs = useRef<(HTMLElement | null)[]>([]);

  useEffect(() => {
    async function getPageData(): Promise<void> {
      const [schemasData, cardsData] = await Promise.all([mockFetchSchemas(), mockFetchCards()]);
      setSchemas(schemasData);
      setCards(cardsData);
    }

    void getPageData();
  }, []);

  return (
    <main>
      <section className={styles.container}>
        <h1 className={styles.title}>CONCEPT SCHEMAS</h1>
        <article className={styles.list}>
          {schemas.map(({ schema_id, schema_name }, index) => (
            <div
              className={styles.box}
              key={schema_id}
              ref={(el) => {
                (pageRefs.current as (HTMLElement | null)[])[index] = el;
              }}
            >
              <h3>{schema_name}</h3>
              <Link href={`/schema/view/${schema_name}`}>VIEW</Link>
              <Link href={`/schema/test/${schema_name}`}>TEST</Link>
            </div>
          ))}
        </article>
        <Scrollbar pageRefs={pageRefs} buttonCount={schemas.length} direction="row" />
      </section>

      <section className={styles.container}>
        <h1 className={styles.title}>VOCABULARY CARDS</h1>
        <article className={styles.list}>
          {cards.map(({ card_id, card_name }, index) => (
            <div
              className={styles.box}
              key={card_id}
              ref={(el) => {
                (pageRefs.current as (HTMLElement | null)[])[index] = el;
              }}
            >
              <h3>{card_name}</h3>
              <Link href={`/card/view/${card_name}`}>VIEW</Link>
              <Link href={`/card/test/${card_name}`}>TEST</Link>
            </div>
          ))}
        </article>
        <Scrollbar pageRefs={pageRefs} buttonCount={cards.length} direction="row" />
      </section>
    </main>
  );
}
