function Cadastro(nome, senha) {
    this.nome = nome;
    this.senha = senha;
    this.ocultarSenha = ocultarSenha;
}

const cadastro1 = new Cadastro('Bruno Duarte', '123456');
const cadastro2 = new Cadastro('Mara Lenise', 'aaa');

function ocultarSenha() {
    const senhaOculta = '*'.repeat(this.senha.length);
    console.log(senhaOculta);
}