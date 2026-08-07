// Element imports
import WidgetContainer from "../Elements/WidgetContainer";
import Header3 from "../Elements/Header3";

// React imports
import { useEffect, useRef, useState } from "react";

// Type imports
import Span1 from "../Elements/Span1";
import Paragraph from "../Elements/Paragraph";
import WidgetDescription from "../Elements/WidgetDescripiton";

// TODO: add pause, start, reset functionality
export default function SetIntervalTimer() {

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
          console.log("intervalIdRef.current:", intervalIdRef.current);
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
    <WidgetContainer>
      <Header3>
        <code>window</code>
        <code className="wrap-anywhere">.setInterval()</code>
      </Header3>

      {timerStarted ? (
        <Paragraph>{seconds}</Paragraph>
      ) : (
        <div>
          <Span1>Set a timer for...</Span1>
          <div className="flex w-fit items-baseline gap-2">
            <input
              id="seconds-input"
              ref={inputRef}
              type="number"
              min="1"
              max="60"
              required
              step="1"
              value={seconds}
              onChange={(e) => setSeconds(parseInt(e.target.value))}
            />
            <label htmlFor="seconds-input">
              <Span1>seconds</Span1>
            </label>
          </div>
        </div>
      )}

      <div>
        <button
          className={`${inputValid ? "" : "hidden"}`}
          onClick={startCountdown}
          disabled={!inputValid}
        >
          Go!
        </button>
      </div>

      <WidgetDescription>
        <blockquote>
          <p className="span-3">
            The <code>setInterval()</code> method of the Window interface repeatedly calls a function or executes a code snippet, with a fixed time delay between each call.
          </p>
        </blockquote>
        <cite className="span-2 underline decoration-1 underline-offset-2">
          <a
            target="_blank"
            href="https://developer.mozilla.org/en-US/docs/Web/API/Window/setInterval"
          >
            Window: setInterval() method - Web APIs | MDN
          </a>
        </cite>
      </WidgetDescription>
    </WidgetContainer>
  );
}
