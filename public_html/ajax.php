<?php

if ( !empty($_POST['string']) ){

    session_start();
    $_SESSION['string'] = $_POST['string'];   

}

if ( !empty($_FILES["upload"]) ){

    $handle = fopen($_FILES['upload']['tmp_name'], "r");

    $arrayDoc = []; $arrayRetorno = [];

    $arrayNormalizado = [];
    while(($filesop = fgetcsv($handle, 1000, ",")) !== false)
    {
        array_push($arrayDoc, $filesop);
    }  

    $itens = ''; $matriz = '';

    for ($i=0; $i < count($arrayDoc) ; $i++) { 
        switch ($i) {
            case '0':
                $pesos =  explode("Pesos;", $arrayDoc[0][0]);
                $arrayRetorno[2] = $pesos[1];
            break;
            case '1':
                $importancias =  explode("Importancia;", $arrayDoc[1][0]);
                $arrayRetorno[3] = $importancias[1];
            break;
            case '2':
                $criterios =  explode("Itens;", $arrayDoc[2][0]);
                $arrayRetorno[1] = $criterios[1];
            break;           
            default :
                $aux = explode(";", $arrayDoc[$i][0]);
                $itens = $itens . $aux[0] . ';';
                for ($j=1; $j < count($aux); $j++) { 
                   $matriz = $matriz . $aux[$j] . ';';
                }
            break;
        }
    }

    $arrayRetorno[0] = substr($itens, 0, -1);
    $arrayRetorno[4] = substr($matriz, 0, -1);

    // $aux = explode('~', $linha);

    // //essas qtdades sao as posiçoes do vetor, ex: se qtd é = 2 , ela vai de 0 a 2, entao 0,1,2 no total 3 itens
    // $qtdItens =  explode('^,', $aux[0])[0];
    // $qtdCriterios = explode('^,', $aux[1])[0];

    // $arrayRetorno = [];

    // $itens = explode('^,', $aux[0])[1];
    // $arrayRetorno[0] = $itens;

    // $criterios = explode('^,', $aux[1])[1];
    // $arrayRetorno[1] = $criterios;

    // $pesos = explode('^,', $aux[2])[1];
    // $arrayRetorno[2] = $pesos;

    // $importancias = explode('^,', $aux[3])[1];
    // $arrayRetorno[3] = $importancias;

    // $matriz = explode('^,', $aux[4])[1];   
    // $arrayRetorno[4] = $matriz;
    
    session_start();
    $_SESSION['valores'] = $arrayRetorno;    
    header('Location:analise.php');
}

?>