import {  useRef,useState } from 'react'
import './QuestStarSelection.css'

export const QuestStarSelection = ({
  questType,
  searchValue,
  setQuestLevel
}) => {
  const selectedRef = useRef(null)

  const getStarLevels = () => {
    if (questType === 'Village') {
      return ['1★', '2★', '3★', '4★', '5★', '6★']
    }
    return ['1★', '2★', '3★', '4★', '5★', '6★', '7★', '8★']
  }

  const starLevels = getStarLevels()
  const [star,setStar] = useState(1);


  const handleStarClick = (starLevel, event) => {
    setStar(event.currentTarget.innerText)
    setQuestLevel(starLevel)
  }

  const handleKeyDown = (starLevel, event) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault()
      handleStarClick(starLevel, event)
    }
  }


  if (searchValue !== '') {
    return null
  }

  return (
    <nav className="quest-navigation" role="navigation" aria-label="Quest difficulty selection">
      <ul className="item-type-select" role="tablist">
        {starLevels.map((starLevel, index) => (
          <li
            key={starLevel}
            className={`quest-star item-type ${star == index+1 &&'item-type-selected quest-star-selected'}`}
            onClick={(e) => handleStarClick(starLevel, e)}
            onKeyDown={(e) => handleKeyDown(starLevel, e)}
            tabIndex={0}
            role="tab"
            aria-selected={index === 0}
            aria-label={`${starLevel} difficulty quests`}
            ref={index === 0 ? selectedRef : null}
          >
            {starLevel.replace('★', '')}
          </li>
        ))}
      </ul>
    </nav>
  )
}