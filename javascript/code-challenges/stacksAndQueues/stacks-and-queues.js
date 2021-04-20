"use strict";

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.top = null;
    this.length = 0;
  }

  push(value) {
    let newNode = new Node(value);
    if (this.top) {
      let tem = this.top;
      this.top = newNode;
      newNode.next = tem;
      this.length++;
    } else {
      this.top = newNode;
      this.length++;
    }
  }
  pop() {
    if (this.top) {
      this.top = this.top.next;
      this.length--;
    } else {
      return null;
    }
  }
  peek() {
    if (this.top) {
      return this.top.value;
    } else {
      return "Exception";
    }
  }
  isEmpty() {
    if (this.top) {
      return true;
    } else return false;
  }
  toString() {
    let current = this.top;
    let toStr = "";

    while (current) {
      toStr += `[${current.value}]->`;
      current = current.next;
    }

    return (toStr += "null");
  }
}

class Queue {
  constructor() {
    this.top = null;
    this.tail = null;
    this.length = 0;
  }
  enqueue(value) {
    let newNode = new Node(value);

    if (this.top) {
      this.tail.next = newNode;
      this.tail = newNode;
      this.length++;
    } else {
      this.top = newNode;
      this.tail = newNode;
      this.length++;
    }
  }
  dequeue() {
    if (this.top) {
      this.top = this.top.next;
      this.length--;
    } else {
      return "Exception";
    }
  }
  peek() {
    if (this.top) {
      return this.top.value;
    }
  }
  isEmpty() {
    if (this.top) {
      return true;
    } else return false;
  }
  toString() {
    let current = this.top;
    let toStr = "";

    while (current) {
      toStr += `(${current.value})->`;
      current = current.next;
    }

    return toStr;
  }
}
module.exports = {
  Node,
  Stack,
  Queue,
};
