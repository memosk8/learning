const days = ["Lunes","Martes","Miercoles","Jueves","Viernes","Sabado","Domingo"];
const months = ["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"];
const daysInMonth = {
	Enero: 31, Febrero: 28,
	Marzo: 31, Abril: 30,
	Mayo: 31, Junio: 30,
	Julio: 31, Agosto: 31,
	Septiembre:	30, Octubre:	31,
	Noviembre:	30, Diciembre:	31
};
const calendarGridDiv = document.querySelector("#calendar-grid");
const clockDiv = document.querySelector("#clock");
const fecha = new Date();
const calendarTable = document.createElement("table");
const calendarHead = document.createElement("thead");
