/* prototipo de la funcion

<arreglo>.reduce( callback(), initValue);

*/

// sumando todos los numeros del arreglo

var numbers = [2,3,4,6,8,6,9,23,];
var res = numbers.reduce( (acc, item) => {
   return acc += item;
});
console.log("");
console.log(res);

// concatenando strings 

const strings = ["Mi", "nombre", "es", "papuriko"];
res = strings.reduce( (acc, item) => {
   return acc += ' ' + item;
}, 'Hola'); // 2° param es el valor inicial 
console.log(res);

// sumar propiedades de objetos en arrObj

const objs = [
   {nombre: 'Marcos', edad: 15},
   {nombre: 'Ana', edad: 60}
];

res = objs.reduce( (acc, item) => {
   return acc += item.edad;
}, 0);

console.log(res);

// valor maximo de un arr

res = numbers.reduce( (acc, item) => {
   return Math.max(acc, item);
});
console.log(res);