/*
Escopo
Quando criamos uma função, a mesma possui acesso à todas as variáveis
criadas em seu escopo e também ao escopo pai. A mesma coisa acontece
para funções dentro de funções.


let item1 = 1;
function funcao1() {
  let item2 = 2;
  console.log('F1-item1 = ',item1)
  console.log('F1-item2 = ',item2)
  function funcao2() {
    let item3 = 3;
    console.log('F2-item1 = ',item1)
    console.log('F2-item2 = ',item2)
    console.log('F2-item2 = ',item3)
  }
  funcao2();
}

funcao1();

// func1, possui acesso à
// item1 e item2

// func2, possui acesso à
// item1, item2 e item3

*/


/*
Closures

A funcao2 possui 4 escopos. O primeiro escopo é o Local, com acesso ao item3.
O segundo escopo dá acesso ao item2, esse escopo é chamado de Clojure (funcao1)
(escopo de função dentro de função). O terceiro escopo é o Script com acesso ao item1
e o quarto escopo é o Global/Window.


let item1 = 1;
function funcao1() {
  let item2 = 2;
  function funcao2() {
    let item3 = 3;
    console.log(item1);
    console.log(item2);
    console.log(item3);
  }
  funcao2();
}

*/

/*
Debuggung

É possível "debugarmos" um código JavaScript utilizando ferramentas do browser ou através do próprio
Visual Studio Code. Se o código possuir qualquer Web API, o processo deve ser feito no Browser.
Plugins podem interferir no debug dentro do browser.
*/

debugger; // adicione a palavra debugger
let opcao1 = 1;
function funcao1() {
  let opcao2 = 2;
  function funcao2() {
    let opcao3 = 3;
    console.log(opcao1);
    console.log(opcao2);
    console.log(opcao3);
  }
  funcao2();
}
funcao1();