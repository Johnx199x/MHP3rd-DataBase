import { MonsterInfo } from './MonsterInfo';

export const MonsterList = ({ monsters }) => {
    if (monsters.length === 0) {
        return <h3>Loading...</h3>;
    }

    return (
        <ul className='monster-list'>
            {monsters.map((monster, index) => (
                <li key={monster.id || index}>
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
