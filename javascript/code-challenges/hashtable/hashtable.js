class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }
  add(value) {
    const node = new Node(value);
    if (!this.head) {
      this.head = node;
      return;
    }

    let current = this.head;
    while (current.next) {
      current = current.next;
    }
    current.next = node;
  }

  values() {
    let values = [];
    let current = this.head;
    while (current) {
      values.push(current.value);
      current = current.next;
    }
    return values;
  }
}

class HashTable {
  table = new Array(1997);

  add(key, value) {
    let hash = this.hash(key);
    if (!this.table[hash]) {
      this.table[hash] = new LinkedList();
    }
    this.table[hash].add({ key: value });
  }

  hash(key) {
    let hash = 197;
    for (let i = 0; i < key.length; i++) {
      hash = (hash * 397 * key.charCodeAt(i)) % this.table.length;
    }
    return hash;
  }
  get(key) {
    console.log(this.table);
    let values = [];
    let ind = this.hash(key);
    if (this.table[ind]) {
      values.push(this.table[ind].head.value.key);
      if (this.table[ind].head.next) {
        let current = this.table[ind].head.next;
        while (current) {
          values.push(current.value.key);
          current = current.next;
        }
      }
      return values;
    } else return null;
  }

  contains(key) {
    let ind = this.hash(key);
    let arr = this.table[ind];

    if (arr) {
      return true;
    } else {
      return false;
    }
  }
}

module.exports = HashTable;
