color.value = localColorValue;

setColor();

color.addEventListener("input", setColor);
color.addEventListener("change", () => saveColor(color.value));
list.style = "display: inline;";
