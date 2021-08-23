const days = ["Lunes","Martes","Miercoles","Jueves","Viernes","Sabado","Domingo"];
const months = ["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"];
const displayDateTime = () => {
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
 
   const hora = `${whichDay()} ${fecha.getDate()} de ${whichMonth()} / ${tiempo.hora} : ${tiempo.minuto} : ${tiempo.segundo} ${tiempo.format_24}`;
 
   clockDiv.innerHTML = hora;
 };