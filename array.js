let frutas = ["morango","Banana","Mamão", "Pera"];

console.log(frutas.includes('abacaxi'));

if (frutas.includes('Abacaxi')){
    console.log('Existe')
}else if (frutas.includes('Pera')){
    console.log('A string pera existe no array frutas')
}else{
    console.log('Não existe nenhuma das frutas no array')
}