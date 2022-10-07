/**
  Example: round100(1749) should return 1700 
  and round100(856.12) should return 900.
*/

function round100(n) {
  return Math.round(n / 100) * 100
}

console.log(round100(23))

/**
  Write a function dice that returns like a dice a random number between 1 and 6.
*/

const dice = () => {
  return Math.floor(Math.random() * (6 - 1 + 1)) + 1;
};

console.log(dice())

/**
  Write a function add that takes a string with a summation task 
  and returns its result as a number. 
  Two natural numbers should be added. 
  The summation task is a string of the form '102+17'.

  Example: add('102+17') should return 119. 
*/

function add(addstr) {
  return parseInt(addstr.split('+')[0]) + parseInt(addstr.split('+')[1])
}

console.log(add('234+6'))

/**
  Write a function nand that takes two Boolean values. 
  If both values are true, the result should be false. 
  In the other cases the return should be true.
*/

function nand(a, b) {
  if (a == true && b == true)
    return false;
  else
    return true;
}

console.log(nand())

/**
  Write a function nor that takes two Boolean values. 
  If both values are false, the result should be true. 
  In the other cases the return should be false.

  I.e.: The call nor(false, false) should return true. 

  The calls nor(true, false), nor(false, true) and nor(true, true) should return false.
*/

function nor(a, b) {
  if (a === false && b === false) {
    return true;
  }
  else return false;
}

console.log(nor(false, false))

/**
  Write a function xor that takes two Boolean values. 
  If both values are different, the result should be true. 
  If both values are the same, the result should be false.
*/

function xor(a, b) {
  if ((typeof a != "boolean") && (typeof b != "boolean")) {
    return undefined;
  }
  else {
    if (a === b)
      return false;
    else
      return true;
  }
}

console.log(xor(true, true))


/**
  Write a function equals that checks two values for strict equality.
  Example: equals(1, 1) should return true and equals(1, 2) should return false.
*/

function equals(n1, n2) {
  return n1 === n2 ? true : false;
}

console.log(equals(23, '23'))

/**
  Write a function equals that checks 3 values for strict equality. 
  The function should only return true if all 3 values are equal.

  Example: equals(1, 1, 1) should return true and equals(1, 2, 1) should return false.
 */

function equals3(n1, n2, n3) {
  return (n1 === n2) && (n1 === n3) ? true : false;
}

console.log(equals3(false, false, false))
console.log(equals3(false, true, false))
console.log(equals3(0, 1, 0))
console.log(equals3('.', '.', '.'))

/* 
  Write a function isEven that checks if a passed number is even. 
  If the given number is even, true should be returned, otherwise false.
*/

function isEven(n) {
  return n % 2 === 0 ? true : false;
}

console.log(isEven())

/* 
  Write a function unequal that checks 3 values for strict inequality. 
  The function should return true if all three parameters are strict unequal. 
  Otherwise false.
*/

function unequal(n1, n2, n3) {
  return (n1 !== n2) && (n1 !== n3) && (n2 !== n3) ? true : false;
}

console.log(unequal(2, 1, 1))

/* 
  Write a function isThreeDigit that checks if 
  a number is greater than or equal to 100 and less than 1000.
 */

function isThreeDigit(n) {
  return n >= 100 && n < 1000 ? true : false;
}

/* 
  Write a function repdigit that determines 
  whether a two-digit decimal is a repdigit or not. 
  If the decimal is a repdigit, 'Repdigit!' 
  should be returned, otherwise 'No Repdigit!'.

  Example: repdigit(22) should return 'Repdigit!' 
  and repdigit(23) should return 'No Repdigit!'.
*/

function repdigit(n) {
  [n1, n2] = n.toString().split('')
  return n1 === n2 ? 'Repdigit!' : 'No Repdigit!';
}

console.log(repdigit(22))
console.log(repdigit(23))
/* 
Write a function addWithSurcharge that adds two amounts with surcharge. 
For each amount less than or equal to 10, the surcharge is 1. 
For each amount greater than 10, the surcharge is 2.

Example: addWithSurcharge(5, 15) should return 23.
*/

function addWithSurcharge(n1, n2) {
  let nums = [n1, n2].map(n => n <= 10 ? n += 1 : n += 2)
  return nums[0] + nums[1];
}

console.log(addWithSurcharge(5, 15))

/* 
  Write a function addWithSurcharge that adds two amounts with surcharge. 
  For each amount less than or equal to 10, the surcharge is 1. 
  For each amount greater than 10 and less than or equal to 20, the surcharge is 2. 
  For each amount greater than 20, the surcharge is 3.

  Example: addWithSurcharge(10, 30) should return 44.
*/

