var PROJECT_CODE = "PYXXXXX";
var CLIENT = "Google";
var MOTIVO_COMIDA = "Lunch";
var NUMERO_COMENSALES = 1;

$('[id*="revisar')[0].click();
var interval = setInterval(() => {
  if (
    $("#formaPagoTicket option").length > 2 &&
    $("#conceptoTicket option").length > 2 &&
    $("#cf_5_9670 option").length > 2
  ) {
    console.log("now it's loaded!");

    // Concepto ticket - comida
    $("#conceptoTicket").val(283895);
    $("#conceptoTicket").change();

    //facturable s/n
    $("#cf_5_9670").val(242420);
    $("#cf_5_9670").change();

      
    // codigo proyecto
    $("#cf_1_9606").val(PROJECT_CODE);

    //cliente
    $("#cf_1_9848").val(CLIENT);

    //motivo de la comida
    $("#cf_1_9744").val(MOTIVO_COMIDA);

    //numero de comensales
    $("#cf_3_9745").val(NUMERO_COMENSALES);

    //facturable s/n
    $("#cf_5_9670").val(242420);
    $("#cf_5_9670").change();

    $(".process").click();

    clearInterval(interval);
  }
}, 100);
