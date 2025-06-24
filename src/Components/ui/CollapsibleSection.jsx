import { useState, useEffect } from 'react'
import { getMonsterImage } from '../../utils/imageHelper'
import './CollapsibleSection.css'

export const CollapsibleSection = ({ title, children, image }) => {
  let up = '>'
  const [imageSrc, setImageSrc] = useState(undefined)

  useEffect(() => {
    image && getMonsterImage(image).then(setImageSrc)
  }, [image])

  const [isCollapsed, setIsCollapsed] = useState(true)
  return (
    <>
      <div
        className='collapseSection'
        onClick={() => setIsCollapsed(!isCollapsed)}
      >
        {image && (
          <img
            className='collapseSection-icon'
            src={imageSrc}
            alt={`${title}-image`}
          />
        )}
        <span className='collapseSection-info-tags'>{title}</span>
        <span
          className={`collapseSection-arrow ${!isCollapsed ? 'rotate' : ''}`}
        >
          {up}
        </span>
      </div>
      {!isCollapsed && children}
    </>
  )
}
