function add(n1: number, n2: number) {
  // THIS IS ATTEMPTING TO CHECK THE SAME THING WHICH IS THAT OUR INPUTS ARE NUMBER TYPES
  // THIS ERROR CHECK WOULD ONLY WORK/SHOW IN RUN TIME, ITS BETTER TO USE TYPESCRIPT TYPES TO FIND THIS ERROR IN DEVELOPMENT
  // if (typeof n1 !== 'number' || typeof n2 !== 'number') {
  //   throw new Error('Incorrect input');
  // }
  return n1 + n2;
}

const number1 = 5;
const number2 = 2.8;

const result = add(number1, number2);
console.log(result);

// ---------- OBJECTS ---------- //
// typescript infers the value types by looking at what we assigned to each key
const person = {
  name: 'bo',
  age: 63
}

// to explicitly assign types to the object, we would follow the below syntax
const person2 : {
  name: string;
  age: number;
} = {
  name: 'bo',
  age: 63
}

console.log(person.age);

// ---------- ARRAYS ---------- //
// typescript infers values in arrays as well
// if you define an mixed type array like the one below, the variable will just see it as "I can only hold an array, but it can be any length and have either numbers or strings"
// you can see this if you hover over the variable and you'll see: (string | number)[]
const arr1 = [2, 'bo'];


// ---------- TUPLES ---------- //
// tuples are arrays that are a fixed length and have fixed data types
// for example, the variable below would only be able to hold an array of two elements exactly where index 0 is a number and index 1 is a string.
let  arr2:  [number, string]


// ---------- ENUMS ---------- //
// enum assigns labels to numbers. it takes a list of labels and enumerates the labels in order
enum Role { ADMIN, READ_ONLY, AUTHOR};
// this list has a mapped value behind the scene of {0, 1, 2}

// you can also start the list at a specific value like so:
enum Role2 {ADMIN2 = 5, READ_ONLY2, AUTHOR2};
// this would return a mapped value behind the scene of {5, 6, 7}

// you can assign all values as random numbers or even strings too using the same simple syntax of the "=" sign

// ---------- LITERAL TYPES ---------- //
// this is similar to declaring any type, except that you can declare that the value of a variable shoulbe a specific thing
// for example, the code below is stating that the resultConversion variable should only either bet set to
// a value of 'as-number' or 'as-text'
let resultConversion: 'as-number' | 'as-text'


// ---------- TYPE ALIASES ---------- //
// you can define a custom type as a type alias
// typically used with union types; example vv
type Combine = number | string;




let userInput: any;
let userName: string;

userInput = 5;

userName = userInput;

console.log(userName + 'userName');
