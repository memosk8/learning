const reloj = document.querySelector("#clock");

const getHora = () => {
  const fecha = new Date();
  const tiempo = {
    hora: fecha.getHours(),
    minuto: fecha.getMinutes(),
    segundo: fecha.getSeconds(),
    format_24: undefined,
  };
  if (tiempo.segundo < 10) {
    tiempo.segundo = `0${tiempo.segundo.toString()}`;
  }
  if (tiempo.hora > 12) {
    tiempo.hora = tiempo.hora - 12;
    tiempo.format_24 = "pm";

    if (tiempo.hora < 10) tiempo.hora = `0${tiempo.hora.toString()}`;
  } else {
    tiempo.format_24 = "am";
  }

  const hora = ` ${fecha.getDay()} ${tiempo.hora} : ${tiempo.minuto} : ${tiempo.segundo} ${tiempo.format_24}`;

  reloj.innerHTML = hora;
};

setInterval(getHora, 1000);
