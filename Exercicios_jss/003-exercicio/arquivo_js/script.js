function verificar() {
    data = new Date
    ano = data.getFullYear()
    fano = document.getElementById('txtano')
    res = document.querySelector('div#res')

    if (fano.value.length == 0 || Number (fano.value) > ano) {
        alert('[ERRO] Verefique os dados e tente novamente')
    } else {
        fsex = document.getElementsByName('radsex')
        idade = ano - Number (fano.value)
        genero = ''
        img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            genero = 'Homen'
            if (idade >= 0 && idade <=10 ) {
                img.setAttribute('src', './img/boykid.jpg')
                //criança    
            } else if (idade <= 21) {
                img.setAttribute('src', './img/boyyoung.jpg')
                //Jovem
            } else if (idade <= 55) {
                img.setAttribute('src', './img/man.jpg')
                //Adulto
            } else {
                img.setAttribute('src', './img/oldman.jpg')
                //Idoso
            }

        } else if (fsex[1].checked) {
            genero = 'Mulher'
            if (idade >= 0 && idade <=10 ) {
                img.setAttribute('src', './img/girlkid.jpg')
                //criança    
            } else if (idade <= 21) {
                img.setAttribute('src', './img/girlyoung.jpg')
                //Jovem
            } else if (idade <= 55) {
                img.setAttribute('src', './img/woman.jpg')
                //Adulto
            } else {
                img.setAttribute('src', './img/oldwoman.jpg')
                //Idoso
            }
        } else {
            genero = 'Não informado'
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos que você é um(a) ${genero} com ${idade} anos`
        res.appendChild(img)
        
    }

    
}