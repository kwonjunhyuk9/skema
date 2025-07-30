import { Chapter, Topic } from "@/types/curriculum";
import React, { Fragment, useRef } from "react";
import Section from "@/app/[course]/section";
import Scrollbar from "@/app/scrollbar";

export default function Article({
  chapter,
  topics,
}: Chapter): React.ReactElement {
  const pageRefs: React.RefObject<(HTMLElement | null)[]> = useRef<
    (HTMLElement | null)[]
  >([]);

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
        <Scrollbar
          pageRefs={pageRefs}
          buttonCount={topics.length}
          direction="row"
        />
      </article>
      <style jsx>{`
        .article {
          display: flex;
          flex-flow: column nowrap;

          & .container {
            display: flex;
            flex-flow: row nowrap;
            gap: 1rem;

            & .card {
              max-width: 15rem;
              min-width: 15rem;
              padding: 0.5rem;
              border: 0.05rem solid var(--cyber-white);
            }
          }
        }
      `}</style>
    </Fragment>
  );
}
