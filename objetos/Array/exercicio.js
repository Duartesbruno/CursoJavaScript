const pratos = ['Pizza', 'Frango', 'Carne', 'Macarrão'];
// Remova o primeiro valor de comidas e coloque em uma variável
// Remova o último valor de comidas e coloque em uma variável
// Adicione 'Arroz' ao final da array
// Adicione 'Peixe' e 'Batata' ao início da array

const primeiroValor = pratos.shift(); // 'Pizza'
console.log(primeiroValor); // Pizza

const ultimoValor = pratos.pop(); // 'Macarrão'
console.log(ultimoValor);

const addFinal = pratos.push('Arroz'); // ['Frango', 'Carne', 'Arroz']

const addInicio = pratos.unshift('Peixe', 'Batata'); 
console.log(pratos); // ['Peixe', 'Batata', 'Frango', 'Carne', 'Arroz']







const estudantes = ['Marcio', 'Brenda', 'Joana', 'Kleber', 'Julia'];
// Arrume os estudantes em ordem alfabética
// Inverta a ordem dos estudantes
// Verifique se Joana faz parte dos estudantes
// Verifique se Juliana faz parte dos estudantes


const ordemAlfa = estudantes.sort(); // ['Brenda', 'Joana', 'Julia', 'Kleber', 'Marcio']
const ordemInvert = estudantes.reverse(); // ['Marcio', 'Kleber', 'Julia', 'Joana', 'Brenda']    -neste caso ele ficou nessa ordem pois a função de cima ele ordenou por ordem alfabética.

estudantes.includes('Joana'); //true
estudantes.includes('Juliana'); //false






let html = `<section>
              <div>Sobre</div>
              <div>Produtos</div>
              <div>Contato</div>
            </section>`
// Substitua section por ul e div com li,
// utilizando split e join

html = html.split('section').join('ul').split('div').join('li');
console.log(html);






const veiculos = ['Ford', 'Fiat', 'VW', 'Honda'];
// Remova o último carro, mas antes de remover
// salve a array original em outra variável

const arrayOrig = veiculos.slice();
veiculos.pop();
console.log(veiculos);
console.log(arrayOrig);
