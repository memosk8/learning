// class Fonda{
//     constructor (){
//         this.amount = 0;
//         this.subtotal = 0;
//         this.precios = {
//             "refresco":20,
//             "agua":15,
//             "tacos":12,
//             "chilaquiles":40
//         };
//     }

//     function print_menu() {
//         let menu = document.querySelector("data-main-menu");
//     }
// }

//console.log(new Fonda())
const menu = document.querySelector("#main");
const Fonda = {
    amount: 0,
    subtotal: 0,
    prices: {
        refresco: 20,
        agua: 15,
        tacos: 12,
        chilaquiles: 40
    }
}

var FondaString = JSON.stringify(Fonda)

console.log(`Fonda object in formatted string: ${Fonda}`);
console.log("Fonda object logged in console as string: ");
console.log(FondaString)
