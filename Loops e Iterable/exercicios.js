// Crie 4 li's na página
// Utilizando o for...of
// adicione uma classe a cada li
const lista = document.querySelector('.lista');
const itens = ['item 1', 'item 2', 'item 3', 'item 4'];

for(const item of itens) {
    const li = document.createElement('li');
    li.textContent = item;
    li.classList.add('ativo');
    lista.appendChild(li);
}

/*
const lista = document.querySelector('.lista');
const itens = ['item 1', 'item 2', 'item 3', 'item 4'];

for(const [index, item] of itens.entries()) {           //entries = Retorna um objeto iterador que gera pares [chave, valor] para cada elemento no objeto iterável.
    const li = document.createElement('li');
    li.textContent = item;
    li.classList.add('ativo' + index);
    lista.appendChild(li);
}
*/


// Utilize o for...in para listar
// todos as propriedades e valores
// do objeto window

for(const windowKey in window) {
    console.log(`${windowKey}: ${window[windowKey]}`);
}