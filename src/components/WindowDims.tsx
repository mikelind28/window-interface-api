import { useEffect, useState } from "react";
import type { Style } from '../types/styles';

type WindowDimsProps = {
    style: Style;
}

export default function WindowDims( { style }: WindowDimsProps) {
    const {
        containerClass,
        h2Class,
        h3Class,
        pClass,
        spanClass,
    } = style;

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
        <div className={containerClass}>
            <h2 className={h2Class}>Window Dimensions:</h2>

            <h3 className={h3Class}>Inner Dims (W x H):</h3>
            <p className={pClass}>
                {windowDims.innerWidth}<span className={spanClass}> px</span> 
                <span className={spanClass}> x </span> 
                {windowDims.innerHeight}<span className={spanClass}> px</span>
            </p>

            <h3 className={h3Class}>Outer Dims (W x H):</h3>
            <p className={pClass}>
            {windowDims.outerWidth}<span className={spanClass}> px</span> 
            <span className={spanClass}> x </span> 
            {windowDims.outerHeight}<span className={spanClass}> px</span></p>
        </div>
    );
}