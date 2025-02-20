import "./App.css"
import React, { useState,lazy, Suspense } from 'react';

import { HeaderApp } from './Components/Header/HeaderApp';
import { FooterApp } from './Components/Footer/FooterApp';
import { SideBar } from "./Components/SideBar/SideBar";
import { SpeedInsights } from '@vercel/speed-insights/react';
import { Analytics } from "@vercel/analytics/react";
const MainContent =lazy(()=> import("./Components/Body/MainContent")) 


function App() {
  const [zone, setZone] = useState("Monsters")

  const changeZone = (dato) =>{
    setZone(dato);
  }

  return (
    <div className="app-container">
      <HeaderApp zone ={zone}/>
      <SideBar ubi={changeZone} />
      <Suspense fallback={<div>Cargando...</div>}>
      <MainContent content={zone} />
      </Suspense>
      <FooterApp />
      <Analytics />
      <SpeedInsights />
    </div>
  );
}

export default App;
