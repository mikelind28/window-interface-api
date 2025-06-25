import './App.css'

import { useState } from 'react';

import type { Style } from './types/types';

import WindowDims from './components/Widgets/WindowDims';
import StyleTemplate from './components/StyleTemplate';
import YourScreen from './components/Widgets/YourScreen';
import RefreshStopwatch from './components/Widgets/RefreshStopwatch';
import Alert from './components/Widgets/Alert';

function App() {
  const [currentStyle, setCurrentStyle] = useState<Style>({
    containerClass: "w-70 bg-slate-800 m-2 p-4 border-2 rounded-lg border-emerald-400  inset-shadow-sm inset-shadow-slate-950/50 ring-1 ring-lime-200",
    h2Class: "text-xl text-yellow-300/95 text-shadow-lg/50 text-shadow-neutral-950 font-medium tracking-wide",
    h3Class: "text-xl text-teal-300",
    pClass: "text-xl text-cyan-100 text-shadow-md/50 text-shadow-neutral-950 font-semibold",
    spanClass1: "text-neutral-500 text-xl",
    spanClass2: "text-emerald-300/50 text-xl font-extralight text-shadow-none",
  });

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
        <Alert style={currentStyle}/>
      </div>
    </div>
  )
}

export default App
