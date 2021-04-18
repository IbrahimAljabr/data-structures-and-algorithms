const { Node } = require("../tree.js");
const { expect } = require("@jest/globals");

test("should create node", () => {
  //arrange
  let node = new Node();
  //act

  expect(node instanceof Node).toBeTruthy;
});

test("should add value to the node", () => {
  //arrange
  let value = 5;
  let node = new Node(value);
  //act

  expect(node.value).toEqual(5);
  expect(node.left).toEqual(null);
  expect(node.right).toEqual(null);
});
