import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Header from './semantic/Header.jsx'
import Footer from './semantic/Footer.jsx'
import Garage from './semantic/Garage.jsx'
import BasicCap from './semantic/BasicCap.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Header/>
    <BasicCap/>
    <Garage/>
    <Footer/>
    {/* <App /> */}
  </StrictMode>,
)
