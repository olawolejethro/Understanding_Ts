/** @format */
//  interfaces describle the structure of an obeject,it can also be use as a type check for obj
// just like a model
// using interface as function

interface Addfn {
  (a: number, b: number): number;
}

let adds: Addfn;
adds = (n1: number, n2: number) => n1 + n2;

interface Named {
  readonly name: string;
}

interface greetable extends Named {
  name: string;
  age: number;

  greet(phrase: string): void;
}

class Person implements greetable {
  name: string;
  age = 29;
  // let user1: person;

  constructor(n: string) {
    this.name = n;
  }

  greet(phrase: string) {
    console.log(`${phrase}  ${this.name}`);
  }
}

let user1: greetable;
user1 = new Person("mac");
console.log(user1);

user1.greet(`hi!!! MY NAME IS `);

// user1.greet("Hi there - I am");

// WHY INTERFACE
