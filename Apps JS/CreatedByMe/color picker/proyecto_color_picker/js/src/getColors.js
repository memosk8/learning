const getColors = () => {
  number.innerHTML = colorList.length;

  lista.innerHTML = "";

  for (const color of colorList) {
    lista.innerHTML += `<li style="background: ${color}">${color}</li>`;
  }
};
