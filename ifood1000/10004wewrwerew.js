
function solucao(itensColetados = ["capa", "arco", "flecha", "machado", "escudo", "comida", "sapato", "capacete"], itemNecessario1 = "machado", itemNecessario2 = "espada", itemNecessario3 = "sapato") {
    // seu codigo aqui
    console.log(itemNecessario1)
    console.log(itemNecessario2)
    if (itensColetados === true) {
    return "PRESA"
    } else {
    return "PREDADOR"
    }
}

console.log(solucao())
    
