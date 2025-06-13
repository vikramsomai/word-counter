let word = document.getElementById("word");
let spaceCount = document.getElementById("space-count");
let wordCount = document.getElementById("word-count");
let letterCount = document.getElementById("letter-count");
let alphabet = document.getElementById("alphabet-count");
let digit = document.getElementById("digit-count");
let uppercase = document.getElementById("uppercase-count");
let lowercase = document.getElementById("lowercase-count");
let specialcount = document.getElementById("special-char-count");

word.addEventListener("keyup", function (event) {
  wordCount.innerText = word.value.trim().split(/\s+/).filter(Boolean).length;
  letterCount.innerText = word.value.replace(/\s/g, "").length;
  spaceCount.innerText = (word.value.match(/\s/g) || []).length;
  alphabet.innerText = (word.value.match(/[a-zA-Z]/g) || []).length;
  digit.innerText = (word.value.match(/\d/g) || []).length;
  uppercase.innerText = (word.value.match(/[A-Z]/g) || []).length;
  lowercase.innerText = (word.value.match(/[a-z]/g) || []).length;
  specialcount.innerText = (word.value.match(/[^a-zA-Z0-9]/g) || []).length;
});
