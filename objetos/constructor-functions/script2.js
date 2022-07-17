//Exemplo Real

function Dom(seletor) {
    this.element = function() {
        return document.querySelector(seletor);
    }
    this.ativar = function() {
        this.element().classList.add('ativar');
    }
}


const li = new Dom('li');
const ul = new Dom('ul');
const lastLi = new Dom('li:last-child');

//para ativar a funcao
//li.ativar();
//ul.ativar();
//lastLi.ativar();