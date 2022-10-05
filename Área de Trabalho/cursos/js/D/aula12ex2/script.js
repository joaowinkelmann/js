function loader(){
    var salve = window.document.querySelector('div#salve');
    var msg = window.document.getElementById('msg');
    var sorte = window.document.querySelector('div#sorte');
    var img = window.document.getElementById('imagem');
    var data = new Date();
    var hora = data.getHours();
    var minutos = data.getMinutes();
    var mili = data.getMilliseconds();
    msg.innerHTML = `<p>Agora são ${hora} horas e ${minutos} minutos.</p>`;
    sorte.innerHTML = `Seu número da sorte é igual a ${mili}.`;


    //debug horas:
    //hora = 20;

    if(hora > 5 && hora < 12){
        salve.innerHTML = `Bom dia!`;
        img.src = "manha.jpg";
    }
    else if (hora >= 12 && hora < 18){
        salve.innerHTML = `Boa tarde!`;
        img.src = "tarde.jpg";
    }
    else{
        salve.innerHTML = "Boa noite!";
        img.src = "noite.jpg";
    }
}