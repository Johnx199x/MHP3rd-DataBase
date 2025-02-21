import React,{useState}from 'react'

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
        
        const monsterDanger=()=>{
            let dangerStar = "★";
            let monsterDanger = "";
            for(let i =0; i< props.danger;i++) monsterDanger+=dangerStar;  
            return monsterDanger;
        }
        const monsterElement = (arrEle)=>{  
            let elements= []
            arrEle.forEach((e)=>{
                
                switch(e){
                    case "Fire": elements.push(<img src={require("../../../Assets/icons/Element/Status-Fire.webp")}  alt='fire_element_img'></img>);  break;
                    case "Thunder": elements.push(<img src={require("../../../Assets/icons/Element/Status-Thunder.webp")} alt='thunder_element_img'></img>);break;
                    case "Water": elements.push(<img src={require("../../../Assets/icons/Element/Status-Water.webp")} alt='water_element_img'></img>);break;
                    case "Ice": elements.push(<img src={require("../../../Assets/icons/Element/Status-Ice.webp")} alt='ice_element_img'></img>);break;
                    case "Dragon": elements.push(<img src={require("../../../Assets/icons/Element/Status-Draco.webp")} alt='draco_element_img'></img>);break;
                    case "Poison": elements.push(<img src={require("../../../Assets/icons/Element/Status-Poison.webp")} alt='poison_element_img'></img>);break;
                    default: elements.push(e);
            }
            })
            return(
                <>
                    {elements.map((e,index)=> <span key={index}>{e}</span>  )}
                </>
            )
        }
        const monsterSpecialAttack =(arrEle)=>{
            let elements=[];
            arrEle.forEach((e)=>{
                
                switch(e){
                    case "Fireblight": elements.push(<img src={require("../../../Assets/icons/StatusEffect/Status_Effect-Severe_Fireblight_Icon.webp")}  alt='fireBlight_status_img' title='Loose life at time'></img>); break;
                    case "Thunderblight": elements.push(<img src={require("../../../Assets/icons/StatusEffect/Status_Effect-Thunderblight_Icon.webp")} alt='thunderBlight_img' title='More stun chance'></img>);break;
                    case "Waterblight": elements.push(<img src={require("../../../Assets/icons/StatusEffect/Status_Effect-Severe_Waterblight_Icon.webp")} alt='waterblight_img' title='Loose stamina'></img>);break;
                    case "Iceblight": elements.push(<img src={require("../../../Assets/icons/StatusEffect/Status_Effect-Iceblight_Icon.webp")} alt='iceBlight_img'></img>);break;
                    case "Dragonblight": elements.push(<img src={require("../../../Assets/icons/StatusEffect/Status_Effect-Dragonblight_Icon.webp")} alt='dracoblight_img'></img>);break;
                    case "Poison": elements.push(<img src={require("../../../Assets/icons/StatusEffect/Status_Effect-Deadly_Poison.webp")} alt='poison-status_img' title='Poison effect'></img>);break;
                    case "Snowman": elements.push(<img src={require("../../../Assets/icons/StatusEffect/StatusEffect-SnowMan.webp")} alt='Snowman-status_img' title='SnowMan effect'></img>);break;
                    case "Soiled": elements.push(<img src={require("../../../Assets/icons/StatusEffect/StatusEffect-Soiled.webp")} alt='Soiled-status_img' title='Consumables are not allowed.'></img>);
                    break;
                    case "Stun": elements.push(<img src={require("../../../Assets/icons/StatusEffect/Status-Stun.webp")} alt='Stun-status_img' title='Stun-Status'></img>);break;
                    case "Paralysis": elements.push(<img src={require("../../../Assets/icons/StatusEffect/Status-Paralysis.webp")} alt='Paralysis-status_img' title='Paralysis-Status'></img>);break;
                    case "Life drain": elements.push(<img src={require("../../../Assets/icons/StatusEffect/StatusEffect-Leeched.webp")} alt="Life-Drain-status_img" title='Life Drain'></img>);break;
                    case "Sleep": elements.push(<img src={require("../../../Assets/icons/StatusEffect/Status-Sleep.webp")} alt='Slee[-status_img' title='Slepp-Status'></img>);break;
                    case "Defence Down": elements.push(<img src={require("../../../Assets/icons/StatusEffect/StatusEffect-DefenseDow.webp")} alt='Defense-Down-status_img' title='Loose defence'></img>);break;
                    case "Muddy": elements.push(<img src={require("../../../Assets/icons/StatusEffect/Status_Effect-Webbed_MH4_Icon.webp")} alt='Webbed-status_img' title=''></img>);break;






                    default: elements.push(e);
            }
            })
            return(
                <>
                    {elements.map((e,index)=> <span key={index}
                    className='span-element-icon'>{e}</span>  )}
                </>
            )
        }
        
        
        return(
            <div className='monster-description'>
                <p><span className='monster-info-tags'>Hunters Notes:</span><br />{props.info ===""|| props.info ===null ? "Unfortunately, there are no hunter notes available on this monster; its origins remain a complete mystery" : props.info}</p>
                <p><span className='monster-info-tags'>Monster type: </span>{props.type}</p>
                <p><span className='monster-info-tags'>Danger: </span>{monsterDanger()}</p>
                <p><span className='monster-info-tags'>Monster element: </span>{props.element===undefined ? "None" : monsterElement(props.element)}</p>
                <p><span className="monster-info-tags">Special Attack Status:</span>{props.ailments=== undefined?"None ": monsterSpecialAttack(props.ailments)}</p>
                <p><span className='monster-info-tags'>Monster weakness: </span>{props.weakness===undefined?"None weakness discovered":monsterElement(props.weakness)}</p>
            </div>
        )
    }


    return (
        <div className='monster-info search-item'>
            <MonsterIcon  name = {props.name} img={props.img}  />
            <MonstersDescription 
                info={props.info} 
                type={props.type}
                danger={props.danger}
                element={props.element}
                weakness={props.weakness}
                ailments={props.ailments} />
        </div>

    )
    }
