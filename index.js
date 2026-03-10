// printando "Hello World" na tela
console.log("Hello World");

// criando uma variável chamada numero e atribuindo o valor 3 para ela
let numero = 3
// printando o número na tela
console.log(numero)

/*
criando uma variável constante denominada "prompt" que vai chamar a função require,
com o argumento "prompt-sync". Isto será usado para solicitar inputs do usuário
*/
const prompt = require("prompt-sync")();

/*
solicitando ao usuário que informe o seu nome,
de forma com que este nome será atribuído a variável "nome"
*/
let nome = prompt("Informe seu nome: ");

//exibindo o nome digitado pelo usuário na tela
console.log("O nome informado foi: "+nome);