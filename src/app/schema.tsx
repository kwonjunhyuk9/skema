'use client';

import React, {useState, useRef, useLayoutEffect} from 'react';
import Tree from 'react-d3-tree';

interface SchemaProps {
    schemaData: any;
}


export default function Schema({schemaData}: SchemaProps) {
    const [translate, setTranslate] = useState({x: 0, y: 0});
    const treeContainer = useRef<HTMLDivElement>(null);

    useLayoutEffect(() => {
        if (treeContainer.current) {
            const dimensions = treeContainer.current.getBoundingClientRect();
            setTranslate({
                x: dimensions.width / 2,
                y: 100,
            });
        }
    }, []);

    return (
        <div ref={treeContainer} style={{width: '100%', height: '100%', minHeight: 500}}>
            <Tree data={schemaData} translate={translate} orientation="vertical"/>
        </div>
    );
}