import { getMonsterImage } from "../utils/imageHelper";

import "./CollapsibleSection.css";


export const CollapsibleSection = ({ title, children, image }) => {
    let up = ">"; 
    let imgSrc = image? getMonsterImage(image):undefined;
     
    const handleClick=(e)=>{ //Modify arrow and toggle children
            let $Arrow = image ?e.currentTarget.children[2] : e.currentTarget.children[1];
    
            $Arrow.classList.contains("rotate")
                ?$Arrow.classList.remove("rotate")
                :$Arrow.classList.add("rotate")
    
            let $collapseSection = e.currentTarget.nextElementSibling;
    
            $collapseSection.classList.contains("show-description")
                ?$collapseSection.classList.remove("show-description")
                :$collapseSection.classList.add("show-description")            
        
    }

    return (
        <>
            <div className="collapseSection" onClick={handleClick}>
                {image && (
                    <img className="collapseSection-icon" src={imgSrc} alt={`${title}-image`} />
                    )}
                <span className='collapseSection-info-tags'>{title}</span>
                <span className='collapseSection-arrow'>{up}</span>
            </div>
                {children}
        </>
    );
};