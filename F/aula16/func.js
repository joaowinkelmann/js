var n = 4;

function parimp(num){
    if(num % 2 == 0){
        return console.log("Par");
    }
    else{
        return console.log("Impar");
    }
}

parimp(n);

console.log("-=-=-=-===-===-=-=-==-=-=-==-");

var x = 2;
var y = 7;

function soma(num1, num2){
    return (Number(num1) + Number(num2));
}

var result = soma(x, y);

console.log(result);

console.log("-=-=-=-===-===-=-=-==-=-=-==-");


let z = function(num){
    return num*4;
}

console.log(z(4));