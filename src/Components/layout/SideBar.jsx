import { useRef } from 'react'
import './SideBar.css'
import MonsterIcon from '../../Assets/icons/Others/Book-White.webp'
import QuestIcon from '../../Assets/icons/Others/Ticket-White.webp'
import UbiIcon from '../../Assets/icons/Others/Map_Icon.png'
import ItemIcon from '../../Assets/icons/Others/Chest.webp'
import AboutIcon from '../../Assets/icons/Others/Question_Mark_Icon_Orange.png'
export const SideBar = ({ ubi }) => {
  const $sideMenu = useRef(null)

  const handleClick = newZone => {
    if ($sideMenu.current.classList.contains('show'))
      $sideMenu.current.classList.remove('show')

    if (document.querySelector('.panel-btn').classList.contains('is-active'))
      document.querySelector('.panel-btn').classList.remove('is-active')
    ubi(newZone)
  }
  return (
    <div className='side-menu' ref={$sideMenu}>
      <ul className='side-list'>
        <li className='side-list-item' onClick={() => handleClick('Home')}>
          <i
            className='fa-solid fa-house'
            style={{ marginRight: '0.5rem' }}
          ></i>
          Home
        </li>
        <li className='side-list-item' onClick={() => handleClick('Monsters')}>
          <img src={MonsterIcon} alt='monster-Book-Icon'
            style={{ marginRight: '0.5rem' }}
          ></img>
          Monsters
        </li>
        <li className='side-list-item' onClick={() => handleClick('Misions')}>
          <img src={QuestIcon} alt='Quest-icon'
            style={{ marginRight: '0.5rem' }}
          ></img>
          Quest
        </li>
        <li className='side-list-item' onClick={() => handleClick('Items')}>
          <img src={ItemIcon} alt='Item Icon'
            style={{ marginRight: '0.5rem' }}
          ></img>
          Items
        </li>
        <li
          className='side-list-item'
          onClick={() => handleClick('Ubications')}
        >
          <img src={UbiIcon} alt='Map icon'
            style={{ marginRight: '0.5rem' }}
          ></img>
          Ubications
        </li>
        <li>
          <br />
        </li>
        <li>
          <br />
        </li>

        <li
          className='side-list-item'
          onClick={() => handleClick('About This Project')}
        >
          <img src={AboutIcon} alt='About icon'
            style={{ marginRight: '0.5rem' }}
          ></img>
          <span>About This Project</span>
        </li>
      </ul>
    </div>
  )
}
