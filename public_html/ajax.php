<?php

if ( !empty($_POST['string']) ){

    $arquivo = str_replace(":", "a", $_SERVER['REMOTE_ADDR']);
    $arquivo = str_replace(".", "x", $arquivo);
    $arquivo = $arquivo . ".txt";
    
    $fp = fopen($arquivo, "w");
    
    fwrite($fp, $_POST['string']);
    
    fclose($fp);
}

if ( !empty($_POST['destroy']) ){
    if (file_exists($_POST['destroy'])) unlink($_POST['destroy']);
}

if ( !empty($_FILES["upload"]) ){

    $arquivo =  fopen($_FILES['upload']['tmp_name'], "r");
    // $arquivo =  $_FILES['upload']['name'];

    while (!feof ($arquivo)) {
        //o numero ao final e a quantidade de bits reservada pra variavel
        $linha = fgets($arquivo, 32768);
    }

    fclose ($arquivo);

    $aux = explode('~', $linha);

    //essas qtdades sao as posiçoes do vetor, ex: se qtd é = 2 , ela vai de 0 a 2, entao 0,1,2 no total 3 itens
    $qtdItens =  explode('^,', $aux[0])[0];
    $qtdCriterios = explode('^,', $aux[1])[0];

    $arrayRetorno = [];

    $itens = explode('^,', $aux[0])[1];
    $arrayRetorno[0] = $itens;

    $criterios = explode('^,', $aux[1])[1];
    $arrayRetorno[1] = $criterios;

    $pesos = explode('^,', $aux[2])[1];
    $arrayRetorno[2] = $pesos;

    $importancias = explode('^,', $aux[3])[1];
    $arrayRetorno[3] = $importancias;

    $matriz = explode('^,', $aux[4])[1];   
    $arrayRetorno[4] = $matriz;
    
    session_start();
    $_SESSION['valores'] = $arrayRetorno;    
    header('Location:analise.php');
}




?>