let precoProduto1 = 10;
console.log("Preço do produto1:", precoProduto1);

precoProduto1 = precoProduto1 + 1;
console.log("Preço do produto1:", precoProduto1);

//precoProduto1 = precoProduto1;
precoProduto1 += 1;
console.log("Preço do produto1:", precoProduto1)

//precoProduto1 = precoProduto1 * 0.8;
//precoProduto1 *= 0.8;
const desconto = precoProduto1 * 0.2;

//precoProduto1 = precoProduto1 - desconto;
precoProduto1 -= desconto;
console.log("Preço do produto1:", precoProduto1);
