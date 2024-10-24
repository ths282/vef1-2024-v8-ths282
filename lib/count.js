import { isString } from "./helpers.js";

/**
 * Telur fjölda stafa í streng sem eru í characters fylki.
 * @param {string} str Strengur til að telja stafi í
 * @param {string[]} characters Fylki af stöfum sem á að telja
 * @returns {number} Fjöldi stafa í streng sem eru í characters
 */
export function countGivenCharactersInString(str, characters) {
    if (!isString(str)) {
      return 0;
    }
  
    let count = 0;
  
    for (const char of str) {
      if (characters.includes(char)) {
        count += 1;
      }
    }
  
    return count;
  }

  console.assert(
    countGivenCharactersInString('', []) === 0,
    'countGivenCharactersInString: skilar 0 ef tómi strengur',
  );
  console.assert(
    countGivenCharactersInString('asdf', []) === 0,
    'countGivenCharactersInString: skilar 0 ef tóma fylkið',
  );

  console.log(countGivenCharactersInString('halló', ['a', 'l']) );
  console.assert(
    countGivenCharactersInString('halló', ['a', 'l']) === 3,
    'countGivenCharactersInString: skilar fjölda stafa í streng',
  );