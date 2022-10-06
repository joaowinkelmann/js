var inicio = document.querySelector('input#inicio');
var max = document.querySelector('input#max');
var incr = document.querySelector('input#incr');

var result = document.querySelector('div#resultado');


function contar(){
    result.innerHTML = null;

    if(inicio.value.length == 0 || max.value.length == 0 || incr.value.length == 0){
        window.alert("Dados formatados de maneira equivocada");
    }

    var val_i = Number(inicio.value);
    var val_m = Number(max.value);
    var val_s = Number(incr.value);

    // for(i=0;i<10;i++){
    //     result.innerHTML += `${i}`;  
    // }
    if(val_i < val_m){
        for(i = val_i; i <= val_m; i += val_s ){
            result.innerHTML += `${i} `;
        }
    }
    else{
        for(i = val_i; i >= val_m; i -= val_s ){
            result.innerHTML += `${i} `;
        }   
    }
}                   