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

let copy = document.getElementById("copy");
let clear = document.getElementById("Clear");
copy.addEventListener("click", function () {
  navigator.clipboard.writeText(word.value);
  copy.innerHTML = `<i class="fa-solid fa-copy"></i>`;
  setTimeout(() => {
    copy.innerHTML = `<i class="fa-regular fa-copy"></i>`;
  }, 1000);
});

clear.addEventListener("click", function () {
  word.value = "";
  wordCount.innerText = "0";
  letterCount.innerText = "0";
  spaceCount.innerText = "0";
  alphabet.innerText = "0";
  digit.innerText = "0";
  uppercase.innerText = "0";
  lowercase.innerText = "0";
  specialcount.innerText = "0";
});

let uploadFile = document.getElementById("upload-file");
uploadFile.addEventListener("change", function (event) {
  let file = event.target.files[0];
  if (file) {
    let reader = new FileReader();
    reader.onload = function (e) {
      word.value = e.target.result;
      word.dispatchEvent(new Event("keyup")); // Trigger the keyup event to update counts
    };
    reader.readAsText(file);
  }
});
let saveFile = document.getElementById("save-file");
saveFile.addEventListener("click", () => {
  let text = word.value;
  let blob = new Blob([text], { type: "text/plain" });
  let link = document.createElement("a");
  link.href = URL.createObjectURL(blob);
  link.download = "word-count.txt";
  link.click();
  URL.revokeObjectURL(link.href);
});
