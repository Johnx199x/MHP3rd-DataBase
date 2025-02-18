import React from 'react'
import "./SideBar.css"
import optionIcon from "../../Assets/icons/option-icon.png"

export const SideBar = ({ubi}) => {

    const $sideMenu = document.querySelector(".side-menu");
    
const handleClick = (newZone)=>{
  
  if($sideMenu.classList.contains("show")) $sideMenu.classList.remove("show");
  console.log(newZone)
  ubi(newZone);

  
}
  return (
    <div className='side-menu'>
    <ul className='side-list'>
      <li className='side-list-item'  onClick={()=>handleClick("Monsters")}>Monsters</li>
      <li className='side-list-item'  onClick={()=>handleClick("Misions")}>Misions</li>
      <li className='side-list-item'  onClick={()=>handleClick("Items")}>Items</li>
      <li className='side-list-item'  onClick={()=>handleClick("Ubications")}>Ubications</li>
      <br />
      <hr />
      <li className='side-list-item' onClick={()=>handleClick("Options")}><img src={optionIcon} alt="option-icon" />Options</li>
      
    </ul>
    </div>
  )
}
