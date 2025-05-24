import { useState, useEffect } from "react"
import React from 'react'
import "./SearchInput.css"

export const SearchInput = () => {
        const [searchValue, setSearchValue] = useState("");

        


        const handleChange=(e)=>{
            setSearchValue(e.target.value)
        };
        
        useEffect(() => {
            const $searchItems = document.querySelectorAll(".search-item");
            searchValue !== "" 
                ? document.querySelector(".search-container").classList.add("search-notEmpty")
                : document.querySelector(".search-container").classList.remove("search-notEmpty")
                $searchItems.forEach(el => {
                    el.children[0].textContent.toLowerCase().includes(searchValue.toLowerCase() )
                        ? el.classList.remove("hide")
                        : el.classList.add("hide")
                });    
        }, [searchValue])
        
        return(
            <form action="" className="search-container"> 
            <input 
            type="search" 
            name="search" 
            className="search-input"
            placeholder="Search..."
            onChange={handleChange}
            
            />
            <i className="fa fa-search"></i>
            </form>
        )
        
}
export default SearchInput;