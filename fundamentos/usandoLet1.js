let numero = 1; //varivel tipo let tem escopo global, de function e de bloco {}
{
    let numero = 2;
    console.log('Dentro = ', numero); //variavel let dentro do {} tem preferencia, caso não haja e chamada a de fora 
}

console.log('Fora = ', numero);