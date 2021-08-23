const days = ["Domingo","Lunes","Martes","Miercoles","Jueves","Viernes","Sabado"];
const months = [
	"Enero","Febrero","Marzo","Abril",
	"Mayo","Junio","Julio","Agosto",
	"Septiembre","Octubre","Noviembre","Diciembre"
];
const daysInMonth = [31,	28,	31,	30,	31,	30,	31,	31,	30,	31,	30,	31];
const calendarGridDiv = document.querySelector("#calendar-grid");
const monthLabel = document.querySelector("#monthLabel");
const yearLabel = document.querySelector("#yearLabel");
const clockDiv = document.querySelector("#clock");
const sectionNav = document.querySelector("#in-section");
const monthSelect = document.querySelector("#month-select");
const fecha = new Date();

sectionNav.innerText = "Calendario";

const whichDay = () => {

   for (let i = 0; i < 7; i++) {
      if(fecha.getDay() === i){
         var day = days[i];
      }  
   }
   return day

}

const whichMonth = () => {
   for (let i = 1; i < months.length; i++) {
       if(fecha.getMonth() == i){
         var month = months[i];
       }
   }
   return month;
}

const changeMonth = () => {
   monthLabel.innerText = months[monthSelect.value];
};

const changeYear = () =>{
   const selectedYear = document.querySelector("#year-select").value;
   console.log(selectedYear);
   yearLabel.innerText = selectedYear;
}

const actualMonthDays = () => {
	for (let i = 1; i < months.length; i++) {
		if(fecha.getMonth() == i){
		  var month = daysInMonth[i];
		}
  }
  return month;
}

const getTime = () => {
   const fecha = new Date();
   const tiempo = {
      hora: fecha.getHours(),
     minuto: fecha.getMinutes(),
     segundo: fecha.getSeconds(),
     format_24: undefined,
   };
   if (tiempo.segundo < 10) tiempo.segundo = `0${tiempo.segundo.toString()}`;
   if (tiempo.minuto < 10) tiempo.minuto = `0${tiempo.minuto.toString()}`;
   if (tiempo.hora >= 12) {
      tiempo.hora = tiempo.hora - 12;
		tiempo.format_24 = "pm";
      if (tiempo.hora < 10) tiempo.hora = `0${tiempo.hora.toString()}`;
   }
   else tiempo.format_24 = "am";

   if(fecha.getDate() < 10) {
      var dayNumber = `0${fecha.getDate()}`;
   }
   else var dayNumber = fecha.getDate();

   var hora = `${whichDay()} ${dayNumber} de ${whichMonth()} / 
      ${tiempo.hora} : ${tiempo.minuto} : ${tiempo.segundo} ${tiempo.format_24}`;

   if(tiempo.segundo % 2 != 0 ){
      hora = `${whichDay()} ${dayNumber} de ${whichMonth()} / 
      ${tiempo.hora} . ${tiempo.minuto} . ${tiempo.segundo} ${tiempo.format_24}`;
   }

   clockDiv.innerHTML = hora;
 };

const drawMonth = () => {
   changeMonth();
   const date = new Date("1993","2","4");
   console.log(date);
   monthLabel.style = "background-color: yellow;"
}

monthSelect.addEventListener("change", changeMonth());
 
const createCalendar = () => {

   monthLabel.innerText = whichMonth();
   yearLabel.innerText = fecha.getFullYear();
   
   var firstDay = new Date();
   console.log(firstDay);
   
   const calendarContainer = document.querySelector("#calendar-container");
   const weekRows = [];

   // week rows array 
   for (let i = 0; i < 5; i++) {
      weekRows[i] = document.createElement("div");
      weekRows[i].classList.add("row");
   }
   
	var cont = 1;
	for (let i = 0; i < weekRows.length; i++) {
		// create day cells for calendar 

      if( cont > actualMonthDays() ) { 
         // checking if day count is > total of days in actual month then reset to 1
         cont = 1 ;
            break;
      }

      // create div.col for each row 
		for (let j = 0; j < days.length; j++) {

         const day = document.createElement("div");
         day.classList.add("col","border");

         if(cont === fecha.getDate()){
            day.style = "background-color: green"
         }

			day.innerText = cont;
			cont = cont + 1;
			weekRows[i].appendChild(day);
		}

		calendarContainer.appendChild(weekRows[i]);
	}
}

setInterval(getTime, 1000);
createCalendar();