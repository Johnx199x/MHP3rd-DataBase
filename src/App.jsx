import "./App.css"
import { useState,lazy, Suspense } from 'react';

import { HeaderApp } from './Components/Header/HeaderApp';
import { FooterApp } from './Components/Footer/FooterApp';
import { SideBar } from "./Components/SideBar/SideBar";
import { SearchProvider } from './Components/Header/searchInput/SearchContext';


const MainContent =lazy(()=> import("./Components/Body/MainContent")) 


function App() {
  const [zone, setZone] = useState("Home")

  const changeZone = (dato) =>{
    setZone(dato);
  }

  return (
    <div className="app-container">
      <SearchProvider>
      <HeaderApp zone ={zone}/>
      <SideBar ubi={changeZone} />
      <Suspense fallback={<div>Loading...</div>}>
          <MainContent content={zone} />
      </Suspense>
      <FooterApp />
      </SearchProvider>

    </div>
  );
}

export default App;