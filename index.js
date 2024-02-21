let texto = document.querySelector('.jorge');

texto.addEventListener('mouseenter',()=>{
    texto.textContent = 'Logan';
    texto.classList.add('color-changing');
});

texto.addEventListener('mouseleave',()=>{
    texto.textContent = 'Jorge';
    texto.classList.remove('color-changing');
});

// var i = 0;
// var txt = 'console.log(“El misterio de la vida no es problema que hay que resolver, sino un a realidad que hay que experimentar.”);'; /* The text */
// var speed = 50;

// function typeWriter() {
//   if (i < txt.length) {
//     document.querySelector(".typing-animation").innerHTML += txt.charAt(i)+=;
//     i++;
//     setTimeout(typeWriter, speed);
//   }
// }

// typeWriter();