import { getHuntTipsImage } from "../../utils/imageHelper";

export const HuntTips = ({ huntTips }) => {
    if (!huntTips) return null;
    
    const [prepare, breakPart, weaknessSign, imageName] = huntTips;
    const imageSrc = getHuntTipsImage(imageName);
    
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
                <img src={imageSrc} alt={`tips-${imageName}`} />
            )}
        </div>
    );
};