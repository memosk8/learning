const dateobj = new Date()
const mainDiv = document.querySelector("#main");
var total = 0;
const fonda = {
	close: 22,
	productos: {
		compra: [
			() => {
				console.log(total)
				for(var i=0; i<fonda.productos.compra.length; i++){
					total += fonda.productos.compra[i].precio;
					console.log(i)
				}
				return total;
			},
			{ // id #
				nombre: "",
				desc: "",
				provedor: "proveedor",
				precio: 30
			},
			{
				nombre: "",
				proveedor: "proveedor",
				precio: "precio $"
			}
		],
		venta: {
			comidaCorrida: 35,
			café: 18,
			jugo: 15,
			refresco: 13
		}
	},

	ventas: {
		id0: {date: "", total: 0, prods: ""},
		id1: {date: "", total: 0, prods: ""}
	},

	tel: "3355772894",

	opening: () =>{
		console.log("<opening function run>")
			if( dateobj.getHours() >= fonda.open ){
				if( dateobj.getHours() == fonda.open && dateobj.getMinutes() <= 59 ) {
					return "Abriendo fonda 1 hora tarde !\n"+dateobj.toString();         
				}
				else if( dateobj.getHours() == fonda.open && dateobj.getMinutes() <= 59 ) {
					return "Abriendo fonda 1 hora tarde !\n"+dateobj.toString();         
				}
			}				
			if( dateobj.getHours() >= fonda.close ||  dateobj.getHours() < fonda.open)
				return "Fonda cerrada, regrese a las "+fonda.open+" am";
	},
	earnings: () => {}
	
}

/*
* @Params: 
*     source : object to add to object array
*     destiny : object array to store source object
*/
const addObj = (source, destiny) => {
  
}

//console.log(fonda.productos.compraTotal())

// convert object to key's array

const fondaKeys = Object.keys(fonda);

const productosVenta = Object.keys(fonda.productos.venta)

fonda.productos.compra.push({
   id: "TYU56",
   nombre: "Bateria AA Duracell",
   proveedor: "Don Luis",
   precio: 12
});

const productosCompra = JSON.stringify(fonda.productos.compra)

mainDiv.innerText = productosCompra

console.log(fonda.productos.compra[0]())

