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
            <a href='manual.html'>Manual do Usuário</a>
        </div>     
        
        <div class='mascara' hidden></div>

        <div class='window' hidden> 
            <div id='resultadoTopSis'></div>
        </div>

        <br><br><br>    

        <div class='container'>

            <div id='content' class='content'>
                <div class='configs'>
                    <div class='criterios'>
                        <button id='add-criterio' class='botao1' onclick='addCriterio();' title='Adicionar Criterio/SubCriterio'>+ Critério</button>
                        <div id='area-criterios'>

                        </div>
                    </div>

                    <div id='itens' class='itens'>
                        <button id='add-item' onclick='addItem();' class='botao1' title='Adicionar Item'>+ Item</button>
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
                            <button class='botao-edit' id='botao-edit-configs' onclick='showConfigsContent();'>Editar Configurações</button>
                        </div>
                    </div>

                </div>

                <div id='btn-execute' hidden>
                    <button class='botao-run botao-edit botao1' onclick='runTopSis();'>Executar</button>
                </div>

                <br>

                <div id='btn-import' >
                    <form action='ajax.php' method='post' enctype='multipart/form-data'>
                        <input type='file' class='botao1' name='upload' id='upload'><br> 
                        <input type='submit' class='botao1' value='Enviar'> 
                        <input type='reset' class='botao1' value='Apagar'>
                    </form>
                </div>

                <br>";
                
                echo "
                <div id='btn-export'  class='botao1'> 
                    <a  href='gerarExcel.php' style='cursor:pointer'>Exportar para Download</a>
                    </div>
                </div><!-- fim content -->                  

        </div> <!-- fim container -->

    </body>

</html>";

session_start();
if (!empty($_SESSION['valores'])) {
    echo '<script type="text/javascript">
        gerarMatrizPeloImport("'.$_SESSION['valores'][0].'" , " '.$_SESSION['valores'][1].'" , "'.$_SESSION['valores'][2].'" , "'.$_SESSION['valores'][3].'" , "'.$_SESSION['valores'][4].'");
    </script>';
}
session_destroy();


?>
