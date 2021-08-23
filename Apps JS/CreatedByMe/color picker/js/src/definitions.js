const color = document.querySelector("#color");
const output = document.querySelector("#salida");

const localColorValue = localStorage.getItem("colorValue") || "#ffffff";

const list = document.getElementById("list");
const colorList = [];

const countElem = document.getElementById("count");
