const ParenLikeCharacters = {
  '(': ')',
  '{': '}',
  '[': ']'
};

const ParenLikeMap = new Map(Object.entries(ParenLikeCharacters));

const openingCharacters = new Set(['(', '{', '[']);

// TODO: boolean return values
export const getIsParenthesisStringValid = (parenthesisString: string) => {
  const parenthesisStringCharacters = parenthesisString.split('');
  const charactersStack: Array<string> = [];
  let isExtraClosingCharacter = false;

  parenthesisStringCharacters.forEach((character: string) => {
    const isOpeningCharacter = openingCharacters.has(character);

    if (isOpeningCharacter) {
      charactersStack.push(character);
    }

    if (!isOpeningCharacter) {
      if (charactersStack.length === 0) {
        isExtraClosingCharacter = true;
      }

      const characterOnTopOfStack = charactersStack[charactersStack.length - 1];
      const correctClosingCharacter = ParenLikeMap.get(characterOnTopOfStack);
      const isMatchingClosingCharacter = correctClosingCharacter === character;

      if (isMatchingClosingCharacter) {
        charactersStack.pop();
      }
    }
  });

  return charactersStack.length === 0 && !isExtraClosingCharacter;
};
