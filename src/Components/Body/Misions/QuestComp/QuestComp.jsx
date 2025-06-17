import React,{useState} from 'react'
import "./QuestComp.css"
import {GetDataBase} from "../../../../utils/GetDataBase"
import { QuestInfo } from './QuestInfo'
import {useSearchContext} from '../../../Header/searchInput/SearchContext'

export const QuestComp = ({questTypeB}) => {
  const { searchValue } = useSearchContext();
  const [misionLevel, setMisionLevel] = useState("1★")
  const { quest } = GetDataBase();
  const [quests] = quest;


  const handleClickItemSelect=(e)=>{ //select quest difficulty
    const $liItem = document.querySelectorAll(".item-type");
      $liItem.forEach(element => {
        element.classList.contains("item-type-selected") && element.classList.remove("item-type-selected")
    });
    setMisionLevel(e.target.textContent)
    e.target.classList.add("item-type-selected")
    
  }
  const Star = (questT,searchValue)=>{ // Star number of questType
    return(
      searchValue===""?(
      questT === "Village"?(
      <ul className="item-type-select">
          <li className='item-type' onClick={handleClickItemSelect}>1★</li>
          <li className='item-type' onClick={handleClickItemSelect}>2★</li>
          <li className='item-type' onClick={handleClickItemSelect}>3★</li>
          <li className='item-type' onClick={handleClickItemSelect}>4★</li>
          <li className='item-type' onClick={handleClickItemSelect}>5★</li>
          <li className='item-type' onClick={handleClickItemSelect}>6★</li>
      </ul>)
      :(
      <ul className="item-type-select">
      <li className='item-type' onClick={handleClickItemSelect}>1★</li>
      <li className='item-type' onClick={handleClickItemSelect}>2★</li>
      <li className='item-type' onClick={handleClickItemSelect}>3★</li>
      <li className='item-type' onClick={handleClickItemSelect}>4★</li>
      <li className='item-type' onClick={handleClickItemSelect}>5★</li>
      <li className='item-type' onClick={handleClickItemSelect}>6★</li>
      <li className='item-type' onClick={handleClickItemSelect}>7★</li>
      <li className='item-type' onClick={handleClickItemSelect}>8★</li>
  </ul>))
  :""
    )
      }

  return (
    <div>
      <nav>
        {Star(questTypeB , searchValue)}
      </nav>
      <div className="quest-container">
        <ul className="quests-list" style={{listStyle:"none", margin:"0" , padding:0}}>
            {
              quests.map((ele)=>(
                
                searchValue ===""
                ?( ele.difficulty+"★"===misionLevel && ele.questType === questTypeB && ( 
                    <QuestInfo
                      key={ele.id} 
                      misionLevel = {misionLevel} 
                      name={ele.name}
                      client = {ele.client}
                      description = {ele.description}
                      reward = {ele.reward}
                      map = {ele.map}
                      isKey = {ele.isKey}
                      questType = {ele.questType}
                      difficulty={ele.difficulty}  
                      objective = {ele.objetive}
                      targett ={ele.targets}
                      />
                      ))
                ://Search quest by SearchInput   
                  <QuestInfo
                    key={ele.id} 
                misionLevel = {misionLevel} 
                name={ele.name}
                client = {ele.client}
                description = {ele.description}
                reward = {ele.reward}
                map = {ele.map}
                isKey = {ele.isKey}
                questType = {ele.questType}
                difficulty={ele.difficulty}  
                objective = {ele.objetive}
                targett ={ele.targets}
                  />      
                
            
                )
              
              )
            }
        </ul>
      </div>


    </div>
  )
}
