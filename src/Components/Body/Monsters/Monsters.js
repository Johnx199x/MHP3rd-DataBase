import React,{useState} from 'react'
import "./Monsters.css"
import { MonsterInfo } from './MonsterInfo/MonsterInfo'
import { GetDataBase } from '../../Others/GetDataBase'

export const Monsters = () => {
/*  initialDB = {
        id: null,
        name: "",
        type:"",
        image:"",
        info:"",
        danger:"",
        isLarge: Boolean,
        element:[],
        weakness:[],
    }*/
    
    const { largueMonster, smallMonster } = GetDataBase();
    const [largueMonsters] = largueMonster;
    const [smallMonsters] = smallMonster;

    const [monsterType,setMonstertype] = useState(["small"]);


    let monsterTypeShow = ""
        monsterType==="largue"
            ?monsterTypeShow = largueMonsters
            :monsterTypeShow = smallMonsters
    
            monsterTypeShow.sort((a,b)=>a.idEl - b.idEl);

    return (
    <div className='monsters-container'>
        <nav>
            <ul className='item-type-select '>
                <li className="item-type-selected" onClick={(e)=>{
                    setMonstertype("small")
                    e.target.classList.add("item-type-selected")
                    e.target.nextElementSibling.classList.contains("item-type-selected") && e.target.nextElementSibling.classList.remove("item-type-selected")
                    }}>Small</li>
                <li onClick={(e)=>{
                    setMonstertype("largue")
                    e.target.classList.add("item-type-selected")
                    e.target.previousElementSibling.classList.contains("item-type-selected") && e.target.previousElementSibling.classList.remove("item-type-selected")
                }}>Largue</li>
            </ul>
        </nav>

        <ul className='monster-list'>
        {
            monsterTypeShow.length === 0 
            ? <h3>Loading...</h3>
            :monsterTypeShow.map((ele,index)=> 
                <li key={index}>
                <MonsterInfo 
                    
                    name = {ele.name} 
                    img={ele.image}
                    type={ele.type}
                    info={ele.info} 
                    danger={ele.danger}
                    isLarge={ele.isLarge}
                    element={ele.element}
                    weakness={ele.weakness}
                    ailments={ele.ailments}
                    huntTips ={ele.huntTips}
                    dropsLowRank={ele.dropsLowRank}
                    dropsHighRAnk={ele.dropsHighRAnk}
                    />
                    </li>
            )

        }
        </ul>
        
    </div>
    )
}