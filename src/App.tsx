// CSS imports
import "./index.css";

// React imports
import { useState } from "react";

// style imports
import { styleClass1, styleClass2 } from "./styles/styles";

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

function App() {
  const [currentStyle, setCurrentStyle] = useState<Style>(styleClass1);

  if (currentStyle === styleClass1) {

  }

  return (
    <div>
      <div className="flex items-baseline">
        <h1 className="m-2 mb-4 text-4xl font-bold text-amber-100">
          Window Properties and Methods
        </h1>
      </div>

      <div className="flex">
        <div 
          className={`w-10 h-10 bg-slate-800 ${currentStyle === styleClass1 ? "bg-radial from-emerald-400 to-slate-800 to-50%" : ""} m-2 border-2 rounded-lg border-emerald-400 ring-1 ring-lime-200 hover:cursor-pointer`

          }
          onClick={() => setCurrentStyle(styleClass1)}></div>
        <div 
          className={`w-10 h-10 bg-slate-800 ${currentStyle === styleClass2 ? "bg-radial from-fuchsia-400 to-slate-800 to-50%" : ""} m-2 rounded-lg outline-2 outline-indigo-700 outline-offset-3 hover:cursor-pointer`} 
          onClick={() => setCurrentStyle(styleClass2)}></div>
      </div>

      <div className="flex">
        {currentStyle === styleClass1 && 
          <StyleTemplate1 setStyle={setCurrentStyle}/>
        }

        {currentStyle === styleClass2 &&
          <StyleTemplate2 setStyle={setCurrentStyle}/>
        }
        
      </div>

      <h2 className="m-2 text-3xl font-light text-amber-200">Properties</h2>
      <div className="mb-8 flex flex-wrap">
        <WindowDims style={currentStyle} />
        <ScreenDims style={currentStyle} />
        <RefreshStopwatch style={currentStyle} />
      </div>

      <h2 className="m-2 text-3xl font-light text-amber-200">Methods</h2>
      <div className="mb-8 flex flex-wrap">
        <Alert style={currentStyle} />
        <Confirm style={currentStyle} />
      </div>
    </div>
  );
}

export default App;
