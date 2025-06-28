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
  const [misionType, setMisionType] = useState('Village')
  const { searchValue } = useSearchContext()

  const MisionT = searchValue => {
    return searchValue === '' ? (
      <ul
        className='item-type-select'
        style={{ display: 'flex', justifyContent: 'center' }}
      >
        <li
          className='item-type-selected quest-Type '
          onClick={e => {
            setMisionType('Village')
            e.target.classList.add('item-type-selected')
            e.target.nextElementSibling.classList.contains(
              'item-type-selected'
            ) &&
              e.target.nextElementSibling.classList.remove('item-type-selected')
          }}
        >
          Village
        </li>
        <li
          className='quest-Type'
          onClick={e => {
            setMisionType('Guild')
            e.target.classList.add('item-type-selected')
            e.target.previousElementSibling.classList.contains(
              'item-type-selected'
            ) &&
              e.target.previousElementSibling.classList.remove(
                'item-type-selected'
              )
          }}
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

      {<QuestCard questTypeB={misionType} />}
    </div>
  )
}
