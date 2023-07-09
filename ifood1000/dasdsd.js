/*Peso leve: lutadores com peso mais leve que 55 kg;

Peso meio-médio:  categoria mais pesada que a anterior e com pesos mais leves que 65 kg;

peso médio: categoria mais pesada que a anterior e com pesos mais leves que 75 kg;

Peso meio-pesado: categoria mais pesada que a anterior e com pesos mais leves que 85 kg;

Peso pesado: pesos maiores ou iguais a 85 kg.*/

function solucao(peso1 = 62, peso2 = 65) {

var pesoLeveOK = peso1 < 55 && peso2 < 55
var pesoMedioMedioOK = peso1 >= 55 && peso1 < 65 && peso2 >=55 && peso2 < 65 
var pesoMedioOk = peso1 >=65 && peso1 < 75 && peso2 >= 65 && peso2 < 75
var pesoMedioPesadoOk = peso1 >= 75 && peso1 < 85 && peso2 >= 75 && peso2 < 85
var pesoPesadoOk = peso1 >= 85 && peso2 >= 85

if (pesoLeveOK === true) {
    return"PODE LUTAR"
} else if (pesoMedioMedioOK === true) {
    return"PODE LUTAR"
} else if (pesoMedioOk === true) {
    return "PODE LUTAR"
} else if (pesoMedioPesadoOk === true) {
    return "PODE LUTAR"
} else if (pesoPesadoOk === true) {
    return "PODE LUTAR"
} else {
    return "NÃO PODE LUTAR"
}

}

console.log(solucao())