$(document).ready(function(){
  function calcular() {
    var config = {
      base: Number($('#inputBase').val()),
      minuto: Number($('#inputMinuto').val()),
      kilometro: Number($('#inputKilometro').val()),
      minima: Number($('#inputMinima').val())
    }

    var valores = {
      minutos: Number($('#inputMinutos').val()),
      kilometros: Number($('#inputKilometros').val()),
    }

    var total = config.base + (valores.minutos * config.minuto) + (valores.kilometros * config.kilometro)

    function numberWithCommas(x) {
      return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }

    if (total < config.minima) {
      $('#totalTarifa').val(numberWithCommas(config.minima))
    } else {
      $('#totalTarifa').val(numberWithCommas(Math.ceil(total/100)*100))
    }
  }

  $('#inputMinutos').bind('keypress keydown keyup change', calcular)
  $('#inputKilometros').bind('keypress keydown keyup change', calcular)

  calcular()
});