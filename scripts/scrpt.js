async function obterCotacaoUSD() {
    const apiKey = '6da7002e5ec9559336503bb8';
    const url = 'https://v6.exchangerate-api.com/v6/6da7002e5ec9559336503bb8/latest/USD';
    const cotacao = document.getElementById('cotacao');
    const valor = parseFloat(document.getElementById('valorReal'.value));

    try {
        const resposta = await fetch(url);
        const dados = await resposta.json();

        if(dados.result === "success"){
            const taxaDeCambio = dados.conversion_rates.BRL;
            cotacao.innerHTML = '${taxaDeCambio';
        } else {
            cotacao.innerHTML = 'Erro';
        }
    } catch (erro) {
        cotacao.innerHTML = 'API Error';
    }

    // obterCotacaoDolar();

    // funcion conversorUSDparaBRL() {
    //     var valorReal = parseFloat(document)
    //     cotacao.innerHTML = '${taxaDeCambio()' 
    // }
}