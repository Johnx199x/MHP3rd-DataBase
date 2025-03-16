import {useState,useEffect} from 'react'
import data from "../../Assets/data.json"
import { supabase } from './supaBaseClient';

export const GetDataBase = () => {
    const [largueMonsters, setLargueMonsters] = useState([]);
    const [smallMonsters, setSmallMonsters] = useState([]);
    const [mision, setMision]= useState([]);

    const [loading, setLoading] = useState(true);

    const dataMision = data.quests;
    
    useEffect(()=>{
        const fetchMonsters = async () => {
            const largueMonster =[];
            const smallMonster = [];

            try {
            const { data, error } = await supabase
                .from('tb_Monster') // Nombre de la tabla
                .select('id, monster_data');


                if (error) throw error;
            data.forEach((row) =>{
                const ele = row.monster_data;
                const eleId = row.id;
                let monster;
                ele.isLarge ?
                        monster= {
                            idEl: eleId,
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
                            idEl: eleId,
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

                    if(loading) return <div>Getting monsters...</div>
            } catch (error) {
            console.error('Error fetching monsters:', error);
            } finally {
            setLoading(false);
            }
            
        };

        fetchMonsters();
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

    },[loading,dataMision])
    return {
        largueMonster: [largueMonsters, setLargueMonsters],
        smallMonster: [smallMonsters, setSmallMonsters],
        quest: [mision,setMision]
    };

}
