//para pegar todas as imagens usa-se o foreach

const imgs = document.querySelectorAll('img');

imgs.forEach(function(item, index, array) {
    //console.log(item, index, array);    desconmentar para olhar no console
});


//Transformando HTMColection em um array

const titulos = document.getElementsByClassName('titulo');
const titulosArray = Array.from(titulos);

titulosArray.forEach(function(item) {    //posso tbm passaei os paramentros index e array
    console.log(item);
});



//Arrow Function:   [seria a mesma coisa que o function() mas ela encurta a sintaxe]
const imagens = document.querySelectorAll('img');

imagens.forEach((item) => {
    console.log(item);
})