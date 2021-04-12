const Animals = require("../fifo-animal-shelter");
const { expect } = require("@jest/globals");

test("should add only dog or cat to the queue", () => {
  //arrange
  let animal = new Animals();
  //act
  animal.enqueue({ type: "dog" });

  expect(animal.dog.length).toEqual(1);
});

test("should add multi dog or cat to the queue", () => {
  //arrange
  let animal = new Animals();
  //act
  animal.enqueue({ type: "dog" });
  animal.enqueue({ type: "dog" });
  animal.enqueue({ type: "cat" });
  animal.enqueue({ type: "cat" });

  expect(animal.dog.length).toEqual(2);
  expect(animal.cat.length).toEqual(2);
});
test("should remove the dog or the cat if exists", () => {
  //arrange
  let animal = new Animals();
  //act
  animal.enqueue({ type: "dog" });
  animal.enqueue({ type: "dog" });
  animal.enqueue({ type: "dog" });
  animal.enqueue({ type: "dog" });
  animal.enqueue({ type: "cat" });
  animal.enqueue({ type: "cat" });

  animal.dequeue("dog");
  animal.dequeue("dog");

  expect(animal.dog.length).toEqual(2);
});
