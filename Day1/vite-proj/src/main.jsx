import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Header from './semantic/Header.jsx'
import Section from './semantic/Section.jsx'
import Section2 from './semantic/Section2.jsx'
import Footer from './semantic/Footer.jsx'
import Car1 from './semantic/Car1.jsx'
import Garage from './semantic/Garage.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Header/>
    {/* <Garage/> */}
    <Car1 color="red"/>
    <Car1 color="blue"/>
    <Car1 color="green"/>
    {/* <Section/> */}
    {/* <Section2/> */}
    <Footer/>
    {/* <Myapp /> */}
    {/* <App /> */}
  </StrictMode>
)
