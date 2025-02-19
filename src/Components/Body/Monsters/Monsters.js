import React,{useState,useEffect} from 'react'
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
        let $monsterArrow = e.currentTarget.children[2]

        $monsterArrow.classList.contains("rotate")
            ?$monsterArrow.classList.remove("rotate")
            :$monsterArrow.classList.add("rotate")

        let $monsterDescr = e.currentTarget.nextElementSibling;

        $monsterDescr.classList.contains("show-description")
            ?$monsterDescr.classList.remove("show-description")
            :$monsterDescr.classList.add("show-description")            
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
    const MonstersDescription = (props) =>{
        
        
        
        
        return(
            <div className='monster-description'>
                <p><span className='monster-info-tags'>Hunters Notes:</span><br />{props.info ===""|| props.info ===null ? "Unfortunately, there are no hunter notes available on this monster; its origins and abilities remain a complete mystery" : props.info}</p>
                <p><span className='monster-info-tags'>Monster type: </span>{props.type}</p>
                <p><span className='monster-info-tags'>Danger: </span>{props.danger}</p>
                <p><span className='monster-info-tags'>Monster element: </span>{props.element===undefined ? "None" : props.element}</p>
                <p><span className='monster-info-tags'>Monster weakness: </span>{props.weakness}</p>
            </div>
        )
    }

    const MonsterInfo=(props)=>{
        return(
            <div className='monster-info'>
                <MonsterIcon  name = {props.name} img={props.img}  />
                <MonstersDescription 
                    info={props.info} 
                    type={props.type}
                    danger={props.danger}
                    element={props.element}
                    weakness={props.weakness} />
            </div>
        )
    }
    return (
    <div className='monsters-container'>
        {monsters.length === 0 
            ? <h3>Cargando...</h3>
            :monsters.map((ele,index)=> 
                <MonsterInfo 
                    key={index} 
                    name = {ele.name} 
                    img={ele.image}
                    type={ele.type}
                    info={ele.info} 
                    danger={ele.danger}
                    isLarge={ele.isLarge}
                    element={ele.element}
                    weakness={ele.weakness}
                    />
            )
        }
        
    </div>
    )
}
