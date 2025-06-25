import { useEffect, useState } from "react";
import type { Style } from '../../types/types';
import Container from "../Elements/Container";
import Header2 from "../Elements/Header2";
import Header3 from "../Elements/Header3";
import Paragraph from "../Elements/Paragraph";
import Span1 from "../Elements/Span1";

type YourScreenProps = {
    style: Style
}

export default function YourScreen({ style }: YourScreenProps) {
    const {
        containerClass,
        h2Class,
        h3Class,
        pClass,
        spanClass1,
    } = style; 

    const [screenDims, setScreenDims] = useState({
        width: window.screen.availWidth,
        height: window.screen.availHeight
    });

    useEffect(() => {
        setScreenDims({
            width: window.screen.availWidth,
            height: window.screen.availHeight
        });
    }, [window.screen]);
    
    return (
        <Container style={containerClass}>
            <Header2 style={h2Class}>Your Screen Dimensions:</Header2>
            
            <Header3 style={h3Class}>Width:</Header3>
            <Paragraph style={pClass}>
                {screenDims.width} 
                <Span1 style={spanClass1}> px</Span1>
            </Paragraph>

            <Header3 style={h3Class}>Height:</Header3>
            <Paragraph style={pClass}>
                {screenDims.height} 
                <span className={spanClass1}> px</span>
            </Paragraph>
        </Container>
    );
}