function solucao(itensColetados = ["capa", "arco", "flecha","escudo","machado", "comida", "sapato", "capacete", "espada"], itemNecessario1 = "machado", itemNecessario2 = "espada", itemNecessario3 = "sapato") {
  
var itensNecessarios = 0;

for (var item of itensColetados) {
    if (item === itemNecessario1 || item === itemNecessario2 || item === itemNecessario3) {
        itensNecessarios ++
    } 
} if (itensNecessarios === 3) {
    return "PODE ENFRENTAR"
} else {
    return "NAO PODE ENFRENTAR"
}
}

console.log(solucao())