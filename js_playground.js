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

console.log(factorial(3))

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

/* 
  Write a function lcm that takes two natural numbers 
  and calculates their least common multiple (lcm). 
  The lcm of two natural numbers a und b is the smallest natural number that is divisible by a and b.

  Example: lcm(4, 6) should return 12.

  To calculate the lcm of a and b, take 1 and test whether it is divisible by a and b. 
  If so, 1 is the lcm. If not, take 2 and test again. And so forth.
 */

function lcm(a, b) {

  let theLCM = 0;
  let remainderA;
  let remainderB;

  do {

    theLCM++;
    remainderA = theLCM % a;
    remainderB = theLCM % b;

  } while (remainderA !== 0 || remainderB !== 0)

  return theLCM;
}

console.log(lcm(4, 6))

function gcd(a, b) {
  return (a * b) / lcm(a, b)
}

console.log(gcd(6, 15))

/** Prime number */

function isPrime(n) {
  if (n === 1) {
    return false;
  }
  else if (n === 2) {
    return true;
  } else {
    for (var x = 2; x < n; x++) {
      if (n % x === 0) {
        return false;
      }
    }
    return true;
  }
}

console.log(isPrime(7))

/**
  Write a function sum that calculates 
  the sum of all elements of a two-dimensional array.
  Example: sum([[1, 2], [3]]) should return 6.
 */

function sum(a) {
  let sum = 0;
  for (let i = 0; i < a.length; i++) {
    for (let j = 0; j < a[i].length; j++) {
      sum = sum + a[i][j]
    }
  }
  return sum;
}

console.log(sum([[1, 2], [2, 1], [4]]))

function max() {
  return Math.max(...arguments)
}

console.log(max(1, 34, 2, 23, 100, 04))

/* 
  function parseFirstInt that takes a string and returns the first integer present in the string. 
  If the string does not contain an integer, you should get NaN.

  Example: parseFirstInt('No. 10') should return 10 and parseFirstInt('Babylon') should return NaN.
 */

function parseFirstInt(str) {
  let splitstr = str.trim().split(' ')
  console.log(splitstr)
  for (i = 0; i < splitstr.length; i++) {
    if (!parseInt(splitstr[i])) {
      splitstr.splice(i, 1)
    }
  }
  return parseInt(splitstr)
}

// console.log(parseFirstInt('Babylon'))
// console.log(parseFirstInt('No. 10'))
console.log(parseFirstInt(' No. 10 '))

/* 
  function add that takes a string with a summation task 
  and returns its result as a number. 
  A finite number of natural numbers should be added. 
  The summation task is a string of the form '1+19+...+281'.

  Example: add('7+12+100') should return 119.
 */

function add(op) {
  let nums = op.split('+'), res = 0;
  nums.forEach(n => res = res + parseInt(n))
  return res;
}

console.log(add('7+12+100'))

/* reverse string */

function reverse(str) {
  let reverse_str = "";
  for (i = str.length - 1; i >= 0; i--) {
    reverse_str = reverse_str + str[i]
  }
  return reverse_str;
}

console.log(reverse("liveee"))

/**
  Roman Numerals to arabic

  Symbol	I|V|X	|L |C  |D  |M   |
  Value	  1|5|10|50|100|500|1000|

  Example: arabic('CDLXXXIII') should return 483.
 */

function arabic(s) {
  let accumulator = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[i] === "I" && s[i + 1] === "V") {
      accumulator += 4;
      i++;
    } else if (s[i] === "I" && s[i + 1] === "X") {
      accumulator += 9;
      i++;
    } else if (s[i] === "X" && s[i + 1] === "L") {
      accumulator += 40;
      i++;
    } else if (s[i] === "X" && s[i + 1] === "C") {
      accumulator += 90;
      i++;
    } else if (s[i] === "C" && s[i + 1] === "D") {
      accumulator += 400;
      i++;
    } else if (s[i] === "C" && s[i + 1] === "M") {
      accumulator += 900;
      i++;
    } else {
      accumulator += romanHash[s[i]];
    }
  }
  return accumulator;
}

const romanHash = {
  I: 1, V: 5,
  X: 10, L: 50,
  C: 100, D: 500,
  M: 1000,
};

console.log(arabic('CDLXXXIII'))

/**
  Write a function sumMultiples taking a natural number n 
  and returning the sum of all multiples of 3 and of 5 that are truly less than n.

  Example: All multiples of 3 and 5 less than 20 are 3, 5, 6, 9, 10, 12, 15 and 18. 
  Their sum is 78. sumMultiples(20) should return 78.
 */

function sumMultiples(n) {
  const nums = new Set();
  let sum = 0;

  if (n <= 2) return 0;

  for (let i = 1; i < n; i++) {
    if (i * 3 < n) {
      nums.add(i * 3)
      console.log(i * 3)
    }
    if (i * 5 < n) {
      nums.add(i * 5)
      console.log(i * 5)
    }
  }

  nums.forEach(n => sum = sum + n)

  return sum;
}

console.log(sumMultiples(20))

/* 
  function digitsum that calculates the digit sum of an integer. 
  The digit sum of an integer is the sum of all its digits.

  Example: digitsum(192) should return 12.
 */

function digitSum(num) {
  let sum = 0;
  const nums = num.toString().split('')
  for (let i = 0; i < nums.length; i++) {
    sum = sum + parseInt(nums[i])
  }
  return sum
}

