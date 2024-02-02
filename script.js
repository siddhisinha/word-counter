const input = document.querySelector("textarea");  
const wordCount = document.querySelector("[data-word-count]");
const characterCount = document.querySelector("[data-character-count]");
const sentenceCount = document.querySelector("[data-sentence-count]");
const paragraphCount = document.querySelector("[data-paragraph-count]");

input.addEventListener("input", function () {
  if (input.value) {      // "Hey, what's written in that box right now?"
    // Count Words
    const wordsArray = input.value.split(" ").filter((word) => word !== "");
    // wordCount.innerText = wordsArray.length;     innerText is a way in JavaScript to read or change the visible text content of an HTML element, like a div, paragraph, or any other container. It's a way to interact with the text that is shown on your webpage.

    // Count Characters
    characterCount.innerText = input.value.length;

    // Count Sentences
    const sentenceArray = input.value.split(/[.!]/);

    sentenceCount.innerText = sentenceArray.length - 1;

    // Count Paragraph
    const paragraphArray = input.value
      .split("\n")
      .filter((p) => p.trim() !== "");       

    paragraphCount.innerText = paragraphArray.length;
  } else {
    wordCount.innerText =
      characterCount.innerText =
      sentenceCount.innerText =
      paragraphCount.innerText =
        0;
  }
});


// For each line (p) in the array, only include it in the new array if, after trimming whitespace, it is not an empty string.
// This filter operation effectively removes empty lines or lines that consist only of whitespace characters, leaving behind only non-empty lines (paragraphs) in the resulting paragraphArray.