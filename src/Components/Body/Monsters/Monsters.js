import React,{useState,useEffect} from 'react'
import data from "../../../Assets/data-monsters.json"
import "./Monsters.css"
import { MonsterInfo } from './MonsterInfo/MonsterInfo'


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
    
    const [largueMonsters, setLargueMonsters] = useState([]);
    const [smallMonsters, setSmallMonsters] = useState([]);
    const dataMonster =  data.monsters;
    const [monsterType,setMonstertype] = useState(["small"]);

    useEffect(()=>{
        

        const getMonsters = (data)=>{ 
        const largueMonster =[];
        const smallMonster = [];
        
            data.forEach((ele) =>{
                let monster;
                ele.isLarge ?
                        monster= {
                            id: ele._id.$oid,
                            name: ele.name,
                            type:ele.type,
                            image: ele.games[0].image,
                            info: ele.games[0].info,
                            danger:ele.games[0].danger,
                            ailments:ele.ailments,
                            isLarge: ele.isLarge,
                            element:ele.elements,
                            weakness:ele.weakness,
                            huntTips:[ele.huntTips.prepare,ele.huntTips.break,ele.huntTips.weaknessSign,ele.huntTips.image],
                            dropsLowRank:ele.drops.lowRank,
                            dropsHighRAnk:ele.drops.highRank     
                    } 
                        : monster= {
                            id: ele._id.$oid,
                            name: ele.name,
                            type:ele.type,
                            image: ele.games[0].image,
                            info: ele.games[0].info,
                            danger:ele.games[0].danger,
                            ailments:ele.ailments,
                            isLarge: ele.isLarge,
                            element:ele.elements,
                            weakness:ele.weakness,
                            dropsLowRank:ele.drops.lowRank,
                            dropsHighRAnk:ele.drops.highRank 
                        
                        }
                    ele.isLarge 
                        ?(largueMonster.push(monster)) 
                        :smallMonster.push(monster) 
                
            }
                    );
        setLargueMonsters(largueMonster);
        setSmallMonsters(smallMonster);
        };
        getMonsters(dataMonster);
    },[dataMonster])

    let monsterTypeShow = ""
        monsterType==="largue"
            ?monsterTypeShow = largueMonsters
            :monsterTypeShow = smallMonsters
    

    return (
    <div className='monsters-container'>
        <nav>
            <ul className='monster-type-select '>
                <li className="selected-monster-type" onClick={(e)=>{
                    setMonstertype("small")
                    e.target.classList.add("selected-monster-type")
                    e.target.nextElementSibling.classList.contains("selected-monster-type") && e.target.nextElementSibling.classList.remove("selected-monster-type")
                    }}>Small</li>
                <li onClick={(e)=>{
                    setMonstertype("largue")
                    e.target.classList.add("selected-monster-type")
                    e.target.previousElementSibling.classList.contains("selected-monster-type") && e.target.previousElementSibling.classList.remove("selected-monster-type")
                }}>Largue</li>
            </ul>
        </nav>

        <ul className='monster-list'>
        {
            monsterTypeShow.length === 0 
            ? <h3>Cargando...</h3>
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
