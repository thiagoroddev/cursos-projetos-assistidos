// você foi contratado por uma empresa de contabilidade para criar um programa para ajudá-los nos cálculos que são realizados diariamente.
//Você ficou responsável por implementar uma calculadora, uma das funcionalidades do produto.
// há 3 variáveis
// 1 - numero1: indica o primeiro elemento do cálculo;
// 2 - numero2 : indica o segundo elemento do cálculo;
// 3- operacao: indica qual cálculo deve ser feito com os números. Os possíveis valores são :"soma", "subtração", "divisão", "multiplicação".
// você deve retornar o resultado


let numero1 = 10;
let numero2 = 2;
let operacao = "divisao"

if (operacao === "soma") {
    console.log(numero1 + numero2) 
} else if (operacao === "subtracao") {
    console.log(numero1 - numero2)
} else if (operacao === "divisao") {
    console.log(numero1 / numero2)
} else if (operacao === "multiplicacao") {
    console.log(numero1 * numero2)
}

