function* iterarValores(arreglo) {
  for (let e of arreglo) {
    yield e;
  }
}

let suma = 0;

let generador = iterarValores([2, 4, 76, 11, 7.8, 55.09, 1]);

for (let valor of generador) {
  suma = suma + valor;
}

console.log(suma);

console.log("//---------------------------------------------------------");

let numeros = [23.4, 5, 88, 12, 2, 0.88, 34, 1];
let temp = 0;

function sum(numeros) {
  numeros.forEach(element => {
    temp = temp + element;
  });
  return temp;
}

let resultado = sum(numeros)

console.log(resultado);