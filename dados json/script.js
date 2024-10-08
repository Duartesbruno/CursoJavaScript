fetch('./dados.json')
.then(r => {
    return r.json();
})
.then(data =>
    data.forEach(item => {
        console.log(item.aula);
    })
)


/*
JSON.parse() e JSON.stringiy()
JSON.parse() irá transformar um texto JSON em um objeto JavaScript.
JSON.stringify() irá transformar um objeto JavaScript em uma string no formato JSON.
*/

const textoJSON = '{"id": 1, "aula": "JavaScript", "tempo": "25min"}';
const textoOBJ = JSON.parse(textoJSON);



const enderecoOBJ = {
    cidade: "Rio de Janeiro",
    rua: "Ali Perto",
    pais: "Brasil",
    numero: 50,
}
const enderecoJSON = JSON.stringify(enderecoOBJ);



//Quando nao tinha a funcao .json() usava-se o JSON.parse()
//exemplo:
fetch('./dados.json')
.then(r => r.text())
.then(data => {
    const dataFinal = JSON.parse(data);
    console.log(dataFinal);
})





const configuracoes = {
    player: "Google",
    tempo: 25.5,
    aula: "2.1 JavaScript"
}


localStorage.config = JSON.stringify(configuracoes);

const stringConfig = JSON.parse(localStorage.config);
console.log(stringConfig);



const url = 'https://jsonplaceholder.typicode.com/posts/';
const options = {
  method: 'POST',
  headers: {
    "Content-Type": "application/json; charset=utf-8",
  },
  body: '{"title": "JavaScript"}',
}

.fetch(url, options)
.then(response => response.json())
.then(json => {
  console.log(json);
});


/*
method:

GET
Puxa informação, utilizado para pegar posts, usuários e etc.
[por padrao fetch ele já é GET]

POST
Utilizado para criar posts, usuários e etc.

PUT
Geralmente utilizado para atualizar informações.

DELETE
Deleta uma informação.

HEAD
Puxa apenas os headers
*/



/*
const url = 'https://jsonplaceholder.typicode.com/posts/2';      //passando id 2
const options = {
  method: 'POST',
  headers: {
    "Content-Type": "application/json; charset=utf-8",
  },
  body: '{"title": "Java"}',
}

.fetch(url, options)
.then(response => response.json())
.then(json => {
  console.log(json);
});


esta alterando o title do objeto com id 2 para "Java"
*/

/*
const url2 = 'https://jsonplaceholder.typicode.com/posts/2';
const options2 = {
  method: 'HEAD'
}

fetch(url, options)
.then(response => {
  console.log(response.headers.forEach(console.log));
  //console.log(response.headers.get('Content-Type'));
})
*/


/*
Headers
É uma forma que do servidor mandar informação para browser, ou o browser mandar informação para o servidor

Cache-Control
Tempo que o arquivo deve ficar em cache em segundos. Ex: public, max-age=3600

Content-Type
Tipo de conteúdo. Ex: text/html; charset=utf-8. Indicar o tipo de arquivo principalmente em métodos POST e PUT.

Lista de Headers
https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers

*/