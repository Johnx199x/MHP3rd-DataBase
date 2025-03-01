import React,{useState} from 'react'
import { VillageMision } from './Village/VillageMision'
import { GuildMision } from './Guild/GuildMision'


export const Misions = () => {

  /*{

            "_id": {
                "$oid": "" 
            },
            "name": "",
            "client": "", 
            "description": "", 
            "reward":  ,
            "map": "", 
            "isKey": true, 
            "questType": "Village", 
            "game": "Monster Hunter Portable 3rd", 
            "difficulty": "", 
            "objective": "", 
            "targets": [
                ""
            ]
        }, 
        */
  const [misionType, setMisionType] = useState("village")
  
    return (
    <div>
      <nav>
            <ul className='item-type-select '>
                <li className="item-type-selected" onClick={(e)=>{
                    setMisionType("village")
                    e.target.classList.add("item-type-selected")
                    e.target.nextElementSibling.classList.contains("item-type-selected") && e.target.nextElementSibling.classList.remove("item-type-selected")
                    }}>Village</li>
                <li onClick={(e)=>{
                    setMisionType("guild")
                    e.target.classList.add("item-type-selected")
                    e.target.previousElementSibling.classList.contains("item-type-selected") && e.target.previousElementSibling.classList.remove("item-type-selected")
                }}>Guild</li>
            </ul>            
      </nav>

      {misionType ==="village" ? <VillageMision /> :<GuildMision />
      }
    </div>
  )
}
