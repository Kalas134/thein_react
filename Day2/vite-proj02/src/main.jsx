import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Timer from './Timer.jsx'
import Timer2 from './Timer2.jsx'
import MyUseEffect from './MyUseEffect.jsx'
import Component1 from './Component1.jsx'
import MyUseContext from './MyUseContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <MyUseContext/>
    <Component1/>
    <MyUseEffect/>
    <Timer/>
    <Timer2/>
    {/* <App /> */}
  </StrictMode>,
)
