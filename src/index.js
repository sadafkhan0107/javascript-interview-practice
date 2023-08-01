import "./styles.css";

const obj = {
  name: "sadaf",
  age: 25,
  add: {
    city: "agra",
    state: "UP",
    landmark: {
      shop: "need 24",
      hospital: "Bansal"
    }
  }
};

// --> shallow copy

// const obj1 = {...obj, add: {...obj.add}}
// obj1.add.landmark.shop = 'garg';
// console.log(obj)
// console.log(obj1)

// --> Deep Copy

function deepCopy(src) {
  let tempObj = {};
  let keys = Object.keys(src);
  for (let key of keys) {
    if (typeof src[key] === "object") {
      tempObj[key] = deepCopy(src[key]);
    } else {
      tempObj[key] = src[key];
    }
  }
  return tempObj;
}

const obj1 = deepCopy(obj);
obj1.add.landmark.shop = "garg";
console.log(obj);
console.log(obj1);

const arr = [1, 2, [3, 4, [5, 6, [7, 8, [9, 10]]]]];
const arr1 = arr.flat(Infinity);
console.log(arr1);

// function getSquaredNums(num) {
//   return num ** 2;
// }

// Array.prototype.myMap = function(callback){
//   let tempArr = [];
//   for (let i = 0; i < this.length; i++) {
//     tempArr.push(callback(this[i]));
//   }
//   return tempArr;
// };

// const squaredArr = arr1.myMap(getSquaredNums);
// console.log(squaredArr);

// function getNumbersMoreThanThree(num) {
//   return num > 3;
// }

// Array.prototype.MyFilter = function (cb) {
//   let tempArr = [];
//   for (let i = 0; i < this.length; i++) {
//     cb(this[i]) && tempArr.push(this[i]);
//   }
//   return tempArr;
// };

// const filteredArr = arr1.MyFilter(getNumbersMoreThanThree);
// console.log(filteredArr);

// function sum(acc, curr) {
//   return acc + curr;
// }

// Array.prototype.MyReduce = (cb, initialValue) => {
//   console.log(this);
//   let accumulator = initialValue;
//   for (let i = 0; i < this.length; i++) {
//     accumulator = accumulator ? cb(accumulator, this[i]) : this[i];
//   }
//   return accumulator;
// };
// const finalSum = arr1?.MyReduce(sum, 0);
// console.log(finalSum);

// There are different ways to create new objects:

// Create a single object, using an object literal.

const person = {
  firstName: "sadaf",
  lastName: "khan",
  age: 25,
  printDetails: function () {
    console.log(
      `Hi my name is ${this.firstName} ${this.lastName} and I am ${this.age} years old`
    );
  }
};
console.log(person);
// Create a single object, with the keyword new.
const person1 = Object({
  firstName: "Mohd",
  lastName: "sahil",
  age: 26,
  printDetails: function () {
    console.log(
      `Hi my name is ${this.firstName} ${this.lastName} and I am ${this.age} years old`
    );
  }
});
console.log(person1);
person1.printDetails();
// Define an object constructor, and then create objects of the constructed type.
function data(firstName, lastName, age) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.age = age;
  this.printDetails = function () {
    console.log(
      `Hi my name is ${this.firstName} ${this.lastName} and I am ${this.age} years old`
    );
  };
}

const person2 = new data("sakshi", "singhal", 26);
console.log(person2);
person2.printDetails();

// Create an object using Object.create()
const person3 = Object.create(person);
person3.firstName = "shifa";
person.lastName = "khan";
person.age = 20;
console.log(person3);
person3.printDetails();

function createClosureArray() {
  var badArr = [];
  // for(var index = 1; index <= 5; index++){
  // badArr[index] = function(){
  // return 'n = ' + index;
  // }}
  for (let index = 1; index <= 5; index++) {
    badArr[index] = function () {
      return "n = " + index;
    };
  }
  return badArr;
}

var badArr = createClosureArray();
for (var index in badArr) {
  console.log(badArr[index]());
}

function details(city, state) {
  console.log(
    `Hi I am ${this.name} and I am ${this.age} years old and I am from ${city}, ${state}`
  );
}
const p1 = { name: "sadaf Khan", age: 25 };
const p2 = { name: "Mohd Sahil", age: 26 };
const p3 = { name: "Sakshi Singhal", age: 26 };

details.call(p1, "agra", "uttar pradesh");
details.apply(p2, ["lalganj", "uttar pradesh"]);
var printadd = details.bind(p3); // details.bind(p3, 'modi nagar', 'up')
printadd("modi nagar", "up");

// 8 of the Most Important HTML Tags for SEO
// --> Title tag. Title tags are used to set up those clickable headlines that you see in the SERP:
// --> Meta description tag. <meta name='description' content='---'
// --> Heading (H1-H6) tags. only one h1 in single page
// --> Image alt text. good for color blind people
// --> Schema markup. ...
// --> HTML5 semantic tags. ...
// --> Meta robots tag. ...
// --> Canonical tag.

let course = {
  c1: "javaScript",
  c2: "react"
};

function tellCourses(profession, learn) {
  console.log(
    `I have knowledge of ${this.c1}, ${this.c2} to become ${profession} and want to learn ${learn}`
  );
}

// Function.prototype.myCall = function(context = {}, ...args){
//   if(typeof this !== 'function'){
//     throw new Error(this + ' is not callable')
//   }

//   context.fn = this
//   context.fn(...args)
// }

// tellCourses.myCall(course, 'frontend developer', 'nodJs')

// Function.prototype.myApply = function(context = {}, args=[]){
//   if(typeof this !== 'function'){
//     throw new Error(this + ' is not callable')
//   }
//   if(!Array.isArray(args)){
//     throw new Error('CreateListFromArrayLike called on non-object')
//   }

//   context.fn = this
//   context.fn(...args)
// }

// tellCourses.myApply(course, ['frontend developer', 'nodJs'])

Function.prototype.myBind = function (context = {}, ...args) {
  if (typeof this !== "function") {
    throw new Error(this + " is not callable");
  }
  context.fn = this;
  return function (...newArgs) {
    return context.fn(...args, ...newArgs);
  };
};

tellCourses.myBind(course, "frontend developer")("nodJs");

const promise = new Promise((resolve, reject) => {
  reject("hi from reject");
});
promise
  .then((data) => console.log(data))
  .catch((err) => new Error("Whoops!"))
  .then((data) => console.log("hi from 2nd"));
