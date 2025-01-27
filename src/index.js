const words = ["Frontend", "Backend", "FullStack"];
const typingElement = document.getElementById("text-typing");

let wordIndex = 0;
let letterIndex = 0;
let isDeleting = false;

function typeEffect() {
  const currentWord = words[wordIndex];

  if (!isDeleting && letterIndex <= currentWord.length) {
    typingElement.innerText = currentWord.slice(0, ++letterIndex);
    setTimeout(typeEffect, 100);
  } else if (isDeleting && letterIndex > 0) {
    typingElement.innerText = currentWord.slice(0, --letterIndex);
    setTimeout(typeEffect, 50);
  } else if (!isDeleting) {
    isDeleting = true;
    setTimeout(typeEffect, 1000);
  } else {
    isDeleting = false;
    wordIndex = (wordIndex + 1) % words.length;
    setTimeout(typeEffect, 500);
  }
}

typeEffect();
