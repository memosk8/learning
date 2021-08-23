const getUsers = async () => {
  const response = fetch("https://jsonplaceholder.typicode.com/users")
  .then( resp => {
    const {data: users} = resp;
    console.log(resp);
    console.log(users);
  })
  .finally( () => {
    console.log("finally");
  })
  
  // const data = await response.json();
  // console.log(data);

};

getUsers();
