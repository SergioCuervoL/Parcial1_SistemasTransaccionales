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
        $("<br> <div class='col mr-auto ml-auto text-center' id='ContenidoProducto'> <div class='row'> <div class='col mr-auto ml-auto text-center'> <input type='text' id='nombre' class='form-control' placeholder='Nombre' required autofocus> </div> <div class='col mr-auto ml-auto text-center'> <input type='text' id='cantidad' class='form-control' placeholder='Cantidad' required autofocus></div></div></div> <br>").insertAfter("#ContenidoProducto");
    });
    $('#añadirProducto').click(function(){
        $('#registryDoc').show();
    });
});  

