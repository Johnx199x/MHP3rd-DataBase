import {useState,useEffect} from 'react'
import data from "../../Assets/data-monsters.json"


export const GetDataBase = () => {
    const [largueMonsters, setLargueMonsters] = useState([]);
    const [smallMonsters, setSmallMonsters] = useState([]);
    const dataMonster =  data.monsters;

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
    return {
        largueMonster: [largueMonsters, setLargueMonsters],
        smallMonster: [smallMonsters, setSmallMonsters],
    };

}
