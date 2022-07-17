// Quando o usuário clicar nos links internos do site,
// adicione a classe ativo ao item clicado e remova dos
// demais itens caso eles possuam a mesma. Previna
// o comportamento padrão desses links

const linksInternos = document.querySelectorAll('a[href^="#"]');

function handleLink(event) {
    event.preventDefault(); //esta tirando o padrao de scrola pra sessao
    linksInternos.forEach((link) => {   //esta fazendo o looping para remover a classe 'ativo' [faz uma especia de limpa]
        link.classList.remove('ativo')
    });
    //depois de remover todas as classes ativo ele adicona a classe ativo onde somente foi clicado
    event.currentTarget.classList.add('ativo');   // this.classList.add('ativo');
}


linksInternos.forEach((link) => {
    link.addEventListener('click', handleLink )
})





// Selecione todos os elementos do site começando a partir do body,
// ao clique mostre exatamente quais elementos estão sendo clicados

const todosElementos = document.querySelectorAll('body *');

function handleElemento(event) {
    console.log(event.currentTarget);  //current Target = alvo atual
}


todosElementos.forEach((elemento) => {
    elemento.addEventListener('click', handleElemento)
});



// Utilizando o código anterior, ao invés de mostrar no console,
// remova o elemento que está sendo clicado, o método remove() remove um elemento


/* pass dentro da function em vez de 
 "console.log(event.currentTarget);"
 passar:
 event.currentTarget.remove();

tudo que for clicado era ser removido.

*/



// Se o usuário clicar na tecla (t), aumente todo o texto do site. 

function handleClickT(event) {
    if(event.key === 't') {
        document.documentElement.classList.toggle('textBig')
        //documentElement esta falando diretamente com html
    }
}

window.addEventListener('keydown', handleClickT)