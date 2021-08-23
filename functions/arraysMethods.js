let arr = [2, 3, 45, 7, 34, 8, 4, 78];

// for loop 

for (let i = 0; i < arr.length; i++) {
   const num = arr[i];
   console.log(num, i);
}

// for each loops through all the elements and requires a callback function
// to call for each one of the elements 

arr.forEach(item => {
   console.log(item)
});

// map returns a new array applying the calback function

let result = arr.map((item, index) => `Element #${index} = ${item}`);

console.log(result);

// filter returns a new array with the applied callback function

arr = [2, 2, 2, 4, 4, 7, 4, 8, 3, 34, 67, 879, 44];

result = arr.filter((item, index) => item > 3 && item <= 70);

console.log(result);
console.log(arr);

// arr.find()

arr = [
   {
      city: 'California',
      budget: 5000
   },
   {
      city: 'Ney York',
      budget: 8000
   },
   {
      city: 'Orlando',
      budget: 3000
   }
];

result = arr.find(item => item.budget > 2000 && item.budget < 4000);
console.log(result);

/* findIndex() works the same but it returns the index of the first coincidence
 Returns the value of the first element in the array where predicate is true
 and undefined otherwise. */

