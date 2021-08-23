const addElement = () => {
  const list = document.getElementById("list");
  const input = document.getElementById("input");
  // const value = document.getElementById("input").value;
  const listElement = document.createElement("li");
  const delbtn = document.createElement("input");

  if (input.value) {
    listElement.innerText = input.value;
    listElement.className = "list-group-item";
    delbtn.type = "button";
    delbtn.value = "Delete";
    delbtn.style.marginLeft = "1rem";
    delbtn.addEventListener("click", () => list.removeChild(listElement));
    listElement.appendChild(delbtn);
    list.appendChild(listElement);
    input.value = "";
  } 
  if(isWord(input.value)){
    console.log(" fuck ")
  }
  else input.value = "";
};

const abc = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','ñ','o','p','q','r','s','t','u','v','w','x','y','z']
const isWord = (inputValue) =>{
  var is = false;
  for(var i = 0; i < inputValue.length; i++){
    for(var j = 0; j < abc.length; j++){
      if ( inputValue[i] !== abc[j] ){
        is = true
      }
      else is = false
    }
  }
  return is
}