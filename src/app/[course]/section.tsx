import {Concept, Topic} from "@/types/curriculum";
import React, {Fragment} from "react";

export default function Section({topic, concepts}: Topic): React.ReactElement {
    return (
        <Fragment>
            <section className="section">
                <h3 className="topic">{topic}</h3>
                <ul className="concepts">
                    {concepts.map((concept: Concept, index: number): React.ReactElement => (
                        <li key={index}>{concept}</li>
                    ))}
                </ul>
            </section>
            <style jsx> {`
                .concepts {
                    padding: 0 1rem;
                }
            `}</style>
        </Fragment>
    );
}