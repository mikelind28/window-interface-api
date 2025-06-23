import { useEffect, useState } from "react";
import type { Style } from '../types/styles';

type YourScreenProps = {
    style: Style
}

export default function YourScreen({ style }: YourScreenProps) {
    const {
        containerClass,
        h2Class,
        h3Class,
        pClass,
        spanClass
    } = style; 

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
        <div className={containerClass}>
            <h2 className={h2Class}>Your Screen Dimensions:</h2>
            
            <h3 className={h3Class}>Width:</h3>
            <p className={pClass}>
                {screenDims.width} <span className={spanClass}> px</span>
            </p>

            <h3 className={h3Class}>Height:</h3>
            <p className={pClass}>
                {screenDims.height} <span className={spanClass}> px</span>
            </p>
        </div>
    );
}