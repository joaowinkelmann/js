var data = new Date();
var anoatual = data.getFullYear();

var txtresultado = document.querySelector('div#txtresultado');
var imgresultado = document.querySelector('div#imgresultado');
var ano = document.getElementById('ano');

function verifica(){
    if (ano.value.length == 0 || (ano.value > anoatual)){
        window.alert("Verifique os dados e tente novamente")
    }
    var sexo = document.getElementsByName('radio');
    // txtresultado.innerHTML += `<img src="idoso-m.jpg">`;
    var idade = anoatual - Number(ano.value);
    
    if (sexo[0].checked){
        var genero = "Homem";
    }
    else if (sexo[1].checked){
        var genero = "Mulher";
    }
    txtresultado.innerHTML = `Detectado ${genero} de ${idade} anos`;

    if (sexo[0].checked && idade < 15){
        imgresultado.innerHTML = `<img src="bebe-m.jpg">`;
    }
    else if (sexo[0].checked && idade < 25){
        imgresultado.innerHTML = `<img src="jovem-m.jpg">`;
    }
    else if (sexo[0].checked && idade < 65){
        imgresultado.innerHTML = `<img src="adulto-m.jpg">`;
    }
    else if (sexo[0].checked){
        imgresultado.innerHTML = `<img src="idoso-m.jpg">`;
    }
    else if (idade < 15){
        imgresultado.innerHTML = `<img src="bebe-f.jpg">`;
    }
    else if (idade < 25){
        imgresultado.innerHTML = `<img src="jovem-f.jpg">`;
    }   
    else if (idade < 65){
        imgresultado.innerHTML = `<img src="adulto-f.jpg">`;
    }
    else{
        imgresultado.innerHTML = `<img src="idoso-f.jpg">`;
    }


}