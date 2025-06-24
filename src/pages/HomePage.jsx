import './HomePage.css'
import zinogre from '../Assets/img/MHWI-Render_Zinogre.webp'
import { FeatureCard } from '../Components/ui/FeatureCard'

export default function HomePage () {
  return (
    <div className='feature-cards'>
      <img
        className='home-img'
        src={zinogre}
        alt='zinogre_img'
        width='600'
        height='338'
        loading='lazy'
      />
      <FeatureCard tittle={'Your quick guide to hunting monsters'}>
        <p>
          Welcome to the MHP3rd Database! Here you’ll find everything you need
          to become the ultimate hunter. Explore detailed information about
          monsters, items, quests, locations, and more.
        </p>
      </FeatureCard>
      <FeatureCard tittle={'Monsters Section'} icon={'Book-White.webp'}>
        <span className='home-tags'>Hunter Notes:</span> Detailed observations
        from experienced hunters.
        <br />
        <span className='home-tags'>Weaknesses:</span> Elemental and physical
        weaknesses for each monster.
        <br />
        <span className='home-tags'>Monster Element:</span> The elemental
        attributes of each monster.
        <br />
        <span className='home-tags'>Hunt Tips:</span> Strategies to take down
        monsters efficiently.
        <br />
        <span className='home-tags'>Loot & Drop Rates:</span> Rewards and drop
        rates for each monster.
        <br />
      </FeatureCard>
      <FeatureCard tittle={'Items Section(In development)'} icon={'Chest.webp'}>
        <span className='home-tags'>Item List:</span> Complete catalog of items
        and their uses.
      </FeatureCard>

      <FeatureCard
        tittle={'Quests Section(In development)'}
        icon={'Ticket-White.webp'}
      >
        <span className='home-tags'>Quest List:</span> All available quests with
        objectives. <br />
        <span className='home-tags'>Rewards:</span> What you can earn from each
        quest.
        <br />
        <span className='home-tags'>Difficulty Levels:</span> From beginner to
        advanced challenges.
        <br />
      </FeatureCard>
      <FeatureCard
        tittle={' Location Section(In development)'}
        icon={'Map_Icon.png'}
      >
        <span className='home-tags'>Maps:</span> Detailed maps of all areas.
        <br />
        <span className='home-tags'>Gathering Spots:</span> Key locations for
        resources.
        <br />
        <span className='home-tags'>Monster Habitats:</span> Where to find each
        monster.
        <br />
      </FeatureCard>

      <FeatureCard
        tittle={'About Section'}
        icon={'Question_Mark_Icon_Orange.png'}
      >
        <span className='home-tags'>Project Description:</span> Why this
        database was created.
        <br />
        <span className='home-tags'>About Me:</span> Learn about the creator.
        <br />
        <span className='home-tags'>Acknowledgments:</span> Special thanks to
        the Monster Hunter community and resources for their support in making
        this project possible.
        <br />
        <span className='home-tags'>Contact:</span> How to get in touch.
        <br />
      </FeatureCard>
    </div>
  )
}
