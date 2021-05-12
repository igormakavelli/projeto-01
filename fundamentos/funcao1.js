//funcao sem retorno
function imprimirSoma(a,b){
    console.log(a + b)
}

imprimirSoma(2, 3)
imprimirSoma(2)
imprimirSoma(2, 3, 4 ,5)


//funcao com retorno

function soma(a, b = 1){

    return a + b
}
console.log('Função de retorno')
console.log(soma(2,3))
console.log(soma(2))
console.log(soma())
