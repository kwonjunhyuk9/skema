"use client";
import React, {Fragment} from "react";

export default function Header(): React.ReactElement {
    return (
        <Fragment>
            <header className="container">
                <p className="status">
                    &gt; SYSTEM STATUS: ONLINE<br/>
                    &gt; CPU LOAD: 42%<br/>
                    &gt; MEMORY: 16.4 GB / 32 GB<br/>
                    &gt; PING: 23ms<br/>
                    &gt; ENCRYPTION: ENABLED<br/>
                    &gt; SECURITY LEVEL: ALPHA<br/>
                    &gt; NEURAL LINK: STABLE<br/>
                </p>
                <p className="time">
                    LOCAL TIME: 23:42:17<br/>
                    SYSTEM TIME: 0x7E2C4B<br/>
                    UPTIME: 847:23:16<br/>
                    LAST SYNC: 2025.07.16_04:23<br/>
                </p>
                <p className="navigation">
                    PROFILE<br/>
                    MATH<br/>
                    SCIENCE<br/>
                    ELECTRONICS<br/>
                    FRONTEND<br/>
                    BACKEND<br/>
                </p>
            </header>
            <style jsx>{`
                .container {
                    font-size: 0.75rem;
                    width: 100%;
                    display: flex;
                    gap: 2rem;
                    position: fixed;
                    top: 0;

                    & .status {
                        flex: 7;
                        min-width: 10rem;
                    }

                    & .time {
                        flex: 4;
                        min-width: 10rem;
                    }

                    & .navigation {
                        flex: 2;
                        min-width: 10rem;
                    }
                }
            `}</style>
        </Fragment>
    );
}