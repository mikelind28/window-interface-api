// CSS imports
import "./index.css";

// React imports
import { useState } from "react";

// style imports
import { styleClass1, styleClass2, styleClass3 } from "./styles/styles";

// Type imports
import type { Style } from "./types/types";

// Widget imports
import Alert from "./components/Widgets/Alert";

import RefreshStopwatch from "./components/Widgets/RefreshStopwatch";
import StyleTemplate1 from "./components/Templates/StyleTemplate1";
import StyleTemplate2 from "./components/Templates/StyleTemplate2";
import WindowDims from "./components/Widgets/WindowDims";
import ScreenDims from "./components/Widgets/ScreenDims";
import Confirm from "./components/Widgets/Confirm";
import StyleTemplate3 from "./components/Templates/StyleTemplate3";

function App() {
  const [currentStyle, setCurrentStyle] = useState<Style>(styleClass1);

  return (
    <div>
      <div className="flex items-baseline">
        <h1 className={currentStyle.h1Class}>
          Window Properties and Methods
        </h1>
      </div>

      {/* buttons for changing the style */}
      <div className="flex">
        <div 
          className={`w-10 h-10 bg-slate-800 ${currentStyle === styleClass1 ? "bg-radial from-slate-800 from-40% to-emerald-400" : ""} m-2 border-2 rounded-lg border-emerald-400 ring-1 ring-lime-200 hover:cursor-pointer`

          }
          onClick={() => setCurrentStyle(styleClass1)}></div>

        <div 
          className={`w-10 h-10 bg-slate-800 ${currentStyle === styleClass2 ? "bg-radial from-slate-800 from-40% to-fuchsia-400" : ""} m-2 rounded-lg outline-2 outline-indigo-700 outline-offset-3 hover:cursor-pointer`} 
          onClick={() => setCurrentStyle(styleClass2)}></div>

        <div 
          className={`w-10 h-10 bg-slate-800 ${currentStyle === styleClass3 ? "bg-radial from-slate-800 from-40% to-amber-300" : ""} m-2 rounded-lg border-2 border-blue-500 outline-offset-3 hover:cursor-pointer`} 
          onClick={() => setCurrentStyle(styleClass3)}></div>
      </div>

      { /* template widget with matching style */ }
      <div className="flex">
        {currentStyle === styleClass1 && 
          <StyleTemplate1 setStyle={setCurrentStyle}/>
        }

        {currentStyle === styleClass2 &&
          <StyleTemplate2 setStyle={setCurrentStyle}/>
        }

        {currentStyle === styleClass3 &&
          <StyleTemplate3 setStyle={setCurrentStyle}/>
        }
      </div>

      <h2 className={currentStyle.h2Class}>Properties</h2>
      <div className="mb-8 flex flex-wrap">
        <WindowDims style={currentStyle} />
        <ScreenDims style={currentStyle} />
        <RefreshStopwatch style={currentStyle} />
      </div>

      <h2 className={currentStyle.h2Class}>Methods</h2>
      <div className="mb-8 flex flex-wrap">
        <Alert style={currentStyle} />
        <Confirm style={currentStyle} />
      </div>
    </div>
  );
}

export default App;
