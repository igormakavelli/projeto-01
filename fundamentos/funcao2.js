//armazenando um função em uma variavel
const imprimirSoma = function (a, b) {
    console.log(a + b)
}
imprimirSoma(2, 3)

//armazenando uma função arrow em uma variavel
const soma = (a, b) => {
    return a + b
} 

console.log(soma(2,3))

//retorno implícito
const subtracao = (a, b) => a- b
console.log(subtracao(3,2))

const imprimir2 = a => console.log(a)
imprimir2('Legal!!')