import { Chapter, Topic } from "@/types/curriculum";
import React, { Fragment, useRef } from "react";
import Section from "@/app/[course]/section";
import Scrollbar from "@/app/scrollbar";

export default function Article({ chapter, topics }: Chapter): React.ReactElement {
  const pageRefs: React.RefObject<(HTMLElement | null)[]> = useRef<(HTMLElement | null)[]>([]);

  return (
    <Fragment>
      <article className="article">
        <h2>{chapter}</h2>
        <div className="container">
          {topics.map(
            ({ topic, concepts }: Topic, index: number): React.ReactElement => (
              <div
                className="card"
                key={topic}
                ref={(el: HTMLElement | null): void => {
                  (pageRefs.current as (HTMLElement | null)[])[index] = el;
                }}
              >
                <Section topic={topic} concepts={concepts} />
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
