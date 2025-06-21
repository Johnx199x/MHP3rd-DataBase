import "./Styles/App.css";
import { useState, lazy, Suspense } from "react";
import { HeaderApp } from "./Components/layout/HeaderApp";
import { FooterApp } from "./Components/layout/FooterApp";
import { SideBar } from "./Components/layout/SideBar";
import { SearchProvider } from "./context/SearchContext";

import { SpeedInsights } from "@vercel/speed-insights/react";
import { Analytics } from "@vercel/analytics/react";

const MainLayout = lazy(() => import("./Components/layout/MainLayout"));

function App() {
  const [zone, setZone] = useState("Home");

  const changeZone = (dato) => {
    setZone(dato);
  };

  return (
    <div className="app-container">
      <SearchProvider>
        <HeaderApp zone={zone} />
        <SideBar ubi={changeZone} />
        <Suspense fallback={<div>Loading...</div>}>
          <MainLayout content={zone} />
        </Suspense>
        <FooterApp />
      </SearchProvider>

      {/* Analytics components */}
      <Analytics />
      <SpeedInsights />
    </div>
  );
}

export default App;
