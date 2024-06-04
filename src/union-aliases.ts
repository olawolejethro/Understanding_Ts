/** @format */
// Type Aliases
type combinable = number | string;
type ConversionDescriptor = "as-number" | "as-text";
function combine(input1: combinable, input2: combinable) {
  let result;
  if (typeof input1 === "number" && typeof input1 === "number") {
    result = +input1 + +input2;
  } else {
    result = input1.toString() + input2.toString();
  }
  return result;
}

const combinedAges = combine(30, 32);

console.log(combinedAges);

const combinedNames = combine("MAX", "Anna");

console.log(combinedNames);
