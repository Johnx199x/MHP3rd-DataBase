import React from 'react'

export const MonstersDescription = (props) =>{
    let up = ">";    

    const handleClick=(e)=>{
        console.log(e.currentTarget.nextElementSibling)
            let $monsterArrow = e.currentTarget.children[1]
    
            $monsterArrow.classList.contains("rotate")
                ?$monsterArrow.classList.remove("rotate")
                :$monsterArrow.classList.add("rotate")
    
            let $monsterDrops = e.currentTarget.nextElementSibling;
    
            $monsterDrops.classList.contains("show-description")
                ?$monsterDrops.classList.remove("show-description")
                :$monsterDrops.classList.add("show-description")            
        
    }
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
                case "Fire": elements.push(<img src={require("../../../../Assets/icons/Element/Status-Fire.webp")}  alt='fire_element_img'></img>);  break;
                case "Thunder": elements.push(<img src={require("../../../../Assets/icons/Element/Status-Thunder.webp")} alt='thunder_element_img'></img>);break;
                case "Water": elements.push(<img src={require("../../../../Assets/icons/Element/Status-Water.webp")} alt='water_element_img'></img>);break;
                case "Ice": elements.push(<img src={require("../../../../Assets/icons/Element/Status-Ice.webp")} alt='ice_element_img'></img>);break;
                case "Dragon": elements.push(<img src={require("../../../../Assets/icons/Element/Status-Draco.webp")} alt='draco_element_img'></img>);break;
                case "Poison": elements.push(<img src={require("../../../../Assets/icons/Element/Status-Poison.webp")} alt='poison_element_img'></img>);break;
                default: elements.push(e);
        }
        })
        return(
            <>
                {elements.map((e,index)=> <span key={index}>{e}</span>  )}
            </>
        )
    }
    const monsterAilments =(arrEle)=>{
        let elements=[];
        arrEle.forEach((e)=>{
            
            switch(e){
                case "Fireblight": elements.push(<img src={require("../../../../Assets/icons/StatusEffect/Status_Effect-Severe_Fireblight_Icon.webp")}  alt='fireBlight_status_img' title='Loose life at time'></img>); break;
                case "Thunderblight": elements.push(<img src={require("../../../../Assets/icons/StatusEffect/Status_Effect-Thunderblight_Icon.webp")} alt='thunderBlight_img' title='More stun chance'></img>);break;
                case "Waterblight": elements.push(<img src={require("../../../../Assets/icons/StatusEffect/Status_Effect-Severe_Waterblight_Icon.webp")} alt='waterblight_img' title='Loose stamina'></img>);break;
                case "Iceblight": elements.push(<img src={require("../../../../Assets/icons/StatusEffect/Status_Effect-Iceblight_Icon.webp")} alt='iceBlight_img'></img>);break;
                case "Dragonblight": elements.push(<img src={require("../../../../Assets/icons/StatusEffect/Status_Effect-Dragonblight_Icon.webp")} alt='dracoblight_img'></img>);break;
                case "Poison": elements.push(<img src={require("../../../../Assets/icons/StatusEffect/Status_Effect-Deadly_Poison.webp")} alt='poison-status_img' title='Poison effect'></img>);break;
                case "Snowman": elements.push(<img src={require("../../../../Assets/icons/StatusEffect/StatusEffect-SnowMan.webp")} alt='Snowman-status_img' title='SnowMan effect'></img>);break;
                case "Soiled": elements.push(<img src={require("../../../../Assets/icons/StatusEffect/StatusEffect-Soiled.webp")} alt='Soiled-status_img' title='Consumables are not allowed.'></img>);
                break;
                case "Stun": elements.push(<img src={require("../../../../Assets/icons/StatusEffect/Status-Stun.webp")} alt='Stun-status_img' title='Stun-Status'></img>);break;
                case "Paralysis": elements.push(<img src={require("../../../../Assets/icons/StatusEffect/Status-Paralysis.webp")} alt='Paralysis-status_img' title='Paralysis-Status'></img>);break;
                case "Life Drain": elements.push(<img src={require("../../../../Assets/icons/StatusEffect/StatusEffect-Leeched.webp")} alt="Life-Drain-status_img" title='Life Drain'></img>);break;
                case "Sleep": elements.push(<img src={require("../../../../Assets/icons/StatusEffect/Status-Sleep.webp")} alt='Slee[-status_img' title='Slepp-Status'></img>);break;
                case "Defence Down": elements.push(<img src={require("../../../../Assets/icons/StatusEffect/StatusEffect-DefenseDow.webp")} alt='Defense-Down-status_img' title='Loose defence'></img>);break;
                case "Muddy": elements.push(<img src={require("../../../../Assets/icons/StatusEffect/Status_Effect-Webbed_MH4_Icon.webp")} alt='Webbed-status_img' title=''></img>);break;






                default: elements.push(e);
        }
        })
        return(
            <ul>
                {arrEle.map((e,index)=> <li key={index}
                className='span-element-icon'>{e}({elements[index]} )</li> )}
            </ul>
        )
    }
    const monsterDrops=(arrEle, dropsRank, jehn, isLarge)=>{
        let drops = arrEle;
        return(

        <table className='monster-drops-table'>
            <caption className='monster-drops-table-caption'>{dropsRank}</caption>
            <thead>
                {isLarge
                    ?(jehn!=="Jhen Mohran"
                        ?(
                <tr>
                    <th className='monster-drops-table-header'>Item name</th>
                    <th className='monster-drops-table-header'>Body Carves</th>
                    <th className='monster-drops-table-header'>Capture Reward</th>
                    <th className='monster-drops-table-header'>Wound Rewards</th>
                    <th className='monster-drops-table-header'>Shiny Drops</th>
                    {drops[0] !== undefined &&(
                        drops[0].length > 5 && <th className='monster-drops-table-header'>Tail Carves</th>)}
                    {drops[0] !== undefined&&(
                        drops[0].length >6 &&  
                            <th className='monster-drops-table-header'>Head Carves(x1)</th>)}
                </tr>
                        )
                        :(
                <tr>
                    <th className='monster-drops-table-header'>Item name</th>
                    <th className='monster-drops-table-header'>Body Carves(x8)</th>
                    <th className='monster-drops-table-header'>Wound Reward</th>
                    <th className='monster-drops-table-header'>Inside Mouth Carves</th>
                </tr>
                        ))
                    :(
                        <tr>
                            <th className='monster-drops-table-header'>Item name</th>
                            <th className='monster-drops-table-header'>Monster Reward</th>
                        </tr>
                    )
                }
                
            </thead>
            <tbody>
                { 

                drops.map((element,index)=>(
                    <tr key={index} className='monster-drops-table-row'>    
                        {
                        element.map((ele,inde)=>( 
                            <td className="monster-drops-table-item" key={inde}>{inde===0||ele==="-" ? ele :(ele=== 0 ?"-": `${ele}%`)}</td>
                        ))
                        }
                    </tr>
                ))
                }
            </tbody>
    </table>
    )
    }
    const huntTips = (arrEle)=>{
        const prepare = arrEle[0];
        const breakPart = arrEle[1];
        const weaknessSign = arrEle[2];
        const image = <img src={require(`../../../../Assets/MonstersTipsImg/${arrEle[3]}`)} alt={`tips-${arrEle[3]}`}   />

        return (
            <>
                <p><span className='monster-info-tags'>Prepare: </span> {prepare}
                <br />
                <br />
                <span className='monster-info-tags'>Break: </span>{breakPart}
                <br />
                <br/>
                <span className='monster-info-tags'>Weakness Sign:</span> {weaknessSign}
                <br />
                <br/>
                </p>
                {image}
                
            </>
        )
    }
    
    return(
        <div className='monster-description'>
            <p className='monster-description-notes'><span className='monster-info-tags'>Hunters Notes:</span><br />{props.info ===""|| props.info ===null ? "Unfortunately, there are no hunter notes available on this monster; its origins remain a complete mystery" : props.info}</p>
            <p><span className='monster-info-tags'>Monster type: </span>{props.type}</p>
            <p><span className='monster-info-tags'>Danger: </span>{monsterDanger()}</p>
            <div><span className='monster-info-tags'>Monster element: </span>{props.element===undefined ? "None" : monsterElement(props.element)}</div>
            <div><span className="monster-info-tags">Ailments:</span>{props.ailments=== undefined?"None ": monsterAilments(props.ailments)}</div>
            <div><span className='monster-info-tags'>Monster weakness: </span>{props.weakness===undefined?"None weakness discovered":monsterElement(props.weakness)}</div>
            {props.huntTips &&(
                <div className="hunt-tips">
                    <div className="monster-drops-collapse" onClick={handleClick}>
                        <span className='monster-info-tags'>Hunt Tips </span> 
                        <span className='monsters-arrow'>{up}</span>
                    </div>
                    <div className="hunt-tips-container">
                        {props.huntTips===undefined?"":huntTips(props.huntTips)}
                    </div>
                </div>
                )
            }
            <div className='monster-drops'>
                <div className="monster-drops-collapse" onClick={handleClick}>
                    <span className='monster-info-tags'>Monster drops </span> 
                    <span className='monsters-arrow'>{up}</span>
                </div>
                <div className='monster-drops-container'>
                    {props.dropsLowRank===undefined?"":monsterDrops(props.dropsLowRank,"Low Rank",props.name,props.isLarge)}
                    {props.dropsHighRank===undefined?"":monsterDrops(props.dropsHighRank,"High Rank",props.name, props.isLarge)}
                </div>
            </div>   
                
        </div>
    )
}