//COMENTÁRIO EM LINHA
/*
 Comentário em bloco
*/

//variável string
let nome = "Kennedy";
console.log("Hello", nome);
let profissao = "professor";

//variável boolean / boleano
let admin = false;
let idade;

//constante
const data = "";

//variável numérico
nome = 12345;

//OPERADORES MATEMÁTICOS
let num1 = 10;
let num2 = 18;
let soma = num1 + num2;
console.log(soma);
let subtracao = num1 - num2;
console.log(subtracao);
let multiplicacao = num1 * num2;
console.log(multiplicacao);
let divisao = num1 / num2;
console.log(divisao);
let resto = num1 % num2;
console.log(resto);
let potencia = num1 ** num2;
console.log(potencia);

//OPERADORES LÓGICOS
//AND &; OR ||; NOT !

let andMenor = (num1 < 18) & (num2 <= 18);
console.log(andMenor);

let orMenor = num1 < 18 || num2 < 18;
console.log(orMenor);

//CONDICIONAIS
/*
  if (admin) {
    console.log("É admin!");
  }
  //if (admin == false) {
  else {
    console.log("Não é admin");
  }
*/

if (!admin) {
  console.log("Não é admin. deslogaUser()");
}

//FUNÇÕES

//DECLARAÇÃO

function adicao(num1, num2) {
  return num1 + num2;
}

//arrow function
const Diferenca = (num1, num2) => num1 - num2;

const isAdmin = (admin) => (admin ? <i>Sim</i> : <i>Não</i>);

//CHAMADA DE FUNÇÕES
// nomeDaFuncao()
let resultadoAdicao = adicao(num1, num2);
console.log(resultadoAdicao);

let resultadoDiferenca = Diferenca(num1, num2);
console.log(resultadoDiferenca);

//OBJETO
const user = {
  nome: "João dos Santos",
  idade: 29,
  profissao: "Analista",
  cidade: "Chapecó",
  admin: false,
};
console.log(user);

//ARRAYS ou LISTAS
const alunos = ["Antonio", "Carlos", "Crissie"];
console.log(alunos);
