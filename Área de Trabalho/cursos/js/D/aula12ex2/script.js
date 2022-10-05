function loader(){
    var msg = window.document.getElementById('msg');
    var sorte = window.document.querySelector('div#sorte');
    var img = window.document.getElementById('imagem');
    var data = new Date();
    var hora = data.getHours();
    var minutos = data.getMinutes();
    var mili = data.getMilliseconds();
    msg.innerHTML = `<p>Agora são ${hora} horas e ${minutos} minutos.</p>`;
    sorte.innerHTML = `Seu número da sorte é igual a ${mili}.`;

    if(hora > 5 && hora < 12){
        img.innerHTML = `<img src="manha.jpg" alt="Bom dia">`;
    }
}