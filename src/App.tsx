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
import Confirm from "./components/Widgets/Confirm";
import Geolocation from "./components/Widgets/Geolocation";
import GetSelection from "./components/Widgets/GetSelection";
import SetIntervalSinceRefresh from "./components/Widgets/SetIntervalSinceRefresh";
import ScreenDims from "./components/Widgets/ScreenDims";
import Settings from "./components/Widgets/Settings";
import WindowDims from "./components/Widgets/WindowDims";
import MoveWindow from "./components/Widgets/MoveWindow";
import Prompt from "./components/Widgets/Prompt";
import SetIntervalTimer from "./components/Widgets/SetIntervalTimer";
import CursorCoordinates from "./components/Widgets/CursorCoordinates";
import ClickCounter from "./components/Widgets/ClickCounter";
import Print from "./components/Widgets/Print";
import CutCopyPaste from "./components/Widgets/CutCopyPaste";
import DocumentTitle from "./components/Widgets/DocumentTitle";
import Level1Container from "./components/Elements/Level1Container";
import Level2Container from "./components/Elements/Level2Container";
import KeyDown from "./components/Widgets/KeyDown";
import ScrollToTop from "./components/Widgets/ScrollToTop";

function App() {
  function getLocalStorageStyle() {
    const style = localStorage.getItem("style");
    if (style === null) {
      localStorage.setItem("style", "styleClass1")
      return styleClass1;
    } else if (style === "styleClass1") {
      return styleClass1;
    } else if (style === "styleClass2") {
      return styleClass2;
    } else if (style === "styleClass3") {
      return styleClass3;
    } else {
      return styleClass1;
    }
  }

  const [currentStyle, setCurrentStyle] = useState<Style>(getLocalStorageStyle);
  const [documentTitle, setDocumentTitle] = useState<string>('Properties and Methods for the Window, Document, and Navigator')

  const isMobile =
  (navigator as any).userAgentData?.mobile === true ||
  /Mobi|Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
    navigator.userAgent
  );

  return (
    <div className="m-4">
      <title>{documentTitle}</title>

      <Settings style={currentStyle} setStyle={setCurrentStyle}/>

      <h1 className={currentStyle.h1Class}>
        window
      </h1>

      <Level1Container style={currentStyle.levelOneClass}>
        <h2 className={currentStyle.h2Class}>Properties:</h2>
        <Level2Container style={currentStyle.levelTwoClass}>
          <WindowDims style={currentStyle} />
          <ScreenDims style={currentStyle} />
        </Level2Container>

        <h2 className={currentStyle.h2Class}>Methods:</h2>
        <Level2Container style={currentStyle.levelTwoClass}>
          <Alert style={currentStyle} />
          <Confirm style={currentStyle} />
          { !isMobile && <MoveWindow style={currentStyle} />}
          <Print style={currentStyle} />
          <Prompt style={currentStyle} />
          <SetIntervalTimer style={currentStyle} />
          <SetIntervalSinceRefresh style={currentStyle} />
        </Level2Container>
      </Level1Container>
      
      <h1 className={currentStyle.h1Class}>
        document
      </h1>
      
      <Level1Container style={currentStyle.levelOneClass}>
        <h2 className={currentStyle.h2Class}>Methods:</h2>
        <Level2Container style={currentStyle.levelTwoClass}>
          <ClickCounter style={currentStyle} />
          <CursorCoordinates style={currentStyle} />
          <GetSelection style={currentStyle} />
          <KeyDown style={currentStyle} />
          <DocumentTitle style={currentStyle} setDocumentTitle={setDocumentTitle}/>
        </Level2Container>
      </Level1Container>

      <h1 className={currentStyle.h1Class}>
        navigator
      </h1>

      <Level1Container style={currentStyle.levelOneClass}>
        <h2 className={currentStyle.h2Class}>Methods:</h2>
        <Level2Container style={currentStyle.levelTwoClass}>
          <Geolocation style={currentStyle} />
          <CutCopyPaste style={currentStyle} />
        </Level2Container>
      </Level1Container>

      <ScrollToTop style={currentStyle} />
    </div>
  );
}

export default App;
