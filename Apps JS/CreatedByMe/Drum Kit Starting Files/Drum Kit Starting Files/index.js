var totalOfButtons = document.querySelectorAll(".drum").length;

for (let i = 0; i < totalOfButtons; i++) {
   document.querySelectorAll(".drum")[i].addEventListener("click", function () {
      var buttonInnerHTML = this.innerHTML;
      makeSound(buttonInnerHTML)
   })
}

document.addEventListener("keypress", (event) => {
   makeSound(event.key);
})

async function makeSound(key){
   switch (key) {
      case "w":
         let crash = new Audio("./sounds/crash.mp3");
         await crash.play();
         break;
      case "a":
         let kick = new Audio("./sounds/kick-bass.mp3");
         await kick.play();
         break;
      case "s":
         let snare = new Audio("./sounds/snare.mp3");
         await snare.play();
         break;
      case "d":
         let tom1 = new Audio("./sounds/tom-1.mp3");
         await tom1.play();
         break;
      case "j":
         let tom2 = new Audio("./sounds/tom-2.mp3");
         await tom2.play();
         break;
      case "k":
         let tom3 = new Audio("./sounds/tom-3.mp3");
         await tom3.play();
         break;
      case "l":
         let tom4 = new Audio("./sounds/tom-4.mp3");
         await tom4.play();
         break;
      default:
         console.log(key);
   }
}

function buttonAnimation(currentKey){
   var activeButton = document.querySelector("." + currentKey);

   activeButton.classList.add("pressed");

   setTimeout(() => {
      activeButton.classList.remove("pressed");
   }, 100);
}