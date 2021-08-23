// crea una nueva constante con el valor actual cada que este cambia
// modifica el elemento #output en el DOM con el valor actual de color
const setColor = () => {
  const colorValue = color.value;
  output.innerHTML = colorValue;
  output.style.background = colorValue;
  output.style.color = "#ffffff";
};
