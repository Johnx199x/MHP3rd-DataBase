import {  useState, useEffect, useCallback,useMemo } from 'react'

import './HeaderApp.css'
import { SearchInput } from '../ui/SearchInput'
import { ThemeContext } from '../../context/ThemeContext'

export const HeaderApp = () => {

    const [theme, setTheme] = useState(() => {
    return localStorage.getItem('theme') || 'lightTheme'
  })
  const [showSideMenu, setShowSideMenu] = useState(false)

 useEffect(() => { // theme useEffect
    localStorage.setItem('theme', theme)
    
  }, [theme])

  useEffect(() => { //sideMenu useEffect
    const $sideMenu = document.querySelector('.side-menu')
    if ($sideMenu) {
      $sideMenu.classList.toggle('show', showSideMenu)
    }
  }, [showSideMenu])


   const handleThemeToggle = useCallback(() => {
    setTheme(prevTheme => 
      prevTheme === 'lightTheme' ? 'darkTheme' : 'lightTheme'
    )
  }, [])

   const themeIcon = useMemo(() => {
    return theme === 'lightTheme' 
      ? <i className='fa-solid fa-moon' aria-label="Modo oscuro"></i>
      : <i className='fa-regular fa-sun' aria-label="Modo claro"></i>
  }, [theme])


  return (
    <header>
      <button
        name='Hamburguer-menu'
        className={`panel-btn hamburger hamburger--collapse ${
          showSideMenu ? 'is-active' : ''
        }`}
        type='button'
        onClick={() => setShowSideMenu(!showSideMenu)}
      >
        <span className='hamburger-box'>
          <span className='hamburger-inner'></span>
        </span>
      </button>
      <h2>MHP3RD Data-Base</h2>
      <button
        name='Theme button'
        className='themeBtn'
        onClick={handleThemeToggle}
      >
        {themeIcon}{' '}
      </button>
      <ThemeContext theme={theme} />
      <SearchInput />
    </header>
  )
}
