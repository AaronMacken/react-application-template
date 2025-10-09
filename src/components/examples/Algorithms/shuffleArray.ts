export const shuffleArray = (initialArray: Array<number>): Array<number> => {
  const copyOfArray = [...initialArray];

  for (let i = initialArray.length - 1; i > 0; i--) {
    const randomIndex = Math.floor(Math.random() * (i + 1));

    const temp = copyOfArray[i];
    copyOfArray[i] = copyOfArray[randomIndex];
    copyOfArray[randomIndex] = temp;
  }

  return copyOfArray;
};
