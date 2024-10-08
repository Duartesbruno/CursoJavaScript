/*
async / await
A palavra chave async indica que a função possui partes assíncronas e 
que você pretende esperar a resolução da mesma antes de continuar. 
O await irá indicar a promise que devemos esperar. Faz parte do ES8.

exemplo junto com try e catch
*/

async function puxarDados() {
    try {
        const responseDados = await fetch('./dados.json');
        const jsonDados = await responseDados.json();
        console.log(jsonDados); 
    } catch(error) {
        console.log('Ocooreu um erro!', error)
    }
}

puxarDados();

/*
Diferença entre then / async

A diferemça é uma sintaxe mais limpa.

function iniciarFetch() {
  fetch('./dados.json')
  .then(dadosResponse => dadosResponse.json())
  .then(dadosJSON => {
    document.body.innerText = dadosJSON.titulo;
  })
}


//mesmo que isso:

iniciarFetch();

async function iniciarAsync() {
  const dadosResponse = await fetch('./dados.json');
  const dadosJSON = await dadosResponse.json();
  document.body.innerText = dadosJSON.titulo;
}

iniciarAsync();
*/



/*
Iniciar Fetch ao Mesmo Tempo
Não precisamos esperar um fetch para começarmos outro. 
Porém precisamos esperar a resposta resolvida do fetch 
para transformarmos a response em json.
*/

async function iniciarAsync() {
  const dadosResponse = fetch('./dados.json');
  const clientesResponse = fetch('./clientes.json');

  // ele espera o que está dentro da expressão () ocorrer primeiro
  const dadosJSON = await (await dadosResponse).json();
  const clientesJSon = await (await clientesResponse).json();

  console.log('aqui', dadosJSON);
  console.log('aqui', clientesJSon);
}

iniciarAsync();


//Promise
//await só funciona em Promise [promessa] exemplo:

async function asyncSemPromise() {
  // Console não irá esperar.
  await setTimeout(() => console.log('Depois de 1s'), 1000);
  console.log('acabou');
}
asyncSemPromise();

async function iniciarAsync() {
  await new Promise(resolve => {
    setTimeout(() => resolve(), 1000)
  });
  console.log('Depois de 1s');
}
iniciarAsync();
