import React,{useRef} from 'react'
import "./SideBar.css"


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
      <li className='side-list-item' onClick={()=>handleClick("Home")}><i class="fa-solid fa-house" style={{marginRight:"0.5rem"}}></i>Home</li>
      <li className='side-list-item'  onClick={()=>handleClick("Monsters")}>Monsters</li>
      <li className='side-list-item'  onClick={()=>handleClick("Misions")}>Misions</li>
      <li className='side-list-item'  onClick={()=>handleClick("Items")}>Items</li>
      <li className='side-list-item'  onClick={()=>handleClick("Ubications")}>Ubications</li>
      <br />
      <br />
      
      <li className='side-list-item side-list-item-about' onClick={()=>handleClick("About This Project")}><span>About This Project</span></li>
      
    </ul>
    </div>
  )
}
