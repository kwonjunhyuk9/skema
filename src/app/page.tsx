"use client";
import React, {Fragment} from "react";

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
    return (
        <Fragment>
            <main>
                {pages.map(({title, description}: PageItem): React.ReactElement => (
                    <div key={title} className="container">
                        <h1 className="title">{title}</h1>
                        <p className="description">{description}</p>
                    </div>
                ))}
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
            `}</style>
        </Fragment>
    );
}