import { useEffect, useState } from "react";

import type { Style } from '../types/styles';

type StopwatchProps = {
    style: Style;
}


export default function RefreshStopwatch({ style }: StopwatchProps) {
    const {
        containerClass,
        h2Class,
        pClass,
        spanClass,
    } = style;

    const [startTime, setStartTime] = useState(Date.now());
    const [currentTime, setCurrentTime] = useState(Date.now());

    let secondsPassed = "0";
    secondsPassed = (( currentTime - startTime ) / 1000).toFixed(0);

    useEffect(() => {
        setStartTime(Date.now());
        setCurrentTime(Date.now());

        window.setInterval(() => setCurrentTime(Date.now), 1000);

        let secondsPassed = "0";
        secondsPassed = (( currentTime - startTime ) / 100).toFixed(0);
    }, []);

    return (
        <div className={containerClass}>
            <h2 className={h2Class}>Seconds Since Refresh:</h2>
            <p className={pClass}>{secondsPassed}
                <span className={spanClass}>{secondsPassed === "1" ? " second" : " seconds"}</span>
            </p>
        </div>
    )
}