import { getCSS, tickfont } from "./comum";

async function quantidadeDeUsuarios(){
    const url = "https://raw.githubusercontent.com/guilhermeonrails/api/main/numero-usuarios.json"
    const res = await fetch(url);
    const dados = await res.json();
    const nomeDasRedes = Object.keys(dados);
    const quantidadeDeUsuarios = Object.values(dados);

    const infos = [
        {
            x: nomeDasRedes,
            y: quantidadeDeUsuarios,
            type: 'bar'
        }
    ]

    const layout = {
    plot_bgcolor: getCSS('--cor-de-fundo'),
    paper_bgcolor: getCSS('--fonte'),
    title:{
        Text: 'Redes sociais com mais usuários no mundo',
        x:0,
        font:{
            color: getCSS('--cor-primaria'),
            family: getCSS('--cor-primaria'),
            size: 30,
        }
    },
    xaxis:{
        tickfont: tickfont,
        title: {
            Text:'MNome das redes sociais',
            font:{
             color: getCSS('--cor-secundaria'),
            }
        }
    },
}
yaxis:{
    tickfont: tickfont,
title: {
    text:'Milhões de unuários ativos',
    font: {
        color: getCSS('--cor-secundaria'),
    }
}
}
    const grafico = document.createElement('div');
    grafico.className = 'grafico';
    document.getElementById('graficos-container').appendChild(grafico);
    Plotly.newPlot(grafico,infos);
}

quantidadeDeUsuarios();