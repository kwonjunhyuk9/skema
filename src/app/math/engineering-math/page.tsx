'use client';

import Schema from "@/app/schema"
import React from "react";

const data = {
    name: 'CEO',
    children: [
        {
            name: 'Manager',
            children: [
                {name: 'Developer'},
                {name: 'Designer'},
            ],
        },
    ],
};

export default function Page(): React.ReactElement {
    return (
        <Schema schemaData={data}></Schema>
    )
}