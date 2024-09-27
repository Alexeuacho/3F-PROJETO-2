const url = "https://raw.githubusercontent.com/guilhermeonrails/api/main/dados-globais.json"

async function vizualizaDadosGlobais(){
    const res = await fetch(url);
    const dados = await res.json();
    console.log(dados);
    const paragrafo = document.createElement ('p');
    paragrafo.classList.add('graficos-texto');
    const container = document.getElementById('graficos-container')
}

vizualizaDadosGlobais();