function getPreco(imposto = 0, moeda = 'R$'){
    return `${moeda} ${this.preco *(1- this.desc) * (1+imposto)}`
}

const produto = {
    nome:'Notebook',
    preco: 4589,
    desc:0.15,
    getPreco
}
console.log(getPreco())
console.log(produto.getPreco()) //chamada correta 

const carro = {preco:49990, desc:0.20} //novo objeto carro

console.log(getPreco.call(carro)) //chamando carro sem mudar os parametros da função
console.log(getPreco.apply(carro))

console.log(getPreco.call(carro,0.17,'$Dollar ')) //chamada mudando parametros da função
console.log(getPreco.apply(carro,[0.15, '$']))