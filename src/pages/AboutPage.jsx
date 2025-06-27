import './AboutPage.css'

export default function AboutPage () {
  const creditLinks = [
    {
      name: 'Hunsterverse',
      url: 'https://hunstermonter.net',
      description:
        'For providing essential tips and strategies to combat monsters, making the journey through the game much more manageable.'
    },
    {
      name: 'Monster Hunter DB by CrimsonNynja',
      url: 'https://github.com/CrimsonNynja/monster-hunter-DB',
      description:
        'A GitHub repository that provided a solid foundation for organizing game data.'
    },
    {
      name: 'GameFAQs Guide by BBlitz',
      url: 'https://gamefaqs.gamespot.com/psp/991479-monster-hunter-portable-3rd/faqs/61490',
      description:
        'An extensive guide that helped me verify monsters loot and their drops rates.'
    },
    {
      name: 'Monster Hunter Fandom Wiki - Small Monster Carves',
      url: 'https://monsterhunter.fandom.com/wiki/MH3:_Small_Monster_Carve_List',
      description: 'A detailed list of small monster carves and rewards.'
    },
    {
      name: 'Monster Hunter Fandom Wiki - Monster Carves & Rewards',
      url: 'https://monsterhunter.fandom.com/wiki/MH3:_Monster_Carves_%26_Rewards',
      description:
        'A comprehensive resource for monster carves and rewards in MHP3rd.'
    }
  ]

  const contactLinks = [
    {
      platform: 'github',
      url: 'https://github.com/johnx199x',
      icon: 'fa-brands fa-github',
      title: 'GitHub'
    },
    {
      platform: 'email',
      url: 'mailto:jeremydev666@gmail.com',
      icon: 'fa-solid fa-envelope',
      title: 'Gmail'
    },
    {
      platform: 'linkedin',
      url: 'https://www.linkedin.com/in/jonathan-cruz-martin-741a30268/',
      icon: 'fa-brands fa-linkedin',
      title: 'LinkedIn'
    },
    {
      platform: 'telegram',
      url: 'https://t.me/Johnx199x',
      icon: 'fa-brands fa-telegram',
      title: 'Telegram'
    }
  ]

  return (
    <div className='about'>
      <div className='about-container'>
        {/* Sección Descripción */}
        <section className='about-section'>
          <div className='about-section-header'>
            <div className='about-section-icon'>
              <i className='fa-solid fa-info-circle'></i>
            </div>
            <h4>Description</h4>
          </div>
          <p>
            This page is a comprehensive and up-to-date database for Monster
            Hunter Portable 3rd, created to help hunters find detailed
            information about monsters. My goal is to provide the ultimate tool
            for MHP3rd fans, making it easier to plan hunts and explore the
            game's vast content.
          </p>
        </section>

        {/* Sección Motivación */}
        <section className='about-section'>
          <div className='about-section-header'>
            <div className='about-section-icon'>
              <i className='fa-solid fa-lightbulb'></i>
            </div>
            <h4>Why I Decided to Create It</h4>
          </div>
          <p>
            As a dedicated Monster Hunter fan, I always found it challenging to
            find organized and reliable information about MHP3rd. That's why I
            decided to create this database—to help other hunters like me who
            want to dive deeper into the game and make the most of their hunting
            experience.
          </p>
        </section>

        {/* Sección Sobre Mí */}
        <section className='about-section'>
          <div className='about-section-header'>
            <div className='about-section-icon'>
              <i className='fa-solid fa-user'></i>
            </div>
            <h4>About Me</h4>
          </div>
          <p>
            Hi, I'm John, a solo developer and a huge fan of the Monster Hunter
            series. This project is a personal endeavor born out of my passion
            for the game and my desire to contribute to the community. I've put
            countless hours into researching, organizing, and building this
            database to ensure it's as accurate and user-friendly as possible.
          </p>
        </section>

        {/* Sección Créditos */}
        <section className='about-section'>
          <div className='about-section-header'>
            <div className='about-section-icon'>
              <i className='fa-solid fa-heart'></i>
            </div>
            <h4>Acknowledgments</h4>
          </div>
          <p>
            I want to give special thanks to the following resources for their
            invaluable contributions:
          </p>
          <ul className='about-credits-list'>
            {creditLinks.map((credit, index) => (
              <li key={index} className='about-credits-item'>
                <a
                  href={credit.url}
                  target='_blank'
                  rel='noopener noreferrer'
                  aria-label={`Visit ${credit.name}`}
                >
                  {credit.name}
                </a>
                : {credit.description}
              </li>
            ))}
          </ul>
        </section>

        {/* Sección Contacto */}
        <section className='about-section'>
          <div className='about-section-header'>
            <div className='about-section-icon'>
              <i className='fa-solid fa-envelope-open'></i>
            </div>
            <h4>Contact Me</h4>
          </div>
          <p>
            If you have any questions, suggestions, or just want to share your
            thoughts about the database, feel free to reach out to me! I'm
            always happy to connect with fellow hunters and developers. You can
            find me on the following platforms:
          </p>
          <div className='about-contact-container'>
            {contactLinks.map((contact, index) => (
              <a
                key={index}
                className='about-contact-link'
                href={contact.url}
                target='_blank'
                rel='noopener noreferrer'
                title={contact.title}
                data-platform={contact.platform}
                aria-label={`Contact via ${contact.title}`}
              >
                <i className={`${contact.icon} about-contact-icon`}></i>
              </a>
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}
