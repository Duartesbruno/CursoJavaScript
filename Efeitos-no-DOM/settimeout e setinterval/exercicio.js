// Mude a cor da tela para azul e depois para vermelho a cada 2s.
// let isBlue = true;

// const trocarCor = setInterval(() => {
//   if (isBlue) {
//     corAzul();
//   } else {
//     corVermelha();
//   }
//   isBlue = !isBlue;
// }, 2000);

// function corAzul() {
//   document.body.style.backgroundColor = 'blue';
// }

// function corVermelha() {
//   document.body.style.backgroundColor = 'red';
// }


//ou poderia ser assim:


// function mudarClasse() {
//   document.body.classList.toggle('active');
// }

// setInterval(mudarClasse, 2000);







// Crie um cronometro utilizando o setInterval. Deve ser possível
// iniciar, pausar e resetar (duplo clique no pausar).

const iniciar = document.querySelector('.iniciar');
const pausar = document.querySelector('.pausar');
const tempo = document.querySelector('.tempo');

iniciar.addEventListener('click', iniciarTempo);
pausar.addEventListener('click', pausarTempo);
pausar.addEventListener('dblclick', resetarTempo); //dbl = double

let i = 0;
let timer;

function iniciarTempo() {
  timer = setInterval(() => {
    tempo.innerText = i++;
  }, 100);
  iniciar.setAttribute('disabled', '');
}

function pausarTempo() {
  clearInterval(timer);
  iniciar.removeAttribute('disabled');
}

function resetarTempo() {
  tempo.innerText = 0;
  i = 0;
}