/**
 * Lausn á verkefni 8 í Vefforritun 1, 2024.
 * Byggir á grunn á verkefni 8 gefið af kennara.
 * Notar jsdoc til að skrifa lýsingu á föllum, inntaki og úttaki.
 * Notar `console.assert` til að athuga hvort föll virki rétt.
 * Notar `console.war` til að athuga hvort vandamál séu til staðar
 */

import { isString } from "./lib/helpers.js";

import { longest } from "./lib/longest.js";
import { shortest } from "./lib/shortest.js";
import { vowels } from "./lib/vowels.js";
import { consonants } from "./lib/consonants.js";
import { palindrome } from "./lib/palindrome.js";
import { reverse } from "./lib/reverse.js";

/**
 * Finnur lengsta orð, styssta orð, fjölda sérhljóða, fjölda samhljóða í streng 
 * og einnig hvort strengurinn sé palindrome og viðsnúin strengurinn og sýnir niðurstöðurnar.
 * @param {string} text strengur sem á að greina
 */
function processInput(text) {
  const outputElement = document.querySelector(".output");
  if (outputElement) {
    outputElement.classList.remove("hidden");
    console.log(outputElement.classList);
  }

  const inputElement = document.querySelector(".input");
  if (inputElement) {
    inputElement.textContent = text;
  }

  const longestElement = document.querySelector(".longest");
  if (longestElement) {
    longestElement.textContent = longest(text);
  }

  const shortestElement = document.querySelector(".shortest");
  if (shortestElement) {
    shortestElement.textContent = shortest(text);
  }

  const vowelsElement = document.querySelector(".vowels");
  if (vowelsElement) {
    vowelsElement.textContent = vowels(text);
  }

  const consonantsElement = document.querySelector(".consonants");
  if (consonantsElement) {
    consonantsElement.textContent = consonants(text);
  }

  const palindromeElement = document.querySelector(".palindrome");
  if (palindromeElement) {
    if(palindrome(text)) {
      palindromeElement.setAttribute("hidden", "hidden")
    } else {
      palindromeElement.removeAttribute("hidden");
    }
  }

  const reverseElement = document.querySelector(".reversed");
  if (reverseElement) {
    reverseElement.textContent = reverse(text);
  }
}

/**
 * Finnur lengsta orð, styssta orð, fjölda sérhljóða, fjölda samhljóða í streng 
 * og einnig hvort strengurinn sé palindrome og viðsnúin strengurinn og sýnir niðurstöðurnar.
 * @param {SubmitEvent} event
 * @returns
 */
function submitHandler(event) {
  event.preventDefault();

  if (!event.submitter) {
    console.warn("fann ekki submitter");
    return;
  }

  const target = event.target;
  const textareaElement = target.querySelector("#string");
  if (!textareaElement) {
    console.warn("fann ekki textarea");
    return;
  }

  const text = textareaElement.value;
  if (!isString(text)) {
    console.warn("ekki strengur");
  }

  processInput(text);
}

// Bætum event handler við "submit" takka
// og event handler við "reset" takka
/** @type {HTMLFormElement | null} */
const formElement = document.querySelector("form");
if (formElement) {
  formElement.addEventListener("submit", submitHandler);
  formElement.addEventListener("reset", (e) => {
    e.preventDefault();
    window.location.reload();
  });
}

// Bætum event handler við "string" textarea
/** @type {HTMLTextAreaElement | null} */
const textareaElement = document.querySelector("#string");
if (textareaElement) {
  textareaElement.addEventListener("input", () => {
    const text = textareaElement.value;
    processInput(text);
  });
}
