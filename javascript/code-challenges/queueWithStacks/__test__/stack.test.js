const PseudoQueue = require("../queue-with-stacks");
const { expect } = require("@jest/globals");

test("should push new node to the stack once", () => {
  //arrange
  let stack = new PseudoQueue();
  let value = 5;
  //act
  stack.enqueue(value);

  expect(stack.pushS.top.value).toEqual(value);
});

test("should push new node to the stack more than once", () => {
  //arrange
  let stack = new PseudoQueue();
  //act
  stack.enqueue(10);
  stack.enqueue(57);
  stack.enqueue(25);
  stack.enqueue(83);

  expect(stack.pushS.toString()).toEqual("[83]->[25]->[57]->[10]->null");
});

test("should pop last node from the stack", () => {
  //arrange
  let stack = new PseudoQueue();
  //act
  stack.enqueue(10);
  stack.enqueue(57);
  stack.enqueue(25);
  stack.enqueue(83);

  stack.dequeue();
  stack.dequeue();

  expect(stack.pushS.toString()).toEqual("[57]->[10]->null");
});
