class Stack {
  constructor() {
    this.top = null;
  }

  push(value) {
    this.top = { value, next: this.top };
    return this;
  }

  pop() {
    const node = this.top;
    this.top = this.top.next;
    return node.value;
  }

  peek() {
    return this.top;
  }

  isEmpty() {
    return !this.top;
  }
}

module.exports = Stack;
