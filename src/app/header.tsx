"use client";
import React, {Fragment} from "react";
import Link from "next/link";

export default function Header(): React.ReactElement {
    return (
        <Fragment>
            <header className="container">
                <div className="home">
                    <Link href="/" style={{color: 'inherit', textDecoration: 'none'}}>DANCING WITH LIFE</Link>
                </div>
                <p className="time">
                    LOCAL TIME: 23:42:17<br/>
                    SYSTEM TIME: 0x7E2C4B<br/>
                    UPTIME: 847:23:16<br/>
                    LAST SYNC: 2025.07.16_04:23<br/>
                </p>
                <p className="status">
                    &gt; SYSTEM STATUS: ONLINE<br/>
                    &gt; CPU LOAD: 42%<br/>
                    &gt; MEMORY: 16.4 GB / 32 GB<br/>
                    &gt; PING: 23ms<br/>
                    &gt; ENCRYPTION: ENABLED<br/>
                    &gt; SECURITY LEVEL: ALPHA<br/>
                </p>
            </header>
            <style jsx>{`
                .container {
                    font-size: 0.75rem;
                    background: linear-gradient(to bottom, rgba(0, 0, 0, 1) 60%, rgba(0, 0, 0, 0));
                    height: 7rem;
                    width: 100%;
                    display: flex;
                    padding: 1rem;
                    gap: 1rem;
                    position: fixed;
                    z-index: 100;
                    box-sizing: border-box;
                    top: 0;
                    left: 0;

                    & .home {
                        flex: 7;
                        min-width: 12rem;
                    }

                    & .time {
                        flex: 4;
                        margin: 0;
                        min-width: 12rem;

                    }

                    & .status {
                        flex: 2;
                        margin: 0;
                        min-width: 12rem;
                    }
                }
            `}</style>
        </Fragment>
    );
}