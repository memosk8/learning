// usando variables definidas en un archivo distinto
const people = require("./definitions");
console.log(people);

const path = require("path"); // se encarga de manejar rutas de archivos en el sistema
console.log(path.basename(__filename)); // muestra unicamente el nombre del archivo actual

// variables globales de node
console.log(__dirname);
console.log(__filename);


/* PROCESOS */

// argv es un arreglo de parametros que se pueden ingresar desde el terminal usando nodejs
console.log(process.argv); // argumentos de un proceso

function param(p) {
  var index = process.argv.indexOf(p);
  return process.argv[index + 1];
}

// ej: node     app    --nombre   "Memo"   --edad       28
//     node <filename> --param1  <value>   --param2  <value> ...param#
var nombre = param('--nombre');
var edad = param('--edad');
console.log(`nombre : ${nombre}\nedad : ${edad}`);
/* output: 
      nombre : Memo 
      edad : 28
*/

// mostrar mensajes en terminal como clg() pero sin saltos de linea
process.stdout.write("\n\tprocess.stdout.write()\n\n");

// var input;
// process.stdout.write("Ingresa cualquier texto : ");
// process.stdin.on('data', (data) => {
//    // uso de la consola similar a los programas de consola de C o java
//    input = data.toString();
//    // importante el uso de \n para dar formato
//    process.stdout.write(`\nInput : ${input}\n`);
//    // se debe matar el proceso como usanodo ^C en el terminal
//    process.exit(); 
//    // de lo contrario el proceso seguirá ejecutandose
// })

/* 
   ej: programa para hacer preguntas con process.stdin y process.stdout en terminal
   usando programacion estructurada de forma implicita y asincrona
*/

var preguntas = [
  '¿cual es tu nombre?',
  '¿cuantos años tienes?',
  '¿cuales es tu lenguaje de programacion favorito?'
]
var respuestas = [];

const pregunta = (i) => {
  process.stdout.write(preguntas[i] + " ");
}

process.stdin.on('data', (data) => {
  // trim() remueve el salto de linea al final
  respuestas.push(data.toString().trim());

  if (respuestas.length < preguntas.length) {
    pregunta(respuestas.length);
  } else {
    process.exit();
  }
})

pregunta(0);