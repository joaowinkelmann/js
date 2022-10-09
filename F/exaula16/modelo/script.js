var num = document.querySelector('input#num');
var select = document.querySelector('select#selres');
var result = document.querySelector('div#resultado');
var i = 0;
var soma = 0;
var vetnum = [];

function adicionar(){
    if(num.value >= 1 && num.value <= 100 && !naLista(num.value, vetnum)){
        vetnum.push(Number(num.value));
        let item = document.createElement('option');
        item.text = `O número é ${num.value}`;
        item.value = `select${i}`;
        select.appendChild(item);
        result.innerHTML = null;
        soma = soma + Number(num.value);
        i++;
    }
    else{window.alert("Erro, o numero precisa estar entre 1 e 100 e não pode se repitir");}
    num.value = null;
    num.focus();
}

function naLista(n, l){
    if (l.indexOf(Number(n)) != -1){
        return true;
    }
    else{
        return false;
    }
}

function analise(){
    // let linha = document.createElement('p');
    if (vetnum.length == 0){
        window.alert("Insira valores a serem analisados");
    }
    else{
        result.innerHTML = null;
        result.innerHTML += `<p>O total de valores cadastrados é igual a ${vetnum.length}`;
        result.innerHTML += `<p> A soma dos elementos é igual a ${soma}`;
        result.innerHTML += `<p> A média dos valores adicionados é igual a ${soma/(vetnum.length)}`;
        let maior = vetnum[0];
        let menor = vetnum[0];
        for(let pos in vetnum){
            if(vetnum[pos] > maior){
                maior = vetnum[pos];
            }
            if(vetnum[pos] < menor){
                menor = vetnum[pos];
            }
        }
        result.innerHTML += `<p>O menor número é igual a ${menor}`;
        result.innerHTML += `<p>O maior número é igual a ${maior}`;
        // result.innerHTML += `<p> A média dos elementos é igual a ${soma/select.length}
    }
}