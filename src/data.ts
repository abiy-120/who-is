import data from "./data.json";

export type Person = {
  id: number;
  en: {
    name: string;
    description: string;
  };
  childhood: boolean;
};

export type Level = {
  label: string;
  stars: number;
  people: Person[];
};

const alphabet: { en: string[]; tg: string[] } = {
  en: [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ],
  tg: [
    "ሀ",
    "ሁ",
    "ሂ",
    "ሃ",
    "ሄ",
    "ህ",
    "ሆ",
    "ለ",
    "ሉ",
    "ሊ",
    "ላ",
    "ሌ",
    "ል",
    "ሎ",
    "ሐ",
    "ሑ",
    "ሒ",
    "ሓ",
    "ሔ",
    "ሕ",
    "ሖ",
    "መ",
    "ሙ",
    "ሚ",
    "ማ",
    "ሜ",
    "ም",
    "ሞ",
    "ረ",
    "ሩ",
    "ሪ",
    "ራ",
    "ሬ",
    "ር",
    "ሮ",
    "ሰ",
    "ሱ",
    "ሲ",
    "ሳ",
    "ሴ",
    "ስ",
    "ሶ",
    "ሸ",
    "ሹ",
    "ሺ",
    "ሻ",
    "ሼ",
    "ሽ",
    "ሾ",
    "ቀ",
    "ቁ",
    "ቂ",
    "ቃ",
    "ቄ",
    "ቅ",
    "ቆ",
    "ቐ",
    "ቑ",
    "ቒ",
    "ቓ",
    "ቔ",
    "ቕ",
    "ቖ",
    "በ",
    "ቡ",
    "ቢ",
    "ባ",
    "ቤ",
    "ብ",
    "ቦ",
    "ተ",
    "ቱ",
    "ቲ",
    "ታ",
    "ቴ",
    "ት",
    "ቶ",
    "ቸ",
    "ቹ",
    "ቺ",
    "ቻ",
    "ቼ",
    "ች",
    "ቾ",
    "ነ",
    "ኑ",
    "ኒ",
    "ና",
    "ኔ",
    "ን",
    "ኖ",
    "ኘ",
    "ኙ",
    "ኚ",
    "ኛ",
    "ኜ",
    "ኝ",
    "ኞ",
    "አ",
    "ኡ",
    "ኢ",
    "ኣ",
    "ኤ",
    "እ",
    "ኦ",
    "ከ",
    "ኩ",
    "ኪ",
    "ካ",
    "ኬ",
    "ክ",
    "ኮ",
    "ኸ",
    "ኹ",
    "ኺ",
    "ኻ",
    "ኼ",
    "ኽ",
    "ኾ",
    "ወ",
    "ዉ",
    "ዊ",
    "ዋ",
    "ዌ",
    "ው",
    "ዎ",
    "ዐ",
    "ዑ",
    "ዒ",
    "ዓ",
    "ዔ",
    "ዕ",
    "ዖ",
    "ዘ",
    "ዙ",
    "ዚ",
    "ዛ",
    "ዜ",
    "ዝ",
    "ዞ",
    "ዠ",
    "ዡ",
    "ዢ",
    "ዣ",
    "ዤ",
    "ዥ",
    "ዦ",
    "የ",
    "ዩ",
    "ዪ",
    "ያ",
    "ዬ",
    "ይ",
    "ዮ",
    "ደ",
    "ዱ",
    "ዲ",
    "ዳ",
    "ዴ",
    "ድ",
    "ዶ",
    "ጀ",
    "ጁ",
    "ጂ",
    "ጃ",
    "ጄ",
    "ጅ",
    "ጆ",
    "ገ",
    "ጉ",
    "ጊ",
    "ጋ",
    "ጌ",
    "ግ",
    "ጎ",
    "ጠ",
    "ጡ",
    "ጢ",
    "ጣ",
    "ጤ",
    "ጥ",
    "ጦ",
    "ጨ",
    "ጩ",
    "ጪ",
    "ጫ",
    "ጬ",
    "ጭ",
    "ጮ",
    "ፀ",
    "ፁ",
    "ፂ",
    "ፃ",
    "ፄ",
    "ፅ",
    "ፆ",
    "ጰ",
    "ጱ",
    "ጲ",
    "ጳ",
    "ጴ",
    "ጵ",
    "ጶ",
    "ፈ",
    "ፉ",
    "ፊ",
    "ፋ",
    "ፌ",
    "ፍ",
    "ፎ",
    "ፐ",
    "ፑ",
    "ፒ",
    "ፓ",
    "ፔ",
    "ፕ",
    "ፖ",
    "ቨ",
    "ቩ",
    "ቪ",
    "ቫ",
    "ቬ",
    "ቭ",
    "ቮ",
  ],
};
export const gameData = data["gameData"];
export const levels: Level[] = gameData["levels"];
export const getLevel = (levelId: number): Level => {
  return levels[levelId];
};

export const getPerson = (levelId: number, personId: number): Person => {
  return levels[levelId]["people"][personId];
};

export const getImageName = (name: string) => {
  return name.toLowerCase().replace(/ /g, "-") + ".jpg";
};

export const getSplitName = (name: string) => {
  return name.split(" ");
};

export const getCleanName = (name: string) => {
  return name.replace(/ /g, "").toUpperCase();
};

export const getRandomNumber = (min: number = 0, max: number): number => {
  return Math.floor(Math.random() * (max - min) + min);
};

export const shuffleArray = (arr: any[]) => {
  let count = 0;
  while (count < arr.length) {
    const splitOne = arr.slice(count);
    const index = getRandomNumber(count, splitOne.length);
    const temp = arr[count];
    arr[count] = arr[index];
    arr[index] = temp;
    count++;
  }
  return arr;
};

export const getShuffledLetters = (name: string, lang: "en" | "tg") => {
  name = getCleanName(name);
  const length: number = name.length < 18 ? 20 : 30;
  const neededLettersLength = length - name.length;
  const newLetters = [];
  for (let i = 0; i < neededLettersLength; i++) {
    newLetters.push(alphabet[lang][Math.floor(Math.random() * 26)]);
  }
  return shuffleArray([...name.toUpperCase().split(""), ...newLetters]);
};

export const getlevelLength = (levelId: number, childhood?: boolean) => {
  return childhood
    ? levels[levelId].people.filter((person) => person.childhood).length
    : levels[levelId].people.length;
};
