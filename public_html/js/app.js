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
    document.querySelector('.matriz-info-holder').style.display = 'block';
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
//    for (var i = 0; i < contItem; i++) {
//        var idItem = "#item" + i;
//        var aux = document.querySelector(idItem).value;
//        document.querySelector('#info-it').innerHTML += "" + (i + 1) + ":<input name='item" + i + "' readonly='readonly' value='" + aux + "'></input></br>";
//    }

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
//    for (var i = 0; i < contCriterio; i++) {
//        var idCrit = "#criterio" + i;
//        var aux = document.querySelector(idCrit).value;
//        document.querySelector('#info-cri').innerHTML += "" + (i + 1) + ":<input name='criterio" + i + "' readonly='readonly' value='" + aux + "'></input></br>";
//    }

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
    contCritAux = 0;
    contador = 0;
    while (contador < contCriterio) {
        var idImportancia = "#maxmin" + contador;
        var aux = document.querySelector(idImportancia);
        if (aux != null) {
            document.querySelector('#info-importancia').innerHTML += "" + (contCritAux + 1) + ":<input id='pimportancia" + contCritAux + "' name='peso-importancia" + contCritAux + "' readonly='readonly' value='" + aux.value + "'></input></br>";
            contCritAux++;
        }
        contador++;
    }
//    for (var i = 0; i < contCriterio; i++) {
//        var idPesoCrit = "#peso-criterio" + i;
//        var aux = document.querySelector(idPesoCrit).value;
//        document.querySelector('#info-pcri').innerHTML += "" + (i + 1) + ":<input name='peso-criterio" + i + "' readonly='readonly' value='" + aux + "'></input></br>";
//    }

    // matriz.innerHTML += "</div>";

    gerarMatriz(contItemAux, contCritAux);
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
            codigoMatriz += "<input type='number' title='item: " + auxI + " criterio: " + auxC + "'  class='celula' name='matriz" + i +"-"+ j + "' id='matriz" + i + "-" + j + "'>";
        }
        codigoMatriz += "</div>";
    }

    document.querySelector('#area-matriz').innerHTML = codigoMatriz;
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
    $(wrapper).append('<div class="area-criterio' + contCriterio + '"><input type="text" id="criterio' + contCriterio + '" placeholder="Criterio ' + (contCriterio + 1) + '"></input><input type="number" id="peso-criterio' + contCriterio + '" placeholder="Peso Criterio' + (contCriterio + 1) + '"></input><input class="max-min-field" type="text" id="maxmin'+contCriterio+'" placeholder="Max or Min"></input><a href="#" class="remove_field">X</a></div>'); //add input box
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
