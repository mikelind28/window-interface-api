import { useRef, useState } from "react";
import type { Style } from "../../types/types";
import Button from "../Elements/Button";
import WidgetContainer from "../Elements/WidgetContainer";
import Header3 from "../Elements/Header3";
import Span1 from "../Elements/Span1";

type CutCopyPasteType = {
    style: Style;
}

export default function CutCopyPaste({ style }: CutCopyPasteType) {
    const { buttonClass, containerClass, h3Class, inputClass, spanClass1 } = style;

    const textareaRef = useRef<HTMLTextAreaElement>(null);

    const [text, setText] = useState('');

    async function handleCut() {
        const textarea = textareaRef.current;

        if (!textarea) return;

        const start = textarea.selectionStart;
        const end = textarea.selectionEnd;

        if (start === end) return;

        const selectedText = text.slice(start, end);

        try {
            await navigator.clipboard.writeText(selectedText);

            const newText = text.slice(0, start) + text.slice(end);

            setText(newText);

            requestAnimationFrame(() => {
                textarea.selectionStart = textarea.selectionEnd = start;
            });
        } catch (error) {
            console.error("failed to cut text:", error);
        }
    };

    async function handleCopy() {
        const textarea = textareaRef.current;

        if (!textarea) return;

        const start = textarea.selectionStart;
        const end = textarea.selectionEnd;

        if (start === end) return;

        const selectedText = text.slice(start, end);

        try {
            await navigator.clipboard.writeText(selectedText);
        } catch (error) {
            console.error("failed to copy text:", error);
        }
    }

    async function handlePaste() {
        const textarea = textareaRef.current;

        if (!textarea) return;

        const start = textarea.selectionStart;
        const end = textarea.selectionEnd;

        try {
            const clipboardText = await navigator.clipboard.readText();

            const newText = text.slice(0, start) + clipboardText + text.slice(end);

            setText(newText);
        } catch (error) {
            console.error("failed to paste text:", error);
        }
    }

    function handleReset() {
        setText('');
    }

    return (
        <WidgetContainer style={containerClass}>
            <Header3 style={h3Class}>
                <div className="flex flex-wrap">
                    <code>navigator</code>
                    <code>.clipboard</code>
                    <code>.writeText(),</code>
                </div>
                <div className="flex flex-wrap">
                    <code>navigator</code>
                    <code>.clipboard</code>
                    <code>.readText()</code>
                </div>
            </Header3>

            <Span1 style={spanClass1}>
                Cut, copy, and paste text from the textarea box below.
                <br/>
            </Span1>

            <textarea 
                ref={textareaRef}
                placeholder="Try it out!"
                value={text}
                onChange={(event) => setText(event.target.value)}
                className={inputClass}
            >
            </textarea>

            <div className="flex flex-wrap gap-x-4 gap-y-0">
                <Button style={buttonClass} handleClick={handleCut}>
                    Cut
                </Button>

                <Button style={buttonClass} handleClick={handleCopy}>
                    Copy
                </Button>

                <Button style={buttonClass} handleClick={handlePaste}>
                    Paste
                </Button>

                <Button style={buttonClass} handleClick={handleReset}>
                    Reset
                </Button>
            </div>
        </WidgetContainer>
    );
}