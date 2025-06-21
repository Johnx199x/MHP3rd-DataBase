import './FeatureCard.css'
import { getOtherImage } from '../../utils/imageHelper'

export const FeatureCard = ({ tittle, children, icon }) => {
  const imgSrc = getOtherImage(icon);
  return (
    
      <div className='feature-card'>
        {icon != "none" && (
          <div className='feature-card-icon'>
            <img src={imgSrc} alt={`${icon}-icon`} ></img>
          </div>
        )}
        <h3 className='feature-card-title'>{tittle}</h3>
        <div className='feature-card-description'>
            {children}
            </div>
      </div>
  )
}
