// function combine(input1: number | string, input2: number | string) {
//   const res = input1 + input2;
//   return res;
// }

// the code above throws an error because TS only sees that we are using a mix of types when we use the pipe/union operator; it doesn't know which types are being included
// it throws this error because it is concerned that we might pass it 2 data types that do not work with the + operator
// we need to add a few lines of code to address this issue:

function combine(input1: number | string, input2: number | string) {
  let res;
  // we add this if statement to reassure TS that we are working with two numbers that will work with the + operator
  if (typeof input1 === "number" && typeof input2 === "number") {
    res = input1 + input2
  // this else statement will reassure TS that we are working solely with strings otherwise, which work with +
  } else {
    res = input1.toString() + input2.toString();
  }
  return res;
}

const combinedAges = combine(30, 'bobo');
// prints out "30bobo"
// two numbers would print out the sum as a number
console.log(combinedAges);
