"use client";
import React, {Fragment} from "react";
import Image from "next/image";

export default function Aside(): React.ReactElement {
    const buttons: number[] = [0, 1, 2, 3, 4, 5, 6];

    function scrollToIndex(index: number): void {
        const headerNode: Element = document.querySelectorAll('main > div')[index];
        headerNode.scrollIntoView({behavior: 'smooth', block: 'start'});
    }

    return (
        <Fragment>
            <aside className="container">
                <Image src="/up.svg" alt="up" width={24} height={24}/>
                {buttons.map((index: number): React.ReactElement => (
                    <button key={index} className="button" onClick={(): void => scrollToIndex(index)}>
                        <Image src="/circle.svg" alt="circle" width={12} height={12}/>
                    </button>
                ))}
                <Image src="/down.svg" alt="down" width={24} height={24}/>
            </aside>
            <style jsx>{`
                .container {
                    display: flex;
                    flex-direction: column;
                    position: fixed;
                    top: 50%;
                    left: 95%;
                    transform: translate(-50%, -50%);

                    & .button {
                        width: 24px;
                        height: 24px;
                        padding: 0;
                        margin: 4px 0;
                        border: none;
                        background: transparent;
                        cursor: pointer;
                    }
                }
            `}</style>
        </Fragment>
    );
}