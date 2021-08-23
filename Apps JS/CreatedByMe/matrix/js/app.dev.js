const element = document.querySelector("#canvas");

const ctx = element.getContext("2d")

const w = document.body.clientWidth
const h = document.body.clientHeight

element.width = w;
element.height = h;

const position = Array(300).join(0).split("");

const initMatrix = () => {
   ctx.fillStyle = "rgba(0, 15, 2, 0.15)";
   ctx.fillRect(0,0,w,h);

   ctx.fillStyle = "#4caf50";
   ctx.font = "3pt";

   position.map((y, index) => {
         const text = String.fromCharCode(1e4 + Math.random() * 130);
         const x = index * 15;
         canvas.getContext("2d").fillText(text, x, y);
         y > 100 + Math.random() * 1e6
         ? position[index] = 0
         : position[index] = y + 15
      }
   )
}

setInterval(initMatrix, 50);