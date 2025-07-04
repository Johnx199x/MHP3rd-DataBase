export const MonsterTypeSelector = ({
  isSearching,
  monsterType,
  onMonsterTypeChange
}) => {
  const handleTypeClick = (type, event) => {
    onMonsterTypeChange(type)

    const clickedElement = event.target
    const siblings = Array.from(clickedElement.parentElement.children)

    siblings.forEach(sibling => {
      sibling.classList.remove('item-type-selected')
    })

    clickedElement.classList.add('item-type-selected')
  }

  if (isSearching) {
    return (
      <nav style={{width:"100%"}}>
        <ul className='item-type-select'>
          <li style={{padding:"0.5rem"}}>Search Result:</li>
        </ul>
      </nav>
    )
  }

  return (
    <nav style={{width:"100%"}}>
      <ul className='item-type-select' >
        <li
          className={monsterType === 'small' ? 'item-type-selected' : ''}
          onClick={e => handleTypeClick('small', e)}
        >
          Small
        </li>
        <li
          className={monsterType === 'largue' ? 'item-type-selected' : ''}
          onClick={e => handleTypeClick('largue', e)}
        >
          Large
        </li>
      </ul>
    </nav>
  )
}
