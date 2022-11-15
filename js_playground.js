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
  if (n == 1) {
    return false;
  }
  else if (n === 2) {
    return true;
  } else {
    for (var x = 2; x < n; x++) {
      if (n % x === 0) {
        // console.log([n,x,n / x])
        return false;
      }
    }
    return true;
  }
}

console.log(isPrime(23))

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
  for (let element of array)
    if (test(element))
      passed.push(element);
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
  // add value to the end of the album's existing tracks array// Setup
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

}

/** Return the longest word on a string */
function findLongestWordLength(str) {
  return Math.max(...str.split(/\W/).map(word => word.length));
}

console.log(findLongestWordLength("The quick brown fox jumped over the lazy dog"))

function largestOfFour(arr) {
  return arr.map(nums => Math.max(...nums))
}

let numss = [[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]

console.log(largestOfFour(numss))

/** Check if given string ends with given substr */
function confirmEnding(str, target) {
  if (target === "" || typeof target != 'string') return undefined;
  let checkFrom = str.length - target.length;
  return str.substring(checkFrom) === target ? true : false;
}

console.log(confirmEnding("Bastian", "ian"))

/** repeat given string num times on a new string */
function repeatStringNumTimes(str, num) {
  let newstr = "";
  if (num <= 0) return newstr;
  else if (num == 1) return str;
  else
    for (let i = 0; i < num; i++)
      newstr = newstr + str;
  return newstr;
}

console.log(repeatStringNumTimes("abc", 2))

function truncateString(str, num) {
  return str.length > num ? str.slice(0, num) + "..." : str;
}

console.log(truncateString("A-tisket a-tasket A green and yellow basket", 8))
truncateString("A-", 1)

function matchElement(arr, func) {
  let num = 0;
  for (let i = 0; i < arr.length; i++) {
    if (func(arr[i])) {
      num = arr[i];
      break;
    }
  }
  return num > 0 ? num : undefined;
}

matchElement([1, 2, 3, 4], num => num % 2 === 0);

function titleCase(str) {
  return str
    .toLowerCase()
    .split(/\W/)
    .map(word => word.replace(word.charAt(0), word.charAt(0).toUpperCase()))
    .join(" ");
}

console.log(titleCase("I am a little tea pot"))

/**
  Copy each element of the first array into the second array, in order.
  Begin inserting elements at index n of the second array.
  Return the resulting array. The input arrays should remain the same after the function runs.
*/

/* function frankenSplice(arr1, arr2, n) {
  return [...arr2.slice(0,n), ...arr1, ...arr2.slice(n)];
} */

const frankenSplice = (arr1, arr2, n) => [...arr2.slice(0, n), ...arr1, ...arr2.slice(n)];

console.log(frankenSplice([1, 2, 3], [4, 5, 6], 0))

/**
  return <new array> that only inlcudes truthy values from <given array>
  without mutating the original array
*/

function bouncer(arr) {
  let truthies = [];
  arr.forEach(el => {
    if (!!el)
      truthies.push(el)
  });
  return truthies;
}

console.log(bouncer([7, "ate", "", false, NaN, undefined, 9]))

/**
  check if all the characters in second string are present in first string
*/

function mutation(arr) {
  if (arr[1].length < 1) return undefined;
  const test = arr[1].toLowerCase();
  const target = arr[0].toLowerCase();
  for (let i = 0; i < test.length; i++) {
    if (target.indexOf(test[i]) < 0) return false;
  }
  return true;
}

console.log(mutation(["hello", "oe"]))


/**
  Chunky Monkey
  Write a function that splits an array (first argument) into groups the length of size (second argument) and returns them as a two-dimensional array.
*/

function chunkArrayInGroups(arr, size) {
  let temp = [], result = [];

  for (let i = 0; i < arr.length; i++) {
    if (i % size !== size - 1)
      temp.push(arr[i]);
    else {
      temp.push(arr[i]);
      result.push(temp);
      temp = [];
    }
  }

  if (temp.length !== 0) result.push(temp);
  return result;
}

console.log(chunkArrayInGroups(["a", "b", "c", "d", "e"], 2))

/**  
 * 
 * Object Oriented Programming 
 * 
 * **/

/** 
 * Remember to Set the Constructor Property when Changing the Prototype
 * */

function Dog(name) {
  this.name = name;
}

Dog.prototype = {
  constructor: Dog,
  numLegs: 4,
  eat: function () {
    console.log("nom nom nom");
  },
  describe: function () {
    console.log("My name is " + this.name);
  }
};

let beagle = new Dog("Snoopy");


/* an object inherits its prototype 
 * directly from the constructor function that created it. 
 */

console.log(Dog.prototype.isPrototypeOf(beagle))

function Animal() { }

Animal.prototype = {
  constructor: Animal,
  eat: function () {
    console.log("nom nom nom");
  }
};

let duck = Object.create(Animal.prototype);
let begle = Object.create(Animal.prototype);

duck.eat();
console.log(typeof duck.constructor)

Dog.prototype = Object.create(Animal.prototype)
let puff = new Dog();

console.log(puff instanceof Animal, puff instanceof Dog)

/** constructor with getter function which returns private 
 * that is not accesible
*/

function Bird() {
  let weight = 15;
  this.getWeight = function () {
    return weight;
  }
}

/** Understand the Immediately Invoked Function Expression (IIFE) */

(function () {
  console.log("A cozy nest is ready");
})();

/** An immediately invoked function expression (IIFE) 
 * is often used to group related functionality into a single object or module. 
 */

let funModule = (function () {
  return {
    isCuteMixin: function (obj) {
      obj.isCute = function () {
        return true;
      };
    },
    singMixin: function (obj) {
      obj.sing = function () {
        console.log("Singing to an awesome tune");
      };
    }
  }
})();


/**
 *    ***Refactor Global Variables Out of Functions*** 
 *  
 *  In functional programming, the idea of a pure function 
 *  implies that none of the external values are mutated,
 *  which means that it has to create new values from the 
 *  ones given as arguments.
 * 
 * Also a pure function is best defined 
 * with the parameters it will work with,
 * but never mutating their original state
 */


// The global variable
const bookList = [
  "The Hound of the Baskervilles",
  "On The Electrodynamics of Moving Bodies",
  "Philosophiæ Naturalis Principia Mathematica",
  "Disquisitiones Arithmeticae"
];

function add(bookList, bookName) {
  return [...bookList, bookName];
}

function remove(bookList, bookName) {
  let removedBookList = [...bookList]
  const book_index = removedBookList.indexOf(bookName);
  if (book_index >= 0) {
    removedBookList.splice(book_index, 1)
    return removedBookList;
  }
}

console.log(
  remove(
    add(bookList, "A Brief History of Time"), "On The Electrodynamics of Moving Bodies")
)

/**
 * Write your own Array.prototype.myMap(), which should behave exactly like Array.prototype.map().
 * You should not use the built-in map method.
 * The Array instance can be accessed in the myMap method using <this>.
 * */

// The global variable
const s = [23, 65, 98, 5];

Array.prototype.myMap = function (callback) {
  const newArray = [];
  for (let i = 0; i < this.length; i++)
    newArray.push(callback(this[i]))
  return newArray;
};

const new_s = s.myMap(function (item) {
  return item * 2;
});

console.log(new_s)

// The global variable
const watchList = [
  {
    "Title": "Inception",
    "Year": "2010",
    "Rated": "PG-13",
    "Released": "16 Jul 2010",
    "Runtime": "148 min",
    "Genre": "Action, Adventure, Crime",
    "Director": "Christopher Nolan",
    "Writer": "Christopher Nolan",
    "Actors": "Leonardo DiCaprio, Joseph Gordon-Levitt, Elliot Page, Tom Hardy",
    "Plot": "A thief, who steals corporate secrets through use of dream-sharing technology, is given the inverse task of planting an idea into the mind of a CEO.",
    "Language": "English, Japanese, French",
    "Country": "USA, UK",
    "Awards": "Won 4 Oscars. Another 143 wins & 198 nominations.",
    "Poster": "http://ia.media-imdb.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg",
    "Metascore": "74",
    "imdbRating": "8.8",
    "imdbVotes": "1,446,708",
    "imdbID": "tt1375666",
    "Type": "movie",
    "Response": "True"
  },
  {
    "Title": "Interstellar",
    "Year": "2014",
    "Rated": "PG-13",
    "Released": "07 Nov 2014",
    "Runtime": "169 min",
    "Genre": "Adventure, Drama, Sci-Fi",
    "Director": "Christopher Nolan",
    "Writer": "Jonathan Nolan, Christopher Nolan",
    "Actors": "Ellen Burstyn, Matthew McConaughey, Mackenzie Foy, John Lithgow",
    "Plot": "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
    "Language": "English",
    "Country": "USA, UK",
    "Awards": "Won 1 Oscar. Another 39 wins & 132 nominations.",
    "Poster": "http://ia.media-imdb.com/images/M/MV5BMjIxNTU4MzY4MF5BMl5BanBnXkFtZTgwMzM4ODI3MjE@._V1_SX300.jpg",
    "Metascore": "74",
    "imdbRating": "8.6",
    "imdbVotes": "910,366",
    "imdbID": "tt0816692",
    "Type": "movie",
    "Response": "True"
  },
  {
    "Title": "The Dark Knight",
    "Year": "2008",
    "Rated": "PG-13",
    "Released": "18 Jul 2008",
    "Runtime": "152 min",
    "Genre": "Action, Adventure, Crime",
    "Director": "Christopher Nolan",
    "Writer": "Jonathan Nolan (screenplay), Christopher Nolan (screenplay), Christopher Nolan (story), David S. Goyer (story), Bob Kane (characters)",
    "Actors": "Christian Bale, Heath Ledger, Aaron Eckhart, Michael Caine",
    "Plot": "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, the caped crusader must come to terms with one of the greatest psychological tests of his ability to fight injustice.",
    "Language": "English, Mandarin",
    "Country": "USA, UK",
    "Awards": "Won 2 Oscars. Another 146 wins & 142 nominations.",
    "Poster": "http://ia.media-imdb.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_SX300.jpg",
    "Metascore": "82",
    "imdbRating": "9.0",
    "imdbVotes": "1,652,832",
    "imdbID": "tt0468569",
    "Type": "movie",
    "Response": "True"
  },
  {
    "Title": "Batman Begins",
    "Year": "2005",
    "Rated": "PG-13",
    "Released": "15 Jun 2005",
    "Runtime": "140 min",
    "Genre": "Action, Adventure",
    "Director": "Christopher Nolan",
    "Writer": "Bob Kane (characters), David S. Goyer (story), Christopher Nolan (screenplay), David S. Goyer (screenplay)",
    "Actors": "Christian Bale, Michael Caine, Liam Neeson, Katie Holmes",
    "Plot": "After training with his mentor, Batman begins his fight to free crime-ridden Gotham City from the corruption that Scarecrow and the League of Shadows have cast upon it.",
    "Language": "English, Urdu, Mandarin",
    "Country": "USA, UK",
    "Awards": "Nominated for 1 Oscar. Another 15 wins & 66 nominations.",
    "Poster": "http://ia.media-imdb.com/images/M/MV5BNTM3OTc0MzM2OV5BMl5BanBnXkFtZTYwNzUwMTI3._V1_SX300.jpg",
    "Metascore": "70",
    "imdbRating": "8.3",
    "imdbVotes": "972,584",
    "imdbID": "tt0372784",
    "Type": "movie",
    "Response": "True"
  },
  {
    "Title": "Avatar",
    "Year": "2009",
    "Rated": "PG-13",
    "Released": "18 Dec 2009",
    "Runtime": "162 min",
    "Genre": "Action, Adventure, Fantasy",
    "Director": "James Cameron",
    "Writer": "James Cameron",
    "Actors": "Sam Worthington, Zoe Saldana, Sigourney Weaver, Stephen Lang",
    "Plot": "A paraplegic marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home.",
    "Language": "English, Spanish",
    "Country": "USA, UK",
    "Awards": "Won 3 Oscars. Another 80 wins & 121 nominations.",
    "Poster": "http://ia.media-imdb.com/images/M/MV5BMTYwOTEwNjAzMl5BMl5BanBnXkFtZTcwODc5MTUwMw@@._V1_SX300.jpg",
    "Metascore": "83",
    "imdbRating": "7.9",
    "imdbVotes": "876,575",
    "imdbID": "tt0499549",
    "Type": "movie",
    "Response": "True"
  }
];

const filteredList = watchList
  .filter(movie => parseInt(movie.imdbRating) >= 8)
  .map(movie => ({ title: movie["Title"], rating: movie["imdbRating"] }))
  .sort((a, b) => b.rating - a.rating)

console.log(filteredList);

console.log([1, 4, 3, 5, 6, 87, 3].myMap(n => n - 1))

function getRating(watchList) {

  const averageRating = watchList
    // Use filter to find films directed by Christopher Nolan
    .filter(film => film.Director === "Christopher Nolan")
    // Use map to convert their ratings from strings to numbers
    .map(film => Number(film.imdbRating))
    // Use reduce to add together their ratings
    .reduce((sumOfRatings, rating) => sumOfRatings + rating) /
    watchList.filter(film => film.Director === "Christopher Nolan").length;
  // Divide by the number of Nolan films to get the average rating
  return averageRating;
}

console.log(getRating(watchList))

/**
 *  The function should return a new array containing the squares 
 *  of only the positive integers (decimal numbers are not integers) 
 *  when an array of real numbers is passed to it. 
 *  The function should return a new array containing 
 *  the squares of only the positive integers (decimal numbers are not integers) 
 *  when an array of real numbers is passed to it.
 * 
  */

const squareList = arr => {
  return arr
    .filter(n => n > 0 && Number.isInteger(n))
    .map(n => n * n)
};

const squaredIntegers = squareList([-3, 4.8, 5, 3, -3.2]);
console.log(squaredIntegers);

/** 
 * Use the sort method in the alphabeticalOrder function to sort the elements of arr in alphabetical order.
 * The function should return the sorted array.
 */

function alphabeticalOrder(arr) {
  return arr.sort((a, b) => {
    return a === b ? 0 : a > b ? 1 : -1;
  })
}

console.log(
  alphabeticalOrder(["a", "d", "c", "a", "z", "g"])
);

const globalArray = [5, 6, 3, 2, 9];

function nonMutatingSort(arr) {
  return [...arr].sort((a, b) => a - b);
}

console.log(nonMutatingSort(globalArray));

/**
 * Use the split method inside the splitify function 
 * to split str into an array of words. 
 * The function should return the array. 
 * Note that the words are not always separated by spaces, 
 * and the array should not contain punctuation.
*/

function splitify(str) {
  return str.split(/\W+/);
}

console.log(splitify("Hello World,I-am+code"));

/**
 *  The function should return a string. 
 *  For example, I-like-Star-Wars would be converted to I like Star Wars.  
 */

function sentensify(str) {
  return str.split(/\W/).join(" ");
}

console.log(sentensify("May-the-force-be-with-you"));

/**
 * The input is a string with spaces and title-cased words
 * The output is a string with the spaces between words replaced by a hyphen (-)
 * The output should be all lower-cased letters
 * The output should not have any spaces
 */

function urlSlug(title) {
  return title
    .trim()
    .toLowerCase()
    .split(/\W+/)
    .join("-");
}

console.log(
  urlSlug("A Mind Needs Books Like A Sword Needs A Whetstone")
);

/**return true if all the numbers in the array are positive */
function checkEveryPositive(arr) {
  return arr.every(n => n > 0)
}

console.log(checkEveryPositive([1, 2, 3, -4, 5]));

/**
 * Use the some method inside the checkPositive function 
 * to check if any element in arr is positive. 
 * The function should return a Boolean value.
 */

function checkSomePositive(arr) {
  return arr.some(n => n > 0);
}

console.log(
  checkSomePositive([1, 2, 3, -4, 5])
);

function add_(x) {
  return function (y) {
    return function (z) {
      return x + y + z;
    }
  }
}

/** XD version 
 * const add = x => y => z => x + y + z;
 */

console.log(add_(10)(20)(30));

function sumAll(arr) {
  arr.sort((a, b) => a - b)
  let nums = [];
  for (let i = arr[0]; i <= arr[1]; i++)
    nums.push(i)
  return nums.reduce((prev, curr) => prev + curr);
}

console.log(sumAll([10, 12]))

/** 
 * Compare two arrays and return a new array
 * with any items only found in one of the two given arrays, but not both. 
 * In other words, return the symmetric difference of the two arrays
 */

function diffArray(arr1, arr2) {
  return [...arr1, ...arr2].filter(
    n => arr1.indexOf(n) < 0 || arr2.indexOf(n) < 0
  );
}

console.log(diffArray([1, 2, 3, 5, 8], [1, 2, 3, 4, 5, 22]))

console.log(diffArray(["diorite", "andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"]))

console.log(diffArray([1, "calf", 3, "piglet"], [1, "calf", 3, 4]));

function destroyer(arr, ...valsToRemove) {
  return arr.filter(elem => !valsToRemove.includes(elem));
}

console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3))

