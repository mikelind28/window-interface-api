// CSS imports
import "./index.css";

// React imports
import { useState } from "react";

// style imports
import { styleClass1 } from "./styles/styles";

// Type imports
import type { Style } from "./types/types";

// Widget imports
import Alert from "./components/Widgets/Alert";
import Confirm from "./components/Widgets/Confirm";
import GetSelection from "./components/Widgets/GetSelection";
import RefreshStopwatch from "./components/Widgets/RefreshStopwatch";
import ScreenDims from "./components/Widgets/ScreenDims";
import Settings from "./components/Widgets/Settings";
import WindowDims from "./components/Widgets/WindowDims";

function App() {
  const [currentStyle, setCurrentStyle] = useState<Style>(styleClass1);

  return (
    <div>
      <div className="flex m-2 mb-4 justify-between items-baseline">
        <h1 className={currentStyle.h1Class}>
          Window Properties and Methods
        </h1>
        <Settings style={currentStyle} setStyle={setCurrentStyle}/>
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
        <GetSelection style={currentStyle} />
      </div>
    </div>
  );
}

export default App;
