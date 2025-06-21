import {useRef,useState} from 'react';

import "./HeaderApp.css"
import { SearchInput } from '../ui/SearchInput'
import { ThemeContext } from '../../context/ThemeContext';


export const HeaderApp = () => {
    const $themeBtn = useRef(null)
    const $sideBtn = useRef(null)

    const [theme, setTheme] = useState(localStorage.getItem("theme")||localStorage.setItem("theme",'lightTheme'))
    const changeTheme=(theme)=>{
        setTheme(theme)
    }
    
    const handleClickTheme = ()=>{
        <ThemeContext theme={theme}/> 
        theme==="lightTheme"?changeTheme("darkTheme"):changeTheme("lightTheme");

    }
    let themeIcon;

    theme ==="lightTheme"?themeIcon= <i className="fa-solid fa-moon"></i>:themeIcon=<i className="fa-regular fa-sun"></i>;
    
const handleClick=()=>{
    const $sideMenu = document.querySelector(".side-menu") //cambiar luego
    !$sideMenu.classList.contains("show")
        ?$sideMenu.classList.add("show")
        :$sideMenu.classList.remove("show");

    !$sideBtn.current.classList.contains("is-active")
        ?$sideBtn.current.classList.add("is-active")
        :$sideBtn.current.classList.remove("is-active");
    

}
    return (
        <header>
            <button name="Hamburguer-menu"  className="panel-btn hamburger hamburger--collapse" ref={$sideBtn} type="button" onClick={handleClick}>
                <span className="hamburger-box">
                <span className="hamburger-inner"></span>
                </span>
            </button>
            <h2>MHP3RD Data-Base</h2>
            <button name='Theme button' className='themeBtn' 
                onClick={handleClickTheme}
                ref={$themeBtn}>{themeIcon} </button>
            <ThemeContext theme={theme}/>
            <SearchInput />
        </header>
    )
}