function whatIsInAName(collection, source) {
  return collection.filter(
    obj => Object.keys(source).every(
      key => obj.hasOwnProperty(key) && obj[key] === source[key]
    )
  );
}

whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });

function spinalCase(str) {
  return str
    .split(/\s|_|(?=[A-Z])/)
    .join("-")
    .toLowerCase();
}

spinalCase('This Is Spinal Tap');

/**
 * If a word begins with a consonant, take the first consonant or consonant cluster,
 * move it to the end of the word, and add ay to it.
 * 
 * If a word begins with a vowel, just add way at the end.
*/

function translatePigLatin(str) {
  const vowels = 'aeiou';
  let strArr = [...str]
  if (!strArr.some(c => vowels.includes(c))) {
    return str + 'ay'
  }
  else if (vowels.includes(str[0])) {
    return str + "way";
  }
  else {
    for (let i = 0; i < strArr.length; i++) {
      if (vowels.includes(strArr[i])) {
        let consonant = strArr.splice(0, i)
        return strArr.concat(consonant).join("") + "ay"
      }
    }
  }
}

console.log(translatePigLatin("glove"))
console.log(translatePigLatin("consonant"))
console.log(translatePigLatin("algorithm"))
console.log(translatePigLatin("rhythm"))

function myReplace(str, before, after) {
  before.substr(0, 1) == before[0].toUpperCase() ?
    after = after.replace(after[0], after[0].toUpperCase()) :
    after = after.replace(after[0], after[0].toLowerCase());

  return str.replace(before, after)
}

