// todo ano uma conta CDI rende 10%
// todo mês fazer um depósito
//quantos meses demora para chegar em 100.000

const deposito = 500;
const objetivo = 100000;
const rendimentoAnual = 0.1 / 12;

let conta = 0;
let meses = 0;

while (conta < objetivo) {
    conta += deposito;
    conta += conta * rendimentoAnual;
    meses += 1;
}

console.log("Demorou", meses, "meses");
console.log("Demorou", meses/12, "anos");