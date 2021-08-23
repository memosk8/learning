const color = document.querySelector("#color");
const salida = document.querySelector("#salida");
const lista = document.querySelector("#list");
const number = document.querySelector("#colors");

const storage = JSON.parse(localStorage.getItem("colorValue")) || "#ffffff";

const colorList = JSON.parse(localStorage.getItem("colorList")) || [];
