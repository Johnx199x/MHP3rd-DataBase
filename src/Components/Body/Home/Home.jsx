import "./Home.css"
import zinogre from "../../../Assets/img/MHWI-Render_Zinogre.webp"

export default function Home(){
  return (
    <div className='home-container'>
        <img className="home-img" src={zinogre} alt="zinogre_img" />
        <h3>"Your quick guide to hunting monsters"</h3>
        <p>Welcome to the MHP3rd Database! Here you’ll find everything you need to become the ultimate hunter. Explore detailed information about monsters, items, quests, locations, and more.</p>
        <h3>What You Can Find</h3>
        <ul className='home-list'>
            <li><span className="home-tags-section">Monsters Section:</span>
                <ul>
                    <li><span className="home-tags">Hunter Notes:</span> Detailed observations from experienced hunters.</li>
                    <li><span className="home-tags">Weaknesses:</span> Elemental and physical weaknesses for each monster.</li>
                    <li><span className="home-tags">Monster Element:</span> The elemental attributes of each monster.</li>
                    <li><span className="home-tags">Hunt Tips:</span> Strategies to take down monsters efficiently.</li>
                    <li><span className="home-tags">Loot & Drop Rates:</span> Rewards and drop rates for each monster.</li>
                </ul>
            </li>
            <li><span className="home-tags-section">Items Section(In development):</span>
                <ul>
                    <li><span className="home-tags">Item List:</span> Complete catalog of items and their uses.</li>
                </ul>
            </li>
            <li><span className="home-tags-section">Quests Section(In development):</span>
                <ul>
                    <li><span className="home-tags">Quest List:</span> All available quests with objectives. (<span style={{color:"var(--detail-color)"}}>-Quest Name-</span> are necessary to advance to the next rank)</li>
                    <li><span className="home-tags">Rewards:</span> What you can earn from each quest.</li>
                    <li><span className="home-tags">Difficulty Levels:</span> From beginner to advanced challenges.</li>
                </ul>
            </li>
            <li><span className="home-tags-section">Location Section(In development):</span>
                <ul>
                    <li><span className="home-tags">Maps:</span> Detailed maps of all areas.</li>
                    <li><span className="home-tags">Gathering Spots:</span> Key locations for resources.</li>
                    <li><span className="home-tags">Monster Habitats:</span> Where to find each monster.</li>
                </ul>
            </li>
            <li><span className="home-tags-section">About Section:</span>
                <ul>
                    <li><span className="home-tags">Project Description:</span> Why this database was created.</li>
                    <li><span className="home-tags">About Me:</span> Learn about the creator.</li>
                    <li><span className="home-tags">Acknowledgments:</span> Special thanks to the Monster Hunter community and resources for their support in making this project possible.</li>
                    <li><span className="home-tags">Contact:</span> How to get in touch.</li>
                </ul>
            </li>
        </ul>
    </div>
  )
}
