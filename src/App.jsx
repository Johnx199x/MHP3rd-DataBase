import "./Styles/App.css";
import { lazy, Suspense } from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import { HeaderApp } from "./Components/layout/HeaderApp";
import { FooterApp } from "./Components/layout/FooterApp";
import { SideBar } from "./Components/layout/SideBar";
import { SearchProvider } from "./context/SearchContext";
import CustomLoader from "./Components/ui/CustomLoader";

import { SpeedInsights } from "@vercel/speed-insights/react";
import { Analytics } from "@vercel/analytics/react";

// Lazy loading de páginas
const HomePage = lazy(() => import("./pages/HomePage"));
const MonstersPage = lazy(() => import("./pages/MonstersPage"));
const QuestPage = lazy(() => import("./pages/QuestPage"));
const ItemsPage = lazy(() => import("./pages/ItemsPage"));
const UbicationsPage = lazy(() => import("./pages/UbicationsPage"));
const AboutPage = lazy(() => import("./pages/AboutPage"));

function App() {

  return (
   <HashRouter>
      <div className="app-container">
        <SearchProvider>
          <HeaderApp />
          <SideBar />
          
          <div className='main-container'>
            <Suspense fallback={<CustomLoader />}>
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/monsters" element={<MonstersPage />} />
                <Route path="/quests" element={<QuestPage />} />
                <Route path="/items" element={<ItemsPage />} />
                <Route path="/locations" element={<UbicationsPage />} />
                <Route path="/about" element={<AboutPage />} />
                {/* Ruta por defecto para rutas no encontradas */}
                <Route path="*" element={<HomePage />} />
              </Routes>
            </Suspense>
          </div>
          
          <FooterApp />
        </SearchProvider>

        {/* Analytics components */}
        <Analytics />
        <SpeedInsights />
      </div>
    </HashRouter>
  );
} 

export default App;
