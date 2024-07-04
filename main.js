const caixaPrincipal = document.querySelector('.caixa-principal');
const caixaPerguntas = document.querySelector('.caixa-perguntas');
const caixaALternativas = document.querySelector('.caixa-alternativas');
const caixaResultado = document.querySelector('.caixa-resultado');
const textoResultado = document.querySelector('.texto-resultado');
const perguntas = [
    {
        enunciado: "pergunta 1",
        alternativa: [
            "alternativa 1",
            "alternativa 2"
        ]
    },
    {
        enunciado: "perguntas 2",
        alternativas: [
            "alternativa 1",
            "alternativa 2"   
        ]
    },
    {
        enunciado: "perguntas 3",
        alternativas: [
            "alternativa 1",
            "alternativa 2"   
        ]
    },
    {
        enunciado: "perguntas 4",
        alternativas: [
            "alternativa 1",
            "alternativa 2"   
        ]
    },
    {
        enunciado: "perguntas 5",
        alternativas: [
            "alternativa 1",
            "alternativa 2"   
        ]
    }

]

let atual = 0;
let perguntaAtual;

function mostraPergunta(){
    perguntaAtual = perguntas[atual];
}

    


    