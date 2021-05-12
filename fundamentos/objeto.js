const prod1 = {};
prod1.nome = 'Celualar ultra';
prod1.preco = 4998.90;
console.log(prod1);

prod1['desconto legal '] = 0.40; //evitar atributos com espaço

console.log(prod1);

const prod2 = {
    nome: 'Camisa polo', //necessario a virgula para separar as propriedades do objeto 
    preco: 79.90
}

console.log(prod2);