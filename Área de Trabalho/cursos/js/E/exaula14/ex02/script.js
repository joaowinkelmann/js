var result = document.querySelector('div#resultado');
function tabuada(){
    let base = (document.querySelector('input#base')).value;
    
    result.innerHTML = null;
    for(i=1; i <= 10; i++){
        let aux = i * base;
        result.innerHTML += `${i} x ${base} = ${aux}<br>`;
    }
}