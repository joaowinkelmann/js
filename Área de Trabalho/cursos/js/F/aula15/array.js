let num = [5, 1, 3, 6, 4];
num[5] = 9; //posição 5 é criada e recebe o valor do número 9

console.log(`Nosso vetor é o ${num}`);

count = num.length; //length conta os elemtenos, por isso tem um numero acima da chave do array
num[count] = 5; //adiciona um elemento ao final do array
console.log(`Nosso novo vetor é o ${num}`);
num.push(2);

num.sort();
console.log(`Nosso vetor, agora ordenado, é igual a ${num}`);   

//percorrendo o vetor usando um for tradicional
for(i=0;i < num.length; i++){
    console.log(`${num[i]}`);
}

console.log("break");

for(let indice in num){ //para cada indice no array,
	console.log(num[indice]);
}

console.log(`O índice do número 9 é igual a ${num.indexOf(9)}`);
console.log(`O índice do número 15 é igual a ${num.indexOf(15) == -1 ? "Valor não encontrado" : num.indexOf(15)}`);