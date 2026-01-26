"use client";
import styles from "./page.module.css";
import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Scrollbar from "@/components/scrollbar";
import Button from "@/components/button";
import { Schema, Card } from "@/types/models";

async function mockFetchSchemas(): Promise<Schema[]> {
  return [
    { schema_id: 1, schema_name: "NEXT" },
    { schema_id: 2, schema_name: "NEST" },
  ];
}

async function mockFetchCards(): Promise<Card[]> {
  return [
    { card_id: 101, card_name: "ECOSYSTEM" },
    { card_id: 102, card_name: "HABITAT" },
    { card_id: 103, card_name: "PREDATOR" },
  ];
}

export default function Page(): React.ReactElement {
  const [schemas, setSchemas] = useState<Schema[]>([]);
  const [cards, setCards] = useState<Card[]>([]);
  const schemaRefs = useRef<(HTMLElement | null)[]>([]);
  const cardRefs = useRef<(HTMLElement | null)[]>([]);

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
                (schemaRefs.current as (HTMLElement | null)[])[index] = el;
              }}
            >
              <h3 className={styles.cardTitle}>{schema_name}</h3>
              <div className={styles.actions}>
                <Button>
                  <Link href={`/schema/${schema_id}/view`}>VIEW</Link>
                </Button>
                <Button>
                  <Link href={`/schema/${schema_id}/test`}>TEST</Link>
                </Button>
              </div>
            </div>
          ))}
        </article>
        <Scrollbar pageRefs={schemaRefs} buttonCount={schemas.length} direction="row" />
      </section>

      <section className={styles.container}>
        <h1 className={styles.title}>VOCABULARY CARDS</h1>
        <article className={styles.list}>
          {cards.map(({ card_id, card_name }, index) => (
            <div
              className={styles.box}
              key={card_id}
              ref={(el) => {
                (cardRefs.current as (HTMLElement | null)[])[index] = el;
              }}
            >
              <h3 className={styles.cardTitle}>{card_name}</h3>
              <div className={styles.actions}>
                <Button>
                  <Link href={`/card/${card_id}/view`}>VIEW</Link>
                </Button>
                <Button>
                  <Link href={`/card/${card_id}/test`}>TEST</Link>
                </Button>
              </div>
            </div>
          ))}
        </article>
        <Scrollbar pageRefs={cardRefs} buttonCount={cards.length} direction="row" />
      </section>
    </main>
  );
}
