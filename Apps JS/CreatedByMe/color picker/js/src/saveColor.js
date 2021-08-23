const saveColor = (colorValue) => {
  localStorage.setItem("colorValue", colorValue);
};

const saveColorList = (colorValue) => {
  localStorage.setItem("colorValue", colorValue);

  if (!colorList.includes(colorValue)) {
    colorList.push(colorValue);
    localStorage.setItem("colorList", colorList);

    const colorElement = document.createElement("li");

    colorElement.innerText = colorValue;
    colorElement.style.backgroundColor = colorValue;
    colorElement.className = "listItem";
    list.appendChild(colorElement);

    countElem.innerText = colorList.length;
  } else {
    alert("Ese color ya fue registrado...");
  }
};
