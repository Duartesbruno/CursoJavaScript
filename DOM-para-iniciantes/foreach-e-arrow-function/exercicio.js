// Mostre no console cada parágrado do site

const paragrafos = document.getElementsByTagName('p');
const paragrafosArray = Array.from(paragrafos);

paragrafosArray.forEach((item, index) => {
    console.log(item, index);
});


// Mostre o texto dos parágrafos no console

paragrafosArray.forEach((item) => {
    console.log(item.innerText);
});



// Como corrigir os erros abaixo (ja foi corrigido):

const imgs1 = document.querySelectorAll('img');

imgs1.forEach((item, index) => {
  console.log(item, index);
});




let i = 0;
imgs1.forEach(() => {
console.log(i++);
});


imgs1.forEach(() => i++);
console.log(i);