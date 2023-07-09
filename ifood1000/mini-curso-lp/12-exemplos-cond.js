let precoProduto1 = 4;
let precoProduto2 = 2;
let precoProduto3 = 6;
let custo = 0;

if (precoProduto1 <= 4.5) {
    console.log("Comprei")
    custo +=  precoProduto1;
} else {
    console.log("Deixa pra próxima")
}

if (precoProduto2 <=5) {
    if (precoProduto2 >=2 ) {
        console.log("Comprei")
        custo += precoProduto2;
    } else {
        console.log("Deve estar estragado")
    }
}

console.log("Comprei o produto 3")
custo += precoProduto3

console.log("Custo total:", custo);

