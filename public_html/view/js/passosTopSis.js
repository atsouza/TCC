//normalizar a matriz
function passo1(matriz, numAtributos, numAlternativas) {
    var matrizAux = matriz;
    var vetorSomatorioColunas = [4];
    var vetorSomatorioRaiz;
//      $vetorSomatorioRaiz[$this->numAtributos];
    vetorSomatorioRaiz = [4];
    //eleva todos os elementos da matriz ao quadrado
    for (i = 0; i < numAlternativas; i++) {
        for (j = 0; j < numAtributos; j++) {
            matrizAux[i][j] = Math.pow(matrizAux[i][j], 2);
        }
    }

//realiza somatorio das colunas e eleva a 0,5
    for (i = 0; i < numAtributos; i++) {
        var soma = 0;
        for (j = 0; j < numAlternativas; i++) {
            soma = matrizAux[i][j] + soma;
        }
        vetorSomatorioColunas[i] = Math.sqrt(soma);
    }

//dividir cada elemento da matriz pelos resultados do vetor de somas
    for (i = 0; i < numAlternativas; i++) {
        for (j = 0; j < numAtributos; j++) {
            matrizAux[i][j] = Math.round((matriz[i][j] / vetorSomatorioColunas[j]), 2);
        }
    }
    return matrizAux;
}

//matriz normalizada ponderada
function passo2(matriz, vetorPesos, numAtributos, numAlternativas) {
    var matrizAux = matriz;
    //multiplica cada item pelo seu respectivo peso
    for (i = 0; i < numAlternativas; i++) {
        for (j = 0; j < numAtributos; j++) {
            matrizAux[i][j] = matrizAux[i][j] * vetorPesos[j];
        }
    }
    return matrizAux;
}

//calculando solucoes ideais
function passo3(matriz, vetorImportancias, numAlternativas, numAtributos) {

    var ideal = [];
    var idealNegativa = [];
    var matrizAux = matriz;
    var valorComparacaoIdeal = matriz[1];
    var valorComparacaoNegativa = matriz[1];
    var retornoSolucoes = [];

    for (i = 0; i < numAlternativas; i++) {
        for (j = 0; j < numAtributos; j++) {
            //se quanto maior melhor
            if (vetorImportancias[j] === 1) {
                if (valorComparacaoIdeal[j] < matrizAux[i][j]) {
                    valorComparacaoIdeal[j] = matrizAux[i][j];
                }
            } else {
                if (valorComparacaoIdeal[j] > matrizAux[i][j]) {
                    valorComparacaoIdeal[j] = matrizAux[i][j];
                }
            }
            ideal[j] = valorComparacaoIdeal[j];
        }
    }
    retornoSolucoes[0] = ideal;


    for (i = 0; i < numAlternativas; i++) {
        for (j = 0; j < numAtributos; j++) {
            //se quanto maior melhor

            if (vetorImportancias[j] === 1) {
                if (valorComparacaoNegativa[j] < matrizAux[i][j]) {
                    valorComparacaoNegativa[j] = matrizAux[i][j];
                }
            }
//se quanto menor melhor
            else {
                if (valorComparacaoNegativa[j] > matrizAux[i][j]) {
                    valorComparacaoNegativa[j] = matrizAux[i][j];
                }
            }
            idealNegativa[j] = valorComparacaoNegativa[j];
        }
    }
    retornoSolucoes[1] = idealNegativa;
    return retornoSolucoes;
}

//calculando medida de separacao
function passo4(matriz, retornoSolucoes, numAlternativas, numAtributos) {
    var ideal = retornoSolucoes[0];
    var idealNegativa = retornoSolucoes[1];
    var matrizAux = matriz;
    var retorno = [];
    var somatorioMedSepIdeal = [];
    var somatorioMedSepIdealNegativa = [];
    var medidaSeparacaoIdeal = [];
    var medidaSeparacaoIdealNegativa = [];

    // $retornoMedidas = array();

    //para a medida ideal
    for (i = 0; i < numAlternativas; i++) {
        for (j = 0; j < numAtributos; j++) {
            var auxSoma = (matrizAux[i][j] - ideal[j]);
            somatorioMedSepIdeal[i] = somatorioMedSepIdeal[i] + Math.pow(auxSoma, 2);
        }
        medidaSeparacaoIdeal[i] = round((pow(somatorioMedSepIdeal[i], 0.5)), 3);
    }
    retorno[0] = medidaSeparacaoIdeal;

    //para a medida ideal negativa
    for (i = 0; i < numAlternativas; i++) {
        for (j = 0; j < numAtributos; j++) {
            var auxSoma = (matrizAux[i][j] - idealNegativa[$j]);
            somatorioMedSepIdealNegativa[i] = somatorioMedSepIdealNegativa[i] + pow(auxSoma, 2);
        }
        medidaSeparacaoIdealNegativa[i] = round((pow(somatorioMedSepIdealNegativa[i], 0.5)), 3);
    }
    retorno[1] = medidaSeparacaoIdealNegativa;
    return retorno;
}

function passo5(retornoMedidas, numAlternativas) {
    var ideal = retornoMedidas[0];
    var idealNegativa = retornoMedidas[1];

    var resultadoFinal = [];
    var retorno = [];
    var indice = 0;

    //para calcular os valores finais
    for (i = 0; i < numAlternativas; i++) {
        var final = 0;
        var soma = 0;
        soma = ideal[i] + idealNegativa[i];
        final = idealNegativa[i] / soma;
        resultadoFinal[i] = final;
    }

    var aux = resultadoFinal[0];
    //escolhhendo melhor valor final
    for (i = 0; i < numAlternativas; i++) {
        if (aux < resultadoFinal[i]) {
            indice = i;
            aux = resultadoFinal[i];
        }
    }
    retorno[0] = indice;
    retorno[1] = aux;

    return retorno;
}
