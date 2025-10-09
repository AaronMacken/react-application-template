export const getIndeciesOfSum = (arrayOfNumbers: Array<number>, sum: number): Array<number> => {
  const indexesOfPotentialMatchingNumbers = new Map();

  for (let i = 0; i < arrayOfNumbers.length; i++) {
    const potentialMatchingNumber = sum - arrayOfNumbers[i];

    if (indexesOfPotentialMatchingNumbers.has(potentialMatchingNumber)) {
      return [indexesOfPotentialMatchingNumbers.get(potentialMatchingNumber), i];
    }

    indexesOfPotentialMatchingNumbers.set(arrayOfNumbers[i], i);
  }

  return [-1, -1];
};
