import React from 'react'
import "./MainContent.css"
import { Monsters } from './Monsters/Monsters'
import { Items } from './Items/Items'
import {Options} from "./Options/Options"
import {Misions} from "./Misions/Misions"
import {Ubications} from "./Ubications/Ubications"
import { About } from './About/About'


export default function MainContent({content}){

  const Select =(conte)=>{
      switch(conte){
        case "Monsters": return <Monsters />; 
        case "Items": return <Items />;
        case "Misions": return <Misions/>; 
        case "Ubications":return <Ubications/>; 
        case "Options": return <Options/>;
        case "About This Project": return <About/>;
        default:return <Monsters />; 
      }
  }

  return (
    <div className='main-container'>
      <h2>{content}</h2>
      {Select(content)}
      
    </div>
  )
}
