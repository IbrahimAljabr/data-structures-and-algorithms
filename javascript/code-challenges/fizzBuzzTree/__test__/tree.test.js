const { Node } = require("../../tree/tree.js");
const { BinaryTree } = require("../../tree/tree.js");
const FizzBuzzTree = require("../fizz-buzz-tree.js");
const { BinarySearchTree } = require("../../tree/tree.js");
const { expect } = require("@jest/globals");

describe("Binary Tree", () => {
  let tree;
  beforeAll(() => {
    const one = new Node(15);
    const two = new Node(5);
    const three = new Node(3);
    const four = new Node(4);
    const five = new Node(5);
    const six = new Node(6);
    const seven = new Node(7);
    const eight = new Node(8);
    one.left = two;
    one.right = three;
    two.left = four;
    two.right = five;
    five.left = eight;
    three.left = six;
    three.right = seven;
    tree = new BinaryTree(one);
  });

  test("should replace value divisible by 3, to “Fizz” replace value divisible by 5, to “Buzz” if both “FizzBuzz” ", () => {
    //arrange
    const array = ["FizzBuzz", "Buzz", "4", "Buzz", "8", "Fizz", "Fizz", "7"];
    const preOrder = FizzBuzzTree(tree);

    //act

    expect(preOrder).toEqual(array);
  });
});
