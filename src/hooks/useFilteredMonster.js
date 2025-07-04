import { useMemo } from 'react';
import { useMonsterData } from "./useMonsterData";

export default function useFilteredMonsters(searchValue, monsterSize) {
    const { allMonsters, loading, error } = useMonsterData();
    
    const filteredMonsters = useMemo(() => {
        if (loading || error || !allMonsters.length) {
            return [];
        }
        
        let filtered = [];
        let filteredBySize = monsterSize === "small" ? false : true;
        
        if (searchValue && searchValue.trim() !== "") {
            const searchTerm = searchValue.toLowerCase().trim();
            
            filtered = allMonsters.filter(monster => {
                const searchableFields = [
                    monster.name,
                    monster.type,
                    monster.danger,
                    ...(monster.element || []),
                ];
                
                const searchableText = searchableFields
                    .filter(field => field)
                    .join(' ')
                    .toLowerCase();
                
                return searchTerm.split(' ').every(term =>
                    searchableText.includes(term)
                );
            });
        } else {
            filtered = allMonsters.filter(monster => monster.isLarge === filteredBySize);
        }
        
        return filtered.sort((a, b) => a.idEl - b.idEl);
    }, [allMonsters, searchValue, monsterSize, loading, error]);
    
    return { 
        filteredMonsters, 
        loading, 
        error 
    };
}