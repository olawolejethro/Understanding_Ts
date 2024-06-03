/** @format */

//Unknown type
let userInput: unknown;
let userName: string;

userInput = 5;
userInput = "Max";

if (typeof userInput === "string") {
  userName = userInput;
}

function generateError(messgae: string, code: number): never {
  throw { messgae, errorCode: code };
}

generateError("An error Occured", 500);
