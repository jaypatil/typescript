// // Question
// function fact(n) {
//   if (n === 0) {
//     return 1;
//   } else {
//     return n * fact(n - 1);
//   }
// }
// console.log(fact(5));
// //Answer 120

// // Question
// const fact2 = n => {
//     if (n === 0) {
//         return 1;
//     } else {
//         return n * fact2(n - 1);
//     }
// };
// console.log(fact2(5));
// //Answer 120

// // Question
// const fact3 = n => (n === 0 ? 1 : n * fact3(n - 1));
// console.log(fact3(5));
// //Answer 120

// // Question
// function newCounter() {
//     let count = 0;
//     return function () {
//         count++;
//         return count;
//     };
// }
// const nc = newCounter();

// console.log(nc()); // Answer : 1
// console.log(nc()); // Answer : 2
// console.log(nc()); // Answer : 3

// // Question Write the Equivalant function call with out spread operator
// // With output
// function sum3(a, b, c) {
//     return a + b + c;
// }
// const x = [1, 2, 3];
// const y = sum3(...x); // Answer equivalent to sum3(1,2,3)
// console.log(y); // Answer 6

// // Question
// const f = [1, 2, 3];
// const g = [4, ...f, 5]; // Answer [4,1,2,3,5]1
// console.log(g);

// // Question
// const h = [...f, ...g]; // Answer [1,2,3,4,1,2,3,5]
// console.log(h);

// // Question
// const p = { some: 3, data: 5 };
// const q = { more: 8, ...p }; // Answer { more:8, some:3, data:5 }
// console.log(q);

// // Question
// const numbers = [2, 2, 9, 6, 0, 1, 2, 4, 5, 6];
// const minA = Math.min(...numbers); // Answer 0
// console.log(minA);

// // Question
// const maxArray = arr => Math.max(...arr);
// const maxA = maxArray(numbers); // Answer 9
// console.log(maxA);

// // Question

// const nextMonday = () => {
//     let d = new Date();
//     do {
//         d.setDate(d.getDate() + 1);
//     } while (d.getDay() !== 1);
//     return d;
// };

// const nextMonday2 = (d) => {
//     do {
//         d.setDate(d.getDate() + 1);
//     } while (d.getDay() !== 1);
//     return d;
// };

// const nextMonday3 = (d) => {
//     let aux = new Date(d.getYear(), d.getMonth(), d.getDate());
//     do {
//         aux.setDate(aux.getDate() + 1);
//     } while (aux.getDay() !== 1);
//     return aux;
// };

// console.log(nextMonday());   // Answer Mon Jun 12 2017 14:40:25 GMT+0530 (IST)
// console.log(nextMonday());   // Answer Mon Jun 12 2017 14:40:25 GMT+0530 (IST)
// console.log(nextMonday());   // Answer Mon Jun 12 2017 14:40:25 GMT+0530 (IST)
// console.log(nextMonday());   // Answer Mon Jun 12 2017 14:40:25 GMT+0530 (IST)

// var y = new Date();
// console.log(y);              // Answer Sat Jun 10 2017 14:40:25 GMT+0530 (IST)
// console.log(nextMonday2(y)); // Answer Mon Jun 12 2017 14:40:25 GMT+0530 (IST)
// console.log(nextMonday2(y)); // Answer Mon Jun 19 2017 14:40:25 GMT+0530 (IST)
// console.log(nextMonday2(y)); // Answer Mon Jun 26 2017 14:40:25 GMT+0530 (IST)
// console.log(y);              // Answer Mon Jun 26 2017 14:40:25 GMT+0530 (IST)

// var z = new Date();
// console.log(z);              // Answer Sat Jun 10 2017 14:40:25 GMT+0530 (IST)
// console.log(nextMonday3(z)); // Answer Mon Jun 14  117 00:00:00 GMT+0530 (IST)
// console.log(nextMonday3(z)); // Answer Mon Jun 14  117 00:00:00 GMT+0530 (IST)
// console.log(nextMonday3(z)); // Answer Mon Jun 14  117 00:00:00 GMT+0530 (IST)
// console.log(z);              // Answer Sat Jun 10 2017 14:40:25 GMT+0530 (IST)

