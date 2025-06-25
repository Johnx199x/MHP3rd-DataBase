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
        className='collapsible-header'
        onClick={() => setIsCollapsed(!isCollapsed)}
        onKeyDown={e => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault()
            setIsCollapsed(!isCollapsed)
          }
        }}
        tabIndex={0}
        role='button'
        aria-expanded={!isCollapsed}
        aria-controls={`section-${title.replace(/\s+/g, '-').toLowerCase()}`}
      >
        {image && (
          <img
            className='collapseSection-image'
            src={imageSrc}
            alt={`${title}-image`}
          />
        )}
        <span className='collapseSection-title'>{title}</span>
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
