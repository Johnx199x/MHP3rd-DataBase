import { useRef } from 'react'
import { NavLink } from 'react-router-dom'
import './SideBar.css'

import MonsterIcon from '../../Assets/icons/Others/Book-White.webp'
import QuestIcon from '../../Assets/icons/Others/Ticket-White.webp'
import UbiIcon from '../../Assets/icons/Others/Map_Icon.png'
import ItemIcon from '../../Assets/icons/Others/Chest.webp'
import AboutIcon from '../../Assets/icons/Others/Question_Mark_Icon_Orange.png'

export const SideBar = () => {
  const $sideMenu = useRef(null)
  const $overlay = useRef(null)

  const handleClick = () => {
    if ($sideMenu.current?.classList.contains('show')) {
      $sideMenu.current.classList.remove('show')
    }
    
    if ($overlay.current?.classList.contains('show')) {
      $overlay.current.classList.remove('show')
    }

    if (document.querySelector('.panel-btn')?.classList.contains('is-active')) {
      document.querySelector('.panel-btn').classList.remove('is-active')
    }
  }

  const handleOverlayClick = () => {
    handleClick()
  }

  return (
    <>
      {/* Overlay para cerrar el sidebar */}
      <div 
        className="sidebar-overlay" 
        ref={$overlay}
        onClick={handleOverlayClick}
      />
      
      <div className='side-menu' ref={$sideMenu}>
        <ul className='side-list'>
          <li>
            <NavLink 
              to="/"
              onClick={handleClick}
              className={({isActive}) => `side-list-item ${isActive ? 'active' : ''}`}
            >
              <i
                className='fa-solid fa-house'
                style={{ marginRight: '0.5rem' }}
              ></i>
              Home
            </NavLink>
          </li>
          
          <li>
            <NavLink 
              to="/monsters"
              onClick={handleClick}
              className={({isActive}) => `side-list-item ${isActive ? 'active' : ''}`}
            >
              <img src={MonsterIcon} alt='monster-Book-Icon'
                style={{ marginRight: '0.5rem' }}
              />
              Monsters
            </NavLink>
          </li>
          
          <li>
            <NavLink 
              to="/quests"
              onClick={handleClick}
              className={({isActive}) => `side-list-item ${isActive ? 'active' : ''}`}
            >
              <img src={QuestIcon} alt='Quest-icon'
                style={{ marginRight: '0.5rem' }}
              />
              Quest
            </NavLink>
          </li>
          
          <li>
            <NavLink 
              to="/items"
              onClick={handleClick}
              className={({isActive}) => `side-list-item ${isActive ? 'active' : ''}`}
            >
              <img src={ItemIcon} alt='Item Icon'
                style={{ marginRight: '0.5rem' }}
              />
              Items
            </NavLink>
          </li>
          
          <li>
            <NavLink 
              to="/locations"
              onClick={handleClick}
              className={({isActive}) => `side-list-item ${isActive ? 'active' : ''}`}
            >
              <img src={UbiIcon} alt='Map icon'
                style={{ marginRight: '0.5rem' }}
              />
              Locations
            </NavLink>
          </li>
          
          <li><br /></li>
          <li><br /></li>
          
          <li>
            <NavLink 
              to="/about"
              onClick={handleClick}
              className={({isActive}) => `side-list-item ${isActive ? 'active' : ''}`}
            >
              <img src={AboutIcon} alt='About icon'
                style={{ marginRight: '0.5rem' }}
              />
              <span>About</span>
            </NavLink>
          </li>
        </ul>
      </div>
    </>
  )
}