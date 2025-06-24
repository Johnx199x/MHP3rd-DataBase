import { useState, useEffect, useMemo } from 'react';
import { supabase } from '../services/supaBaseClient';
import { useSearchContext } from '../context/SearchContext.jsx';

export const useMonsterData = () => {
    const { searchValue } = useSearchContext();
    
    const [largueMonsters, setLargueMonsters] = useState([]);
    const [smallMonsters, setSmallMonsters] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    
    const [monsterType, setMonsterType] = useState("small");

    useEffect(() => {
        const fetchMonsters = async () => {
            try {
                setLoading(true);
                setError(null);

                const { data, error } = await supabase
                    .from('tb_Monster')
                    .select('id, monster_data');

                if (error) throw error;

                const largueMonster = [];
                const smallMonster = [];

                data.forEach((row) => {
                    const ele = row.monster_data;
                    const eleId = row.id;
                    const image = ele.games[0]?.image || "MH3U-Question_Mark_Icon.png";
                    
                    let monster = {
                        idEl: eleId,
                        id: ele._id.$oid,
                        name: ele.name,
                        type: ele.type,
                        image: image,
                        info: ele.games[0].info,
                        danger: ele.games[0].danger,
                        ailments: ele.ailments,
                        isLarge: ele.isLarge,
                        element: ele.elements,
                        weakness: ele.weakness,
                        ...(ele.isLarge && {
                            huntTips: [
                                ele.huntTips.prepare,
                                ele.huntTips.break,
                                ele.huntTips.weaknessSign,
                                ele.huntTips.image
                            ]
                        }),
                        dropsLowRank: ele.drops.lowRank,
                        dropsHighRAnk: ele.drops.highRank
                    };

                    ele.isLarge 
                        ? largueMonster.push(monster)
                        : smallMonster.push(monster);
                });

                setLargueMonsters(largueMonster);
                setSmallMonsters(smallMonster);

            } catch (error) {
                console.error('Error fetching monsters:', error);
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };

        fetchMonsters();
    }, []); 
    const filteredMonsters = useMemo(() => {
        let monsters = [];
        
        // Si hay búsqueda buscar en ambos tipos
        if (searchValue && searchValue.trim() !== "") {
            const searchTerm = searchValue.toLowerCase().trim();
            const allMonsters = [...largueMonsters, ...smallMonsters];
            
            monsters = allMonsters.filter(monster => 
                monster.name.toLowerCase().includes(searchTerm) ||
                monster.type.toLowerCase().includes(searchTerm) ||
                (monster.element && monster.element.some(el => 
                    el.toLowerCase().includes(searchTerm)
                ))
            );
        } else {
            // Sin búsqueda, mostrar según el tipo seleccionado
            monsters = monsterType === "largue" ? largueMonsters : smallMonsters;
        }
        
        return monsters.sort((a, b) => a.idEl - b.idEl);
    }, [largueMonsters, smallMonsters, searchValue, monsterType]);

    return {
        filteredMonsters,
        largueMonsters,
        smallMonsters,
        
        loading,
        error,
        
        monsterType,
        setMonsterType,
        searchValue,
        
        refetch: () => {
            setLoading(true);
        }
    };
};