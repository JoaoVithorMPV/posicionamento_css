function carregar() {
    msg = document.getElementById('msg')
    img = document.getElementById('img') 
    data = new Date()
    hora = data.getHours()
    minuto = data.getMinutes()
    //hora = 2
    msg.innerHTML = (`Agora são ${hora} horas e ${minuto} minutos`)
    if (hora >= 0 && hora < 6) {
        //Boa noite!
        img.src = 'noite2.jpg'
        document.body.style.background = "#1a3433"
    } else if (hora >= 6 && hora < 12) {
        //Bom dia!
        img.src = 'manha2.jpg'
        document.body.style.background = "#bad0da"
    } else if (hora >= 12 && hora < 18) {
        //Boa tarde!
        img.src = 'tarde2.jpg'
        document.body.style.background = "#ec5b03"
    } else if (hora >= 18 && hora < 23) {
         //Boa noite!
         img.src = 'noite2.jpg'
         document.body.style.background = "#1a3433"
    }
}

