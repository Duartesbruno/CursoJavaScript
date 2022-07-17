//Classe e Tag

const animais = document.getElementById('animais');
console.log(animais);


const gridSection = document.getElementsByClassName('grid-section');
console.log(gridSection);
//console.log(gridSection[0]);
//console.log(gridSection.length);

const ul = document.getElementsByTagName('ul');
console.log(ul)


const primeiraLi = document.querySelector('li');
console.log(primeiraLi);


const primeiraUl = document.querySelector('ul');
console.log(primeiraUl);


const linksInterno = document.querySelector('[href^="#"]');
console.log(linksInterno);
//console.log(linksInterno.href);


const animaisImg = document.querySelectorAll('.animais img');   //querySelctorAll= retorna um node list
console.log(animaisImg);
//console.log(animaisImg[0]);


const gridSectionHTML = document.getElementsByClassName('grid-section');
const gridSectionNode = document.querySelectorAll('.grid-section');

primeiraUl.classList.add('grid-section');

//console.log(gridSectionHTML);
//console.log(gridSectionNode);

gridSectionNode.forEach(function(item, index){
    console.log(index);
   // console.log(index);
});

const arrayGrid = Array.from(gridSectionHTML);
arrayGrid.forEach(function(item){
    console.log(item);
});