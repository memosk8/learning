const getUsers = () => {
  axios.get("https://jsonplaceholder.typicode.com/users").then((response) => {
    console.log(response);
  });
};

getUsers();
