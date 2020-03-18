$(document).ready(function(){
    $("#registry").click(function(){
        $('#login').hide();
        $('#registryDoc').show();
    });
    $('#exampleRadios1').click(function(){
        $('#datosRestaurante').show();
    });
    $('#exampleRadios2').click(function(){
        $('#datosRestaurante').hide();
    });
    $('#plus').click(function(){
        $("<tr id='#ContenidoProducto'><td><input type='text' id='nombreIngrediente' class='form-control' placeholder='Nombre' required autofocus></td> <td><input type='text id='cantidadIngrediente' class='form-control' placeholder='Cantidad' required autofocus></td><tr>").insertAfter("#ContenidoProducto");
    });
    $('#añadirProducto').click(function(){
        $('#registryDoc').show();
    });
    $('#añadirMenu').click(function(){
        $('#registryMenu').show();
    });
    $("#registrarProducto").click(function() {
        var valores = "";
				$("#nombreIngrediente").parent("tr").find("td").each(function() {
        		if($(this).html() != ""){
            	 valores += $(this).html() + " ";
            }
        });
        valores = valores + "\n";
        alert(valores);
    });
});  

/*
        var nFilas = $("#ingredientes tr").length;
        var datos;
        for (let i = 0; i < nFilas; i++) {
            for (let j = 0; j < 2; j++) {
                datos[i][j] = $("#ingredientes td").value;
            }            
        }
        var res = "";
        for (let i = 0; i < nFilas; i++) {
            for (let j = 0; j < 2; j++) {
                res = res + "" +datos[i][j] + "";
            }            
        }
        alert(res);
*/
