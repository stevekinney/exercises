class EmptyList {
  toString() { return '()'; }
  isEmpty() { return true; }
  length() { return 0; }
  push(value) { return new ListNode(value, this); }
  remove() { return this; }
  append() { return; }
}

class ListNode {
  constructor(value, next) {
    this.value = value;
    this.next = next;
  }

  *[Symbol.iterator]() {
    let node = this;
    while (node.value) {
      yield node;
      node = node.tail();
    }
  }

  isEmpty() { return false; }

  toString() { return `(${[...this].map(n => n.value).join(' ')})`; }

  head() { return this.value; }

  tail() { return this.next;  }

  length() { return [...this].length; }

  push(value) { return new ListNode(value, this); }

  remove(value) {
    const tail = this.tail().remove(value);
    if (this.head() === value) return tail;
    if (this.tail() === tail) return this;
    return new ListNode(this.head(), tail);
  }

  append(list) {
    if (this.tail() instanceof EmptyList) return new ListNode(this.head(), list);
    return new ListNode(this.head(), this.tail().append(list));
  }
}

module.exports = {
  EmptyList,
  ListNode
};
