/* 
Fetch API
Permite fazermos requisições HTTP através do método fetch().
Este método retorna a resolução de uma Promise. Podemos então utilizar o then
para interagirmos com a resposta, que é um objeto do tipo Response.
*/

const doc = fetch('./doc.txt');

// doc.then((resolucao) => {
//     return resolucao.text();
// }).then((body) => {
//     const conteudo = document.querySelector('.conteudo');
//     conteudo.innerText = body;
// })


//pode ser feito assim tbm(form normalmente mais usada):

// doc
// .then(r => r.text())
// .then((body) => {
//     const conteudo = document.querySelector('.conteudo');
//     conteudo.innerText = body;
// });


// const viaCep = fetch('https://viacep.com.br/ws/94859260/json/');

// viaCep
// .then(r => r.json())
// .then(body => {
//     const conteudo = document.querySelector('.conteudo');
//   conteudo.innerText = `${body.logradouro} - ${body.bairro}`
// });



/*
Quando usar o .text()
Podemos utilizar o .text() para diferentes
formatos como txt, json, html, css, js e mais.
*/

const css = fetch('./style.css');

// css.then(r => r.text())
// .then(body => {
//     const conteudo = document.querySelector('.conteudo');
//     conteudo.innerText = body
// });


//ou da para injetar um style
css.then(r => r.text())
.then(body => {
    const conteudo = document.querySelector('.conteudo');
    const style = document.createElement('style');
    style.innerHTML = body;
    conteudo.appendChild(style);  //appendChild: anexar filho
});




const sobre = fetch('./sobre.html');

sobre.then(r => r.text())
.then(body => {
    const div = document.createElement('div');
    div.innerHTML = body;
    const titulo = div.querySelector('h1');
    document.querySelector('h1').innerText = titulo.innerText;
});



/*
.blob()
Um blob é um tipo de objeto utilizado para
representação de dados de um arquivo. O blob
pode ser utilizado para transformarmos requisições
de imagem por exemplo. O blob gera um URL único.
*/

const img = fetch('./img.png');

img.then(r => r.blob())
.then(body => {
    const blobURL = URL.createObjectURL(body);
    const imagemDom = document.querySelector('img');
    imagemDom.src = blobURL;
});



/*
.clone()
Ao utilizado os métodos acima, text, json, e blob, a resposta é modificada.
Por isso existe o método clone, caso você necessite
transformar uma resposta em diferentes valores.
*/

const cep = fetch('https://viacep.com.br/ws/91420210/json/');

cep.then(r => {
    const r2 = r.clone();
    r.text().then((text) =>{
        console.log(text)
    })
    r2.json().then((json) => {
        console.log(json);
    })
})



/*
.headers
É uma propriedade que possui os cabeçalhos da requisição.
É um tipo de dado iterável então podemos utilizar o forEach para vermos
cada um deles.
*/

cep.then(r => {
    r.headers.forEach(header => {
        console.log('header-->', header)
    })
})


/*
.status e .ok
Retorna o status da requisição. Se foi 404, 200, 202 e mais, ok retorna
um valor booleano sendo true para uma requisição de sucesso e false para
uma sem sucesso.
*/

//pode tbm retornar a URL e tbm o type Basic: requisao feita dentro do proprio servidor e cors: requisicao feita para fora do servidor permitida exemplo viacep

const div1 = document.createElement('div');
fetch('https://viacep.com.br/ws/91420210/json/')      // './docs.txt'   pagina nao existe
.then(r => {
    console.log(r.status, r.ok);
    console.log(r.url);
    console.log(r.type);
    if(r.status === 404) {
        console.log(r.url);
        console.log(r.type);
        console.log('Página não encontrada')
    }
})
