function showWidth() {
    var w = window.innerWidth;
    document.getElementById("largura").innerHTML = "largura: " + w;
}

function hideShowInfo() {
    if (document.getElementById('spoiler').style.display == 'none') {
        document.getElementById('spoiler').style.display = '';
    } else {
        document.getElementById('spoiler').style.display = 'none';
    }
}

/**
 * esconde area de configuração de entrada do sistema
 */
function hideConfigsContent() {
    $('.configs').css('display', 'none');
}

function showConfigsContent() {
    $('.configs').css('display', 'block');
}

// var contItem = 0; //usado em addItem()
var contCriterio = 0; //usado em addCriterio()

function montarMatriz() {
    $("#btn-import").hide();
    $("#btn-execute").show();

    //    var matriz = document.querySelector('#area-matriz');
    document.querySelector('#info-it').innerHTML = "<label>Item</label></br>";
    var contItemAux = 0;
    var contador = 0;
    while (contador < contItem) {
        var idItem = "#item" + contador;
        var aux = document.querySelector(idItem);
        if (aux != null) {
            document.querySelector('#info-it').innerHTML += "" + (contItemAux + 1) + ":<input id='itm" + contItemAux + "' name='item" + contItemAux + "' readonly='readonly' value='" + aux.value + "'></input></br>";
            contItemAux++;
        }
        contador++;
    }

    document.querySelector('#info-cri').innerHTML = "<label>Criterio</label></br>";
    var contCritAux = 0;
    contador = 0;
    while (contador < contCriterio) {
        var idCrit = "#criterio" + contador;
        var aux = document.querySelector(idCrit);
        if (aux != null) {
            document.querySelector('#info-cri').innerHTML += "" + (contCritAux + 1) + ":<input id='crit" + contCritAux + "' name='criterio" + contCritAux + "' readonly='readonly' value='" + aux.value + "'></input></br>";
            contCritAux++;
        }
        contador++;
    }

    document.querySelector('#info-pcri').innerHTML = "<label>PesoCriterio</label></br>";
    contCritAux = 0;
    contador = 0;
    while (contador < contCriterio) {
        var idPesoCrit = "#peso-criterio" + contador;
        var aux = document.querySelector(idPesoCrit);
        if (aux != null) {
            document.querySelector('#info-pcri').innerHTML += "" + (contCritAux + 1) + ":<input id='pcrit" + contCritAux + "' name='peso-criteri" + contCritAux + "' readonly='readonly' value='" + aux.value + "'></input></br>";
            contCritAux++;
        }
        contador++;
    }

    document.querySelector('#info-importancia').innerHTML = "<label>Importâncias</label></br>";
    var contImport = 0;
    contador = 0;
    while (contador < contCriterio) {
        var idImportancia = "maxmin" + contador;
        var aux = document.getElementsByName(idImportancia);
        var checkedItem = document.querySelector(`[name=maxmin${contador}]:checked`);

        if (checkedItem) {
            document.querySelector('#info-importancia').innerHTML += "" + (contImport + 1) + ":<input id='pimportancia" + contImport + "' name='peso-importancia" + contImport + "' readonly='readonly' value='" + checkedItem.value + "'></input></br>";
            contImport++;
        }

        //        if (aux[0] != null) {            
        //            console.log("cu " + aux[0].value);
        //            document.querySelector('#info-importancia').innerHTML += "" + (contCritAux + 1) + ":<input id='pimportancia" + contCritAux + "' name='peso-importancia" + contCritAux + "' readonly='readonly' value='" + aux[0].value + "'></input></br>";
        //            contCritAux++;
        //        }
        contador++;
    }

    if (contImport !== contCritAux) {
        alert("cheque todas as importancias!");
    } else {
        hideConfigsContent();
        document.querySelector('.matriz-info-holder').style.display = 'block';
        gerarMatriz(contItemAux, contCritAux);
    }
    // matriz.innerHTML += "</div>";
}

