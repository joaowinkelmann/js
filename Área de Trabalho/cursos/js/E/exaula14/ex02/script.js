var result = document.querySelector('div#resultado');
var tab = document.getElementById('seltab');
function tabuada(){
    let base = (document.querySelector('input#base')).value;
    
    tab.innerHTML = null;
    for(i=1; i <= 10; i++){
        let item = document.createElement('option');
        item.text = `${base} x ${i} = ${i*base}`;
        item.value = `tab${i}`;
        tab.appendChild(item);
        // result.innerHTML += `${i} x ${base} = ${aux}<br>`;
    }
}