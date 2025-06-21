
import fireIcon from "../../Assets/icons/Element/Status-Fire.webp";
import thunderIcon from "../../Assets/icons/Element/Status-Thunder.webp";
import waterIcon from "../../Assets/icons/Element/Status-Water.webp";
import iceIcon from "../../Assets/icons/Element/Status-Ice.webp";
import dragonIcon from "../../Assets/icons/Element/Status-Draco.webp";
import poisonIcon from "../../Assets/icons/Element/Status-Poison.webp";

const elementIcons = {
    "Fire": fireIcon,
    "Thunder": thunderIcon,
    "Water": waterIcon,
    "Ice": iceIcon,
    "Dragon": dragonIcon,
    "Poison": poisonIcon
};
export const ElementIcon = ({ elements }) => {
    if (!elements || elements.length === 0) return "None"; // case for no element
    
    return (
        <>
            {elements.map((element, index) => (
                <span key={index}>
                    {elementIcons[element] ? (
                        <img src={elementIcons[element]} alt={`${element.toLowerCase()}_element_img`} />
                    ) : (
                        element
                    )}
                </span>
            ))}
        </>
    );
};