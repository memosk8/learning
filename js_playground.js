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

/** 
  Write a function isEven that checks if a passed number is even. 
  If the given number is even, true should be returned, otherwise false.
*/

function isEven(n) {
  return Math.abs(n) % 2 === 0 ? true : false;
}

console.log(isEven(4))

/** 
  Write a function unequal that checks 3 values for strict inequality. 
  The function should return true if all three parameters are strict unequal. 
  Otherwise false.
*/

function unequal(n1, n2, n3) {
  return (n1 !== n2) && (n1 !== n3) && (n2 !== n3) ? true : false;
}

console.log(unequal(2, 2, 2))

/**
  Write a function isThreeDigit that checks if 
  a number is greater than or equal to 100 and less than 1000.
 */

function isThreeDigit(n) {
  return n >= 100 && n < 1000 ? true : false;
}

console.log(isThreeDigit(234))
console.log(isThreeDigit(23))

/**
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

console.log(repdigit(10))
console.log(repdigit(11))

/**
 * 
 * @param {Array} arr 
 * The array containing the numbers to sum
 * @returns 
 * The sum of the numbers in the given array
 */

function sumArr(arr) {
  let sum = 0;
  arr.forEach(n => sum = sum + n)
  return sum;
}

/**
 * 
 * @param  {...any} arguments 
 * The n amount of numbers to add surcharge
 * @returns 
 * The total sum of the numbers with surcharge applied
 */

function addWithSurcharge(...arguments) {
  let numsWithSurcharge = [], nums = arguments;
  for (i = 0; i < nums.length; i++) {
    if (typeof nums[i] != 'number') return undefined;
    if (nums[i] <= 10) nums[i]++;
    else nums[i] += 2;
    numsWithSurcharge.push(nums[i]);
  }
  return sumArr(numsWithSurcharge);
}

console.log(addWithSurcharge(15, 3))

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
  function sum2d that calculates 
  the sum of all elements of a two-dimensional array.
  Example: sum([[1, 2], [3]]) should return 6.
 */

function sum2d(a) {
  let sum = 0;
  for (let i = 0; i < a.length; i++) {
    for (let j = 0; j < a[i].length; j++) {
      sum = sum + a[i][j]
    }
  }
  return sum;
}

console.log(sum2d([[1, 2], [2, 1], [4]]))

function max() {
  return Math.max(...arguments)
}

console.log(max(1, 34, 2, 23, 100, 04))

/**
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

/**
  Function add that takes a string with a summation task 
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

function arabic(roman) {
  let accumulator = 0;
  for (let i = 0; i < roman.length; i++) {
    if (roman[i] === "I" && roman[i + 1] === "V") {
      accumulator += 4;
      i++;
    } else if (roman[i] === "I" && roman[i + 1] === "X") {
      accumulator += 9;
      i++;
    } else if (roman[i] === "X" && roman[i + 1] === "L") {
      accumulator += 40;
      i++;
    } else if (roman[i] === "X" && roman[i + 1] === "C") {
      accumulator += 90;
      i++;
    } else if (roman[i] === "C" && roman[i + 1] === "D") {
      accumulator += 400;
      i++;
    } else if (roman[i] === "C" && roman[i + 1] === "M") {
      accumulator += 900;
      i++;
    } else if (Object.keys(romanHash).includes(roman[i])) {
      accumulator += romanHash[roman[i]];
    }
    else return undefined;
  }
  return accumulator;
}

const romanHash = {
  I: 1, V: 5,
  X: 10, L: 50,
  C: 100, D: 500,
  M: 1000,
};

console.log(arabic('CDLXXIV'))

/**
  Write a function sumMultiples taking a natural number n 
  and returning the sum of all multiples of 3 and of 5 that are truly less than n.

  Example: All multiples of 3 and 5 less than 20 are 3, 5, 6, 9, 10, 12, 15 and 18. 
  Their sum is 78. sumMultiples(20) should return 78.
 */

