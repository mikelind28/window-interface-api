import { useEffect, useState } from "react";

export default function YourScreen() {
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
        <div className="w-60 bg-slate-800 m-2 p-4 border-2 rounded-lg border-emerald-400  inset-shadow-sm inset-shadow-slate-950/50 ring-1 ring-lime-200">
            <h2 className="text-xl text-yellow-200 text-shadow-lg/50 text-shadow-neutral-950 font-medium tracking-wide">Your Screen Dimensions:</h2>
            
            <h3 className="text-base text-teal-300">Width:</h3>
            <p className="text-cyan-100 text-shadow-md/50 text-shadow-neutral-950 font-semibold">
                {screenDims.width} <span className="text-gray-400 font-light"> px</span>
            </p>

            <h3 className="text-base text-teal-300">Height:</h3>
            <p className="text-cyan-100 text-shadow-md/50 text-shadow-neutral-950 font-semibold">
                {screenDims.height} <span className="text-gray-400 font-light"> px</span>
            </p>
        </div>
    );
}