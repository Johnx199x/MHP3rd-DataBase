import { useState, useEffect } from 'react'
import { getMonsterImage } from '../../utils/imageHelper'
import './CollapsibleSection.css'

export const CollapsibleSection = ({ title, children, image, imgArr }) => {
  const [imageSrc, setImageSrc] = useState(undefined)
  const [isCollapsed, setIsCollapsed] = useState(true)

  useEffect(() => {
    image && getMonsterImage(image).then(setImageSrc)
  }, [image])

  return (
    <>
      <div
        className='collapsible-header'
        onClick={() => {
          setIsCollapsed(!isCollapsed)
        }}
        onKeyDown={e => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault()
            setIsCollapsed(!isCollapsed)
          }
        }}
        tabIndex={0}
        role='button'
        aria-expanded={!isCollapsed}
        aria-controls={`section-${title}`}
      >
        {image && (
          <img
            className='collapseSection-image'
            src={imageSrc}
            alt={`${title}-image`}
            loading="lazy"
          />
        )}
        {imgArr &&
          imgArr.map((ele, index) => {
            return <img
              key={index}
              className='collapseSection-image'
              src={ele}
              alt={`${title}-image`}
              loading="lazy"
            />
          })
        }
        <span className='collapseSection-title'>{title}</span>
        <span
          className={`collapseSection-arrow ${!isCollapsed ? 'rotate' : ''}`}
          style={{maxWidth:"50px"}}>
          &gt;
        </span>
      </div>
         
      {!isCollapsed && (children)}
    </>
  )
}