const btnBuscar = document.getElementById('buscar');
const resultado = document.getElementById('resultado');
const cepInput = document.getElementById('cepInput');

const limparConteudo = () => {
    resultado.innerHTML = ''; 
}

const buscaCep = () => { 
    const msgInput = document.getElementById('msgInput');

    if (cepInput.value.length !== 8) {
        if (!msgInput) {
            const spanInput = document.createElement('span');
            spanInput.id = 'msgInput';
            spanInput.style.color = 'red';
            spanInput.textContent = 'Informe um CEP válido com 8 dígitos.';
            cepInput.parentNode.insertBefore(spanInput, cepInput.nextSibling);
        } else {
            msgInput.textContent = 'Informe um CEP válido com 8 dígitos.';
        }
        limparConteudo();
        return;
    } else {
        if (msgInput) {
            msgInput.textContent = '';
        }
    }

    fetch(`https://viacep.com.br/ws/${cepInput.value}/json/`)
    .then(response => {
        if (!response.ok) {
            throw new Error('Não foi possível obter os dados do CEP');
        }
        return response.json();
    })
    .then(data => {
        if (data.erro) {
            throw new Error('CEP não encontrado');
        } 
        const span = document.createElement('span');
        span.textContent = `${data.logradouro} - ${data.bairro} - ${data.localidade} / ${data.uf}`;
        limparConteudo();
        resultado.appendChild(span);
    })
    .catch(error => {
        console.error('Erro na busca do CEP:', error);
        const spanError = document.createElement('span');
        spanError.textContent = 'CEP não encontrado';
        limparConteudo();
        resultado.appendChild(spanError);
    });
};

btnBuscar.addEventListener('click', buscaCep);


cepInput.addEventListener('input', function() {
    const cepFormatado = this.value.replace(/\D/g, '').substring(0, 8);
    this.value = cepFormatado;
});