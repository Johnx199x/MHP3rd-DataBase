import React,{useState,useEffect, useRef} from 'react'
import data from "../../../Assets/data-monsters.json"
import "./Monsters.css"



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
    

    const handleClick=(e)=>{
        let $monsterArrow = e.target.children[2]
        
        $monsterArrow.classList.contains("rotate")
            ?$monsterArrow.classList.remove("rotate")
            :$monsterArrow.classList.add("rotate")
        
        
    }
  
    const [monsters, setMonsters] = useState([]);
    const dataMonster =  data.monsters;
    useEffect(()=>{
        const getMonsters = (data)=>{

            data.forEach((ele) =>{
                if(ele.games[0].game === "Monster Hunter 3 Ultimate"){ 
                        let monster= {
                            id: ele._id.$oid,
                            name: ele.name,
                            type:ele.type,
                            image: ele.games[0].image,
                            info: ele.games[0].info,
                            danger:ele.games[0].danger,
                            isLarge: ele.isLarge,
                            element:ele.elements,
                            weakness:ele.weakness,
                        }
                    setMonsters((monsters)=>[...monsters,monster])
            }
                    })
        }
        getMonsters(dataMonster);
    },[dataMonster])

    const MonsterIcon =(props)=>{
        let imgSrc = require(`../../../Assets/icons/Monsters/`+props.img);
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
    return (
    <div className='monsters-container'>
        {monsters.length === 0 
            ? <h3>Cargando...</h3>
            :monsters.map((ele,index)=>
                <MonsterIcon key={index} name = {ele.name} img={ele.image}  />
            )
        }
        
    </div>
    )
}
