var data = new Date()
var hora = data.getHours()
var img = window.document.getElementById('imagem')
var msg = window.document.getElementById('msg')
msg.innerHTML = `Agora são ${hora} horas`
if (hora >= 0 && hora <12) {
//BOM DIA
img.src='IMAGENSS/morning.png'
} else if (hora >= 12 && hora <18) {
    // BOA TARDE
img.src = 'IMAGENSS/afternoon.png'
} else {
    // BOA NOITE
img.src= 'IMAGENSS/night.png'
}
