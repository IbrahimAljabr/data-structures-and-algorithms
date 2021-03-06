"use strict";

class Node {
  constructor(value, left = null, right = null) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
}

class BinaryTree {
  constructor(root = null) {
    this.root = root;
  }

  preOrder() {
    const result = [];
    const traverse = (node) => {
      result.push(node.value);
      if (node.left) {
        traverse(node.left);
      }
      if (node.right) {
        traverse(node.right);
      }
    };
    traverse(this.root);
    return result;
  }

  inOrder() {
    const result = [];
    const traverse = (node) => {
      if (node.left) {
        traverse(node.left);
      }
      result.push(node.value);
      if (node.right) {
        traverse(node.right);
      }
    };
    traverse(this.root);
    return result;
  }
  postOrder() {
    const result = [];
    const traverse = (node) => {
      if (node.left) {
        traverse(node.left);
      }
      if (node.right) {
        traverse(node.right);
      }
      result.push(node.value);
    };
    traverse(this.root);
    return result;
  }
  maximum() {
    if (!this.root) {
      return null;
    } else {
      let result = this.postOrder();
      let max = 0;
      for (let index = 0; index < result.length; index++) {
        if (result[index] > max) max = result[index];
      }
      return max;
    }
  }
  breadthFirst() {
    let result = [];
    let root = this.root;
    let node = [this.root];

    while (node.length) {
      root = node.shift();
      result.push(root.value);
      if (root.left) node.push(root.left);
      if (root.right) node.push(root.right);
    }
    return result;
  }
}

class BinarySearchTree {
  constructor(root) {
    this.root = root;
  }
  add(value) {
    let newNode = new Node(value);

    if (!this.root) {
      this.root = newNode;
    } else {
      const traverse = (node) => {
        if (value > node.value) {
          if (node.right == null) {
            node.right = newNode;
          }
          traverse(node.right);
        } else if (value < node.value) {
          if (node.left == null) {
            node.left = newNode;
          }
          traverse(node.left);
        }
      };

      traverse(this.root);
    }
  }
  contains(value) {
    let root = this.root;
    if (root) {
      while (root) {
        if (value === root.value) {
          return true;
        }
        if (value < root.value) {
          root = root.left;
        } else if (value > root.value) {
          root = root.right;
        }
      }
      return false;
    }
  }
}
function insert(root, node) {
  if (node.value < root.value) {
    if (root.left == null) {
      root.left = node;
    } else {
      insert(root.left, node);
    }

    if (root.right == null) {
      root.right = node;
    } else {
      insert(root.right, node);
    }
  }
}

module.exports = { Node, BinarySearchTree, BinaryTree };
