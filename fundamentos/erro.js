function tratarErroElancar(erro) {
    throw new Error('Ocorreu um erro')
    //throw 10
    //throw true
    /*throw{
        nome:erro.name,
        msg: erro.message,
        date: new Date
    
    }*/

}

function imprimirNomeGrito(obj) {
    try {

        console.log(obj.name.toUpperCase() + '!!!')

    } catch (e) {
        tratarErroElancar(e)
    } finally{  
        console.log('Final')
    }
}

const obj = { name: 'Roberto' }
imprimirNomeGrito(obj)