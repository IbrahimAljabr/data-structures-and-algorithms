"use strict";
let arr = [];

function multiBracketValidation(input) {
  let len = 0;
  for (let index = 0; index < input.length; index++) {
    if (input[index] === "{" || input[index] === "[" || input[index] === "(") {
      arr.push(input[index]);
      len++;
    }
    if (
      (input[index] === "}" && arr[arr.length - 1] === "{") ||
      (input[index] === "]" && arr[arr.length - 1] === "[") ||
      (input[index] === ")" && arr[arr.length - 1] === "(")
    ) {
      arr.pop();
      len--;
    }
  }
  if (len === 0) {
    return true;
  } else {
    return false;
  }
}
module.exports = multiBracketValidation;
