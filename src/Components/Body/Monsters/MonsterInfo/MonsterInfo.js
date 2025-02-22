import React from 'react'
import "./MonsterInfo.css"
import { MonstersDescription } from './MonsterDesc'


export const MonsterInfo = (props) => {

    const handleClick=(e)=>{
        let $monsterArrow = e.currentTarget.children[2]

        $monsterArrow.classList.contains("rotate")
            ?$monsterArrow.classList.remove("rotate")
            :$monsterArrow.classList.add("rotate")

        let $monsterDescr = e.currentTarget.nextElementSibling;

        $monsterDescr.classList.contains("show-description")
            ?$monsterDescr.classList.remove("show-description")
            :$monsterDescr.classList.add("show-description")            
    }
    
    const MonsterIcon =(props)=>{
        let imgSrc = require(`../../../../Assets/icons/Monsters/`+props.img);
        let up = ">";
        let altImg = props.name + "_img";
        
        return(
            <figure className='monsters-figure' onClick={handleClick}>
                <img className="monsters-icon" src={imgSrc} alt={altImg} />
                <figcaption>{props.name}</figcaption>
                <span className='monsters-arrow'>{up}</span>
                
            </figure>
            
        )
    }
    /*
        "drops":{ 
            "lowRank":[ 
            
            ],
            "highRank":[
            
            ]
        }, 
*/


    return (
        <div className='monster-info search-item'>
            <MonsterIcon  name = {props.name} img={props.img}  />
            <MonstersDescription 
                name={props.name}
                info={props.info} 
                type={props.type}
                danger={props.danger}
                element={props.element}
                weakness={props.weakness}
                ailments={props.ailments}
                dropsLowRank={props.dropsLowRank}
                dropsHighRank={props.dropsHighRAnk} 
                />
        </div>

    )
    }
