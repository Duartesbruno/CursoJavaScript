import ValidarCpf from "./js/validar-cpf.js";

const cpf = document.querySelector('#cpf');
const validarCpf = new ValidarCpf(cpf).init();
console.log(validarCpf);