// // Question
// var colors = [
//     "violet",
//     "indigo",
//     "blue",
//     "green",
//     "yellow",
//     "orange",
//     "red"
// ];
// colors.sort();
// console.log(colors);
// // Answer ["blue", "green", "indigo", "orange", "red", "violet", "yellow"]

// // Question
// var someNumbers = [3, 20, 100];
// someNumbers.sort();
// console.log(someNumbers);
// // Answer [100, 20, 3]

// // Quesiton
// var palabras = ["�and�", "oasis", "mano", "natural", "m�tico", "musical"];
// palabras.sort();
// console.log(palabras);
// // Answer ["mano", "musical", "m�tico", "natural", "oasis", "�and�"] -- wrong result!

// // Question
// palabras.sort((a, b) => a.localeCompare(b, "es"));
// console.log(palabras);
// // Answer ["mano", "m�tico", "musical", "natural", "�and�", "oasis"]

// // Question
// const spanishComparison = (a, b) => a.localeCompare(b, "es");

// palabras.sort(spanishComparison);
// // sorts the palabras array according to Spanish rules:
// // Answer ["mano", "m�tico", "musical", "natural", "�and�", "oasis"]

// // Question
// function ready() {
//     console.log("ready");
// }
// function set() {
//     console.log("set");
// }
// function go() {
//     console.log("go");
// }
// ready();
// set();
// go();

// function set() {
//     console.log("UNEXPECTED...");
// }
// // Answer "ready"
// // Answer "UNEXPECTED"
// // Answer "go"

// // Question
// (function () {
//     function ready() {
//         console.log("ready");
//     }
//     function set() {
//         console.log("set");
//     }
//     function go() {
//         console.log("go");
//     }
//     ready();
//     set();
//     go();
// })();

// function set() {
//     console.log("UNEXPECTED...");
// }
// // Answer "ready"
// // Answer "set"
// // Answer "go"

// const myCounter = (function () {
//     let count = 0;
//     return function () {
//         count++;
//         return count;
//     };
// })();

// console.log(myCounter()) // Answer 1
// console.log(myCounter()) // Answer 2
// console.log(myCounter()) // Answer 3

// //Question
// let limitYear = 1999;
// const isOldEnough = birthYear => birthYear <= limitYear;
// console.log(isOldEnough(1960)); // Answer true
// console.log(isOldEnough(2001)); // Answer false

// const PI = 3.14159265358979;
// const circleArea = r => PI * Math.pow(r, 2); // or PI * r ** 2

// const roundFix = (function () {
//     let accum = 0;
//     return n => {
//         // reals get rounded up or down
//         // depending on the sign of accum
//         let nRounded = accum > 0 ? Math.ceil(n) : Math.floor(n);
//         console.log("accum", accum.toFixed(5), " result", nRounded);
//         accum += n - nRounded;
//         return nRounded;
//     };
// })();

// roundFix(3.14159); // Answer accum  0.00000    result 3
// roundFix(2.71828); // Answer accum  0.14159    result 3
// roundFix(2.71828); // Answer accum -0.14013    result 2
// roundFix(3.14159); // Answer accum  0.57815    result 4
// roundFix(2.71828); // Answer accum -0.28026    result 2
// roundFix(2.71828); // Answer accum  0.43802    result 3
// roundFix(2.71828); // Answer accum  0.15630    result 3

// // Question
// const maxStrings = a => a.sort().pop();
// let countries = ["Argentina", "Uruguay", "Brasil", "Paraguay"];
// console.log(maxStrings(countries)); // Answer "Uruguay"
// console.log(countries); // Answer ["Argentina", "Brasil", "Paraguay"]

// // Question
// const maxStrings2 = a => [...a].sort().pop();
// countries = ["Argentina", "Uruguay", "Brasil", "Paraguay"];
// console.log(maxStrings2(countries)); // Answer "Uruguay"
// console.log(countries); // Answer ["Argentina", "Uruguay", "Brasil", "Paraguay"]

// // Question
// const getRandomLetter = () => {
//     const min = "A".charCodeAt();
//     const max = "Z".charCodeAt();
//     return String.fromCharCode(
//         Math.floor(Math.random() * (1 + max - min)) + min
//     );
// };

