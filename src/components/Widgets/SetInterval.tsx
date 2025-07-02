// Element imports
import Button from "../Elements/Button";
import Container from "../Elements/Container";
import Header3 from "../Elements/Header3";

// React imports
import { useEffect, useRef, useState } from "react";

// Type imports
import type { Style } from "../../types/types";
import Span1 from "../Elements/Span1";
import Paragraph from "../Elements/Paragraph";

type SetIntervalProps = {
  style: Style;
};

export default function SetInterval({ style }: SetIntervalProps) {
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
            console.log('inputValidity: ', inputValidity);

            setInputValid(inputValidity);
        }
    }, [seconds]);

    useEffect(() => {
        if (timerStarted && intervalIdRef.current === null) {
            intervalIdRef.current = window.setInterval(() => {
                setSeconds((seconds) => {
                    if (seconds === 1) {
                        clearInterval(intervalIdRef.current!);
                        intervalIdRef.current = null;
                        setTimerStarted(false);
                        window.alert("Time's up! 🚨");
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
        <Container style={containerClass}>
            <Header3 style={h3Class}>
                <div className="flex flex-wrap text-sm xs:text-base sm:text-lg">
                    <code>window</code>
                    <code className="wrap-anywhere">.setInterval()</code>
                </div>
            </Header3>

            { timerStarted 
                ? <Paragraph style={pClass}>{seconds}</Paragraph>
                : <div className="inline items-baseline">
                    <Span1 style={spanClass1}>Set a timer for</Span1>
                    <div className="inline-flex mx-2 w-13">
                        <input
                            id="seconds-input"
                            className={inputClass}
                            ref={inputRef}
                            type="number"
                            min="1"
                            max="60"
                            step="1"
                            value={seconds}
                            onChange={(e) => setSeconds(parseInt(e.target.value))}
                        />
                    </div>
                    <Span1 style={spanClass1}>seconds</Span1>
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
        </Container>
    );
}
