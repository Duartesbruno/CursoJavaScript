const promessa = new Promise((resolve, reject) => {
    let condicao = true;
    if(condicao) {
        resolve('Estou pronto!') //pode passar um objeto tbm resolve({nome: 'Bruno', idade: 28})
    } else {
        reject(Error('Um erro ocorreu na promise'))
    }
});

promessa.then((resolucao) => {
    console.log(resolucao)
});
// "then" ele monitora a promesa, quado ela for resolvida ele ativa



//exemplo com setTimeout
//pode se ter varios then 
const promessaa = new Promise((resolve, reject) => {
    let condicao = true;
    if(condicao) {
        setTimeout(()=>{
            resolve('Ocorreu! 1')
        }, 2000);
    } else {
        reject(Error('Um erro ocorreu na promise'))
    }
});

promessaa.then(resolucao => {
    console.log(resolucao);   //'Ocorreu! 1'
    return 'Ocorreu! 2';   
})
.then(resolucao => {
    console.log(resolucao);  //'Ocorreu! 2'
    return 'Ocorreu! 3';
})
.then(resolucao => resolucao + 4) //'Ocorreu! 34'
.then(resolucao => {
    console.log(resolucao);
}).catch(rejeitada => {                    //"catch" usado para ativar o tratamento do erro e o script nao reconhecer que é um erro de script
    console.log(rejeitada);
})
.finally(() => {
    console.log('acabou!');
});

//finally() - finally ele executa a funcao anonima assim que a promessa acabar. Ele nao tras nenhum valor

/*tbm é possivel colocar como segundo argumento do .then que reconhece como um catch

.then(resolucao => {
    console.log(resolucao);
}, rejeitada => {                   
    console.log(rejeitada);
});
*/




/*
Promise.all()
retornará uma nova promise assim que todas as promisses dentro
dela forem resolvidas ou pelo menos uma rejeitada. A resposta é 
uma array com as respostas de cada promise.
*/

const login = new Promise((resolve) => {
    setTimeout(() => {
        resolve('Usuário Logado!')
    }, 1000)
});

const dados = new Promise((resolve) => {
    setTimeout(() => {
        resolve('Dados carregados!')
    }, 1500)
});

const carregouTudo = Promise.all([login, dados]);
carregouTudo.then((resolucao) => {
    console.log(resolucao);
})



/*
Promise.race()
Retornará uma nova promise assim que a primeira promise for resolvida
ou rejeitada. Essa nova promise terá a resposta da primeira resolvida.
*/

//Exemplo usando a de cima vai retornar primeiro "Usuário Logado!" pois o setTimeout é menor

const carregouTudo2 = Promise.race([login, dados]);

carregouTudo2.then((resolucao) => {
    console.log(resolucao);
});
