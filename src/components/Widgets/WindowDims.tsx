import { useEffect, useState } from "react";

import type { Style } from '../../types/types';
import Header2 from "../Elements/Header2";
import Container from "../Elements/Container";
import Header3 from "../Elements/Header3";
import Paragraph from "../Elements/Paragraph";
import Span1 from "../Elements/Span1";
import Span2 from "../Elements/Span2";

type WindowDimsProps = {
    style: Style;
}

export default function WindowDims( { style }: WindowDimsProps ) {
    const {
        containerClass,
        h2Class,
        h3Class,
        pClass,
        spanClass1,
        spanClass2
    } = style;

    const [windowDims, setWindowDims] = useState({
        innerWidth: window.innerWidth,
        innerHeight: window.innerHeight,
        outerWidth: window.outerWidth,
        outerHeight: window.outerHeight,
    });

    function handleSizeChange() {
        setWindowDims({
            innerWidth: window.innerWidth,
            innerHeight: window.innerHeight,
            outerWidth: window.outerWidth,
            outerHeight: window.outerHeight,
        });
    }

    useEffect(() => {
        window.addEventListener('resize', handleSizeChange);

        return () => {
            window.removeEventListener('resize', handleSizeChange);
        }
    }, []);

    return (
        <Container style={containerClass}>
            <Header2 style={h2Class}>Window Dimensions:</Header2>

            <Header3 style={h3Class}>Inner Dims (W x H):</Header3>
            <Paragraph style={pClass}>
                {windowDims.innerWidth}
                <Span1 style={spanClass1}> px</Span1> 
                <Span2 style={spanClass2}> x </Span2> 
                {windowDims.innerHeight}
                <Span1 style={spanClass1}> px</Span1>
            </Paragraph>

            <Header3 style={h3Class}>Outer Dims (W x H):</Header3>
            <Paragraph style={pClass}>
                {windowDims.outerWidth}
                <span className={spanClass1}> px</span> 
                <span className={spanClass2}> x </span> 
                {windowDims.outerHeight}
                <span className={spanClass1}> px</span>
            </Paragraph>
        </Container>
    );
}