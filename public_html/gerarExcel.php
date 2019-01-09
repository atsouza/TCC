<?php

session_start();

//pegando a string gerada pelo JS
if (!empty($_SESSION)) {
   $teste = $_SESSION['string'];
}

header("Content-Type: application/xls");
header("Content-Disposition:attachment; filename = relatorio.xls");
echo $teste;
