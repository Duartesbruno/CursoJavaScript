// const regexp = /\w+[-.]/gi;

// const regexp1 = new RegExp('\\w', 'gi');
// console.log(frase.raplace(regexp1, 'X'));

//text()
const regexp = /Java/g;
const frase = 'JavaScript e Java Linguagem 101, Java';

let i =1;
while(regexp.test(frase)) { //test ele procuro na string o que esta sendo passado no parametro
  console.log('Encontrou: ' + i++ + ' posicao na string: ' + regexp.lastIndex);
}




//exec()
const frasee = 'JavaScript, TypeScript, CoffeeScript, Java';

const regexP = /\w+/g;

let regexpResult;
while((regexpResult = regexP.exec(frase)) !== null) {
  console.log(regexpResult); //pode essar o primerio item regexpResult[0]
}




//match()
const regexp1 = /\w{2,}/g;
const regexpSemG = /\w{2,}/;
const frase1 = 'JavaScript, TypeScript e CoffeeScript';

frase1.match(regexp1);
// ['JavaScript', 'TypeScript', 'CoffeeScript']

frase1.match(regexpSemG);
// ["JavaScript", index: 0, input: "JavaScript,
// TypeScript e CoffeeScript", groups: undefined]




//split()
const frase2 = 'JavaScript, TypeScript, CoffeeScript';

frase2.split(', ');
// ["JavaScript", "TypeScript", "CoffeeScript"]
frase2.split(/Script/g);
// ["Java", ", Type", ", Coffee", ""]

const tags = `
<ul>
  <li>Item 1</li>
  <li>Item 2</li>
</ul>
`;

const newTag = tags.split(/(?<=<\/?)\w+/g).join('div');
// <div>
//   <div>Item 1</div>
//   <div>Item 2</div>
// <div>

console.log(newTag);





//Outro exemplo

const tags1 = `
<ul>
  <li>Item 1</li>
  <li>Item 2</li>
</ul>
`;

const regex = /ul/g;

const resultado = tags1.replace(regex, 'div');
console.log(resultado);




//outro

const regex2 = /(?<=<\/?)\w+/g             //?<= serve para ver sempre atras do que for indicado

const resultado2 = tags1.replace(regex2, 'div');
console.log(resultado2);



//Exemplo usando captura $&

const regex3 = /<li/g;

const resultado3 = tags.replace(regex3, '$& class="active"')
console.log(resultado3);



//exemplo de captura com emails
const emails = `
empresa@email.com
contato@email.com
suporte@email.com
`;

emails.replace(/(\w+@)[\w.]+/g, '$1gmail.com');   //() agrupando para fazer um grupo de captura - sinalizado por $1
// empresa@gmail.com
// contato@gmail.com
// suporte@gmail.com




/*
usando CALLBACK
Para substituições mais complexas, podemos utilizar um callback como segundo argumento do replace. 
O valor do return será o que irá substituir cada match.
*/

const regexp4 = /(\w+)(@[\w]+)/g;
const emails2 = `joao@homail.com.br
marta@ggmail.com.br
bruna@oulook.com.br
andre@origamid.com`

const result = emails2.replace(regexp4, function(...args) {
  console.log(args);
  if(args[2] === '@homail') {
    return `${args[1]}@hotmail`;
  } else if(args[2] === '@ggmail') {
    return `${args[1]}@gmail`;
  } else if(args[2] === '@oulook') {
    return `${args[1]}@outlook`;
  } else {
    return args[0];
  }
});

console.log(result);

// joao@hotmail.com.br
// marta@gmail.com.br
// bruna@outlook.com.br





