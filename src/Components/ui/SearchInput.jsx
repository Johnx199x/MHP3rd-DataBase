import { useLocation } from 'react-router-dom';
import { useSearchContext } from '../../context/SearchContext';
import "./SearchInput.css"
import debounce from "just-debounce-it";
import { useCallback } from "react";

export const SearchInput = () => {
    
    const { searchValue, setSearchValue } = useSearchContext();

        // eslint-disable-next-line react-hooks/exhaustive-deps
        const debouncedSearch = useCallback(
            debounce(newSearch => {
       setSearchValue(newSearch)
    }, 300)
    , [searchValue]
  )


        const handleChange=(e)=>{
            const newSearch =e.target.value;
           debouncedSearch(newSearch)
        };
        
        const handleSubmit =(event)=>{
            event.preventDefault()
        }
    const location = useLocation()
       
        
        return(
            <form action="" className={`search-container ${searchValue !== "" ? "search-notEmpty":""}`} onSubmit={handleSubmit} > 
            <input 
            type="search" 
            name="search" 
            className="search-input"
            placeholder={location.pathname.includes("/monsters")?`Arzuros,Tigrex, Zinogre...`: "Quest name"}
            onChange={handleChange}
            
            />
            <i className="fa fa-search"></i>
            </form>
        )
        
}
export default SearchInput;