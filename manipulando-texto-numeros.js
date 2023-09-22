let nomeAluno1 = 'Pedro Henrique';
let txt = 'Estão Chegando as provas';
let num = 123.123;

console.log(nomeAluno1.length); //Conta quantos espaçõs tem na variavel

console.log(txt.indexOf("as")); //Acha em que posição esta (Acha a primeira ocorrencia)

console.log(txt.lastIndexOf("provas")); //Acha a ultima ocorrencia da palavra

console.log(txt.slice(0,5)); //Ira recortar uma parte da string (do index 0 ao 5)

console.log(txt.substr(6,8)); //Ira recortar a string também (do index 6 a 8)

console.log(txt.replace("provas","Avaliações"));  //A função vai mudar a palavra provas por Avaliações

console.log(txt.toUpperCase()) //A função Vai mudar a palacra para letras maiusculas

console.log(txt.toLowerCase()) //A função muda as letras para minúsculas

console.log(num.toFixed(2))  //Define o nunero de casas decimais