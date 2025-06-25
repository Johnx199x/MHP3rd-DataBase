import './MonsterDrops.css'

export const MonsterDrops = ({ drops, dropsRank, monsterName, isLarge }) => {
    
    const isJhenMohran = monsterName === "Jhen Mohran";

    if (!drops) return null;
    
    return (
        <table className='monster-drops-table' style={{marginTop:"1rem"}}>
            <caption className='monster-drops-table-caption'>{dropsRank}</caption>
            <thead>
                {isLarge ? ( 
                    !isJhenMohran ? ( // largue reward head (no jehn)
                        <tr>
                            <th className='monster-drops-table-header'>Item name</th>
                            <th className='monster-drops-table-header'>Body Carves</th>
                            <th className='monster-drops-table-header'>Capture Reward</th>
                            <th className='monster-drops-table-header'>Wound Rewards</th>
                            <th className='monster-drops-table-header'>Shiny Drops</th>
                            {drops[0]?.length > 5 && (
                                <th className='monster-drops-table-header'>Tail Carves</th>
                            )}
                            {drops[0]?.length > 6 && (
                                <th className='monster-drops-table-header'>Head Carves(x1)</th>
                            )}
                        </tr>
                    ) : ( //jehn reward
                        <tr>
                            <th className='monster-drops-table-header'>Item name</th>
                            <th className='monster-drops-table-header'>Body Carves(x8)</th>
                            <th className='monster-drops-table-header'>Wound Reward</th>
                            <th className='monster-drops-table-header'>Inside Mouth Carves</th>
                        </tr>
                    )
                ) : ( // small monster reward th
                    <tr>
                        <th className='monster-drops-table-header'>Item name</th>
                        <th className='monster-drops-table-header'>Monster Reward</th>
                    </tr>
                )}
            </thead>
            <tbody>
                {drops.map((element, index) => ( 
                    <tr key={index} className='monster-drops-table-row'>
                        {element.map((item, itemIndex) => (
                            <td className="monster-drops-table-item" key={itemIndex}>
                                {itemIndex === 0 || item === "-" 
                                    ? item 
                                    : item === 0 // if item have 0% change for "-" 
                                        ? "-" 
                                        : `${item}%`
                                }
                            </td>
                        ))}
                    </tr>
                ))}
            </tbody>
        </table>
    );
};