function imc(peso, altura) {
    const imc = peso / (altura ** 2);
    return imc.toFixed(2);  //.toFixed(2) é para deixar só duas casas depois da virgula
}
console.log(imc(90, 1.83));



function corFavorita(cor) {
    if(cor === 'azul') {
        return 'Eu gosto do céu';

    } else if (cor === 'verde') {
        return 'Eu gosto de mato';

    } else {
        return 'Eu não gosto de cores';
    }
}



addEventListener('click', function() {
    console.log('Oi');
})



function terceiraIdade(idade) {
    if(typeof idade !== 'number') {
        return 'Por favor preencha um número'

    } else if(idade >= 60) {
        return true;

    } else {
        return false;

    }
}
console.log(terceiraIdade(60))


function faltaVisitar(paisesVisitados) {
    var totalPaises = 193;
    return `Falta visitar ${totalPaises - paisesVisitados} países`;
}