"use client";

import React, {Fragment, useState} from "react";
import Link from "next/link";

interface Subject {
    topic: string;
    subjects: string[];
}

interface TopicItemProps {
    topic: string;
    subjects: string[];
}

const dropdown: Subject[] = [
    {
        topic: 'Math',
        subjects: ['Calculus', 'Linear Algebra', 'Discrete Math', 'Engineering Math']
    },
    {
        topic: 'Science',
        subjects: ['Physics', 'Chemistry', 'Biology']
    },
    {
        topic: 'Electronics',
        subjects: ['Electromagnetics', 'Electrical Circuits', 'Logical Circuits']
    },
    {
        topic: 'FrontEnd',
        subjects: ['JavaScript', 'TypeScript', 'HTML', 'CSS', 'React', 'Next']
    },
    {
        topic: 'BackEnd',
        subjects: ['C', 'Java', 'Python', 'Algorithms', 'Database', 'Cloud Computing', 'Operating Systems', 'Computer Architecture']
    },
    {
        topic: 'AI',
        subjects: ['Machine Learning', 'Reinforced Learning']
    }
];

function TopicItem({topic, subjects}: TopicItemProps): React.ReactElement {
    const [isHovered, setIsHovered] = useState(false);
    const generatePath = (topic: string, subject: string): string => {
        return `/${topic.toLowerCase()}/${subject.toLowerCase().replace(/\s+/g, '-')}`;
    };

    return (
        <Fragment>
            <div className="topic" onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
                <div className="topic-title">{topic}</div>
                {subjects.length > 0 && isHovered && (
                    <div className="subjects">
                        {subjects.map((subject: string) => (
                            <Link key={subject} href={generatePath(topic, subject)}>
                                {subject}
                            </Link>
                        ))}
                    </div>
                )}
            </div>
            <style jsx>{`
                .topic {
                    position: relative;
                    margin: 0.5rem;
                    width: calc(100% - 1rem);
                }

                .topic-title {
                    padding: 0.75rem;
                    background-color: #e3f2fd;
                    border-radius: 0.5rem;
                    cursor: pointer;
                    transition: background-color 0.2s ease;
                }

                .topic-title:hover {
                    background-color: #bbdefb;
                }

                .subjects {
                    position: absolute;
                    top: 100%;
                    left: 0;
                    width: 100%;
                    background: white;
                    border-radius: 0.5rem;
                    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
                    z-index: 999;
                    padding: 0.5rem 0;
                }

                .subjects :global(a) {
                    display: block;
                    padding: 0.5rem 1rem;
                    color: #333;
                    text-decoration: none;
                    transition: background-color 0.2s ease;
                }

                .subjects :global(a:hover) {
                    background-color: #f5f5f5;
                }
            `}</style>
        </Fragment>
    );
}

export default function Aside(): React.ReactElement {
    return (
        <Fragment>
            <aside>
                <Link href="/" className="profile-link">Profile</Link>
                {dropdown.map((item: Subject) => (
                    <TopicItem key={item.topic} {...item} />
                ))}
            </aside>
            <style jsx>{`
                aside {
                    grid-area: aside;
                    padding: 1rem 0;
                    background-color: white;
                }

                :global(.profile-link) {
                    display: block;
                    margin: 0.5rem;
                    padding: 0.75rem;
                    background-color: #e3f2fd;
                    border-radius: 0.5rem;
                    text-decoration: none;
                    color: #333;
                    transition: background-color 0.2s ease;
                }

                :global(.profile-link:hover) {
                    background-color: #bbdefb;
                }
            `}</style>
        </Fragment>

    );
};