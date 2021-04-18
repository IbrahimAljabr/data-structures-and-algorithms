const { Node } = require("../tree.js");
const { BinaryTree } = require("../tree.js");
const { BinarySearchTree } = require("../tree.js");
const { expect } = require("@jest/globals");

describe("Binary Tree", () => {
  let tree;
  beforeAll(() => {
    const one = new Node(1);
    const two = new Node(2);
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

  test("should do the preOrder", () => {
    //arrange
    const array = [1, 2, 4, 5, 8, 3, 6, 7];
    const preOrder = tree.preOrder();

    //act

    expect(preOrder).toEqual(array);
  });
  test("should do the inOrder", () => {
    //arrange
    const array = [4, 2, 8, 5, 1, 6, 3, 7];
    const inOrder = tree.inOrder();

    //act

    expect(inOrder).toEqual(array);
  });
  test("should do the postOrder", () => {
    //arrange
    const array = [4, 8, 5, 2, 6, 7, 3, 1];
    const postOrder = tree.postOrder();

    //acts

    expect(postOrder).toEqual(array);
  });

  test("should add new node", () => {
    //arrange
    const addNew = new BinarySearchTree();
    const value = 57;
    addNew.add(value);
    //acts

    expect(addNew.root.value).toEqual(value);
  });
  test("should add new node", () => {
    //arrange
    const addNew = new BinarySearchTree();

    addNew.add(65);
    addNew.add(75);

    //acts

    expect(addNew.root.right.value).toEqual(75);
  });
  test("should add new node", () => {
    //arrange
    const addNew = new BinarySearchTree();

    addNew.add(65);
    addNew.add(75);
    addNew.add(23);
    addNew.add(145);

    //acts

    expect(addNew.contains(23)).toEqual(true);
  });
});
