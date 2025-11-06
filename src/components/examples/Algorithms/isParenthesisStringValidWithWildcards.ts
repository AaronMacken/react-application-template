// Problem: Given a string of parens and wildcard, determine if the string could be valid
// your string will consist of ( ) or *
// * could be ( ) or an empty string

// goal: "Greedy Range" algorithm
// track the range of possible open parenthesis counts as we go thru the string
// if maxOpen falls below 0 -> invalid string
// if min open is 0, we could have a valid string
// since minOpen cant be negative, we can clamp its min val to 0

const openingParen = '(';
const closingParen = ')';
const wildCard = '*';

export const getIsParenthesisValidWithWildcards = (parenString: string) => {
  let isExcessOfClosingCharacters = false;
  let minOpen = 0;
  let maxOpen = 0;

  parenString.split('').forEach((character) => {
    if (character === openingParen) {
      minOpen += 1;
      maxOpen += 1;
    }

    if (character === closingParen) {
      minOpen -= 1;
      maxOpen -= 1;

      if (maxOpen < 0) {
        isExcessOfClosingCharacters = true;
      }
    }

    if (character === wildCard) {
      minOpen -= 1;
      maxOpen += 1;
    }
  });

  minOpen = Math.max(minOpen, 0);

  return minOpen === 0 && !isExcessOfClosingCharacters;
};
