import {useState} from 'react'
import { QuestComp } from './QuestComp/QuestComp'
import { useSearchContext } from '../../Header/searchInput/SearchContext'


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
  const [misionType, setMisionType] = useState("Village")
  const { searchValue } = useSearchContext();

  const MisionT =(searchValue)=>{
    return(
      searchValue===""
    ?( 
      <ul className='item-type-select '>
          <li className="item-type-selected" onClick={(e)=>{
              setMisionType("Village")
              e.target.classList.add("item-type-selected")
              e.target.nextElementSibling.classList.contains("item-type-selected") && e.target.nextElementSibling.classList.remove("item-type-selected")
              }}>Village</li>
          <li onClick={(e)=>{
              setMisionType("Guild")
              e.target.classList.add("item-type-selected")
              e.target.previousElementSibling.classList.contains("item-type-selected") && e.target.previousElementSibling.classList.remove("item-type-selected")
          }}>Guild</li>
      </ul>            )
    :(<ul className='item-type-select '>
      <li>Search Result:</li>
    </ul>)
    )
  }

    return (
    <div>
      <nav>
      {MisionT(searchValue)}
                      
      </nav>

      { <QuestComp questTypeB={misionType}  />}
    </div>
  )
}
