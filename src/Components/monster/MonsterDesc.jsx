import { ElementIcon } from './ElementIcon'
import { StatusAilments } from './StatusAilments'
import { DangerRating } from './DangerRating'
import { MonsterDrops } from './MonsterDrops'
import { HuntTips } from './HuntTips'
import { CollapsibleSection } from '../ui/CollapsibleSection'

export const MonstersDescription = props => {
  return (
    <div className='monster-description'>
      <p className='monster-description-notes'>
        <span className='monster-info-tags'>Hunters Notes:</span>
        <br />
        {props.info ||
          'Unfortunately, there are no hunter notes available on this monster; its origins remain a complete mystery'}
      </p>

      <p>
        <span className='monster-info-tags'>Monster type: </span>
        {props.type}
      </p>

      <p>
        <span className='monster-info-tags'>Danger: </span>
        <DangerRating danger={props.danger} />
      </p>

      <div>
        <span className='monster-info-tags'>Monster element: </span>
        <ElementIcon elements={props.element} />
      </div>

      <div>
        <span className='monster-info-tags'>Ailments: </span>
        <StatusAilments ailments={props.ailments} />
      </div>

      <div>
        <span className='monster-info-tags'>Monster weakness: </span>
        {props.weakness ? (
          <ElementIcon elements={props.weakness} />
        ) : (
          'None weakness discovered'
        )}
      </div>
      {props.huntTips && (
        <CollapsibleSection title='Hunt Tips'>
          <HuntTips huntTips={props.huntTips} />
        </CollapsibleSection>
      )}

      <CollapsibleSection title='Monster drops'>
        <section className='monster-drops-container'>
          {props.dropsLowRank && (
            <MonsterDrops
              drops={props.dropsLowRank}
              dropsRank='Low Rank'
              monsterName={props.name}
              isLarge={props.isLarge}
            />
          )}
          {props.dropsHighRank && (
            <MonsterDrops
              drops={props.dropsHighRank}
              dropsRank='High Rank'
              monsterName={props.name}
              isLarge={props.isLarge}
            />
          )}
        </section>
      </CollapsibleSection>
    </div>
  )
}
