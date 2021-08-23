const text = document.querySelector("#texto");
const view = document.querySelector("#view");

const update = () => {
  console.log(text.value);
  view.srcdoc = text.value;
};