console.log(digitSum(123456789))

/** 
* Function toFindDuplicates() that takes an array of numbers
* and return an array only with the repeated numbers

  compare the index of all the items of an array 
  with the index of the first time that number occurs. 
  If they don’t match, that implies that the element is a duplicate.
  All such elements are returned in a separate array using the filter() method.

  Example: repeated([23, 23, 4, 56, 4, 90, 1, 1, 4, 56, 90, 0, 34, 55, 85])
*/

// function toFindDuplicates(nums) {
//   return nums.filter((item, index) => nums.indexOf(item) !== index)
// }

// console.log(toFindDuplicates([23, 23, 4, 56, 4, 90, 1, 1, 4, 56, 90, 0, 34, 55, 85]))

// function toFindDuplicates(arry) {
//   const uniqueElements = new Set(arry);
//   const filteredElements = arry.filter(item => {
//     if (uniqueElements.has(item)) {
//       uniqueElements.delete(item);
//     } else {
//       return item;
//     }
//   });

//   return [...new Set(filteredElements)]
// }

// const arry = [85, 34, 55, 85];
// const duplicateElements = toFindDuplicates(arry);
// console.log(duplicateElements);

function toFindDuplicates(arr) {
  const count = {};
  arr.forEach(element => {
    count[element] = (count[element] || 0) + 1;
  });
  return count;
}

const nums = [23, 23, 4, 56, 4, 90, 1, 1, 4, 56, 90, 0, 34, 55, 85];
console.log(toFindDuplicates(nums))

function triangle() {
  let str = '*'
  for (let i = 1; i < 8; i++) {
    console.log(str)
    str = str + '*';
  }
}


/* _____________________________________________ */
/*         Eloquent Javascript exercises         */
/*        https://eloquentjavascript.net/        */
/* --------------------------------------------- */


triangle();

function dizzFizzBuzz(a, b) {
  for (i = a; i <= b; i++) {
    if (i % 2 === 0 && i % 3 === 0) console.log('DizzFizz');
    else if (i % 2 === 0 && i % 5 === 0) console.log('DizzBuzz');
    else if (i % 3 === 0 && i % 5 === 0) console.log("FizzBuzz");
    else if (i % 5 === 0) console.log("Buzz");
    else if (i % 3 === 0) console.log("Fizz");
    else if (i % 2 === 0) console.log("Dizz");
    else console.log(i);
  }
}

dizzFizzBuzz(1, 50)

function chessboard() {
  let chessboard = "";
  for (let i = 0; i < 8; i++) {
    for (let j = 0; j < 8; j++) {
      if ((j + i) % 2 == 0) chessboard += ' ';
      else chessboard += '#';
    }
    chessboard += '\n';
  }
  return chessboard;
}

console.log(chessboard())

/* Is even function recursive */

function isEvenRecursive(n) {
  if (n === 0) return true;
  else if (n === 1) return false;
  else if (n <= 0) return undefined;
  else return isEvenRecursive(n - 2);
}

console.log(isEvenRecursive(3))

/* Count 'B' character on a string */

function countBs(str) {
  let count = 0;
  for (i = 0; i < str.length; i++) {
    if (str[i] === 'B') count++;
  }
  return count;
}

console.log(countBs("BBC"));

/* Count given character character on a string */

function countChar(str, c) {
  let count = 0;
  for (i = 0; i < str.length; i++) {
    if (str[i] === c) count++;
  }
  return count;
}

console.log(countChar("kakkerlak", "k"));

/* Remove value from given index on an array */

function remove(array, index) {
  return array.slice(0, index)
    .concat(array.slice(index + 1));
}

console.log(remove(loshu, 1))

console.log(loshu)

/* Return new array from given array but reversed */

function reverseArray(a) {
  let reverse = [];
  for (i = (a.length - 1); i >= 0; i--) {
    let n = a[i];
    reverse.push(n)
  }
  return reverse;
}

console.log(reverseArray(loshu))


let list = {
  value: 1,
  rest: {
    value: 2,
    rest: {
      value: 3,
      rest: null
    }
  }
};

/* 
  Write a function arrayToList that builds up a list structure when given [1, 2, 3] as argument.
  Also write a listToArray function that produces an array from a list.
  Then add a helper function prepend, which takes an element and a list 
  and creates a new list that adds the element to the front of the input list, and nth,
  which takes a list and a number and returns the element at the given position in 
  the list (with zero referring to the first element) or undefined when there is no such element.
*/

function arrayToList(arr) {
  const list = {}
  if (arr.length == 0) return null;
  if (arr.length > 0) {
    list['value'] = arr.shift();
    list['rest'] = arrayToList(arr);
  }
  return list;
}

const ls = arrayToList([10, 30,3]);

console.log(JSON.stringify(ls,null))

// function listToArray() { }
// function prepend() { }
// function nth() { }
// // → {value: 10, rest: {value: 20, rest: null}}
// console.log(listToArray(arrayToList([10, 20, 30])));
// // → [10, 20, 30]
// console.log(prepend(10, prepend(20, null)));
// // → {value: 10, rest: {value: 20, rest: null}}
// console.log(nth(arrayToList([10, 20, 30]), 1));
// // → 20

/* https://eloquentjavascript.net/04_data.html#i_nSTX34CM1M */


