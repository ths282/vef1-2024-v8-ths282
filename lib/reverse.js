import { isString } from "./helpers.js";

/**
 * Snýr við strengi
 * @param {string} str strengur sem á að snúa við
 * @returns {string} viðsnúnni strengurinn
 */
export function reverse(str) {
    if (!isString(str)) {
      return null;
    }
  
    return str.split('').reverse().join('');
  }
  
  console.assert(
    reverse(null) === null,
    'reverse: skilar tómum streng ef ekki er gefinn strengur',
  );
  console.assert(
    reverse('') === '',
    'reverse: snúinn tómi strengurinn er tómi strengurinn',
  );
  console.assert(reverse('hello') === 'olleh', 'reverse: snýr við streng');