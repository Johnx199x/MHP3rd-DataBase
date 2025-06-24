const monsterImages = import.meta.glob('../Assets/icons/Monsters/*.{png,jpg,jpeg,webp}');
const huntTipsImages = import.meta.glob('../Assets/MonstersTipsImg/*.{png,jpg,jpeg,webp}');
const otherImages = import.meta.glob('../Assets/icons/Others/*.{png,jpg,jpeg,webp}');


export const getMonsterImage = async (imageName) => {
  const imagePath = `../Assets/icons/Monsters/${imageName}`;
  
  try {
    const imageModule = await monsterImages[imagePath]();
    return imageModule.default;
  } catch (error) {
    // Imagen por defecto si no se encuentra
    console.log(error);

    const defaultModule = await monsterImages[`../Assets/icons/Monsters/MH3U-Question_Mark_Icon.png`]();
    return defaultModule.default;
  }
};

export const getHuntTipsImage = async (monsterName) => {
  const imagePath = `../Assets/MonstersTipsImg/${monsterName}`;
  
  try {
    const imageModule = await huntTipsImages[imagePath]();
    return imageModule.default;
  } catch (error) {
    console.log(error);
    console.warn(`Hunt tips image not found: ${monsterName}`);
    return null;
  }
};

export const getOtherImage = async (imageName) => {
  const imagePath = `../Assets/icons/Others/${imageName}`;
  
  try {
    const imageModule = await otherImages[imagePath]();
    return imageModule.default;
  } catch (error) {
    // Imagen por defecto si no se encuentra
    console.log(error);
    const defaultModule = await otherImages[`../Assets/icons/Others/MH3U-Question_Mark_Icon.png`]();
    return defaultModule.default;
  }
};