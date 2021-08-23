"use strict";

var reloj = document.querySelector(".reloj");

var getHora = function getHora() {
  var fecha = new Date();
  var tiempo = {
    hora: fecha.getHours(),
    minuto: fecha.getMinutes(),
    segundo: fecha.getSeconds(),
    format_24: undefined,
  };

  if (tiempo.segundo < 10) {
    tiempo.segundo = "0".concat(tiempo.segundo.toString());
  }

  if (tiempo.hora > 12) {
    tiempo.hora = tiempo.hora - 12;
    tiempo.format_24 = "pm";
    if (tiempo.hora < 10) tiempo.hora = "0".concat(tiempo.hora.toString());
  } else {
    tiempo.format_24 = "am";
  }

  var hora = ""
    .concat(tiempo.hora, " : ")
    .concat(tiempo.minuto, " : ")
    .concat(tiempo.segundo, " ")
    .concat(tiempo.format_24);
  reloj.innerHTML = hora;
};

setInterval(getHora, 1000);
