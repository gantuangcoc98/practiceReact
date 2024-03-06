import colors from "./colors";

const shuffleArray = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }

  return array;
};

const shuffledColors = shuffleArray([...colors]).slice(0,4);
const shuffledButtons = shuffleArray([...shuffledColors]);

export {
  shuffledButtons,
  shuffledColors
}