/** @format */

function add(n1: number, n2: number) {
  return n1 + n2;
}

function printResult(num: number): void {
  console.log("result :" + num);
}

function addAndHandle(n1: number, n2: number, cb: (num: number) => void) {
  const result = n1 + n1;
  cb(result);
}

printResult(add(10, 12));

// when you use void that means you are not returning anything in the function

let combineValues: (a: number, b: number) => number;
//  here we are telling javascript that the function assign to combine value can only take two parameter which are numbers and also return a number
// function type allow us describe which type of function specifically we  want to user somewher

combineValues = add;
console.log(combineValues(5, 3));
