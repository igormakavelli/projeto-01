{{{{
    var sera = 'Será???'  //toda variavel declarada fora de uma função é global
}}}}

console.log(sera)

function teste(){             //variavel declarada numa função só acessada atraves da chamada de função 
    var local = 123
    console.log(local)
}
teste()
