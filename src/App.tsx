// CSS imports
import "./index.css";

// React imports
import { useState } from "react";

// Type imports
import type { Theme } from "./types/types";

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

export function getLocalStorageTheme(): Theme {
  const theme = localStorage.getItem("theme");
  if (theme === "style-1" || theme === "style-2" || theme === "style-3") {
    return theme;
  }
  localStorage.setItem("theme", "style-1");
  return "style-1";
}

function App() {
  const [theme, setTheme] = useState<Theme>(getLocalStorageTheme);
  const [documentTitle, setDocumentTitle] = useState<string>(
    "Properties and Methods for the Window, Document, and Navigator",
  );

  const isMobile =
    (navigator as any).userAgentData?.mobile === true ||
    /Mobi|Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent,
    );

  return (
    <main className="m-2 xxs:m-4" data-theme={theme}>
      <title>{documentTitle}</title>

      <Settings theme={theme} setTheme={setTheme} />

      <h1>window</h1>

      <Level1Container>
        <div className="api-description">
          <blockquote>
            <p className="span-3">
              The Window interface represents a window containing a DOM
              document. A global variable, <code>window</code>, representing the window in
              which the script is running, is exposed to JavaScript code.
            </p>
            <p className="span-3">
              The Window interface is home to a variety of functions,
              namespaces, objects, and constructors which are not necessarily
              directly associated with the concept of a user interface window.
              However, the Window interface is a suitable place to include these
              items that need to be globally available.
            </p>
            <p className="span-3">
              In a tabbed browser, each tab is represented by its own Window
              object; the global window seen by JavaScript code running within a
              given tab always represents the tab in which the code is running.
              That said, even in a tabbed browser, some properties and methods
              still apply to the overall window that contains the tab, such as
              <code>resizeTo()</code> and <code>innerHeight</code>. Generally, anything that can't
              reasonably pertain to a tab pertains to the window instead.
            </p>
          </blockquote>
          <cite className="span-2 underline decoration-1 underline-offset-2">
            <a
              target="_blank"
              href="https://developer.mozilla.org/en-US/docs/Web/API/Window"
            >
              Window - Web APIs | MDN
            </a>
          </cite>
        </div>

        <h2>Properties:</h2>
        <Level2Container>
          <WindowDims />
          <ScreenDims />
        </Level2Container>

        <h2>Methods:</h2>
        <Level2Container>
          <Alert />
          <Confirm />
          {!isMobile && <MoveWindow />}
          <Print />
          <Prompt />
          <SetIntervalTimer />
          <SetIntervalSinceRefresh />
        </Level2Container>
      </Level1Container>

      <h1>document</h1>

      <Level1Container>
        <div className="api-description">
          <blockquote>
            <p className="span-3">
              The Document interface represents any web page loaded in the
              browser and serves as an entry point into the web page's content,
              which is the DOM tree.
            </p>
            <p className="span-3">
              The Document interface describes the common properties and methods
              for any kind of document. Depending on the document's type (e.g.,
              HTML, XML, SVG, …), a larger API is available: HTML documents,
              served with the "text/html" content type, also implement the
              HTMLDocument interface, whereas XML and SVG documents implement
              the XMLDocument interface.
            </p>
          </blockquote>
          <cite className="span-2 underline decoration-1 underline-offset-2">
            <a
              target="_blank"
              href="https://developer.mozilla.org/en-US/docs/Web/API/Document"
            >
              Document - Web APIs | MDN
            </a>
          </cite>
        </div>

        <h2>Methods:</h2>
        <Level2Container>
          <ClickCounter />
          <CursorCoordinates />
          <GetSelection />
          <KeyDown />
          <DocumentTitle setDocumentTitle={setDocumentTitle} />
        </Level2Container>
      </Level1Container>

      <h1>navigator</h1>

      <Level1Container>
        <div className="api-description">
          <blockquote>
            <p className="span-3">
              The Navigator interface represents the state and the identity of
              the user agent. It allows scripts to query it and to register
              themselves to carry on some activities.
            </p>
            <p className="span-3">
              A Navigator object can be retrieved using the read-only
              window.navigator property.
            </p>
          </blockquote>
          <cite className="span-2 underline decoration-1 underline-offset-2">
            <a
              target="_blank"
              href="https://developer.mozilla.org/en-US/docs/Web/API/Navigator"
            >
              Navigator - Web APIs | MDN
            </a>
          </cite>
        </div>

        <h2>Methods:</h2>
        <Level2Container>
          <Geolocation />
          <CutCopyPaste />
        </Level2Container>
      </Level1Container>

      <ScrollToTop />
    </main>
  );
}

export default App;
