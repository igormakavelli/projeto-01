const pessoa = {
    saudacao:'Bom dia',
    falar(){
        console.log(this.saudacao)
    }
}
pessoa.falar()
const falar = pessoa.falar
falar()//conflito entre paradigmas: funcional 3 00

const falarDePessoa = pessoa.falar.bind(pessoa) //bind usado para amarrar o objeto pessoa
falarDePessoa()

console.log(typeof pessoa)