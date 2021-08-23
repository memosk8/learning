const calculos = require("../controllers/calculos");

describe("Test Function resta", () => {
   test("deberia restar dos numeros negativos", () => {
      const res = calculos.resta(-7,-3);
      expect(res).toBe(-4);
   })
});

describe("Test Function suma", () => {
   test("deberia restar dos numeros negativos", () => {
      const sum = calculos.suma(-7,3);
      expect(sum).toBe(-4);
   })
});