import { countGivenCharactersInString } from "./count.js";

/** Íslenskir samhljóðar */
const CONSONANTS = 'bcdfghjklmnpqrstvwxz'.split('');

/**
 * Telur fjölda samhljóða í streng.
 * @param {string} str Strengur til að telja samhljóða í
 * @returns {number} Fjöldi samhljóða í streng
 */
export function consonants(str) {
    return countGivenCharactersInString(str, CONSONANTS);
  }

  console.assert(
    consonants('halló') === 3,
    'consonants: skilar fjölda samhljóða í streng',
  );
  console.assert(consonants('') === 0, 'consonants: skilar 0 ef tómur strengur');
  console.assert(
    consonants(null) === 0,
    'consonants: skilar 0 ef ekki er gefinn strengur',
  );