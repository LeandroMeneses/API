async function getAdvice(){
    let resposta = await fetch ("https://api.adviceslip.com/advice");
//criamos uma variável que está guardando os dados que vem da API
    // console.log(resposta);
    //para ver toda estrutra dos dados

    const data = await resposta.json();
    //transformou em JSON a resposta que veio do fetch da API

    // console.log(data);
    // console.logo(data.slip.advice); // para ter certeza que está retornando a frase.

    document.querySelector("#advice").innerHTML = data.slip.advice;

    //data.slip.advice é o caminho para acessar o valor do objeto.
}

//BOTÃO FUNCIONANDO

let botaoAdvice = document.querySelector("#get-advice");

botaoAdvice.addEventListener("click", function(){
    getAdvice();
});

getAdvice();