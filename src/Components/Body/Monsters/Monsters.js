import React,{useState} from 'react'
import "./Monsters.css"
import { MonsterInfo } from './MonsterInfo/MonsterInfo'
import { GetDataBase } from '../../Others/GetDataBase'
import { useSearchContext } from '../../Header/searchInput/SearchContext'

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
    const { searchValue } = useSearchContext();
    const { largueMonster, smallMonster } = GetDataBase();
    const [largueMonsters] = largueMonster;
    const [smallMonsters] = smallMonster;

    const [monsterType,setMonstertype] = useState(["small"]);


    let monsterTypeShow = ""
        searchValue === ""
        ? monsterType==="largue"
            ?monsterTypeShow = largueMonsters
            :monsterTypeShow = smallMonsters
        :monsterTypeShow = largueMonsters.concat(smallMonsters) ;
        
    
            monsterTypeShow.sort((a,b)=>a.idEl - b.idEl);

        const MonsterTypeSelected = (searchValue) =>{
            return(
                searchValue === ""
                ?(<nav>
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
                </nav>)
                :(<nav>
                    <ul className='item-type-select '>
                        <li >Search Result:</li>
                    </ul>
                </nav>)
            )
        }

    return (
    <div className='monsters-container'>
        {MonsterTypeSelected(searchValue)}

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
                    {...(ele.isLarge && {  // Solo incluye huntTips si isLarge es true
                        huntTips: ele.huntTips
                    })}
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