import data from "./data.json";

export type Person = {
  id: number;
  name: string;
  description: string;
};

export type Level = {
  label: string;
  people: Person[];
};

const alphabet: string[] = [
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
];
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
  return name.replace(/ /g, "");
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

export const getShuffledLetters = (name: string) => {
  name = getCleanName(name);
  const length: number = name.length < 18 ? 20 : 30;
  const neededLettersLength = length - name.length;
  const newLetters = [];
  for (let i = 0; i < neededLettersLength; i++) {
    newLetters.push(alphabet[Math.floor(Math.random() * 26)]);
  }
  return shuffleArray([...name.toUpperCase().split(""), ...newLetters]);
};
