import { useEffect, useState } from "react";

export default function WindowDims() {
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
        <div className="w-60 bg-slate-800 m-2 p-4 border-2 rounded-lg border-emerald-400  inset-shadow-sm inset-shadow-slate-950/50 ring-1 ring-lime-200">
            <h2 className="text-xl text-yellow-200 text-shadow-lg/50 text-shadow-neutral-950 font-medium tracking-wide">Window Dimensions:</h2>

            <h3 className="text-base text-teal-300">Inner Dims (W x H):</h3>
            <p className="text-cyan-100 text-shadow-md/50 text-shadow-neutral-950 font-semibold">
                {windowDims.innerWidth}<span className="text-gray-400 font-light"> px</span> 
                <span className="text-cyan-100 font-light"> x </span> 
                {windowDims.innerHeight}<span className="text-gray-400 font-light"> px</span>
            </p>

            <h3 className="text-base text-teal-300">Outer Dims (W x H):</h3>
            <p className="text-cyan-100 text-shadow-md/50 text-shadow-neutral-950 font-semibold">
            {windowDims.outerWidth}<span className="text-gray-400 font-light"> px</span> 
            <span className="text-cyan-100 font-light"> x </span> 
            {windowDims.outerHeight}<span className="text-gray-400 font-light"> px</span></p>
        </div>
    );
}