// const getRandomFileName = (fileExtension = "") => {
//     const NAME_LENGTH = 12;
//     let namePart = new Array(NAME_LENGTH);
//     for (let i = 0; i < NAME_LENGTH; i++) {
//         namePart[i] = getRandomLetter();
//     }
//     return namePart.join("") + fileExtension;
// };

// console.log(getRandomFileName(".pdf")); // Answer "SVHSSKHXPQKG.pdf"
// console.log(getRandomFileName(".pdf")); // Answer "DCHKTMNWFHYZ.pdf"
// console.log(getRandomFileName(".pdf")); // Answer "GBTEFTVVHADO.pdf"
// console.log(getRandomFileName(".pdf")); // Answer "ATCBVUOSXLXW.pdf"
// console.log(getRandomFileName(".pdf")); // Answer "OIFADZKKNVAH.pdf"

// // Question
// const isOldEnough2 = birthYear =>
//     birthYear <= new Date().getFullYear() - 18;
// console.log(isOldEnough2(1960)); // Answer true
// console.log(isOldEnough2(2001)); // Answer false

// // Question
// var mult = 1;
// const f = x => {
//     mult = -mult;
//     return x * mult;
// };
// console.log(f(2) + f(5)); // Answer  3
// console.log(f(5) + f(2)); // Answer -3

// // Question
// const fib = n => {
//     if (n == 0) {
//         return 0;
//     } else if (n == 1) {
//         return 1;
//     } else {
//         return fib(n - 2) + fib(n - 1);
//     }
// };
// console.log(fib(10)); // Answer 55, a bit slowly

// // Question
// let cache = [];
// const fib2 = n => {
//     if (cache[n] == undefined) {
//         if (n == 0) {
//             cache[0] = 0;
//         } else if (n == 1) {
//             cache[1] = 1;
//         } else {
//             cache[n] = fib2(n - 2) + fib2(n - 1);
//         }
//     }
//     return cache[n];
// };
// console.log(fib2(10)); // Answer 55, as before, but more quickly!

// // Question
// const roundFix1 = (function () {
//     let accum = 0;
//     return n => {
//         let nRounded = accum > 0 ? Math.ceil(n) : Math.floor(n);
//         accum += n - nRounded;
//         return nRounded;
//     };
// })();

// const roundFix2 = (a, n) => {
//     let r = a > 0 ? Math.ceil(n) : Math.floor(n);
//     a += n - r;
//     return { a, r };
// };

// let accum = 0;

// // ...some other code...

// let { a, r } = roundFix2(accum, 3.1415);
// accum = a;
// console.log(accum, r); // 0.1415 3

// const getRandomFileName2 = (
//     fileExtension = "",
//     randomLetterFunc = getRandomLetter
// ) => {
//     const NAME_LENGTH = 12;
//     let namePart = new Array(NAME_LENGTH);
//     for (let i = 0; i < NAME_LENGTH; i++) {
//         namePart[i] = randomLetterFunc();
//     }
//     return namePart.join("") + fileExtension;
// };
// let fn = getRandomFileName2(".pdf", getRandomLetter);
// console.log(fn);

// const sum3 = (x, y, z) => x + y + z;
// let x = {};
// x.valueOf = Math.random;
// let y = 1;
// let z = 2;

// console.log(sum3(x, y, z)); // Answer 3.2034400919849431
// console.log(sum3(x, y, z)); // Answer 3.8537045249277906
// console.log(sum3(x, y, z)); // Answer 3.0833258308458734

// // Question
// const myArray = [22, 9, 60, 12, 4, 56];
// const sum = (x, y) => x + y;
// const mySum = myArray.reduce(sum, 0); // Answer 163
// console.log(mySum);

// // Question
// const sumAndLog = (x, y) => {
//     console.log(`${x}+${y}=${x + y}`);
//     return x + y;
// };
// myArray.reduce(sumAndLog, 0);

// const average = arr => arr.reduce(sum, 0) / arr.length;
// console.log(average(myArray)); // Answer 27.166667

