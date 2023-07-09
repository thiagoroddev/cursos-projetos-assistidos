// crie um programa para dizer para qual lado a balança vai inclinar quando coloca-se dois corpos de cada lado.
// retorne: o lado que ficar mais pesado
// renorne : Equiibrio caso o peso fique igual

//variáveis 
pesoLadoA1 = 2;
pesoLadoA2 = 3;
pesoLadoB1 = 3;
pesoLadoB2 = 2;


function solucao(pesoLadoA1=3, pesoLadoA2=4, pesoLadoB1=3, pesoLadoB2=8) {
//simplificando as variáveis
ladoA = pesoLadoA1 + pesoLadoA2;
ladoB = pesoLadoB1 + pesoLadoB2;

if (ladoA === ladoB) {
    return "EQUILÍBRIO"
} else if (ladoA > ladoB) {
    return "LADO A"
} else {
    return "LADO B"
}

}

console.log(solucao())