"use strict";

function FizzBuzzTree(node) {
  if (node.root) {
    const result = [];
    const traverse = (node) => {
      if (node.value % 5 === 0 && node.value % 3 === 0) {
        result.push("FizzBuzz");
      } else if (node.value % 5 === 0) {
        result.push("Buzz");
      } else if (node.value % 3 === 0) {
        result.push("Fizz");
      } else {
        result.push(node.value.toString());
      }
      if (node.left) {
        traverse(node.left);
      }
      if (node.right) {
        traverse(node.right);
      }
    };
    traverse(node.root);
    return result;
  }
}

module.exports = FizzBuzzTree;
