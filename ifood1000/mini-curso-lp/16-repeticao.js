// Quantos números entre 1 e 1000 são múltiplos de 17??

var resposta = 0
var numero = 1

while (numero <= 100000) {
    if (numero % 12 === 0) {
        resposta += 1;
    } 
    numero += 1;
}

console.log("Exitem", resposta, "múltiplos de 17");
 
