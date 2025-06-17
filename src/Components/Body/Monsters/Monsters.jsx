import "./Monsters.css";
import { useMonsterData } from '../../../hooks/useMonsterData';
import { MonsterTypeSelector } from './MonsterTypeSelector';
import { MonsterList } from './MonsterList';

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
    const {
        filteredMonsters,
        monsterType,
        setMonsterType,
        isSearching
    } = useMonsterData();

    return (
        <div className='monsters-container'>
            <MonsterTypeSelector 
                isSearching={isSearching}
                monsterType={monsterType}
                onMonsterTypeChange={setMonsterType}
            />
            <MonsterList monsters={filteredMonsters} />
        </div>
    );
};
