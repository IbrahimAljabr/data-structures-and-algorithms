const { Stack } = require("../stacksAndQueues/stacks-and-queues");
class PseudoQueue {
  constructor() {
    this.pushS = new Stack();
    this.popS = new Stack();
  }
  enqueue(value) {
    this.pushS.push(value);
  }
  dequeue() {
    if (this.pushS.top) {
      this.popS.push(this.pushS.top);
      this.pushS.top = this.pushS.top.next;
    }
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
module.exports = PseudoQueue;
