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
});  

