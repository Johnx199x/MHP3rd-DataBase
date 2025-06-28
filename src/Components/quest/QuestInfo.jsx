import { getMonsterImage } from '../../utils/imageHelper'
import { CollapsibleSection } from '../ui/CollapsibleSection'
import { useEffect,useState } from 'react'
import chest from "../../Assets/icons/Others/Chest.webp"

export const QuestInfo = ({
  name,
  client,
  description,
  reward,
  map,
  isKey,
  objective,
  targett
}) => {
  const [imageSrc, setImageSrc] = useState([]);

useEffect(() => {
  if (targett && targett.length > 0) {
    const loadImages = async () => {
      try {
        const imagePromises = targett.map(ele => 
          getMonsterImage(`MH3U-${ele}_Icon.png`)
        );
        const images = await Promise.all(imagePromises);
        setImageSrc(images);
      } catch (error) {
        console.error('Error loading images:', error);
      }
    };
    
    loadImages();
  } else {
    setImageSrc([]);
  }
}, [targett]);

  return (
    <li className='search-item quest'>
      <CollapsibleSection
        title={
          <span className={`monsters-info-tag ${isKey ? 'key-quest' : ''}`}>
            {name}
          </span>
        }
        imgArr = {imageSrc.length !=0 ? imageSrc : [chest] }
      >
        <div className={`quest-item-desc}`}>
          <ul className='quest-item-desc-list'>
            <li className='list-item'>
              <span className='item-tag'>Client:</span>
              <span>{client}</span>
            </li>

            <li className='list-item'>
              <span className='item-tag'>Description:</span>
              <span>{description}</span>
            </li>

            <li className='list-item'>
              <span className='item-tag'>Reward:</span>
              <span>{reward?.toLocaleString() || reward}z</span>
            </li>

            <li className='list-item'>
              <span className='item-tag'>Map:</span>
              <span>{map}</span>
            </li>

            <li className='list-item'>
              <span className='item-tag'>Objective:</span>
              <span>{objective}</span>
            </li>

            {targett && targett.length > 0 && (
              <li className='list-item list-item-monster-icon'>
                <span className='item-tag'>Target Monsters:</span>
                <div className='monster-icons-container'>
                  { imageSrc.map((ele, index) => {
                      let imgSrc = ele;
                      return (
                        <img
                          key={index}
                          src={imgSrc}
                          alt={`${targett[index]} icon`}
                          title={targett[index]}
                        />
                      )
                    })}
                </div>
              </li>
            )}
          </ul>
        </div>
      </CollapsibleSection>
    </li>
  )
}
