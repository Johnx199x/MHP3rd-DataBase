import "./MonstersPage.css";
import { useMonsterData } from '../hooks/useMonsterData';
import { MonsterTypeSelector } from '../Components/monster/MonsterTypeSelector';
import { MonsterList } from '../Components/monster/MonsterList';

export const MonstersPage = () => {
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
