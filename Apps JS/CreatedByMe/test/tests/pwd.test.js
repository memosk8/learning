const { genPass } = require("../controllers/password")

describe("pruebas sobre encriptacion de passwords", () => {
   it("genera diferentes contraseñas", () => {
      const testPwd = "$R$RL#$TGGGT";
      const secPwd = genPass(testPwd);
      
      const secPwdd = genPass(testPwd);
      // console.log(secPwd);
      // console.log(secPwdd);
      expect(secPwd).not.toEqual(secPwdd); 
   })
})