/* 
setTimeout()
setTimeout(callback, tempo, arg1, arg2, ...) método assíncrono
que ativa o callback após "tempo". Não existe garantia de que o
código será exexutado exatamente após o tempo, pois o callback
entra na fila e espera pela "Call Stack" estar vazia. 
*/

function espera(texto) {
  console.log(texto)
}

setTimeout(espera, 1000, 'Depois de 1s');



//como pode passar diretamente

setTimeout(function() {
    console.log('Teste')
}, 2000);


/* se usar arrow function dentro do 
setTimeout ele consegue se comunicar
com o "this" Exemplo:  (se usar sem arrow function ele acaba se referindo ao seu pai que seria o window)*/

const btn = document.querySelector('.buttonTeste');
btn.addEventListener('click', handleClick);

function handleClick() {
  setTimeout(() => {
    this.classList.toggle('active');
  }, 1000)
}


/*
serInterval
setInterval(callback, tempo, arg1, arg2, ..),
irá atival o callback toda vez que a quantidade de tempo passar
*/

// function loop(texto) {
//   console.log(texto);
// }
// setInterval(loop, 100, 'Passou 1s');

//Loop a cada segundo
// let i = 0;
// setInterval(() => {
//   console.log(i++);
// }, 1000);



/*
clearInterval
clearInterval(var), podemos parar um intervalo com o clearInterval.
Para isso precisamos atribuir o setInterval a uma variável.
*/


// const contarAte10 = setInterval(callback, 1000);

// let i = 0;
// function callback() {
//   console.log(i++);
//   if (i > 10) {
//     clearInterval(contarAte10);
//   }
// }



//ou da para passar direto como uma funcao anonima

// let i = 0;

// const cont10 = setInterval(() => {
//   console.log(i++);
//   if (i > 10) {
//     clearInterval(cont10);
//   }
// }, 2000);