import WindowDims from './components/WindowDims';
import RefreshStopwatch from './components/RefreshStopwatch';
import YourScreen from './components/YourScreen';
// import WindowDistances from './components/WindowDistances';
import Alert from './components/Alert';
import './App.css'
import { useState } from 'react';

import type { Style } from './types/styles';

const style1: Style = {
  containerClass: "w-60 bg-slate-800 m-2 p-4 border-2 rounded-lg border-emerald-400  inset-shadow-sm inset-shadow-slate-950/50 ring-1 ring-lime-200",
  h2Class: "text-xl text-yellow-200 text-shadow-lg/50 text-shadow-neutral-950 font-medium tracking-wide",
  h3Class: "text-base text-teal-300", 
  pClass: "text-2xl text-cyan-100 text-shadow-md/50 text-shadow-neutral-950 font-semibold",
  spanClass: "text-gray-400 font-light"
}

const style2: Style = {
  containerClass: "",
  h2Class: "",
  h3Class: "", 
  pClass: "",
  spanClass: ""
}

function App() {
  const [currentStyle, setCurrentStyle] = useState(style1);

  function setStyle1() {
    setCurrentStyle(style1);
  }

  function setStyle2() {
    setCurrentStyle(style2);
  }

  return (
    <div>
      <div className='flex items-baseline'>
        <h1 className='m-2 mb-8 text-4xl text-amber-100 font-bold'>Window Properties and Methods</h1>
        <div className='w-12 h-12 bg-slate-800 m-2 border-2 rounded-lg border-emerald-400  inset-shadow-sm inset-shadow-slate-950/50 ring-1 ring-lime-200 cursor-pointer' onClick={setStyle1}></div>
        <div className='w-12 h-12 bg-slate-800 m-2 border-4 border-slate-950 rounded-lg ring-1 ring-indigo-600 cursor-pointer' onClick={setStyle2}></div>
      </div>
      <h2 className='m-2 text-3xl text-amber-200 font-light'>Properties</h2>
      <div className='flex flex-wrap mb-8'>
        <WindowDims style={currentStyle}/>
        <YourScreen style={currentStyle}/>
        <RefreshStopwatch style={currentStyle}/>
      </div>
      
      <h2 className='m-2 text-3xl text-amber-200 font-light'>Methods</h2>
      <div className='flex flex-wrap mb-8'>
        <Alert />
      </div>
    </div>
  )
}

export default App
