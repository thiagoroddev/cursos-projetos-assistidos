itensColetados = ["capa", "arco", "flecha", "machado", "escudo", "comida", "sapato", "capacete", "espada"] 
itemNecessario1 = "machado"
itemNecessario2 = "espada" 
itemNecessario3 = "sapato" 

var itensNecessarios = 0;
 
    for (var item of itensColetados) {
        if (item === itemNecessario1 || item === itemNecessario2 || item === itemNecessario3)
        itensNecessarios ++
} 
console.log(itensNecessarios)
if (itensNecessarios === 3) {
    console.log("PODE ENFRENTAR")
} else {
    console.log("NAO PODE ENFRENTAR")
}

