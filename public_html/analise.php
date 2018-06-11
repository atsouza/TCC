<?php 

echo "
<html>
    <head>
        <title>Criar Análise</title>
        <link rel='stylesheet' type='text/css' href='css/style.css'>
        <script src='https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js'></script>
        <script type='text/javascript' src='js/passosTopSis.js'></script>
        <script type='text/javascript' src='js/app.js'></script>
        <meta charset='UTF-8'>
    </head>
    <body>
        
        <div id='navbar'>
            <a href='index.html'>Home</a>
            <a href='analise.php'>Criar Análise</a>
            <a href='about.html'>Sobre</a>
            <a target='_blank' href='https://github.com/atsouza/TCC'>Source</a>
            <a href='manual.html'>Manual do Usuário</a>
        </div>        
        <br><br><br>               


        <div class='container'>

            <div id='content' class='content'>

                <div class='configs'>
                    <div class='criterios'>
                        <button id='add-criterio' onclick='addCriterio();' title='Adicionar Criterio/SubCriterio'>+ Criterio</button>
                        <div id='area-criterios'>

                        </div>
                    </div>

                    <div id='itens' class='itens'>
                        <button id='add-item' onclick='addItem();' title='Adicionar Item'>+ Item</button>
                    </div>

                    <div class='botao-run'>
                        <button class='botao1' onclick='montarMatriz();' title='Montar Matriz de Dados'>Confirmar</button>
                    </div>

                </div>

                <div class='matriz-info-holder' style='display: none' >
                    <div class='info-container'>
                        <div id='info-it' class='infos'>
                            <label>Item</label></br>
                        </div>

                        <div id='info-cri' class='infos'>
                            <label>Criterio</label></br>
                        </div>

                        <div id='info-pcri' class='infos'>
                            <label>PesoCriterio</label></br>
                        </div>

                        <div id='info-importancia' class='infos'>
                            <label>Importâncias</label>
                        </div>
                    </div>

                    <br>

                    <div class='matriz-content'>
                        <label class='lbl-criterio'>Critérios</label><br/>
                        <label class='lbl-item'>Itens</label>
                        <div class='areaMatriz' id='area-matriz'>
                        </div>

                        <div class='botao-run'>
                            <button class='botao-edit' onclick='showConfigsContent();'>Editar Configurações</button>
                        </div>
                    </div>

                </div>

                <div id='btn-execute' hidden>
                    <button class='botao-run botao-edit' onclick='runTopSis();'>Executar</button>
                </div>

                <br>

                <div id='btn-import' >
                    <form action='ajax.php' method='post' enctype='multipart/form-data'>
                        <input type='file' name='upload' id='upload'><br> 
                        <input type='submit' value='Enviar'> 
                        <input type='reset' value='Apagar'>
                    </form>
                </div>

                <br>";
                
                $arquivo = str_replace(":", "a", $_SERVER['REMOTE_ADDR']);
                $arquivo = str_replace(".", "x", $arquivo);
                $arquivo = $arquivo . ".txt";
                // $arquivo = "meu_arquivo.txt";

                echo "
                <div id='btn-export' hidden>
                    <a target='_blank' onclick=destroyFile('".$arquivo."'); href='".$arquivo."' download>Exportar para Download</a>
                </div>

              
                </div><!-- fim content -->                  

        </div> <!-- fim container -->

    </body>

</html>";

session_start();
if (!empty($_SESSION)) {
    echo '<script type="text/javascript">
        gerarMatrizPeloImport("'.$_SESSION['valores'][0].'" , " '.$_SESSION['valores'][1].'" , "'.$_SESSION['valores'][2].'" , "'.$_SESSION['valores'][3].'" , "'.$_SESSION['valores'][4].'");
    </script>';
}
session_destroy();


?>
