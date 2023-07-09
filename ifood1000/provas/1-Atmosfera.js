/*Segundo o Instituto de Astronomia, Geofísica e Ciências Atmosféricas (IAG) da Universidade de São Paulo (USP), a atmosfera, camada de gás que envolve nosso planeta, é constituída de cinco camadas: troposfera, estratosfera, mesosfera, termosfera e exosfera. O ar se torna mais rarefeito ("menos ar") quanto mais distante da superfície terrestre. É por isso que os alpinistas normalmente levam oxigênio com eles quando escalam altas montanhas (começa a "faltar" ar para a respiração). A troposfera é a única camada em que os seres vivos podem respirar normalmente.

As cinco camadas, separadas pela distância da superfície da Terra são:

Troposfera: essa camada se estende até 20 km do solo;
Estratosfera: a estratosfera chega a 50 km do solo;
Mesosfera: o topo da mesosfera fica a 80 km do solo;
Termosfera: o topo da termosfera fica a  450 km acima da Terra;
Exosfera: a camada superior da atmosfera fica a  900 km acima da Terra.
Você, como funcionário da Administração Nacional da Aeronáutica e Espaço do Estados Unidos, NASA, deve criar um programa que, dada a leitura de um sensor que mostra a quantos quilômetros do solo uma nave está, indique aos astronautas em qual camada da atmosfera eles estão. Uma camada começa assim que a outra termina.

Entrada
A entrada do seu programa será composta por uma variável do tipo number chamada altitude que indica a quantos quilômetros do solo a nave está.

Saída
Seu programa deve retornar:

TROPOSFERA: caso a nave esteja na troposfera;
ESTRATOSFERA: caso a nave esteja na estratosfera;
MESOSFERA: caso a nave esteja na mesosfera;
TERMOSFERA: caso a nave esteja na termosfera;
EXOSFERA: caso a nave esteja na exosfera;
Exemplo
Entrada 1
altitude = 85

Saída 1
TERMOSFERA

Explicação 1
A termosfera começa após o quilômetro 80 e vai até o quilômetro 450.

Entrada 2
altitude = 15

Saída 2
TROPOSFERA

Explicação 2
A troposfera se estende até 20 km do solo.

Veja os três principais erros que você pode está cometendo ao passar seu código para a nossa plataforma:
Você está esquecendo de trocar o console.log pelo return;
Você não está retornando o que é pedido. Lembre-se que a mensagem a ser retornada tem que ser exatamente a solicitada no exercício, sem espaços em branco a mais e com as letras maiúsculas. Se a questão estiver pedindo, por exemplo, para retornar um número, não retorne nenhuma mensagem antes, retorne APENAS o número;
Você está atribuindo valores às variáveis de entrada.
Para maiores informações, veja a PARTE PRÁTICA DO MINICURSO.

CASO VOCÊ TENHA DELETADO A FUNÇÃO "solucao", COLE O CÓDIGO ABAIXO:
function solucao(altitude) {
    */

function solucao(altitude=451) {


if (altitude <= 20 ) {
    return "TROPOSFERA"
} else if (altitude >20 && altitude <= 50) {
     return "ESTRATOSFERA"
} else if (altitude >50 && altitude <= 80) {
    return "MESOSFERA"
} else if (altitude >80 && altitude <= 450) {
    return "TERMOSFERA"
} else if (altitude > 450 && altitude <= 900){
    return "EXOSFERA"
}

}

console.log(solucao())