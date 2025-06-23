import WindowDims from './components/WindowDims';
import RefreshStopwatch from './components/RefreshStopwatch';
import YourScreen from './components/YourScreen';
// import WindowDistances from './components/WindowDistances';
import Alert from './components/Alert';
import './App.css'

// future self: this could be cool broken into separate "widget"-style components 
//  that a user could stylize and drag around the screen to rearrange.

function App() {
  return (
    <div>
      <h1 className='m-2 mb-8 text-4xl text-amber-100 font-bold'>Window Properties and Methods</h1>
      <h2 className='m-2 text-3xl text-amber-200 font-light'>Properties</h2>
      <div className='flex flex-wrap mb-8'>
        <WindowDims />
        <YourScreen />
        {/* <WindowDistances /> */}
        <RefreshStopwatch />
      </div>
      
      <h2 className='m-2 text-3xl text-amber-200 font-light'>Methods</h2>
      <div className='flex flex-wrap mb-8'>
        <Alert />
      </div>
    </div>
  )
}

export default App
