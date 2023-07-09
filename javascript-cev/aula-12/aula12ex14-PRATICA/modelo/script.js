function verificar () {
    var data = new Date ()
    var ano = data.getUTCFullYear ()
    var fano = document.getElementById ('txtano')
    var res = documen.getElementById ('res')
    
    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert ('ERRO')
    }   else {
    var fsex = document.getElementsByName ('radsex')
    var idade = ano - Number(fano.value)
    var genero = ''
    var img = document.createElement ('img')
    img.setAtribute ('id', 'foto')

        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade < 10) {
            // criança
            img.setAtribute ('src', 'bebe.png')
            } else if (idade < 21) {
            // jovem
            img.setAtribute ('src', 'adolescenteH.jpeg')
            } else if (idade < 50) {
            // adulto
            img.setAtribute ('src', 'homem.jpeg')
            } else {
            // idoso
            img.setAtribute ('src', 'velho.jpg')
            } 
    
        } else if (fsex[1].checked) {
            genero = 'Mulher' 
            if (idade >=0 && idade < 10) {
                img.setAttribute('src', 'bebe.png')
                // criança
            
                } else if (idade < 21) {
                 // jovem
                 img.setAttribute ('src', 'adolescenteM.webp')
                 } else if (idade < 50) {
                 // adulto
                 img.setAttribute('src', 'mulher.webp')
                 } else {
                    // idoso
                img.setAttribute('src', 'velha.jpeg')
                }
            }

            res.style.textAlign
            res.innerHTML = `Detectamos um(a) ${genero} de ${idade} anos`
        }   res.appendChild(img)
    }