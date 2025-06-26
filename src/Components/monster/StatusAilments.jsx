import fireblightIcon from '../../Assets/icons/StatusEffect/Status_Effect-Severe_Fireblight_Icon.webp'
import thunderblightIcon from '../../Assets/icons/StatusEffect/Status_Effect-Thunderblight_Icon.webp'
import waterblightIcon from '../../Assets/icons/StatusEffect/Status_Effect-Severe_Waterblight_Icon.webp'
import iceblightIcon from '../../Assets/icons/StatusEffect/Status_Effect-Iceblight_Icon.webp'
import dragonblightIcon from '../../Assets/icons/StatusEffect/Status_Effect-Dragonblight_Icon.webp'
import poisonIcon from '../../Assets/icons/StatusEffect/Status_Effect-Deadly_Poison.webp'
import snowmanIcon from '../../Assets/icons/StatusEffect/StatusEffect-SnowMan.webp'
import soiledIcon from '../../Assets/icons/StatusEffect/StatusEffect-Soiled.webp'
import stunIcon from '../../Assets/icons/StatusEffect/Status-Stun.webp'
import paralysisIcon from '../../Assets/icons/StatusEffect/Status-Paralysis.webp'
import lifedrainIcon from '../../Assets/icons/StatusEffect/StatusEffect-Leeched.webp'
import sleepIcon from '../../Assets/icons/StatusEffect/Status-Sleep.webp'
import defencedownIcon from '../../Assets/icons/StatusEffect/StatusEffect-DefenseDow.webp'
import muddyIcon from '../../Assets/icons/StatusEffect/Status_Effect-Webbed_MH4_Icon.webp'


const ailmentIcons = {
    "Fireblight": fireblightIcon,
    "Thunderblight": thunderblightIcon,
    "Waterblight" : waterblightIcon,
    "IceBlight": iceblightIcon,
    "Dragonblight" : dragonblightIcon,
    "Poison": poisonIcon,
    "Snowman": snowmanIcon,
    "Soiled":soiledIcon,
    "Stun":stunIcon,
    "Paralysis":paralysisIcon,
    "Life Drain":lifedrainIcon,
    "Sleep":sleepIcon,
    "Defence Down":defencedownIcon,
    "Muddy":muddyIcon
};

export const StatusAilments = ({ ailments }) => {
    if (!ailments || ailments.length === 0) return "None"; 
    
    return (
        <ul className="status-ailments-list">
        {ailments.map((ailment, index) => (
            <li key={index} className={`status-ailment-item ailment-${ailment.toLowerCase().replace(' ', '-')} span-element-icon`}>
                {ailment}
                {ailmentIcons[ailment] && (
                    <img src={ailmentIcons[ailment]} alt={`${ailment}_status_img`} />
                )}
            </li>
        ))}
    </ul>
    );
};