const valores = [7.7, 8.9, 6.3, 9.2];
console.log(valores[0], valores[3]);
console.log(valores[4]);

valores[4] = 10; //definindo valor para a array na posição 4
console.log(valores);
console.log(valores.length); //quantidades de elementos dentro de uma array

valores.push({id: 3}, false, null, 'teste');
console.log(valores);

console.log(valores.pop()); //retira o ultimo elemento do array

console.log(valores);

delete valores[0];
console.log(valores);

console.log(typeof valores);
