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


// ScrollReveal Effect
// I can use the library ScrollReveal aswell
// const hiddenElements = document.querySelectorAll('.hidden');

// const observer = new IntersectionObserver((entries) => {
//   entries.forEach((entry) => {
//     if (entry.isIntersecting) {
//       entry.target.classList.add('show');
//     }
//   });
// });

// hiddenElements.forEach((el) => observer.observe(el));


// ScrollReveal().reveal('.dev-container');
// ScrollReveal().reveal('.projects-container');
// ScrollReveal().reveal('.about-container');
// ScrollReveal().reveal('.contact-container');



// Read More Effect

const hiddenTexts = document.querySelectorAll('.more-text');
const readMoreBtn = document.querySelector('.read-more-btn');

console.log(hiddenTexts);


readMoreBtn.addEventListener('click', () => {

  if (hiddenTexts[0].style.display == 'none') {
    for (let i = 0; i < hiddenTexts.length; i++) {
      hiddenTexts[i].style.display = 'inline';
    }
    readMoreBtn.textContent = 'LEIA MENOS';
  } else {
    for (let i = 0; i < hiddenTexts.length; i++) {
      hiddenTexts[i].style.display = 'none';
    }
    readMoreBtn.textContent = 'LEIA MAIS';
  }
})