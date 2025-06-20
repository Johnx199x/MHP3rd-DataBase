const monsterImages = import.meta.glob('../Assets/icons/Monsters/*.{png,jpg,jpeg,webp}', { eager: true });
const huntTipsImages = import.meta.glob('../Assets/MonstersTipsImg/*.{png,jpg,jpeg,webp}', {eager: true});

export const getMonsterImage = (imageName) => {
  const imagePath = `../Assets/icons/Monsters/${imageName}`;
  return monsterImages[imagePath]?.default || monsterImages[`../Assets/icons/Monsters/MH3U-Question_Mark_Icon.png`]?.default;
};

export const getHuntTipsImage = (monsterName)=>{
  const imagePath = `../Assets/MonstersTipsImg/${monsterName}`;
  
  return huntTipsImages[imagePath].default; 
}
