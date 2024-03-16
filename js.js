// const same = (arr1, arr2) => {
//     if (arr1.length !== arr2.length) {
//         return false
//     }
//     for (let i = 0; i < arr1.length; i++) {
//         let correctIndex = arr2.indexOf(arr1[2] ** 2)
//         console.log("arr", arr2.indexOf(arr1[2] ** 2));
//         if (correctIndex === -1) {
//             return false;
//         }
//         arr2.splice(correctIndex, 1)
//     }
//     return true;

// }
// same([1, 2], [1, 4])

// const object = { a: 1, b: 2, c: 3 }
// for (let key in object) {
//     console.log(`the keys are  ${[key]}`);
// }

//start

console.log("hello world");

const firstName = "lols";
const lastName = "new";
const greeting = "hello" + " " + firstName + " " + lastName;
console.log(greeting);

const gender = "male";

if (gender == "male") {
  console.log("hello" + " " + "mr");
} else {
  console.log("hello" + " " + "mrs");
}
console.log(gender);

// let count = 1;
// for (i = count; i <= 1000; i++) {
//   console.log(count);
// }

let isMarried = false;

if (isMarried == true) {
  console.log(firstName + " you are married");
} else {
  console.log(firstName + " you are not married");
}

let ans = 0;
for (let i = 0; i <= 1000; i++) {
  ans = ans + i;
}
console.log(ans);

let ages = [1, 3, 4, 5, 6, 7];
// for (let i = 0; i < ages.length; i++) {
//   if (ages[i] % 2 == 0) {
//     console.log(ages[i]);
//   }
// }
let biggestNumber = ages[0];
for (let i = 1; i < ages.length; i++) {
  if (ages[i] > biggestNumber) {
    biggestNumber = ages[i];
  }
}

console.log(biggestNumber);

const personArray = ["harkirat", "raman", "priya"];
const genderArray = ["male", "male", "female"];

// for (let i = 0; i < personArray.length; i++) {
//   if (genderArray[i] == "male") {
//     console.log(personArray[i]);
//   }
// }
const user = [
  {
    firstName: "harkirat",
    gender: "male",
  },
  {
    firstName: "raman",
    gender: "male",
  },
  {
    firstName: "priya",
    gender: "female",
  },
];
for (let i = 0; i < user.length; i++) {
  //   console.log(user[i]["gender"]);
  if (user[i]["gender"] == "male") {
    // console.log(user[i]);
    console.log(user[i]["firstName"]);
  }
}

function sum(a, b) {
  return a + b;
}
const value = sum(1, 2);
console.log(value);

function getLength(str) {
  console.log("original string", str);
  console.log("length:", str.length);
}

getLength("hello world");

function findIndexOf(str, target) {
  console.log("original string:", str);
  console.log("index:", str.lastIndexOf(target));
}
findIndexOf("hello world world", "world");

function getSlice(str, start, end) {
  console.log("original string", str);
  console.log("after slice:", str.slice(start, end));
}
getSlice("hello world", 0, 7);

let anss = "harkirat singh".slice(2, 9);
console.log(anss);
// it will give everything between the start indexing and the end indexing (it will give everything before the last index)

const str = "hello world";
console.log(str.replace(str, "world", "javascript"));

const values = "hi my name is hehe";
console.log(values.split(" ").reverse(" ").join(" "));

const valuess = "            hshdh      ";
console.log(valuess.trim());

let a = "42";
let b = 42;

// console.log(parseInt('42'));  it converts string into numbers

console.log(parseInt("42px"));
console.log(parseInt("3.14"));

const initialArray = [1, 2, 3];

console.log(initialArray.push(2));
console.log(initialArray); //it push something to the last

const initialArrays = [1, 2, 3];
const secondArrays = [5, 6, 7];

for (i = 0; i < secondArrays; i++) {
  const finalArray = initialArrays.concat(secondArrays);
}


initialArray.forEach((el) => {
  console.log(el*2);
})