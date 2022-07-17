//manipulando classes

const menu = document.querySelector('.menu')
console.log(menu.classList); //é um array-like posso usar [0] para pegar a classe que eu quiser   (todo objeto é um array like)

menu.classList.add('ativo'); //Adicionar uma classe ao menu 
menu.classList.remove('ativo'); //Remover uma classe do menu
//.toggle remove ou adiciona dependendo se o item tiver ou não


/*

menu.classList.remove('menu');
if(menu.classList.contains('menu')) {
    menu.classList.add('posssui-menu');
} else {
    menu.classList.add('nao-possui-menu');
}

*/



/* 

jeito mais antigo de manipular classes é:

menu.className = 'menu-ativo'  //substitui a classeName menu
menu.className = menu.className + ' menu-ativo' //concatena o className

*/



//attributes
/* palavras em verdes sao metodos 
as palavras roxas antes do ponto sao onjetos
e as roxas depois do . são propriedades

*/
const animais = document.querySelector('.animais');
console.log(animais.attributes);  //array like []
console.log(animais.attributes[0])
console.log(animais.attributes[1])
console.log(animais.attributes[2])
//ou
console.log(animais.attributes.class);
console.log(animais.attributes.id);
console.log(animais.attributes['data-texto']);


const img = document.querySelector('img');
console.log(img.getAttribute('src'));
console.log(img.getAttribute('alt'));

/*
set ele cria ou atualiza o atributo exemplo:

const altImg = img.getAttribute('alt');
img.setAttribute('alt', 'é uma raposa');       // setAttribute('atributo', 'valor')
console.log(altImg);

*/

//Para saber se possui algum atributo   [atributos sao aqueles que ficam dentro das tags exemplo: src, alt etc]

const possuiAlt = img.hasAttribute('alt');
console.log(possuiAlt);


//tem como remover com o "removeAttributes"



