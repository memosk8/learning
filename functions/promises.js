let x = 10;

// const p = new Promise( (resolve, reject) => {
//    if(x == 100)
//       resolve('es igual a 10');
//    else 
//       reject('no es igual a 10');
// });

// p
// .then( res => {
//    console.log(res);
// })
// .catch( error => {
//    console.log(error);
// })
// console.log("after");

console.log('1. proceso iniciado...');

const promesa = new Promise((resolve) => {
  setTimeout(() => {
    x *= 3 + 2;
    console.log('2. proceso terminado...\t' + x);
    resolve(x);
  }, 100);
});

console.log('3. resultado : ' + x);

//

let usuarios = [{
    id: 1,
    nombre: "Marcos"
  },
  {
    id: 2,
    nombre: "Ana"
  }
];

let telefonos = [{
    id: 1,
    tel: 2345
  },
  {
    id: 2,
    tel: 5432
  }
]

// devolver un resultado que puede tardar en resolverse
const obtenerUsuario = id => {
  return new Promise((resolve, reject) => {
    if (usuarios.find(usuario => usuario.id === id))
      resolve('El usuario ' + id + ' Existe');
    else
      reject('el usuario no existe.... ;/');
  });
}

obtenerUsuario(5)
  .then(res => {
    console.log(res);
  })
  .catch(error => {
    console.log(error);
  })

const obtenerTelefono = id => {

}