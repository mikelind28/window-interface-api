import { useEffect, useState } from "react";
import type { Style } from "../../types/types";
import Container from "../Elements/Container";
import Header3 from "../Elements/Header3";
import Paragraph from "../Elements/Paragraph";
import Span2 from "../Elements/Span2";
import Span1 from "../Elements/Span1";

type GetSelectionProps = {
    style: Style;
}

export default function GetSelection( { style }: GetSelectionProps) {
    const {
        containerClass,
        h3Class,
        pClass,
        spanClass1,
        spanClass2
    } = style;

    const [selection, setSelection] = useState<string | undefined>(undefined);

    useEffect(() => {
        document.addEventListener('selectionchange', () => {
            let selection = document.getSelection()?.toString();
            setSelection(selection);
        });
    }, [document.getSelection]);

    return (
        <Container style={containerClass}>
            <Header3 style={h3Class}>
                <div className="flex flex-wrap text-sm xs:text-base sm:text-lg">
                    <code>window.</code>
                    <code className="wrap-anywhere">getSelection()</code>
                </div>
            </Header3>

            <Span1 style={spanClass1}>
                Select some text from anywhere on the page.
                <br/>
            </Span1>

            { selection && 
                <Span2 style={spanClass2}>
                Your selected text:
                </Span2>
            }
    
            <Paragraph style={pClass}>
                {selection}
            </Paragraph>
        </Container>
    );
}