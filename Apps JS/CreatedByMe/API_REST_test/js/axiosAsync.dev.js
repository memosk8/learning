const userSpan = document.querySelector("#username");
const emailSpan = document.querySelector("#email");
const citySpan = document.querySelector("#city");
const phoneSpan = document.querySelector("#phone");
const tableBody = document.querySelector("#table-body");

const getUsers = async () => {
  //response is an alias for the data property in json response
  const { data: response } = await axios.get(
    "https://jsonplaceholder.typicode.com/users"
  );

  response.forEach((user) => {
    console.log(user);

    const userRow = document.createElement("tr");
    userRow.addEventListener("click", () => {
      // console.log("click on row");
      if (userRow.className == "table-success") {
        userRow.className = "";
        userRow.style.color = "white";
      } else {
        userRow.className = "table-success";
        userRow.style.color = "black";
      }
    });

    userRow.scope = "row";

    const id = document.createElement("td");
    const name = document.createElement("td");
    const email = document.createElement("td");
    const city = document.createElement("td");
    const phone = document.createElement("td");

    id.innerText = user.id;
    userRow.appendChild(id);

    name.innerText = user.name;
    userRow.appendChild(name);
    email.innerText = user.email;
    userRow.appendChild(email);
    city.innerText = user.address.city;
    userRow.appendChild(city);
    phone.innerText = user.phone;
    userRow.appendChild(phone);

    console.log(userRow);
    tableBody.appendChild(userRow);
  });
};

getUsers();
