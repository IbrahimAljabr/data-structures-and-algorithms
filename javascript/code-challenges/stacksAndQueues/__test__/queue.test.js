const { Queue } = require("../stacks-and-queues");
const { expect } = require("@jest/globals");

test("should add new value to the queue ", () => {
  //arrange
  let queue = new Queue();
  let value = 5;
  //act
  queue.enqueue(value);

  expect(queue.tail.value).toEqual(value);
});

test("should add multi value to the queue ", () => {
  //arrange
  let queue = new Queue();
  //act
  queue.enqueue(65);
  queue.enqueue(42);
  queue.enqueue(72);
  queue.enqueue(35);

  expect(queue.toString()).toEqual("(65)->(42)->(72)->(35)->");
});

test("should remove the first value from the queue ", () => {
  //arrange
  let queue = new Queue();
  //act
  queue.enqueue(65);
  queue.enqueue(42);
  queue.enqueue(72);
  queue.enqueue(35);

  queue.dequeue();
  queue.dequeue();

  expect(queue.toString()).toEqual("(72)->(35)->");
});
test("should Exception if the queue is empty", () => {
  //arrange
  let queue = new Queue();
  //act
  queue.enqueue(35);

  queue.dequeue();
  queue.dequeue();
  queue.dequeue();

  expect(queue.top).toBeNull;
});

test("should peek the top value ", () => {
  //arrange
  let queue = new Queue();

  queue.enqueue(72);
  queue.enqueue(35);

  expect(queue.peek()).toEqual(72);
});
test("should check if the queue is empty ", () => {
  //arrange
  let queue = new Queue();

  expect(queue.isEmpty()).toEqual(false);
});

test("should check if the queue is empty ", () => {
  //arrange
  let queue = new Queue();

  queue.enqueue(35);

  expect(queue.isEmpty()).toEqual(true);
});
