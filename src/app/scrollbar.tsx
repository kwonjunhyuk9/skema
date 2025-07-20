"use client";
import React, {Fragment} from "react";
import Image from "next/image";

interface ScrollbarProps {
    pageRefs: React.RefObject<(HTMLElement | null)[]>;
    buttonCount: number
    direction: 'row' | 'column';
}

export default function Scrollbar({pageRefs, buttonCount, direction}: ScrollbarProps): React.ReactElement {
    const buttons: number[] = Array.from({length: buttonCount}, (_, i) => i);

    function scrollToIndex(index: number): void {
        const el = pageRefs.current[index];
        if (el) el.scrollIntoView({behavior: "smooth", block: "start"});
    }

    return (
        <Fragment>
            <nav className="container">
                <Image src="/up.svg" alt="up" width={24} height={24}/>
                {buttons.map((index: number): React.ReactElement => (
                    <button key={index} className="button" onClick={(): void => scrollToIndex(index)}>
                        <Image src="/circle.svg" alt="circle" width={12} height={12}/>
                    </button>
                ))}
                <Image src="/down.svg" alt="down" width={24} height={24}/>
            </nav>
            <style jsx>{`
                .container {
                    display: flex;
                    flex-direction: ${direction};

                    & .button {
                        width: 24px;
                        height: 24px;
                        padding: 0;
                        margin: ${direction === 'row' ? '0 4px' : '4px 0'};
                        border: none;
                        background: transparent;
                        cursor: pointer;
                    }
                }
            `}</style>
        </Fragment>
    );
}