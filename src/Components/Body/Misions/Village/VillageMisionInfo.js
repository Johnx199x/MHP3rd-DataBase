import React from 'react'

export const VillageMisionInfo = ({name,client,description,reward,map,isKey,questType,difficulty,  objective,target}) => {
        let up = ">";
        let listItem = !isKey
                            ? <span className='monsters-info-tag' style={{marginLeft:"1rem"}}>{name}</span>
                            : <span className='monsters-info-tag key-quest' style={{marginLeft:"1rem"}}>{name}</span>
        const handleClick=(e)=>{
            
            let $monsterArrow = e.currentTarget.children[1]
    
            $monsterArrow.classList.contains("rotate")
                ?$monsterArrow.classList.remove("rotate")
                :$monsterArrow.classList.add("rotate")
    
            let $monsterDescr = e.currentTarget.nextElementSibling;
    
            $monsterDescr.classList.contains("show-description")
                ?$monsterDescr.classList.remove("show-description")
                :$monsterDescr.classList.add("show-description")            
         }

  return (
    <li className='search-item'>
        <div className='monster-drops-collapse' onClick={handleClick}>{listItem} <span className='monsters-arrow'>{up}</span></div>
        <div className='quest-item-desc'>
            <ul className='quest-item-desc-list'>
                <li className='list-item'><span className='item-tag'>Client: </span> {client}</li>
                <li className='list-item'><span className='item-tag'>Description:</span> {description}</li>
                <li className='list-item'><span className='item-tag'>Reward:</span> {reward}z</li>
                <li className='list-item'><span className='item-tag'>Map:</span> {map}</li>
                <li className='list-item'><span className='item-tag'>Objetive:</span> {objective}</li>
            </ul>
        </div>
                
    </li>
  )
}
