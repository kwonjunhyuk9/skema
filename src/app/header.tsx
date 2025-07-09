"use client";

import Image from 'next/image';
import React, {Fragment} from "react";

interface ContactItem {
    href: string;
    alt: string;
    src: string;
}

const contacts: ContactItem[] = [
    {
        href: 'tel:+821058551427',
        alt: 'telephone',
        src: '/telephone.png'
    },
    {
        href: 'mailto:kwonjunhyuk9@icloud.com',
        alt: 'email',
        src: '/email.png'
    },
    {
        href: 'https://www.linkedin.com/in/jun-hyuk-kwon-3a9551355',
        alt: 'linkedin',
        src: '/linkedin.png'
    },
    {
        href: 'https://www.jobkorea.co.kr/User/Mypage',
        alt: 'jobkorea',
        src: '/jobkorea.png'
    },
];

export default function Header(): React.ReactElement {
    return (
        <Fragment>
            <header>
                <h1>Dancing With Life</h1>
                {contacts.map(({href, alt, src}) => (
                    <a key={alt} href={href} target="_blank" rel="noopener noreferrer">
                        <Image src={src} alt={alt} fill={true}/>
                    </a>
                ))}
            </header>
            <style jsx>{`
                header {
                    grid-area: header;
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    padding: 1rem;
                    background-color: lightskyblue;
                    position: sticky;
                    top: 0;
                    opacity: 0.8;

                    & h1 {
                        margin: 0;
                    }

                    & h1 + a {
                        margin-left: auto;
                    }

                    & a {
                        margin: 0.5rem;
                        position: relative;
                        width: 1.5rem;
                        height: 1.5rem;
                    }
                }
            `}</style>
        </Fragment>
    );
}
