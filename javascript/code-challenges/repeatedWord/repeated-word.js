"use strict";
function reWord(str) {
  let result = [];
  let arr = str.match(/\w+/g);
  console.log("🚀🚀🚀 ~~~~ reWord ~~~~ arr", arr);
  for (let index = 0; index < arr.length; index++) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === arr[index] && i !== index && i > index) {
        result.push(arr[i]);
      }
    }
  }
  if (result[0]) {
    return result[0];
  } else {
    return "nothing";
  }
}

module.exports = reWord;
