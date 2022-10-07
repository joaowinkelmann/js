var num = document.querySelector('input#num');
var select = document.querySelector('select#selres');
var result = document.querySelector('div#resultado');
var i = 0;
var soma;

function adicionar(){ 
    for(item in select){
        if(num.value == item){
            return window.alert("Erro: O número já existe");
        }
    }
    if(num.value >= 1 && num.value <= 100){
        let item = document.createElement('option');
        item.text = `O número é ${num.value}`;
        item.value = `select${i}`;
        select.appendChild(item);
        soma += num.value;
        i++;
    }
    else{window.alert("Erro, o numero precisa estar entre 1 e 100");}
}

function analise(){

}