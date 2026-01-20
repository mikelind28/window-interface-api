// Element imports
import WidgetContainer from "../Elements/WidgetContainer";
import Header3 from "../Elements/Header3";

// React imports
import { useEffect, useRef, useState } from "react";

// Type imports
import type { Style } from "../../types/types";
import Span1 from "../Elements/Span1";
import Paragraph from "../Elements/Paragraph";

type SetIntervalTimerProps = {
  style: Style;
};

// TODO: add pause, start, reset functionality
export default function SetIntervalTimer({ style }: SetIntervalTimerProps) {
    const { containerClass, h3Class, inputClass, buttonClass, pClass, spanClass1 } = style;

    const [seconds, setSeconds] = useState(5);
    const [timerStarted, setTimerStarted] = useState(false);
    const [inputValid, setInputValid] = useState(false);

    const intervalIdRef = useRef<number | null>(null);
    const inputRef = useRef<HTMLInputElement>(null);

    function startCountdown() {
        if (timerStarted) return;
        setTimerStarted(true);
    }

    useEffect(() => {
        if (inputRef.current) {
            let inputValidity = inputRef.current.checkValidity();
            setInputValid(inputValidity);
        }
    }, [seconds]);

    useEffect(() => {
        if (timerStarted && intervalIdRef.current === null) {
            intervalIdRef.current = window.setInterval(() => {
                setSeconds((seconds) => {
                    console.log('intervalIdRef.current:', intervalIdRef.current);
                    if (seconds < 2 && intervalIdRef.current !== null) {
                        clearInterval(intervalIdRef.current!);
                        intervalIdRef.current = null;
                        window.alert("Time's up! 🚨");
                        setTimerStarted(false);
                        return 5;
                    }
                    return seconds - 1;
                });
            }, 1000);
        }

        return () => {
            if (intervalIdRef.current !== null) {
                clearInterval(intervalIdRef.current);
                intervalIdRef.current = null;
            }
        };
    }, [timerStarted]);

    return (
        <WidgetContainer style={containerClass}>
            <Header3 style={h3Class}>
                <code>window</code>
                <code className="wrap-anywhere">.setInterval()</code>
            </Header3>

            { timerStarted 
                ? 
                <Paragraph style={pClass}>
                    {seconds}
                </Paragraph>
                : 
                <div>
                    <Span1 style={spanClass1}>Set a timer for...</Span1>
                    <div className="w-fit flex items-baseline gap-2">
                        <input
                            id="seconds-input"
                            className={inputClass}
                            ref={inputRef}
                            type="number"
                            min="1"
                            max="60"
                            required
                            step="1"
                            value={seconds}
                            onChange={(e) => setSeconds(parseInt(e.target.value))}
                        />
                        <Span1 style={spanClass1}>seconds</Span1>
                    </div>
                </div>
            }

            <div>
                <button 
                    className={buttonClass?.concat(`${inputValid ? "" : " hidden"}`)} 
                    onClick={startCountdown}
                    disabled={!inputValid}
                >
                    Go!
                </button>
            </div>
        </WidgetContainer>
    );
}
