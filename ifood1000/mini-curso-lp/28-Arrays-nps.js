/*O NPS (Net Promoter Score) é um índice que mede a satisfação dos clientes com um determidado produto ou serviço. Ele é calculado com base nas respostas a uma única pergunta:"Qual é a probabilidade de que você possa recomendar a nossa empresa/produto/serviçi a um amigo ou colega?". A pontuação para esta resposta fica entre 0 e 10.

Aqueles que respondem com uma pontuação de 9 a 10 são chamados de Promotores, e são considerados mais propensos a fazer mais referências positivas para outros potenciais clientes.

Aqueles que respondem com uma pontuação de 0 a 6 são rotulados Detratores, e acredita-se ser menos propensos a apresentar comportamentos de criação de valor.

Respostass de 7 a 8 são rotuladas Passivas ou Neutras e seu comportamento cai no meio de promotores e detratores. 

O Net Promoter Score(NPS) é calculado subtraindo a porcentagem de clientes Detratores da porcentagem de clientes Promotores. Clientes Passivos ou Neutros contam pra o número total de entrevistados, mas não afetam diretamente o resultado líquido global.

Cálculo do NPS:
NPS(%)= promototes - detratores/total de clientes * 100

Seu papel é fazer um programa que calcule o NPS a partir de um array de números em que cada item é a resposta dada por um cliente para a pergunta acima.

ENTRADA:
A entrada será sempre um array de números chamado "respostas" em que cada item é a resposta dada por um cliente para a pergunta ".....??"

SAÍDA:
Você deverá retornar apenas o NPS calculado para esse conjunto de dados específico.*/

// 9-10 = Promotores
// 0-6 - Detratores
// 7-8 = Passivos

let respostas = [9, 9, 9, 9, 9, 9, 9 ,9 ,9 , 1]

function solucao(respostas) {

let promotores = 0;
let detratores = 0;
let total = (respostas).length

for (let voto of respostas) {
    if (voto >= 9) {
        promotores ++
    } else if (voto <= 6) {
        detratores++
    }
} 

let NPS = (promotores  - detratores) * 0.1 / total * 100 
if (NPS < 0 ) {
    NPS = 0
}

return NPS
}

console.log(solucao(respostas))