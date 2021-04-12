const { Queue } = require("../stacksAndQueues/stacks-and-queues");

class Animals {
  constructor() {
    this.dog = new Queue();
    this.cat = new Queue();
  }
  enqueue(animal) {
    if (animal.type === "dog") {
      this.dog.enqueue(animal);
    } else if (animal.type === "cat") {
      this.cat.enqueue(animal);
    } else {
      return "Exception";
    }
  }
  dequeue(pref) {
    if (pref === "dog") {
      if (this.dog.length) {
        this.dog.dequeue();
      }
    } else if (pref === "cat") {
      if (this.cat.length) {
        this.cat.dequeue();
      }
    } else {
      return null;
    }
  }
}

module.exports = Animals;
