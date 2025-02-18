import "./App.css"

import { HeaderApp } from './Components/Header/HeaderApp';
import { FooterApp } from './Components/Footer/FooterApp';
import { MainContent} from "./Components/Body/MainContent" 
import { SideBar } from "./Components/SideBar/SideBar";
function App() {
  return (
    <div className="app-container">
      <HeaderApp />
      <SideBar />
      <MainContent />
      <FooterApp />
    </div>
  );
}

export default App;
