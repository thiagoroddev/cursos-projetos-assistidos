// Entrada de cinema
// Menores de 18 = MEIA
// Maiores de 60 = MEIA
// Entre 18 e 60 = INTEIRA (exceto com carteirinha)

const idade = 18;
const temCarteira = true;

const adulta = idade >= 18 && idade <= 60;

//=  if (adulta && !temCateira) =
if (adulta && temCarteira === false) {
    console.log("Inteira")
} else {
    console.log("Meia")
} 




