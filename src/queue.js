class Queue {
  constructor() {
    this.top = null;
  }

  add(value) {
    if (this.isEmpty()) {
      this.top = { value, next: null };
    } else {
      let node = this.top;
      while(node.next !== null) { node = node.next; }
      node.next = { value, next: null };
    }
    return this;
  }

  remove() {
    const node = this.top;
    this.top = node.next;
    return node.value;
  }

  peek() {
    return this.top;
  }

  isEmpty() {
    return !this.top;
  }
}

module.exports = Queue;
