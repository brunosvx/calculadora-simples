const resultado = document.querySelector('.tela');

function numero(num){
    resultado.innerHTML += num;
}

function operacao(sinal){
    let ultimo_digito = resultado.innerHTML.substr(resultado.innerHTML.length-1, resultado.innerHTML.length);
    if(["+","-","/","*"].indexOf(ultimo_digito) == -1){
        resultado.innerHTML += sinal;
    }
}


function limpar(){
    resultado.innerHTML = '';
}


function calcular(){
    resultado.innerHTML = eval(resultado.innerHTML)
}

function backspace(){
    resultado.innerHTML = resultado.innerHTML.substr(0, resultado.innerHTML.length-1)
}