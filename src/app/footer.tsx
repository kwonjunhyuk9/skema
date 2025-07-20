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
                <p className="contacts">
                    Phone<br/>
                    Email<br/>
                    LinkedIn<br/>
                </p>
            </footer>
            <style jsx>{`
                .container {
                    font-size: 0.75rem;
                    width: 100%;
                    display: flex;
                    gap: 2rem;
                    position: fixed;
                    bottom: 0;

                    & .empty {
                        flex: 6;
                        min-width: 10rem;
                    }

                    & .location {
                        flex: 2;
                        min-width: 10rem;
                    }

                    & .contacts {
                        flex: 1;
                        min-width: 10rem;
                    }
                }
            `}</style>
        </Fragment>
    );
}