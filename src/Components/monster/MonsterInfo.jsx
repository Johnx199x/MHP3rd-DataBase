import "./MonsterInfo.css"
import { MonstersDescription } from './MonsterDesc'
import { CollapsibleSection } from '../ui/CollapsibleSection'

export const MonsterInfo = (props) => {
    
    return (
            <CollapsibleSection  title= {props.name} image={props.img} loading="lazy">
                <MonstersDescription 
                    name={props.name}
                    info={props.info} 
                    type={props.type}
                    danger={props.danger}
                    element={props.element}
                    weakness={props.weakness}
                    ailments={props.ailments}
                    huntTips={props.huntTips}
                    dropsLowRank={props.dropsLowRank}
                    dropsHighRank={props.dropsHighRAnk}
                    isLarge={props.isLarge} 
                    />
            </CollapsibleSection>
    )
    }
