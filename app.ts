/** @format */

// const person: { name: string; age: number } = {
const person = {
  name: "jetpack",
  age: 20,
  hobbies: ["gaming", "cooking", "reading"],
};

// let MyFacouriteActivities: any;
let MyFacouriteActivities: string[];

MyFacouriteActivities = ["playing"];

console.log(person.name);

for (const hobby of person.hobbies) {
  console.log(hobby.toUpperCase);
}
