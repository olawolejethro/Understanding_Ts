/** @format */

// const person: {
//   name: string;
//   age: number;
//   hobbies: string[];
//   role: [number, string];
// } = {

enum Role {
  ADMIN = "ADMIN",
  READ_ONLY = 100,
  AUTHOR = 200,
}
const person = {
  name: "jetpack",
  age: 20,
  hobbies: ["gaming", "cooking", "reading"],
  // role: [2, "authro"],
  role: Role.ADMIN,
};

// person.role.push("admin")
// person.role[1] = 10

// person.role = [0, "admin","user"]

// let MyFacouriteActivities: any;
let MyFacouriteActivities: string[];

MyFacouriteActivities = ["playing"];

console.log(person.name);

for (const hobby of person.hobbies) {
  console.log(hobby.toUpperCase);
}
