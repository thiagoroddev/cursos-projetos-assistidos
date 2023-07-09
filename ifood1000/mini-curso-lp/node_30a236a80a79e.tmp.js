/* Sinuca é um esporte de mesa, taco e bolas praticado no Brasil. Popularmente, joga-se com bolas menores e coloridas numeradas de 1 a 15 e o chamado bolão, uma bola branca e maior que as demais.

O jogador deve acertar o bolão com o taco para que ele colida com as demais bolas de forma que elas caiam em um dos 6 buracos localizados nos cantos da mesa, denomidados caçapas. Quando isso acontece, diz-se que a bola foi encaçapada, ou seja, caiu na caçapa.

Em uma das várias maneiras de se jogar, soma-se os números correspondentes às bolas encaçapadas por cada um dos dois competidores. Nessa modalidade, ganha quem tiver maior soma ao final do jogo.

Sabendo que a soma total das bolinhas na mesa é 120, você deve criar um programa que receba um arrays de números em que cada item representa o número de uma bola encaçapada pelo jogador A e retorne se o jogador A ganhou, se o jogador B ganhou ou se houve empate.

ENTRADA: A entrada será sempre um array de números, denomidados jogadorA, em que cada item é o número de uma bolinha encaçapada pelo jogador A.

SAÍDA: Retorne:
JOGADOR A GANHOU: se o jogador A tiver ganhado
JOGADOR B GANHOU: se o jogador B tiver ganhado
EMPATE: se tiver ocorrido empate;*/




var jogadorA = [2,4,12]
var jogadorB = []
var somaA;

for (let item of jogadorA) {
    console.log(item)
    jogadorA.push(5)
    console.log(item)
}


