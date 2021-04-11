const { Stack } = require("../stacks-and-queues");
const { expect } = require("@jest/globals");

test("should push new node to the stack once", () => {
  //arrange
  let stack = new Stack();
  let value = 5;
  //act
  stack.push(value);

  expect(stack.top.value).toEqual(value);
});

test("should push new node to the stack more than once", () => {
  //arrange
  let stack = new Stack();
  //act
  stack.push(10);
  stack.push(57);
  stack.push(25);
  stack.push(83);

  expect(stack.toString()).toEqual("[83]->[25]->[57]->[10]->null");
});

test("should pop last node from the stack", () => {
  //arrange
  let stack = new Stack();
  //act
  stack.push(10);
  stack.push(57);
  stack.push(25);
  stack.push(83);

  stack.pop();
  stack.pop();

  expect(stack.toString()).toEqual("[57]->[10]->null");
});

test("should return null if the stack is empty", () => {
  //arrange
  let stack = new Stack();
  //act
  stack.push(10);
  stack.push(57);
  stack.push(25);
  stack.push(83);

  stack.pop();
  stack.pop();
  stack.pop();
  stack.pop();

  expect(stack.toString()).toBeNull;
});

test("should return the top value", () => {
  //arrange
  let stack = new Stack();
  let value = 15;
  //act

  stack.push(value);

  expect(stack.peek()).toEqual(value);
});
test("should return Exception when the stack is empty", () => {
  //arrange
  let stack = new Stack();
  let value = 15;
  //act

  expect(stack.peek()).toEqual("Exception");
});

test("should return false if the stack is empty ", () => {
  //arrange
  let stack = new Stack();
  //act

  expect(stack.isEmpty()).toEqual(false);
});

test("should return true if the stack is empty ", () => {
  //arrange
  let stack = new Stack();
  //act
  stack.push(54);
  expect(stack.isEmpty()).toEqual(true);
});
