class WordList {
  constructor(words) {
    this.words = words;
  }

  alphabetical() {
    return this.words.slice().sort((a, b) => a.localeCompare(b));
  }

  reverseAlphabetical() {
    return this.words.slice().sort((a, b) => b.localeCompare(a));
  }

  random() {
    let shuffled = this.words.slice();
    for (let i = shuffled.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  }
}

function isValidWords(words) {
  // Only letters allowed
  return words.every(word => /^[A-Za-z]+$/.test(word));
}

function handleSort(type) {
  const input = document.getElementById("wordInput");
  const error = document.getElementById("error");

  let text = input.value.trim();

  // Empty check
  if (text === "") {
    error.textContent = "The word list box is empty. You must enter words in it.";
    return;
  }

  // Split words (handles multiple spaces)
  let words = text.split(/\s+/);

  // Validation check
  if (!isValidWords(words)) {
    error.textContent = "The input is invalid. You must enter valid words in the word list box.";
    return;
  }

  // Clear error
  error.textContent = "";

  let wordList = new WordList(words);
  let result;

  if (type === "alpha") {
    result = wordList.alphabetical();
  } else if (type === "reverse") {
    result = wordList.reverseAlphabetical();
  } else {
    result = wordList.random();
  }

  // Display result back in input box
  input.value = result.join(" ");
}
