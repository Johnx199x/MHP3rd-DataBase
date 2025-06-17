import { useState } from 'react';
import { GetDataBase } from '../utils/GetDataBase.jsx';
import { useSearchContext } from '../../src/Components/Header/searchInput/SearchContext.jsx';

export const useMonsterData = () => {
    const { searchValue } = useSearchContext();
    const { largueMonster, smallMonster } = GetDataBase();
    const [largueMonsters] = largueMonster;
    const [smallMonsters] = smallMonster;
    const [monsterType, setMonsterType] = useState("small");

    const getFilteredMonsters = () => {
        if (searchValue === "") {
            return monsterType === "largue" ? largueMonsters : smallMonsters;
        }
        return largueMonsters.concat(smallMonsters);
    };

    const filteredMonsters = getFilteredMonsters().sort((a, b) => a.idEl - b.idEl);

    return {
        filteredMonsters,
        monsterType,
        setMonsterType,
        searchValue,
        isSearching: searchValue !== ""
    };
};