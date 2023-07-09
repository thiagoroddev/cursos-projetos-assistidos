const listaDeNumeros = [34, 56, 768, 8, 81, 3, 6];

// Qual a soma dele?

let acumulador = 0;
for (const numero of listaDeNumeros) {
    acumulador += numero;
}

console.log("A soma é", acumulador);


//Qual o menor deles?

let menorNum;

for (const num of listaDeNumeros) {
    if (menorNum === undefined) {
        menorNum = num;

    } else {
        if (num < menorNum ) {
            menorNum = num;
        }

    }

}

console.log("O menor número é", menorNum);


