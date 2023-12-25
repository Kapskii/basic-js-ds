const { ListNode } = require("../extensions/list-node.js");
class Queue {
  constructor() {
    this.head = null;
    this.body = null;
  }

  isEmpty() {
    return !this.head;
  }

  getUnderlyingList() {
    return this.head;
  }

  enqueue(value) {
    const newNode = new ListNode(value);
    if (this.isEmpty()) {
      this.head = newNode;
      this.body = newNode;
    } else {
      this.body.next = newNode;
      this.body = newNode;
    }
  }

  dequeue() {
    this.isEmpty() ? undefined : "";

    const removedNode = this.head;
    this.head = this.head.next;

    (this.head === null) ? this.body = null : '';

    return removedNode.value;
  }
}

module.exports = {
  Queue,
};
