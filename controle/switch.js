const imprimirResultado = function(nota){
switch (Math.floor(nota)){
    case 10:
        case 9:
            console.log('Quadro de Honra com '+ nota)
    break

    case 8: case 7:
        console.log('Aprovado '+  nota)
    break

    case 6: case 5: case 4:
        console.log('Recuperação com '+ nota)
    break
    
    case 3: case 2: case 1:
        console.log('Reprovado com '+ nota)
        break 
    default:
        console.log('Nota invalida')
    
    }
console.log('Fim')
}

imprimirResultado(10)
imprimirResultado(8)
imprimirResultado(6)
imprimirResultado(3)
imprimirResultado(-1)
imprimirResultado(11)