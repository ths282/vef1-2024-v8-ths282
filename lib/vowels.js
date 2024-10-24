import { countGivenCharactersInString } from "./count.js"

/** Íslenskir sérhljóðar */
const VOWELS = 'aeiouyáéýúíóöæ'.split('');

/**
 * Telur fjölda sérhljóða í streng.
 * @param {string} str Strengur til að telja sérhljóða í
 * @returns {number} Fjöldi sérhljóða í streng
 */
export function vowels(str) {
    return countGivenCharactersInString(str, VOWELS);
  }

  console.assert(
    vowels('halló') === 2,
    'vowels: skilar fjölda sérhljóða í streng',
  );
  console.assert(vowels('') === 0, 'vowels: skilar 0 ef tómur strengur');
  console.assert(
    vowels(null) === 0,
    'vowels: skilar 0 ef ekki er gefinn strengur',
  );
 