console.log(
  myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped")
)





/**
 * Pairs of DNA strands consist of nucleobase pairs.Base pairs are represented by the characters AT and CG, which form building blocks of the DNA double helix.
 * The DNA strand is missing the pairing element. 
 * Write a function to match the missing base pairs for the provided DNA strand. 
 * For each character in the provided string, find the base pair character. Return the results as a 2d array.
*/

const nucleobasePairs = {
  A: ['A', 'T'],
  C: ['C', 'G'],
  G: ['G', 'C'],
  T: ['T', 'A']
}

function pairElement(strand) {
  let basePairs = [];
  for (let c = 0; c < strand.length; c++)
    if (nucleobasePairs.hasOwnProperty(strand[c]))
      basePairs.push(nucleobasePairs[strand[c]])
  return basePairs;
}

console.log(
  pairElement("GCGA")
)

function fearNotLetter(str) {
  const letters = 'abcdefghijklmnopqrstuvwxyz';
  if (str === letters || str === "")
    return undefined;
  const start = letters.indexOf(str[0]);
  const chunk = letters.substr(start, str.length)
  for (let c = 0; c < str.length; c++)
    if (chunk[c] !== str[c]) return chunk[c];
}

console.log(fearNotLetter("stvwx"))

function uniteUnique(...arrs) {
  const uniques = new Set();
  arrs.forEach(a => a.forEach(n => uniques.add(n)));
  return [...uniques];
}

