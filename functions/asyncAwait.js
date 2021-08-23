async function showData(){
   try {
      const jsonResponse = await getData();
      console.log("json response" + jsonResponse);
   } catch (error) {
      
   }
}

function getData(){
   return fetch("https://randomuser.me/api/?results=10")
   .then( response => response.json())
   .then(json => {
      console.log(json);
   });
}

showData();