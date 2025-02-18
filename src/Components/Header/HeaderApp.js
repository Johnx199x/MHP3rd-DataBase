import React, { useState } from 'react';

import "./HeaderApp.css"
import { SearchInput } from './searchInput/SearchInput'

export const HeaderApp = () => {
const [ubication, setUbication] = useState("Monsters")
    
    return (
        <header>
            <button className="panel-btn hamburger hamburger--collapse" type="button">
                <span className="hamburger-box">
                <span className="hamburger-inner"></span>
                </span>
            </button>
            <h1>{ubication}</h1>
            <SearchInput />
        </header>
    )
}
