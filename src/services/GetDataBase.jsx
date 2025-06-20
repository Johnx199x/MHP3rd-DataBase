import {useState,useEffect} from 'react'
import { supabase } from './supaBaseClient';

export const GetDataBase = () => {
    
    const [largueMonsters, setLargueMonsters] = useState([]);
    const [smallMonsters, setSmallMonsters] = useState([]);
    const [questState, setQuestState]= useState([]);

    const [loading, setLoading] = useState(true);

    
    useEffect(()=>{
        const fetchData = async () => {
            try {
                await fetchQuests();

                // Fetch monsters
                await fetchMonsters();
                // Fetch quests
            } catch (error) {
                console.error('Error fetching data:', error);
            } finally {
                setLoading(false);
            }
        };

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
                const image = ele.games[0]?.image || "MH3U-Question_Mark_Icon.png";
                let monster = {
                            idEl: eleId,
                            id: ele._id.$oid,
                            name: ele.name,
                            type:ele.type,
                            image: image,
                            info: ele.games[0].info,
                            danger:ele.games[0].danger,
                            ailments:ele.ailments,
                            isLarge: ele.isLarge,
                            element:ele.elements,
                            weakness:ele.weakness,
                            ...(ele.isLarge && { // only huntTips if isLarge es true
                                huntTips: [
                                    ele.huntTips.prepare,
                                    ele.huntTips.break,
                                    ele.huntTips.weaknessSign,
                                    ele.huntTips.image
                                ]
                            }),
                            dropsLowRank:ele.drops.lowRank,
                            dropsHighRAnk:ele.drops.highRank     
                    } 
                    ele.isLarge 
                        ?largueMonster.push(monster)
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

       const fetchQuests = async () => {

            try {
                const { data, error } = await supabase
                .from('tb_Quest') // Nombre de la tabla
                .select('id, quest_data');


                if (error) throw error;

                const questArr = [];

                data.forEach((row) => {
                    const ele = row.quest_data;
                    const eleId = row.id;
                    
                    let quest = {
                        idEl: eleId, // ID de la fila en la base de datos
                        id: ele._id.$oid,
                        client: ele.client,
                        name: ele.name,
                        description: ele.description,
                        reward: ele.reward,
                        map: ele.map,
                        isKey: ele.isKey,
                        questType: ele.questType,
                        game: ele.game,
                        difficulty: ele.difficulty,
                        objetive: ele.objective,
                        targets: ele.targets || undefined
                    }
                    questArr.push(quest);
                });

                setQuestState(questArr);

            } catch (error) {
                console.error('Error fetching quests:', error);
                throw error;
            }
        };
        
        fetchData();

    }, []);
    return {
        largueMonster: [largueMonsters, setLargueMonsters],
        smallMonster: [smallMonsters, setSmallMonsters],
        quest: [questState, setQuestState]
    };

}
