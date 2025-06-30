import { useState } from 'react'
import { QuestCard } from '../Components/quest/QuestCard'
import { useSearchContext } from '../context/SearchContext'

export default function QuestPage () {
  /*{

            "_id": {
                "$oid": "" 
            },
            "name": "",
            "client": "", 
            "description": "", 
            "reward":  ,
            "map": "", 
            "isKey": true, 
            "questType": "Village", 
            "game": "Monster Hunter Portable 3rd", 
            "difficulty": "", 
            "objective": "", 
            "targets": [
                ""
            ]
        }, 
        */
  const [selectedType, setSelectedType] = useState('Village')

  const handleTypeChange = type => {
    setSelectedType(type)
  }

  const { searchValue } = useSearchContext()

  const MisionT = searchValue => {
    return searchValue === '' ? (
      <ul
        className='item-type-select'
        style={{ display: 'flex', justifyContent: 'center' }}
      >
        <li
          className={`quest-Type ${
            selectedType === 'Village' ? 'item-type-selected' : ''
          }`}
          onClick={() => handleTypeChange('Village')}
        >
          Village
        </li>
        <li
          className={`quest-Type ${
            selectedType === 'Guild' ? 'item-type-selected' : ''
          }`}
          onClick={() => handleTypeChange('Guild')}
        >
          Guild
        </li>
      </ul>
    ) : (
      <ul className='item-type-select quest-navigation '>
        <li>Search Result:</li>
      </ul>
    )
  }

  return (
    <div>
      <nav className='quest-navigation'>{MisionT(searchValue)}</nav>

      {<QuestCard questTypeB={selectedType} />}
    </div>
  )
}
