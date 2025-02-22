import React,{useRef} from 'react';

import "./HeaderApp.css"
import { SearchInput } from './searchInput/SearchInput'

export const HeaderApp = () => {

    const $sideBtn = useRef(null)

const handleClick=(e)=>{
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
            <button className="panel-btn hamburger hamburger--collapse" ref={$sideBtn} type="button" onClick={handleClick}>
                <span className="hamburger-box">
                <span className="hamburger-inner"></span>
                </span>
            </button>
            <h2>MHP3RD Data-Base</h2>
            <SearchInput />
        </header>
    )
}
