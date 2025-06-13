let word = document.getElementById("word");
let spaceCount = document.getElementById("space-count");
let wordCount = document.getElementById("word-count");
let letterCount = document.getElementById("letter-count");

word.addEventListener("keyup", function (event) {
  wordCount.innerText = word.value.split(" ").length;
  letterCount.innerText = word.value.replace(/\s/g, "").length;
  spaceCount.innerText = (word.value.match(/\s/g) || []).length;
});
