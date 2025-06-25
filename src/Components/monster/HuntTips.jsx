import { getHuntTipsImage } from "../../utils/imageHelper";
import { useState,useEffect } from "react";
import {ImageModal} from '../ui/ImageModal'

export const HuntTips = ({ huntTips }) => {
   
    
    const [prepare, breakPart, weaknessSign, imageName] = huntTips;
    
    const [imageSrc, setImageSrc] = useState(undefined)
    
      useEffect(() => {
        huntTips && getHuntTipsImage(imageName).then(setImageSrc)
      }, [huntTips,imageName])
    
       if (!huntTips) return null;
       
    return (
        <div className="hunt-tips-container">
            <p>
                <span className='monster-info-tags'>Prepare: </span> {prepare}
                <br /><br />
                <span className='monster-info-tags'>Break: </span>{breakPart}
                <br /><br />
                <span className='monster-info-tags'>Weakness Sign:</span> {weaknessSign}
                <br /><br />
            </p>
            {imageSrc && (
                <ImageModal 
                    src={imageSrc} 
                    alt={`tips-${imageName}`}
                />
            )}
        </div>
    );
};