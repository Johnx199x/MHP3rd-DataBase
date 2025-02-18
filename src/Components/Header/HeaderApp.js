import React from 'react';

import "./HeaderApp.css"
import { SearchInput } from './searchInput/SearchInput'

export const HeaderApp = ({zone}) => {

const handleClick=(e)=>{
    const $sideMenu = document.querySelector(".side-menu")
    !$sideMenu.classList.contains("show")
        ?$sideMenu.classList.add("show")
        :$sideMenu.classList.remove("show");

}

    
    return (
        <header>
            <button className="panel-btn hamburger hamburger--collapse" type="button" onClick={handleClick}>
                <span className="hamburger-box">
                <span className="hamburger-inner"></span>
                </span>
            </button>
            <h2>MH3rd Data-Base</h2>
            <SearchInput />
        </header>
    )
}
