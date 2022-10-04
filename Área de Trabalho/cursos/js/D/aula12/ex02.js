var hora = 5;

if (hora < 0){
    console.log("Hora inválida!!");
}
else{
    if (hora > 2 && hora < 5){
        console.log("Boa madrugada.");
    }
    else if (hora < 12){
        console.log("Bom dia!");
    }
    else if (hora < 18){
        console.log("Boa tarde!");
    }
    else{
        console.log("Boa noite.");
    }
}