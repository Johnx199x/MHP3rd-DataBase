import React from 'react'
import "./About.css"

export const About = () => {

  return (

    <div className="about">
        <div className='about-description'>
            <h4>Description:</h4>
            <p>This page is a comprehensive and up-to-date database for Monster Hunter Portable 3rd, created to help hunters find detailed information about monsters. My goal is to provide the ultimate tool for MHP3rd fans, making it easier to plan hunts and explore the game's vast content.".</p>
        </div>
        <div className="about-motivation">
            <h4>Why i decide create it?</h4>
            <p>As a dedicated Monster Hunter fan, I always found it challenging to find organized and reliable information about MHP3rd. That's why I decided to create this database—to help other hunters like me who want to dive deeper into the game and make the most of their hunting experience</p>
        </div>  
        <div className="about-aboutMe">
            <h4>About me:</h4>
            <p>Hi, I'm John, a solo developer and a huge fan of the Monster Hunter series. This project is a personal endeavor born out of my passion for the game and my desire to contribute to the community. I've put countless hours into researching, organizing, and building this database to ensure it's as accurate and user-friendly as possible.</p>
        </div>
        <div className='about-credit'>
            <h4>Acknowledgments: </h4>
            <p>I want to give special thanks to the following resources for their invaluable contributions:</p>
            <ul>
                <li><a href="https://github.com/CrimsonNynja/monster-hunter-DB" target="_blank" rel="noopener noreferrer">Monster Hunter DB by CrimsonNynja</a>: A GitHub repository that provided a solid foundation for organizing game data.</li>
                <li><a href="https://gamefaqs.gamespot.com/psp/991479-monster-hunter-portable-3rd/faqs/61490" target="_blank" rel="noopener noreferrer">GameFAQs Guide by BBlitz</a>: An extensive guide that helped me verify monsters loot and their drops rates.</li>
                <li><a href="https://monsterhunter.fandom.com/wiki/MH3:_Small_Monster_Carve_List" target="_blank" rel="noopener noreferrer">Monster Hunter Fandom Wiki - Small Monster Carves</a>: A detailed list of small monster carves and rewards.</li>
                <li><a href="https://monsterhunter.fandom.com/wiki/MH3:_Monster_Carves_%26_Rewards" target="_blank" rel="noopener noreferrer">Monster Hunter Fandom Wiki - Monster Carves & Rewards</a>: A comprehensive resource for monster carves and rewards in MHP3rd.</li>
            </ul>
        </div>
        <div className="about-contact">
            <h4>Contact me:</h4>
            <p>If you have any questions, suggestions, or just want to share your thoughts about the database, feel free to reach out to me! I'm always happy to connect with fellow hunters and developers. You can find me on the following platforms:</p>

            <div className="about-contact-icons">
                <a  className="about-contact-icons-link" href="https://github.com/johnx199x" target="_blank" rel="noopener noreferrer" title="GitHub">
                    <i className="fa-brands fa-github about-contact-icons-img" style={{color:"#2b3137"}}></i>
                </a>
                <a className="about-contact-icons-link"href="mailto:jeremydev666@gmail.com" title="Gmail">
                    <i className="fa-solid fa-envelope about-contact-icons-img" style={{color:"#333333"}}></i>
                </a>
                <a className="about-contact-icons-link" href="https://www.linkedin.com/in/jonathan-cruz-martin-741a30268/" target="_blank" rel="noopener noreferrer" title="LinkedIn">
                    <i className="fa-brands fa-linkedin about-contact-icons-img" style={{color:"#0077B5"}}></i>
                </a>
                <a href="https://t.me/Johnx199x" className="about-contact-icons-link" target="_blank" rel="noopener noreferrer" title='Telegram'>
                    <i class="fa-brands fa-telegram about-contact-icons-img" style={{color:"#0088cc"}}></i>
                </a>
</div>
        </div>
        
        
    </div>
    )
}
