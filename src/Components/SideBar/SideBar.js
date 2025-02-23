import React,{useRef} from 'react'
import "./SideBar.css"
import optionIcon from "../../Assets/icons/option-icon.png"


export const SideBar = ({ubi}) => {

    const $sideMenu = useRef(null);

const handleClick = (newZone)=>{
  if($sideMenu.current.classList.contains("show")) $sideMenu.current.classList.remove("show");
  
  if(document.querySelector(".panel-btn").classList.contains("is-active")) document.querySelector(".panel-btn").classList.remove("is-active")


  console.log(newZone)
  ubi(newZone);

  
}
  return (
    <div className='side-menu' ref={$sideMenu}>
    <ul className='side-list'>
      <li className='side-list-item'  onClick={()=>handleClick("Monsters")}>Monsters</li>
      <li className='side-list-item'  onClick={()=>handleClick("Misions")}>Misions</li>
      <li className='side-list-item'  onClick={()=>handleClick("Items")}>Items</li>
      <li className='side-list-item'  onClick={()=>handleClick("Ubications")}>Ubications</li>
      <br />
      <br />
      <li className='side-list-item' onClick={()=>handleClick("Options")}><img src={optionIcon} alt="option-icon" />Options</li>
      <li className='side-list-item' onClick={()=>handleClick("About This Project")}>About This Project</li>
      
    </ul>
    </div>
  )
}
