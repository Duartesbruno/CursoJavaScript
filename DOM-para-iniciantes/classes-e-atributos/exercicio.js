// 1)Adicione a classe ativo a todos os itens do menu
//foi adicionado

const itensMenu = document.querySelectorAll('.menu a');  //cria uma nodeList da para usar o forEach
itensMenu.forEach((item) => {
    item.classList.add('ativo');
});


// 2)Remove a classe ativo de todos os itens do menu e mantenha apenas no primeiro
//foi removido o que foi adicionado a cima

itensMenu.forEach((item) => {
    item.classList.remove('ativo');
});

itensMenu[0].classList.add('ativo');



// 3)Verifique se as imagens possuem o atributo alt
//para verificar cada uma se usa forEach
// hasAttribute usa-se para verificar

const imgs = document.querySelectorAll('img');
imgs.forEach((img) => {
    const possuiAtributo = img.hasAttribute('alt');
    console.log(img, possuiAtributo);
});


// 4)Modifique o href do link externo no menu
//usa-se o setAtribute serve para modificar um atributo

const link = document.querySelector('a[href^="http"]');
link.setAttribute('href', 'htttps://www.google.com/');
console.log(link);