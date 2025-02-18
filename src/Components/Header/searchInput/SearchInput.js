import { useState } from "react"
import React from 'react'
import "./SearchInput.css"
import searchIcon from "../../../Assets/icons/search-icon.png"

export const SearchInput = () => {
        const [searchValue, setSearchValue] = useState("");
        const handleChange=(e)=>{
            setSearchValue(e.target.value)
        };
        const handleSearch=()=>{
            //metodo para buscar los elementos que se encuentren en el value del input
            console.log(searchValue);
        };
        
        
        return(
            <div className="search-container"> 
            <input 
            type="search" 
            name="search" 
            id="search-input"
            placeholder="buscar..."
            onChange={handleChange}
            />
                <img src={searchIcon} alt="search-icon" id="search-icon" onClick={handleSearch}/>
            </div>
        )
        
}
