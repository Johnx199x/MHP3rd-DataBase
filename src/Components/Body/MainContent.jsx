import {lazy, Suspense} from 'react'
import "./MainContent.css"
import { Items } from './Items/Items'
import {Ubications} from "./Ubications/Ubications"
import { About } from './About/About'
import { Monsters } from './Monsters/Monsters'
import { Misions } from './Misions/Misions'

const Home =lazy(()=>import("./Home/Home"));



export default function MainContent({content}){

  const Select =(conte)=>{
      switch(conte){
        case "Monsters": return <Monsters />; 
        case "Items": return <Items />;
        case "Misions": return <Misions />; 
        case "Ubications":return <Ubications/>; 
        case "Home": return <Home/>;
        case "About This Project": return <About/>;
        default:return <Home/>; 
      }
  }

  return (
    <div className='main-container'>
      <h2>{content}</h2>
      <Suspense fallback={<h3 style={{fontSize:"2rem"}}>Loading...</h3>}>{Select(content)}</Suspense>
    </div>
  )
}
