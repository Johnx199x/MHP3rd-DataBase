import React,{useState} from 'react'
import "./VillageMision.css"
import {GetDataBase} from "../../../Others/GetDataBase"
import { MisionInfo } from '../MisionInfo'


export const VillageMision = () => {

  
  const [misionLevel, setMisionLevel] = useState("1★")
  const { quest } = GetDataBase();
  const [quests] = quest;


  const handleClickItemSelect=(e)=>{

    const $liItem = document.querySelectorAll(".item-type");

      $liItem.forEach(element => {
        element.classList.contains("item-type-selected") && element.classList.remove("item-type-selected")
    });

    setMisionLevel(e.target.textContent)
    e.target.classList.add("item-type-selected")
    
  }

  return (
    <div>
      <nav>
        <ul className="item-type-select">
          <li className='item-type' onClick={handleClickItemSelect}>1★</li>
          <li className='item-type' onClick={handleClickItemSelect}>2★</li>
          <li className='item-type' onClick={handleClickItemSelect}>3★</li>
          <li className='item-type' onClick={handleClickItemSelect}>4★</li>
          <li className='item-type' onClick={handleClickItemSelect}>5★</li>
          <li className='item-type' onClick={handleClickItemSelect}>6★</li>
        </ul>
      </nav>
      <div className="quest-container">
        <ul className="quests-list" style={{listStyle:"none", margin:"0" , padding:0}}>
            {
              quests.map((ele)=>ele.difficulty+"★"===misionLevel &&
                    <MisionInfo
                      key={ele.id} 
                      misionLevel = {misionLevel} 
                      name={ele.name}
                      client = {ele.client}
                      description = {ele.description}
                      reward = {ele.reward}
                      map = {ele.map}
                      isKey = {ele.isKey}
                      questType = {ele.questType}
                      difficulty={ele.difficulty
                      }  
                      objective = {ele.objetive}
                      targett ={ele.targets}
                      />
              )
            }
        </ul>
      </div>


    </div>
  )
}