// // Question
// const average2 = (sum, val, ind, arr) => {
//     sum += val;
//     return ind == arr.length - 1 ? sum / arr.length : sum;
// };
// console.log(myArray.reduce(average2, 0)); // Answer 27.166667

// // Question
// Array.prototype.average = function () {
//     return this.reduce((x, y) => x + y, 0) / this.length;
// };
// let myAvg = [22, 9, 60, 12, 4, 56].average(); // Answer 27.166667
// console.log(myAvg);

// // Question
// const average3 = arr => {
//     const sc = arr.reduce(
//         (ac, val) => ({ sum: val + ac.sum, count: ac.count + 1 }),
//         { sum: 0, count: 0 }
//     );
//     return sc.sum / sc.count;
// };
// console.log(average3(myArray)); // Answer 27.166667

// // Question
// const average4 = arr => {
//     const sc = arr.reduce((ac, val) => [ac[0] + val, ac[1] + 1], [0, 0]);
//     return sc[0] / sc[1];
// };
// console.log(average4(myArray)); // Answer 27.166667

// // Question
// const reverseString = str => {
//     let arr = str.split("");
//     arr.reverse();
//     return arr.join("");
// };
// console.log(reverseString("MONTEVIDEO")); // Answer OEDIVETNOM

// // Question
// const reverseString2 = str =>
//     str.split("").reduceRight((x, y) => x + y, "");
// console.log(reverseString2("OEDIVETNOM")); // Answer MONTEVIDEO

// // Question
// const markers = [
//     { name: "UY", lat: -34.9, lon: -56.2 },
//     { name: "AR", lat: -34.6, lon: -58.4 },
//     { name: "BR", lat: -15.8, lon: -47.9 },
//     // ...
//     { name: "BO", lat: -16.5, lon: -68.1 }
// ];

// let averageLat = average(markers.map(x => x.lat));
// let averageLon = average(markers.map(x => x.lon));
// console.log(averageLat, averageLon);

// let averageLat2 = markers.map(x => x.lat).average();
// let averageLon2 = markers.map(x => x.lon).average();
// console.log(averageLat2, averageLon2);

// console.log(["123.45", "67.8", "90"].map(parseFloat));
// // Answer [123.45, 67.8, 90]

// console.log(["123.45", "-67.8", "90"].map(parseInt));
// // Answer [123, NaN, NaN]

// console.log(["123.45", "-67.8", "90"].map(x => parseFloat(x)));
// // Answer [123.45, -67.8, 90]

// console.log(["123.45", "-67.8", "90"].map(x => parseInt(x)));
// // Answer [123, -67, 90]

// // Question
// const range = (start, stop) =>
//     new Array(stop - start).fill(0).map((v, i) => start + i);
// let from2To6 = range(2, 7); // Answer [2, 3, 4, 5, 6];
// console.log(from2To6);

// // Question
// const factorialByRange = n => range(1, n + 1).reduce((x, y) => x * y, 1);
// console.log(factorialByRange(5)); // Answer 120
// console.log(factorialByRange(3)); // Answer 6

// // Question
// const ALPHABET = range("A".charCodeAt(), "Z".charCodeAt() + 1).map(x =>
//     String.fromCharCode(x)
// );
// // Answer ["A", "B", "C", ... "X", "Y", "Z"]
// console.log(ALPHABET);

// // Question
// const myMap = (arr, fn) => arr.reduce((x, y) => x.concat(fn(y)), []);
// const dup = x => 2 * x;
// console.log(myArray.map(dup)); // Answer [44, 18, 120, 24, 8, 112]
// console.log(myMap(myArray, dup)); // Answer [44, 18, 120, 24, 8, 112]
// console.log(myArray); // Answer [22, 9, 60, 12, 4, 56]

// // Question
// const objCopy = obj => {
//     let copy = Object.create(Object.getPrototypeOf(obj));
//     Object.getOwnPropertyNames(obj).forEach(prop =>
//         Object.defineProperty(
//             copy,
//             prop,
//             Object.getOwnPropertyDescriptor(obj, prop)
//         )
//     );
//     return copy;
// };
// const myObj = { fk: 22, st: 12, desc: "couple" };
// const myCopy = objCopy(myObj);
// console.log(myObj, myCopy); // Answer {fk: 22, st: 12, desc: "couple"}, twice

