let valor //nao inicializada = não definido 
console.log(valor);

valor = null; //ausência de valor = valor nulo
console.log(valor);

const produto = {}
console.log(produto.preco) //preco nao definido
console.log(produto)

produto.preco = 3.50
console.log(produto)

produto.preco = undefined //evite atribuir undefined 
console.log(!!produto.preco)
//delete produto.preco 
console.log(produto)

produto.preco = null //sem preço
console.log(!!produto.preco)
console.log(produto)
