import {lazy, Suspense} from 'react'
import "./MainLayout.css"
import { ItemsPage } from '../../pages/ItemsPage'
import {UbicationsPage} from "../../pages/UbicationsPage"
import { AboutPage } from '../../pages/AboutPage'
import { MonstersPage } from '../../pages/MonstersPage'
import { QuestPage } from '../../pages/QuestPage'

const HomePage =lazy(()=>import("../../pages/HomePage"));



export default function MainLayout({content}){

  const Select =(conte)=>{
      switch(conte){
        case "Monsters": return <MonstersPage />; 
        case "Items": return <ItemsPage />;
        case "Misions": return <QuestPage />; 
        case "Ubications":return <UbicationsPage/>; 
        case "Home": return <HomePage/>;
        case "About This Project": return <AboutPage/>;
        default:return <HomePage/>; 
      }
  }

  return (
    <div className='main-container'>
      <h2>{content}</h2>
      <Suspense fallback={<h3 style={{fontSize:"2rem"}}>Loading...</h3>}>{Select(content)}</Suspense>
    </div>
  )
}