// // Question
// const factorial4 = n => {
//     let result = 1;
//     range(1, n + 1).forEach(v => result *= v);
//     return result;
// };
// console.log(factorial4(5)); // Answer 120

// // Question
// const serviceResult = {
//     accountsData: [
//         {
//             id: "F220960K",
//             balance: 1024
//         },
//         {
//             id: "S120456T",
//             balance: 2260
//         },
//         {
//             id: "J140793A",
//             balance: -38
//         },
//         {
//             id: "M120396V",
//             balance: -114
//         },
//         {
//             id: "A120289L",
//             balance: 55000
//         }
//     ]
// };
// const delinquent = serviceResult.accountsData.filter(v => v.balance < 0);
// console.log(delinquent); // Answer two objects, with id's J140793A and M120396V

// const delinquentIds = delinquent.map(v => v.id);
// console.log(delinquentIds);

// const delinquentIds2 = serviceResult.accountsData
//     .filter(v => v.balance < 0)
//     .map(v => v.id);
// console.log(delinquentIds2);

// const myFilter = (arr, fn) =>
//     arr.reduce((x, y) => (fn(y) ? x.concat(y) : x), []);

// console.log(myFilter(serviceResult.accountsData, v => v.balance < 0));
// // Answer two objects, with id's J140793A and M120396V

// let brazilData = markers.find(v => v.name === "BR");
// // Answer {name:"BR", lat:-15.8, lon:-47.9}
// console.log(brazilData);

// let brazilIndex = markers.findIndex(v => v.name === "BR"); // Answer 2
// console.log(brazilIndex);
// let mexicoIndex = markers.findIndex(v => v.name === "MX"); // Answer -1
// console.log(mexicoIndex);

// console.log(markers.every(v => v.lat < 0 && v.lon < 0)); // Answer false
// console.log(markers.some(v => v.lat < 0 && v.lon < 0)); // Answer true

// const none = (arr, fn) => arr.every(v => !fn(v));
// Array.prototype.none = function (fn) {
//     return this.every(v => !fn(v));
// };

// Advanced Logger

// const addLogging = fn => (...args) => {
//   console.log(`entering ${fn.name}: ${args}`);
//   try {
//     const valueToReturn = fn(...args);
//     console.log(`exiting ${fn.name}: ${valueToReturn}`);
//     return valueToReturn;
//   } catch (thrownError) {
//     console.log(`exiting ${fn.name}: threw ${thrownError}`);
//     throw thrownError;
//   }
// };

// let something = (a, b) => `result=${a}:${b}`;
// something = addLogging(something);
// something(22, 9);

// const addLogging2 = (fn, logger = console.log) => (...args) => {
//   logger(`entering ${fn.name}: ${args}`);
//   try {
//     const valueToReturn = fn(...args);
//     logger(`exiting ${fn.name}: ${valueToReturn}`);
//     return valueToReturn;
//   } catch (thrownError) {
//     logger(`exiting ${fn.name}: threw ${thrownError}`);
//     throw thrownError;
//   }
// };

// let dummy;

// dummy = {
//   logger(log) {
//     console.log(log);
//   }
// };

// let something2 = (a, b) => `result=${a}:${b}`;
// something2 = addLogging2(something2, dummy.logger);
// something2(22, 9);

// let thrower = (a, b, c) => {
//   throw 'CRASH!';
// };

// thrower = addLogging(thrower);
// thrower = addLogging2(thrower, dummy.logger);
// thrower(1, 2, 3);

// const memoize = fn => {
//   let cache = {};
//   return x => (x in cache ? cache[x] : (cache[x] = fn(x)));
// };

// let fib = n => {
//   console.log(n);
//   if (n == 0) {
//     return 0;
//   } else if (n == 1) {
//     return 1;
//   } else {
//     return fib(n - 2) + fib(n - 1);
//   }
// };

// fib(6);

// fib = memoize(fib);

// fib(6);

// fib(5);

// Currying
// Partial Currying
// Chaining
// Composing
// Pipeline
