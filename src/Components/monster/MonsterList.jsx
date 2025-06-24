import { MonsterInfo } from './MonsterInfo';


export const MonsterList = ({ monsters }) => {

    return (
        <ul className='monster-list'>
            {monsters.map((monster, index) => (
                <li key={monster.id || index} className='search-item' >
                    <MonsterInfo 
                        name={monster.name} 
                        img={monster.image}
                        type={monster.type}
                        info={monster.info} 
                        danger={monster.danger}
                        isLarge={monster.isLarge}
                        element={monster.element}
                        weakness={monster.weakness}
                        ailments={monster.ailments}
                        {...(monster.isLarge && {
                            huntTips: monster.huntTips
                        })}
                        dropsLowRank={monster.dropsLowRank}
                        dropsHighRAnk={monster.dropsHighRAnk}
                    />
                </li>
            ))}
        </ul>
    );
};
