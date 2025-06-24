import "./MonstersPage.css";
import { useMonsterData } from '../hooks/useMonsterData';
import { MonsterTypeSelector } from '../Components/monster/MonsterTypeSelector';
import { MonsterList } from '../Components/monster/MonsterList';
import CustomLoader from "../Components/ui/CustomLoader";

export default function MonstersPage (){
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
        isSearching,
        loading,
        error
    } = useMonsterData();

    if (loading) return <CustomLoader />;
    if (error) return <div>Error: {error}</div>;

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
