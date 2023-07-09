// Você foi contratado pela FIFA para criar um programa que mostre no telão qual time está ganhando a partida.

/* Entrada:
A entrada do seu programa será composta por uma variável chamada placar, um array com dois elementos que armazenam, respectivamente, quantos gols o Time A está fazendo e quantos gols o Time B está fazendo.
SAÍDA:
Você deve retornar:
TIME A: caso este ganhe.
TIME B: caso este ganhe.
EMPATE: caso ninguém ganhe.*/

var placar = [3, 3]

function solucao(placar){



if (placar[0] > placar[1]) {
    return "TIME A"
} else if ( placar[1] > placar[0]) {
    console.log("TIME B")
} else {
    return"EMPATE"
}
}

console.log(solucao(placar));