console.log(uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]))

const HTML_ENTITIES = {
  '&': "&amp;",
  '<': '&lt;',
  '>': '&gt;',
  '"': '&quot;',
  "'": '&apos;'
}

function convertHTML(str) {
  const chars = str.split("")
  for (let i = 0; i < chars.length; i++)
    if (HTML_ENTITIES.hasOwnProperty(chars[i]))
      str = str.replace(chars[i], HTML_ENTITIES[chars[i]])
  return str
}

console.log(convertHTML("Hamburgers < Pizza < Tacos"))
console.log(convertHTML('Stuff in "quotation marks"'))
console.log(convertHTML("Schindler's List"))

function sumFibs(n) {
  if (n < 1)
    return 0;

  let result = 1;
  let a = 1
  let b = 1

  while (b <= n) {
    if (b & 1)
      result += b;
    [a, b] = [b, a + b]
  }

  return result;
}

console.log(sumFibs(10))

function sumPrimes(num) {
  let sum = 0;
  for (let i = 2; i <= num; i++) {
    if (isPrime(i))
      sum += i;
  }
  return sum;
}

console.log(sumPrimes(90))

/**
* Smallest Common Multiple
*/

function smallestCommons(arrNums) {
  const [min, max] = arrNums.sort((a, b) => a - b);
  let range = [];
  for (let i = min; i < max + 1; i++)
    range.push(i);
  const maxVal = range.reduce((prod, curr) => prod * curr);
  for (let multiple = max; multiple <= maxVal; multiple += max) {
    const divisible = range.every((value) => multiple % value === 0);
    if (divisible) {
      console.log(divisible)
      return multiple;
    }
  }
}

console.log(smallestCommons([2, 6]))

function dropElements(arr, func) {
  while (arr.length > 0 && !func(arr[0]))
    arr.shift();
  return arr;
}

dropElements([1, 2, 3], function (n) { return n < 3; });

console.log(dropElements([1, 2, 3, 4], function (n) { return n > 4 }))
console.log(dropElements([1, 2, 3], function (n) { return n < 3; }));

function steamrollArray(arr) {
  let flat = []


  return arr;
}

steamrollArray([1, [2], [3, [[4]]]]);