function gerarMatriz(nItens, nCriterios) {
    var codigoMatriz = "";

    for (var i = 0; i < nItens; i++) {
        codigoMatriz += "<div class='linhaMatriz'>";
        for (var j = 0; j < nCriterios; j++) {
            var idItem = "#itm" + i;
            var idCrit = "#crit" + j;
            var auxI = document.querySelector(idItem).value;
            var auxC = document.querySelector(idCrit).value;

            //             placeholder='"+auxI+" - "+auxC+"'
            //             title='item: " + (i + 1) + " criterio: " + (j + 1) + "'
            codigoMatriz += "<input type='number' step=any title='item: " + auxI + " criterio: " + auxC + "'  class='celula' name='matriz" + i + "-" + j + "' id='matriz" + i + "-" + j + "'>";
        }
        codigoMatriz += "</div>";
    }
    document.querySelector('#area-matriz').innerHTML = codigoMatriz;
}

function gerarMatrizPeloImport(itens, criterios, pesos, importancias, matriz) {

    var auxI = itens.split(';');
    var auxC = criterios.split(';');
    var auxP = pesos.split(';');
    var auxIm = importancias.split(';');
    var auxM = matriz.split(';');
    var nItens = auxI.length;
    var nCriterios = auxC.length;
    var nMatriz = auxM.length;

    document.querySelector('#info-it').innerHTML = "<label>Itens</label></br>";
    var contador = 0;
    while (contador < nItens) {
        var idItem = "#item" + contador;
        document.querySelector('#info-it').innerHTML += "" + (contador + 1) + ":<input id='itm" + contador + "' name='item" + contador + "' readonly='readonly' value='" + auxI[contador] + "'></input></br>";
        contador++;
    }

    document.querySelector('#info-cri').innerHTML = "<label>Criterio</label></br>";
    contador = 0;
    while (contador < nCriterios) {
        var idCrit = "#criterio" + contador;
        document.querySelector('#info-cri').innerHTML += "" + (contador + 1) + ":<input id='crit" + contador + "' name='criterio" + contador + "' readonly='readonly' value='" + auxC[contador] + "'></input></br>";
        contador++;
    }

    document.querySelector('#info-pcri').innerHTML = "<label>PesoCriterio</label></br>";
    contador = 0;
    while (contador < nCriterios) {
        var idPesoCrit = "#peso-criterio" + contador;
        document.querySelector('#info-pcri').innerHTML += "" + (contador + 1) + ":<input id='pcrit" + contador + "' name='peso-criteri" + contador + "' readonly='readonly' value='" + auxP[contador] + "'></input></br>";
        contador++;
    }

    document.querySelector('#info-importancia').innerHTML = "<label>Importâncias</label></br>";
    contador = 0;
    while (contador < nCriterios) {
        var idImportancia = "maxmin" + contador;
        document.querySelector('#info-importancia').innerHTML += "" + (contador + 1) + ":<input id='pimportancia" + contador + "' name='peso-importancia" + contador + "' readonly='readonly' value='" + auxIm[contador] + "'></input></br>";
        contador++;
    }

    hideConfigsContent();
    document.querySelector('.matriz-info-holder').style.display = 'block';
    var codigoMatriz = "";
    var indice = 0;

    for (var i = 0; i < nItens; i++) {
        codigoMatriz += "<div class='linhaMatriz'>";
        for (var j = 0; j < nCriterios; j++) {
            var idItem = "#itm" + i;
            var idCrit = "#crit" + j;
            // var auxI = document.querySelector(idItem).value;
            // var auxC = document.querySelector(idCrit).value;
            codigoMatriz += "<input type='number' title='item: " + idItem + " criterio: " + idCrit + "'  class='celula' name='matriz" + i + "-" + j + "' id='matriz" + i + "-" + j + "' value='" + auxM[indice] + "'> ";
            indice ++;
        }
        codigoMatriz += "</div>";        
    }
    document.querySelector('#area-matriz').innerHTML = codigoMatriz;

    $("#btn-import").hide();
    $("#botao-edit-configs").hide();
    $("#btn-execute").show();
    
    
}

var contItem = 0;

function addItem() {
    var wrapper = $("#itens"); //Fields wrapper

    $(wrapper).append('<div class="area-item"><input type="text" id="item' + contItem + '" placeholder="Item ' + (contItem + 1) + '"></input><a href="#" class="remove_field">X</a></div>'); //add input box
    contItem++;
    $(wrapper).on("click", ".remove_field", function (e) { //user click on remove text
        e.preventDefault();
        $(this).parent('div').remove();
    });
    // <a href="#" class="remove_field">X</a>
}