function sumMultiples(n) {
  const multiples = new Set();
  let sum = 0;

  if (n <= 2) return 0;

  // find multiples of 3 and 5 that are less than n
  for (let i = 1; i < n; i++) {
    if (i * 3 < n)
      multiples.add(i * 3)
    if (i * 5 < n)
      multiples.add(i * 5)
  }

  // sum all the multiples
  multiples.forEach(n => sum = sum + n)

  return sum;
}

console.log(sumMultiples(20))

/** 
  function digitsum that calculates the digit sum of an integer. 
  The digit sum of an integer is the sum of all its digits.

  Example: digitsum(192) should return 12.
 */

function digitSum(num) {
  let sum = 0;
  const nums = num.toString().split('');
  for (let i = 0; i < nums.length; i++) {
    sum = sum + parseInt(nums[i]);
  }
  return sum;
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

triangle();

/* _____________________________________________ */
/*         Eloquent Javascript exercises         */
/*        https://eloquentjavascript.net/        */
/* --------------------------------------------- */



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

/** Is even function recursive */

function isEvenRecursive(n) {
  if (n === 0) return true;
  else if (n === 1) return false;
  else if (n <= 0) return undefined;
  else return isEvenRecursive(n - 2);
}

console.log(isEvenRecursive(2))

/** Count 'B' character on a string */

function countBs(str) {
  let count = 0;
  for (i = 0; i < str.length; i++) {
    if (str[i] === 'B') count++;
  }
  return count;
}

console.log(countBs("BBC"));

/** Count given character on a string */

function countChar(str, c) {
  let count = 0;
  for (i = 0; i < str.length; i++) {
    if (str[i] === c) count++;
  }
  return count;
}

console.log(countChar("kakkerlak", "k"));

/** Remove value from given index on an array */

function remove(array, index) {
  return array.slice(0, index)
    .concat(array.slice(index + 1));
}

console.log(remove(loshu, 1))

// console.log(loshu)

/** Return new array from given array but reversed */

function reverseArray(a) {
  let reverse = [];
  for (i = (a.length - 1); i >= 0; i--) {
    reverse.push(a[i])
  }
  return reverse;
}

console.log(reverseArray([23, 34, 4, 22]))

/* 

  , and nth,
  which 
*/

/**  
 * function arrayToList 
 * that builds up a list structure 
 * when given [1, 2, 3] as argument. 
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

/** listToArray function that produces an array from a list. */

function listToArray(list) {
  let arr = [];
  if (list === undefined) return arr;
  else if (list.rest === null) arr.push(list.value)
  else for (let node = list; node; node = node.rest)
    arr.push(node.value);
  return arr;
}

/**
 * helper function prepend, which takes an element and a list 
 * and creates a new list that adds the element to the front of the input list
*/

function prepend(elem, list) {
  return { 'value': elem, 'rest': list };
}

/**
 * 
 * @param {{value: Number, rest: Object}}
 * list The list to search in
 * @param {Number}
 * n The position to retrieve from the list
 * @returns
 * The element in the n position on the list
 */

function nth(list, n) {
  let i = 0;
  for (let node = list; node; node = node.rest) {
    if (i === n) return node;
    else i++;
  }
  return undefined;
}

/**
 * 
 * @param {{value: Number, rest: Object}}
 * list The list to search in
 * @param {Number}
 * n The position to retrieve from the list
 * @returns
 * The element in the n position on the list implementing 
 * recursive call to itself
 */

let j = 0;
function nthRecursive(list, n) {
  if (n === j)
    return list.value;
  if (list.rest === null)
    return undefined;
  j++;
  return nthRecursive(list.rest, n);
}

/**
 * 
 * @param {{value: Number, rest: Object | null}} list 
 * List with a value 
 * and the rest of the elements in an object OR null
 * 
 * @returns 
 * The length of the given list 
 */

function listLength(list) {
  let i = 0;
  for (let node = list; node; node = node.rest) {
    if (node.rest === null) return i + 1;
    else i++;
  }
}

function deepEqual(a, b) {
  if (a === undefined || b === undefined)
    return undefined;
  else if (a === null || b === null) return false;
  // if both are objects
  else if (typeof a == 'object' && typeof b == 'object') {
    if (Object.keys(a).length != Object.keys(b).length)
      return false;
    else {
      // if both have same #n of props
      for (let i = 0; i < Object.keys(a).length; i++) {
        // get key by key fron both objects at the same index
        let aKey = Object.keys(a)[i],
          bKey = Object.keys(b)[i];
        // if key names are not equal
        if (aKey != bKey) return false;
        // if value is object calls itself with the inner objects recursively
        if (typeof a[aKey] == 'object' && typeof b[bKey] == 'object')
          return deepEqual(a[aKey], b[bKey]);
        // if the values are different
        if (a[aKey] !== b[bKey]) return false;
      }
    }
  }
  // if both not obj then strict compare
  else return a === b;
  // if it gets here both are equal objects
  return true;
}

const ls = arrayToList([8, 2, 30]);
console.log('\n___________\n');

const obj2 = { n: 2, m: 'fer', H: { G: 2, MEM: "R2F4", UyU: { 0: 'one', 2: 'two' } } }
console.log(deepEqual(obj2, { n: 2, m: 'fer', H: { G: 2, MEM: "R2F4", UyU: { 0: 'one', 2: 'two' } } }));

// console.log(JSON.stringify(ls, null, 1));
// console.log(listLength(ls));
// console.log(listToArray(ls));
// console.log(prepend(10, prepend(20, ls)));
// console.log(nth(arrayToList([10, 20, 30]), 1));
// console.log(nthRecursive(ls,9));



console.log('\n___________\n');


/***
 * High Order functions
 *
 * Higher-order functions allow us to abstract over actions, not just values.
 * They come in several forms. For example, we can have functions that create new functions.
 *
*/

function greaterThan(n) {
  return m => m > n;
}

let greaterThan10 = greaterThan(10);
let greaterThan4 = greaterThan(4);
console.log(greaterThan10(20));
console.log(greaterThan4(3));

/**
 * And we can have functions that change other functions.
*/

function noisy(f) {
  return (...args) => {
    console.log("calling " + f + " with", args);
    let result = f(...args);
    console.log("returned", result);
    return result;
  };
}
noisy(Math.min)(3.3, 2.3, 1.4);

/**
 * We can even write functions that provide new types of control flow.
*/

// function unless(test, then) {
//   if (!test) then();
// }
//
// repeat(3, n => {
//   unless(n % 2 == 1, () => {
//     console.log(n, "is even");
//   });
// });

// → 0 is even
// → 2 is even

/***
 * Filtering arrays
*/

function filter(array, test) {
  let passed = [];
  for (let element of array) {
    if (test(element))
      passed.push(element);
  }
  return passed;
}

const a = [2, 3, 4];
const findMultiplesof2 = n => n % 2 == 0;
const multiplesOf2and3 = filter(a, findMultiplesof2);
console.log(a.length, multiplesOf2and3.length);

/**
 * Summarizing with reduce
*/

function reduce(array, combine, start) {
  let current = start;
  for (let element of array) {
    current = combine(current, element);
  }
  return current;
}

console.log(reduce([1, 2, 3, 4, 5], (a, b) => a + b, 1));


/* flat 2d array into 1d array */

let arrays = [[1, 2, 3], [4, 5], [6]];
// Your code here.
function flatten(arr) {
  let flat = arr.reduce((a, b) => a.concat(b))
  return flat;
}

/* high order function that */

function loop(start, test, update, body) {
  for (let i = start; test(i); i = update(i))
    body(i)
}

loop(8, n => n > 0, n => n - 1, console.log);

/**
 *  We can use an object instead of a switch case block
 *  to check for a value related to the key string
 *  by simply checking if given prop is present on the lookup obj
 */
function phoneticLookup(val) {

  const lookup = {
    alpha: "Adams",
    bravo: "Boston",
    charlie: "Chicago",
    delta: "Denver",
    echo: "Easy",
    foxtrot: "Frank"
  }

  let result = lookup[val] || undefined;

  return result;
}

console.log(phoneticLookup("bravo"))

const contacts = [
  {
    firstName: "Akira",
    lastName: "Laine",
    number: "0543236543",
    likes: ["Pizza", "Coding", "Brownie Points"],
  },
  {
    firstName: "Harry",
    lastName: "Potter",
    number: "0994372684",
    likes: ["Hogwarts", "Magic", "Hagrid"],
  },
  {
    firstName: "Sherlock",
    lastName: "Holmes",
    number: "0487345643",
    likes: ["Intriguing Cases", "Violin"],
  },
  {
    firstName: "Kristian",
    lastName: "Vos",
    number: "unknown",
    likes: ["JavaScript", "Gaming", "Foxes"],
  },
];

function lookUpProfile(name, prop) {
  let foundname = false;
  for (let contact of contacts) {
    if (name === contact.firstName) {
      foundname = true;
      if (contact.hasOwnProperty(prop)) {
        return contact[prop];
      }
      else return "No such property";
    }
  }
  if (!foundname) {
    return "No such contact";
  }
}

lookUpProfile("Akira", "likes");

// Setup
const recordCollection = {
  2548: {
    albumTitle: 'Slippery When Wet',
    artist: 'Bon Jovi',
    tracks: ['Let It Rock', 'You Give Love a Bad Name']
  },
  2468: {
    albumTitle: '1999',
    artist: 'Prince',
    tracks: ['1999', 'Little Red Corvette']
  },
  1245: {
    artist: 'Robert Palmer',
    tracks: []
  },
  5439: {
    albumTitle: 'ABBA Gold'
  }
};

// Only change code below this line
function updateRecords(records, id, prop, value) {
  if (prop !== 'tracks' && value !== "") {
    records[id][prop] = value;
  } else if (prop === "tracks" && records[id].hasOwnProperty("tracks") === false) {
    records[id][prop] = [value];
  } else if (prop === "tracks" && value !== "") {
    records[id][prop].push(value);
  } else if (value === "") {
    delete records[id][prop];
  }
  return records;
}

console.log(updateRecords(recordCollection, 5439, 'artist', 'ABBA'))

/* ---------------------------------------------- */

function updateRecords(records, id, prop, value) {
  // Access target album in record collection
  const album = records[id];

  // If value is an empty string,
  // delete the given prop property from the album
  if (value === "") {
    delete album[prop];
  }
  // If prop isn't tracks,
  // update or set that album's prop to value
  else if (prop !== "tracks") {
    album[prop] = value;
  }
  // If prop is tracks,
  // add value to the end of the album's existing tracks array
  else {
    album["tracks"] = album["tracks"] || [];
    album["tracks"].push(value);
  }

  // must always return the entire record collection object
  return records;
}

/** implementation of the every() method with a loop*/
function every(array, test) {
  let is = true;
  for (let i = 0; i < array.length; i++) {
    if (!test(array[i])) {
      is = false;
    }
  }
  return is;
}

/** implementation of the every() method using some()*/
function _every(array, test) {
  let is = array.some((n) => test(n))
  return is;
}

console.log(_every([1, 3, 5], n => n < 10));
// → true
console.log(_every([2, 4, 16], n => n < 10));
// → false
console.log(_every([], n => n < 10));
// → true

console.log(every([1, 3, 5], n => n < 10));
// → true
console.log(every([2, 4, 16], n => n < 10));
// → false
console.log(every([], n => n < 10));
// → true

