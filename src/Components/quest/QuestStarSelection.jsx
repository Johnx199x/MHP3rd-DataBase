export  const QuestStarSelection = (
  {questType,
  searchValue,
  setQuestLevel}
) =>{
  const handleClickItemSelect = e => {
    //select quest difficulty
    const $liItem = document.querySelectorAll('.item-type')
    $liItem.forEach(element => {
      element.classList.contains('item-type-selected') &&
        element.classList.remove('item-type-selected')
    })
    setQuestLevel(e.target.textContent)
    e.target.classList.add('item-type-selected')
  }
  return searchValue === '' ? (
    questType === 'Village' ? (
      <ul className='item-type-select'>
        <li className='item-type' onClick={handleClickItemSelect}>
          1★
        </li>
        <li className='item-type' onClick={handleClickItemSelect}>
          2★
        </li>
        <li className='item-type' onClick={handleClickItemSelect}>
          3★
        </li>
        <li className='item-type' onClick={handleClickItemSelect}>
          4★
        </li>
        <li className='item-type' onClick={handleClickItemSelect}>
          5★
        </li>
        <li className='item-type' onClick={handleClickItemSelect}>
          6★
        </li>
      </ul>
    ) : (
      <ul className='item-type-select'>
        <li className='item-type' onClick={handleClickItemSelect}>
          1★
        </li>
        <li className='item-type' onClick={handleClickItemSelect}>
          2★
        </li>
        <li className='item-type' onClick={handleClickItemSelect}>
          3★
        </li>
        <li className='item-type' onClick={handleClickItemSelect}>
          4★
        </li>
        <li className='item-type' onClick={handleClickItemSelect}>
          5★
        </li>
        <li className='item-type' onClick={handleClickItemSelect}>
          6★
        </li>
        <li className='item-type' onClick={handleClickItemSelect}>
          7★
        </li>
        <li className='item-type' onClick={handleClickItemSelect}>
          8★
        </li>
      </ul>
    )
  ) : (
    ''
  )
}
