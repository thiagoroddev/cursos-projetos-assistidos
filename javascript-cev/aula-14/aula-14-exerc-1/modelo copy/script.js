function contar() {
    var inicio = document.getElementById ('txtini')
    var fim = document.getElementById ('txtfim')
    var passo = document.getElementById ('txtpas')
    var res = document.getElementById ('res')

    if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0 ) {
       window.alert ('ERRO')
    

    }  else {
        res.innerHTML = 'Contando: <br>'
        let i = Number(inicio.value)
        let f = Number(fim.value)
        let p = Number(passo.value)
        if(p<=0) {
            window.alert('Passo inválido!Consiferando PASSO 1')
        }
        if (i < f) {
            for (let c = i;c <= f;c += p){
            res.innerHTML += ` ${c} \u{1F449}`
            } 
        } else {
            for ( let c = i;c >= f;c-= p) {
            res.innerHTML += ` ${c} \u{1F449}`
        
            }
        }
    }
}