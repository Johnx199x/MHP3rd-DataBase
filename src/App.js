import "./App.css"
import React, { useState } from 'react';

import { HeaderApp } from './Components/Header/HeaderApp';
import { FooterApp } from './Components/Footer/FooterApp';
import { MainContent} from "./Components/Body/MainContent" 
import { SideBar } from "./Components/SideBar/SideBar";
import { SpeedInsights } from '@vercel/speed-insights/next';

function App() {
  const [zone, setZone] = useState("Monsters")

  const changeZone = (dato) =>{
    setZone(dato);
  }

  return (
    <div className="app-container">
      <HeaderApp zone ={zone}/>
      <SideBar ubi={changeZone} />
      <MainContent content={zone} />
      <FooterApp />
      <SpeedInsights />
    </div>
  );
}

export default App;
