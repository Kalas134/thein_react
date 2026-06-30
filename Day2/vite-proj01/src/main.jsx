import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Header from './samentic/Header.jsx'
import Footer from './samentic/Footer.jsx'
import MyUseState from './samentic/MyUseState.jsx'
import MyApp from './samentic/MyApp.jsx'
import Game from './Tictacto/Game.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Header/>
    {/* <MyUseState/> */}
    {/* <MyUseState/> */}
    {/* <MyApp/> */}
    {/* 틱텍토 게임 */}
    {/* <Game/> */}
    <Footer/>
    {/* <App /> */}
  </StrictMode>,
)
