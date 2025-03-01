import {useState,useEffect} from 'react'
import data from "../../Assets/data.json"


export const GetDataBase = () => {
    const [largueMonsters, setLargueMonsters] = useState([]);
    const [smallMonsters, setSmallMonsters] = useState([]);
    const [mision, setMision]= useState([]);

    const dataMonster =  data.monsters;
    const dataMision = data.quests;
    
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

        const getMisions=(data)=>{
            const misions =[];

            data.forEach((ele) =>{
                let mision;
                mision = {
                    id: ele._id.$oid,
                    client: ele.client,
                    name: ele.name,
                    description:ele.description,
                    reward:ele.reward,
                    map:ele.map,
                    isKey:ele.isKey,
                    questsType: ele.questsType,
                    game:ele.game,
                    difficulty: ele.difficulty,
                    objetive:ele.objective,
                    targets:ele.targets|| undefined
                }
                misions.push(mision);
            
            }
                    );
            setMision(misions)        
        }
        getMisions(dataMision);
    },[dataMonster,dataMision])
    return {
        largueMonster: [largueMonsters, setLargueMonsters],
        smallMonster: [smallMonsters, setSmallMonsters],
        quest: [mision,setMision]
    };

}
