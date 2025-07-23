"use client";
import React, {Fragment} from "react";

export default function Footer(): React.ReactElement {
    return (
        <Fragment>
            <footer className="container">
                <p className="empty"/>
                <p className="location">
                    LAT: 37°32&apos;52.6&quot;N<br/>
                    LONG: 126°55&apos;31.4&quot;E<br/>
                    SECTOR: NT-7<br/>
                    ZONE: RED-2<br/>
                    GRID: 255.128.064<br/>
                </p>
                <address className="contacts">
                    <a className="link" href="tel:+821058551427">Phone</a><br/>
                    <a className="link" href="mailto:kwonjunhyuk9@icloud.com">Email</a><br/>
                    <a className="link" href="https://www.linkedin.com/in/jun-hyuk-kwon-3a9551355" target="_blank">LinkedIn</a><br/>
                </address>
            </footer>
            <style jsx>{`
                .container {
                    font-size: 0.75rem;
                    background: linear-gradient(to top, rgba(0, 0, 0, 1) 60%, rgba(0, 0, 0, 0));
                    height: 7rem;
                    width: 100%;
                    display: flex;
                    padding: 1rem;
                    gap: 1rem;
                    position: fixed;
                    z-index: 100;
                    box-sizing: border-box;
                    bottom: 0;
                    left: 0;

                    & .empty {
                        flex: 6;
                        min-width: 12rem;
                        margin: 0;
                    }

                    & .location {
                        flex: 2;
                        min-width: 12rem;
                        margin: 0;
                    }

                    & .contacts {
                        flex: 1;
                        min-width: 6rem;

                        & .link {
                            color: inherit;
                            font-style: normal;
                            text-decoration: none;
                        }
                    }
                }
            `}</style>
        </Fragment>
    );
}