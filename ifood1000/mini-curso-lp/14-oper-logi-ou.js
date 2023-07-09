// Entrada de cinema
// Menores de 18 = MEIA
// Maiores de 60 = MEIA
// Entre 18 e 60 = INTEIRA (exceto com carteirinha)


const idade = 59
const carteira = true

const adulta = idade >= 18 && idade <= 60;

if (idade < 18 || idade > 60 || (adulta && carteira)) {
    console.log("Meia")
} else {
    console.log("Inteira")
}