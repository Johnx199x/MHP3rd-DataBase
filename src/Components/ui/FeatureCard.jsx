import './FeatureCard.css'
import { getOtherImage } from '../../utils/imageHelper'
import {useState,useEffect} from 'react'

export const FeatureCard = ({ tittle, children, icon }) => {
  const [imageSrc , setImageSrc] = useState(undefined);

  useEffect(()=>{
    icon && getOtherImage(icon).then(setImageSrc);
  },[icon])

  return (
    
      <div className='feature-card'>
        {icon && (
          <div className='feature-card-icon'>
            <img src={imageSrc} alt={`${icon}-icon`} ></img>
          </div>
        )}
        <h3 className='feature-card-title'>{tittle}</h3>
        <div className='feature-card-description'>
            {children}
            </div>
      </div>
  )
}
