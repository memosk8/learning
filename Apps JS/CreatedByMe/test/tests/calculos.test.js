const calculos = require("../controllers/calculos")

test("Debe sumar dos numeros", () => {
   const result = calculos.suma(5,4);
   expect(result).toBe(9);
})

test("Debe restar dos numeros", () => {
   const resta = calculos.resta(5,4);
   expect(resta).toBe(1);
});