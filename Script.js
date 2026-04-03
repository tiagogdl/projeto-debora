
function abrir(img) {
    var crescer = document.getElementById('crescer')
    var imagem = document.getElementById('img-grande')

    crescer.style.display = 'flex'
    imagem.src = img.src

    var texto = document.querySelector('p.text-none')
}

function fechar(img) {
    var crescer = document.getElementById('crescer')
    crescer.style.display = 'none'
}
