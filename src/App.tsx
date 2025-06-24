import WindowDims from './components/WindowDims';
import StyleTemplate from './components/StyleTemplate';
import Alert from './components/Alert';
import './App.css'
import { useEffect, useState } from 'react';

import type { Style } from './types/styles';
import YourScreen from './components/YourScreen';
import RefreshStopwatch from './components/RefreshStopwatch';

function App() {
  const [currentStyle, setCurrentStyle] = useState<Style>({
    containerClass: "",
    h2Class: "",
    h3Class: "",
    pClass: "",
    spanClass1: "",
    spanClass2: "",
  });

  useEffect(() => {
    const containerStyle = window.document.getElementById("container")?.className;
    const h2Style = window.document.getElementById("h2")?.className;
    const h3Style = window.document.getElementById("h3")?.className;
    const pStyle = window.document.getElementById("p")?.className;
    const spanStyle1 = window.document.getElementById("span-1")?.className;
    const spanStyle2 = window.document.getElementById("span-2")?.className;

    const style = {
      containerClass: containerStyle,
      h2Class: h2Style,
      h3Class: h3Style,
      pClass: pStyle, 
      spanClass1: spanStyle1,
      spanClass2: spanStyle2,
    }

    setCurrentStyle(style);
  }, []);

  return (
    <div>
      <div className='flex items-baseline'>
        <h1 className='m-2 mb-8 text-4xl text-amber-100 font-bold'>Window Properties and Methods</h1>
      </div>

      <StyleTemplate />
      <h2 className='m-2 text-3xl text-amber-200 font-light'>Properties</h2>
      <div className='flex flex-wrap mb-8'>
        <WindowDims style={currentStyle} />
        <YourScreen style={currentStyle} />
        <RefreshStopwatch style={currentStyle} />
      </div>
      
      <h2 className='m-2 text-3xl text-amber-200 font-light'>Methods</h2>
      <div className='flex flex-wrap mb-8'>
        <Alert />
      </div>
    </div>
  )
}

export default App
