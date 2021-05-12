let dobro = function (a) {
    return 2 * a
}

//console.log(dobro(2))

dobro2 = (a) => {
    return console.log(2 * a)
}

//dobro2(4)

dobro3 = a => 2 * a //return implícito
console.log(dobro3(Math.PI))
console.log(dobro3(5))

let ola = function(){
    return 'Olá'
}
//console.log(ola())

let ola2 = () => 'Olaaá'
ola = _ => 'Oláa' //possui parametro 
console.log(ola2())