function addWithSurcharge2(n1, n2) {
  let newnums = [];
  for (let n of [n1, n2]) {
    if (n <= 10)
      n += 1;
    else if (n > 10 && n <= 20)
      n += 2;
    else
      n += 3;
    newnums.push(n)
  }
  return newnums[0] + newnums[1];
}

console.log(addWithSurcharge2(10, 30))

/**
  Write a function concatUp that concatenate two arrays. 
  The longer array should be appended to the shorter array. 
  If both arrays are equally long, the second array should be appended to the first array.

  Example: 
    concatUp([1, 2], [3]) should return [3, 1, 2] 
    concatUp([5, 7], [6, 8]) should return [5, 7, 6, 8].
*/

function concatUp(a1, a2) {
  if (a1.length < a2.length)
    return a1.concat(a2);
  else if (a1.length == a2.length)
    return a1.concat(a2);
  else
    return a2.concat(a1);
}

console.log(concatUp([1, 2, 5], [0, 1]))
console.log(concatUp([5, 7], [6, 8]))
console.log(concatUp([89, 8, "holla"], ['kilo']))

/**
  Write a function halve that copies the first half of an array. 
  With an odd number of array elements, the middle element should belong to the first half.

  Example: halve([1, 2, 3, 4]) should return [1, 2].
*/

function halve(arr) {
  let len = arr.length;
  return len % 2 == 0 ? arr.slice(0, len / 2) : arr.slice(0, (len / 2) + 1);
}

console.log(halve([1, 2, 3, 4, 2]))
console.log(halve([1, 2, 3, 4]))

const loshu = [
  [4, 9, 2],
  [3, 5, 7],
  [8, 1, 6]
];

console.log("Loshu #: " + loshu)

/**
  Write a function flat that flattens a two-dimensional array with 3 entries.

  Example: flat(loshu) should return [4, 9, 2, 3, 5, 7, 8, 1, 6]. 
  Thereby loshu is the magic square from the example above.
*/

function flat(mtrx) {
  const flatMtrx = [];
  mtrx.forEach((row) => flatMtrx.push(...row))
  return flatMtrx;
}

console.log(flat(loshu));

/**
  Write a function median that takes an array of ascending numbers 
  and returns the median of that numbers.

  Example: median([1, 2, 10]) should return 2 and median([1, 2, 10, 100]) should return 6.
  
  The median of a sorted series of numbers is the value in the middle. 
  If the number of values is even, the median is the mean of the two middle numbers.
*/

function median(nums) {
  if (nums.length % 2 == 0)
    return (nums[nums.length / 2] + nums[(nums.length / 2 - 1)]) / 2;
  else
    return nums[Math.round(nums.length / 2) - 1]
}

console.log(median([12, 3, 56, 90, 100, 2, 23]))
console.log(median([12, 3, 56, 90, 100, 2]))


/**
  Write a function hello having one parameter and returning 'Hello <parameter>!'. 
  If hello is called without an argument, 'Hello world!' should be returned.

  Example: hello('Nala') should return 'Hello Nala!'.
*/

function hello(a) {
  if (a === undefined)
    return "Hello world!"
  else
    return `Hello ${a}!`
}

console.log(hello("carlos"))
console.log(hello())

/**
  Write a function cutComment that takes one line of JavaScript 
  and returns a possible line comment trimmed. 
  If the line contains no line comment, null should be returned. 
  For simplicity, we assume that the code does not contain the comment characters within a string.

  Example: cutCommt('let foo; // bar') should return 'bar'.
*/

function cutComment(codeline) {
  const regex = /\/\*[\s\S]*?\*\/|([^\\:]|^)\/\/.*$/gm
  let match = codeline.match(regex);
  return match ? match[0].replace('//', '').trim() : null;
}

console.log(cutComment("var login = true; // this"))

/**
  Write a function addTo that accepts a number as a parameter 
  and adds all natural numbers smaller or equal than the parameter.
  The result is to be returned.

  Example: addTo(3) should return 1+2+3 = 6.
 */

function addTo(n) {
  let sum = 0;
  for (i = 1; i <= n; i++)
    sum += i;
  return sum;
}

console.log(addTo(3))

/* Factorial */

function factorial(n) {
  var total = 1;
  for (i = 1; i <= n; i++) {
    total = total * i;
  }
  return total;
}

/*
  Mean of an array of numbers
*/

function mean(nums) {
  let sum = 0;
  for (i = 0; i < nums.length; i++) {
    sum = sum + nums[i];
  }
  return sum / nums.length;
}

console.log(mean([23, 2]))
console.log(mean([23, 4, 104, 77, 8, 9]))


function spaces(n) {
  let spaces = "";
  while (spaces.length < n)
    spaces = spaces + ' ';
  return spaces;
}

console.log(spaces(3))
