import './MonstersPage.css'
import { useState } from 'react'

import { MonsterTypeSelector } from '../Components/monster/MonsterTypeSelector'
import { MonsterList } from '../Components/monster/MonsterList'
import CustomLoader from '../Components/ui/CustomLoader'
import { useSearchContext } from '../context/SearchContext.jsx'
import useFilteredMonsters from '../hooks/useFilteredMonster'

export default function MonstersPage () {
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
  const { searchValue } = useSearchContext()

  const [monsterType, setMonsterType] = useState('small')
  const { filteredMonsters, error, loading } = useFilteredMonsters(searchValue, monsterType)

  if (loading) return <CustomLoader />
  if (error) return <div>Error: {error}</div>

   

  return (
    <div className='monsters-container'>
        <header style={{padding:"0", display:'flex' , flexDirection:"column", width:"100%",color:"#eee"}}>
        <MonsterTypeSelector 
            isSearching={searchValue && searchValue.trim() !== ""}
            monsterType={monsterType}
            onMonsterTypeChange={setMonsterType}
        />
        
        {searchValue && searchValue.trim() !== "" && (
            <span className="search-results-indicator">
                <span className="results-count">
                    {filteredMonsters.length} results found for "{searchValue}"
                </span>
                {filteredMonsters.length === 0 && (
                    <span className="no-results">
                        Try adjusting your search terms
                    </span>
                )}
            </span>
        )}
        </header>
        
        <MonsterList monsters={filteredMonsters} />
    </div>
);
}
