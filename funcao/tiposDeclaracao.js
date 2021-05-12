//function declaration
console.log(soma(5,6)) //função declarada pode ser chamada antes de ser criada
function soma(x,y){
    return x+ y
}

//function expression
const sub = function(x,y){
    return x - y
}

//named function expression
const mult  = function mult(x,y){
    return x * y
}

console.log(sub(7,5))
console.log(mult(6,10))

