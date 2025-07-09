"use client";

import Image from "next/image";
import React, {Fragment} from "react";

interface SectionItem {
    title: string;
    introduction: string;
    description: string;
    src: string;
    alt: string;
}

const sections: SectionItem[] = [
    {
        title: "Introduction",
        introduction: "I am Developer Jun Hyuk Kwon",
        description:
            "I am a frontend developer working with HTML, CSS, JavaScript, and React. " +
            "My aspiration is to create websites that people enjoy and always want to visit through creative " +
            "and fun projects. To achieve this, I will continue to diligently study computer science.",
        src: "/rocket.png",
        alt: "rocket"
    },
    {
        title: "Education",
        introduction: "Seoul National University of Science and Technology",
        description:
            "I have majored in Computer Science at Seoul National University of Science and Technology. " +
            "My academic performance shows an overall GPA of 3.99. " +
            "The Liberal Arts courses have a GPA of 3.89, " +
            "and Major courses currently stand at a GPA of 4.42.",
        src: "/seoultech.png",
        alt: "seoultech"
    },
    {
        title: "Activities",
        introduction: "Certifications",
        description:
            "In terms of English proficiency, I have achieved a TOEIC score of 975, " +
            "showcasing strong command of both academic and professional English.",
        src: "/english.png",
        alt: "english"
    },
    {
        title: "Projects",
        introduction: "Dancing With Life",
        description:
            "Dancing With Life is a website that explains frontend development and showcases my work. " +
            "It is a project that I have been working on since 2025.",
        src: "/blog.png",
        alt: "blog"
    },
];

export default function RootPage(): React.ReactElement {
    return (
        <main>
            {sections.map(({title, introduction, description, src, alt}) => (
                <Fragment key={alt}>
                    <h2>{title}</h2>
                    <h3>{introduction}</h3>
                    <article>
                        <section>
                            <p>{description}</p>
                        </section>
                        <figure>
                            <Image src={src} alt={alt} fill={true}/>
                        </figure>
                    </article>
                </Fragment>
            ))}
            <style jsx>{`
                main {
                    grid-area: main;

                    & h2 {
                        background-color: gray;
                    }

                    & article {
                        display: grid;
                        grid-template-columns: 1fr 1fr;

                        & section {
                            background-color: rgba(10, 239, 211, 0.1);
                            border-radius: 1rem;
                            margin: 0.5rem;
                            padding: 0.5rem;
                        }

                        & figure {
                            position: relative;
                            width: 30rem;
                            height: 20rem;
                        }
                    }
                }
            `}</style>
        </main>
    );
}
