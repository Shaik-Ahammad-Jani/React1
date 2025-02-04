import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import FunCounter from './Counters/FnCounter'
// import CbCounter from './Counters/CbComponents'
import Time from './Counters/time'
import TimeStop from './Counters/StopTime'
// import App from './App.jsx'
import Toggle from './Toggle/Toggle.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    {/* <FunCounter /> */}
    {/* <CbCounter/> */}
    <Time />
    <TimeStop />
    <Toggle />
  </StrictMode>,
)
