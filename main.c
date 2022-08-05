/*
10 - Elabore um programa que preencha uma matriz 5 x 5 e
crie dois vetores de cinco posições cada um, que contenham, respectivamente,
as somas das linhas e a soma das colunas da matriz. O algoritmo deverá escrever a matriz e os vetores criados.
*/

#include <stdio.h>
#include <stdlib.h>

void MostraSoma(float Linhas[5], float Colunas[5]){
    int i, j = 0;
    for(i=0;i<5;i++){
        printf("Soma linha %d: %2.f\n", (i+1), Linhas[i]);
        printf("Soma coluna %d: %2.f\n", (i+1), Colunas[i]);
    }
    
}

int main(){
    float Mat[5][5];
    float SumLinhas[5];
    float SumColunas[5];
    int i, j = 0;
    
    printf("Insira os valores para a matriz 5x5\n");
    for(i=0;i<5;i++){
        for(j=0;j<5;j++){
            printf("Valor [%d][%d]: ", (i+1), (j+1));
            scanf("%f", &Mat[i][j]);
            SumLinhas[i] = (SumLinhas[i] + Mat[i][j]);
        }
    }
    
    for(j=0;j<5;j++){
        for(i=0;i<5;i++){
            SumColunas[j] = (SumColunas[j] + Mat[i][j]);
        }
    }
    //Mostra matriz
    for(i=0;i<5;i++){
        for(j=0;j<5;j++){
            printf("%2.f", Mat[i][j]);
            printf("  |  ");
        }
        printf("\n");
    }
    
    //Mostra soma
    MostraSoma(SumLinhas, SumColunas);
}