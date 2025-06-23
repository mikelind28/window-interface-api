import { useEffect, useState } from "react";

export default function RefreshStopwatch() {
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
        <div className="w-60 bg-slate-800 m-2 p-4 border-2 rounded-lg border-emerald-400  inset-shadow-sm inset-shadow-slate-950/50 ring-1 ring-lime-200">
            <h2 className="text-xl text-yellow-200 text-shadow-lg/50 text-shadow-neutral-950 font-medium tracking-wide">Seconds Since Refresh:</h2>
            <p className="text-2xl text-cyan-100 text-shadow-md/50 text-shadow-neutral-950 font-semibold">{secondsPassed}
                <span className="text-gray-400 font-light">{secondsPassed === "1" ? " second" : " seconds"}</span>
            </p>
        </div>
    )
}