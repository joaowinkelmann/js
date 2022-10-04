var pizza = "calab3333resa";
switch (pizza){
    case "calabresa":
            console.log("Calabresa!");
            break;
    case "abacaxi":
            console.log("bruh");
            break;
    case "bacon":
            console.log("Boa escolha");
            break;
    default:
            console.log("Nao conheço essa irmão");
}
var agora = new Date();
var diaSem = agora.getDay();

console.log(diaSem);

// 0 - Domingo
// 1 - Segunda
// 2 - Terça
// 3 - Quarta
// 4 - Quinta
// 5 - Sexta
// 6 - Sábado

switch (diaSem){
    case 0:
        console.log("Domingo");
        break;
    case 1:
        console.log("Segunda");
        break;
    case 2:
        console.log("Terça");
        break;
    case 3:
        console.log("Quarta");
        break;
    case 4:
        console.log("Quinta");
        break;
    case 5:
        console.log("Sexta");
        break;
    case 6:
        console.log("Sábado");
        break;
    default:
        console.log("Dia indefinido");
}