function addCriterio() {
    var wrapper = $("#area-criterios"); //Fields wrapper
    $(wrapper).append('<div class="area-criterio' + contCriterio + '"><input type="text" id="criterio' + contCriterio + '" placeholder="Criterio ' + (contCriterio + 1) + '"></input><input type="number" step=any id="peso-criterio' + contCriterio + '" placeholder="Peso Criterio' + (contCriterio + 1) + '"></input><input name="maxmin' + contCriterio + '" class="max-min-field" type="radio" value="max" id="max' + contCriterio + '">Max</input><input name="maxmin' + contCriterio + '" class="max-min-field" type="radio" value="min" id="min' + contCriterio + '">Min</input><a href="#" class="remove_field">X</a></div>'); //add input box
    contCriterio++;
    $(wrapper).on("click", ".remove_field", function (e) { //user click on remove text
        e.preventDefault();
        $(this).parent('div').remove();

    });
}

/*
 function addSubCriterio(idCrit,contSubCriterio){
 var idAreaSubCrit = "#area-subCriterio"+idCrit;
 var subCrit = document.querySelector(idAreaSubCrit);
 var idSubCritReal = (contSubCriterio+idCrit);
 var iSubCrit = "sub-criterio"+contSubCriterio+"-criterio"+idCrit;
 var pesoiSubCrit = "peso-subcrit"+contSubCriterio+"-criterio"+idCrit;
 contSubCriterio++;
 subCrit.innerHTML += "<input id='"+iSubCrit+"' name='"+iSubCrit+"' placeholder='"+iSubCrit+"' ></input>";
 subCrit.innerHTML += "<input id='"+pesoiSubCrit+"' name='"+pesoiSubCrit+"' placeholder='"+pesoiSubCrit+"'></input></br>";
 }*/

/* Set the width of the side navigation to 250px */
function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
}

/* Set the width of the side navigation to 0 */
function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}

function addCamposAtributo() {
    var nAtr = document.querySelector('#numAtributos').value;

    var codigo = "<h5>Atributos: </h5>";

    for (var i = 0; i < nAtr; i++) {
        codigo += "<input class='atributo' type='text' name='atributo" + i + "' id='atributo" + i + "'  >";
    }
    document.querySelector('#atributos').innerHTML = codigo;
}

function addCamposAlternativa() {
    var nAlt = document.querySelector('#numAlternativas').value;

    var codigo = "<h5>Alternativas: </h5>";

    for (var i = 0; i < nAlt; i++) {
        codigo += "<input class='alternativa' type='text' name='alternativa" + i + "' id='alternativa" + i + "'  >";
    }
    document.querySelector('#alternativas').innerHTML = codigo;
}

function addCamposImportancias() {
    var nAtr = document.querySelector("#numAtributos").value;

    var codigo = "<h5>Importância de cada atributo: </h5>";

    for (var i = 0; i < nAtr; i++) {
        codigo += "<input class='importancia' type='text' name='importancia" + i + "' id='importancia" + i + "'>";
    }
    document.querySelector("#vetor-importancia").innerHTML = codigo;
}

function addCamposVetorPesos() {
    var nAtr = document.querySelector("#numAtributos").value;

    var codigo = "<h5>Vetor de pesos: </h5>";

    for (var i = 0; i < nAtr; i++) {
        codigo += "<input class='peso' type='text' name='peso" + i + "' id='peso" + i + "'>";
    }
    document.querySelector("#vetor-pesos").innerHTML = codigo;
}

function addLabel() {
    var alterns = document.getElementsByClassName('alternativa');
    var atribs = document.getElementsByClassName('atributo');

    for (var i = 0; i < atribs.length; i++) {
        var labelAtr = "#rotuloAtributo" + i;
        document.querySelector(labelAtr).setAttribute('title', atribs[i].value);
    }

    for (var i = 0; i < alterns.length; i++) {
        var labelAlt = "#rotuloAlternativa" + i;
        document.querySelector(labelAlt).setAttribute('title', alterns[i].value);
    }

}
