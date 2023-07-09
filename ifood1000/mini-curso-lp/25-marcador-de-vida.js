// Em um determinado jogo de plataforma, parecido com o jogo Mário, um personagem deve evitar diferentes tipos de inimigos. Os inimigo são divididos em classes pelo grau de periculosidade, ou seja, o quão perisosos eles são para o personagem. Existem 4 classes de inimigos:

//Classe 1: inimigos que tiram 20 pontos de vida;
//Classe 2: inimigos que tiram 30 pontos de vida;
// Classe 3: inimigos que tiram 40 pontos de vida;
//Classe 4: inimigos que tiram 50 pontos de vida.

//Você deve criar a lógica do jogo que verifica a quantidade de vida de um personagem toda vez que ele encosta em um inimigo. Para isso, seu código deve, a partir de uma variável que armazena a vida atual do personagem, mostrar se o jogador perdeu o jogo (vida menor ou igual a zero). Se ele não tiver perdido, você deve mostrar quanto de vida ainda resta para que ele perca.

//A entrada será composta sempre por 2 variáveis:
// vida do tipo number. Essa variável mostra a vida do personagem antes de esbarrar no inimigo;
//classe do tipo number. Essa variável mostra a classe do inimigo que o jogador encostou.

//Saídas:imprima na tela: 
//A vida do personagem depois de ter esbarrado no inimigo, caso ele ainda esteja vivo;
//PERDEU caso a vida do personagem depois de ter encostado no inimigo seja menor ou igual a zero.

function dano(vida = 100, classe = 2) {


if (classe === 1) {
    vida -= 20 
    console.log("-20 de vida")
} else if (classe === 2) {
    vida -= 30 
    console.log("-30 de vida")
} else if (classe === 3) {
    vida -= 40 
    console.log("-40 de vida")
} else {
    vida -= 50 
    console.log("-50 de vida")
}

if (vida <= 0) {
    console.log("PERDEU")
} else {
    console.log("Vida:", vida)
}
}


console.log(dano());