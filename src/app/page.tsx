"use client";
import React, {Fragment, useRef} from "react";
import Scrollbar from "@/app/scrollbar";

interface PageItem {
    title: string;
    description: string;
}

const pages: PageItem[] = [
    {title: "INTRO", description: "A Universe In Your Hands."},
    {title: "MATH", description: "Where Logic meets Elegance."},
    {title: "SCIENCE", description: "Unveil the Patterns of the Universe."},
    {title: "ELECTRONICS", description: "Weave the language of Atoms."},
    {title: "FRONTEND", description: "Imagination meets Interaction."},
    {title: "BACKEND", description: "Silently Architect Data Flows."},
    {title: "OUTRO", description: "May your Curiosity keep you Dancing With Life."}
];

export default function Page(): React.ReactElement {
    const pageRefs = useRef<(HTMLElement | null)[]>([]);

    return (
        <Fragment>
            <main>
                {pages.map(({title, description}, index) => (
                    <article
                        className="container"
                        key={title}
                        ref={el => {(pageRefs.current as (HTMLElement | null)[])[index] = el;}}
                    >
                        <h1 className="title">{title}</h1>
                        <p className="description">{description}</p>
                    </article>
                ))}

                <div className="scrollbar">
                    <Scrollbar pageRefs={pageRefs} buttonCount={7} direction="column"/>
                </div>
            </main>
            <style jsx>{`
                .container {
                    height: 100vh;

                    & .title {
                        font-size: 7rem;
                        position: relative;
                        margin: 0;
                        top: 10vh;
                    }

                    & .description {
                        font-size: 2rem;
                        position: relative;
                        margin: 0;
                        top: 80vh;
                    }
                }

                .scrollbar {
                    position: fixed;
                    top: 50%;
                    left: 95%;
                    transform: translate(-50%, -50%);
                }
            `}</style>
        </Fragment>
    );
}