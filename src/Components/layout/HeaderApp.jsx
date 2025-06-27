import { useState, useEffect, useCallback, useMemo } from 'react'
import { useLocation } from 'react-router-dom'

import './HeaderApp.css'
import { SearchInput } from '../ui/SearchInput'
import { ThemeContext } from '../../context/ThemeContext'

export const HeaderApp = () => {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('theme') || 'lightTheme'
  })
  const [showSideMenu, setShowSideMenu] = useState(false)
  
  // Usar useLocation para obtener la ruta actual
  const location = useLocation()

  useEffect(() => {
    // theme useEffect
    localStorage.setItem('theme', theme)
  }, [theme])

  useEffect(() => {
    //sideMenu useEffect
    const $sideMenu = document.querySelector('.side-menu');
    const $sideOverlay =document.querySelector(".sidebar-overlay");
    if ($sideMenu) {
      $sideMenu.classList.toggle('show', showSideMenu)
      $sideOverlay.classList.toggle('show', showSideMenu)
    }
  }, [showSideMenu])

  const handleThemeToggle = useCallback(() => {
    setTheme(prevTheme =>
      prevTheme === 'lightTheme' ? 'darkTheme' : 'lightTheme'
    )
  }, [])

  const themeIcon = useMemo(() => {
    return theme === 'lightTheme' ? (
      <i className='fa-solid fa-moon' aria-label='Modo oscuro'></i>
    ) : (
      <i className='fa-regular fa-sun' aria-label='Modo claro'></i>
    )
  }, [theme])

  const shouldShowSearch = useMemo(() => {
    const searchRoutes = ['/monsters', '/quests']
    return searchRoutes.includes(location.pathname)
  }, [location.pathname])

  const getPageTitle = useMemo(() => {
    const titles = {
      '/': 'MHP3RD Data-Base',
      '/monsters': 'Monsters Database',
      '/quests': 'Quest Database', 
      '/items': 'Items Database',
      '/locations': 'Locations Database',
      '/about': 'About Project'
    }
    return titles[location.pathname] || 'MHP3RD Data-Base'
  }, [location.pathname])

  return (
    <header>
      <button
        name='Hamburguer-menu'
        className={`panel-btn hamburger hamburger--collapse ${
          showSideMenu ? 'is-active' : ''
        }`}
        type='button'
        onClick={() => setShowSideMenu(!showSideMenu)}
        aria-label='Open nav menu'
        aria-expanded={showSideMenu}
      >
        <span className='hamburger-box'>
          <span className='hamburger-inner'></span>
        </span>
      </button>
      
      <h2 className="header-title">{getPageTitle}</h2>
      
      {shouldShowSearch && <SearchInput />}
      
      <button
        name='Theme button'
        className='themeBtn'
        onClick={handleThemeToggle}
        aria-label={theme === 'lightTheme' ? 'Cambiar a modo oscuro' : 'Cambiar a modo claro'}
      >
        {themeIcon}
      </button>
      
      <ThemeContext theme={theme} />
    </header>
  )
}