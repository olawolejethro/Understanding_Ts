/** @format */

const username = "jetpack";

console.log(username);

// const addUp = (n1: number, n2: number = 1) => n1 + n2;

// console.log(addUp(4));

const button = document.querySelector("button");

if (button) {
  button.addEventListener("click", (event) => console.log(event));
}

const hobbies = ["sports", "cooking"];
const activeHobbies = ["Hiking"];

activeHobbies.push(...hobbies);

const persons = {
  firstName: "DR_LOVE",
  age: 32,
};

// const copiedPerson = { ...persons };

const addUp = (...numbers: number[]) => {
  return numbers.reduce((curResult, cueValue) => {
    return curResult + cueValue;
  }, 0);
};

const addedNumbers = addUp(2, 3, 4, 5, 4);
console.log(addedNumbers);

// array and object destructuring

const [hobby1, hobby2, ...remaininghobbies] = hobbies;

console.log(hobbies, hobby1, hobby2);

const { firstName: userName, age } = persons;

console.log(userName, age, persons);
