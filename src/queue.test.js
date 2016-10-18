const Queue = require('./queue');

describe('#add', () => {

  it('should have a add method', () => {
    const queue = new Queue();
    expect(queue.add).toBeDefined();
    expect(typeof queue.add).toBe('function');
  });

  it('should set a new value to the top of the queue', () => {
    const queue = new Queue();
    queue.add(42);
    expect(queue.top.value).toBe(42);
  });

  it('should line up further nodes behind the first', () => {
    const queue = new Queue();
    queue.add(42).add(38);
    expect(queue.top.next.value).toBe(38);
  });

});

describe('#remove', () => {

  it('should have a remove method', () => {
    const queue = new Queue();
    expect(queue.remove).toBeDefined();
    expect(typeof queue.remove).toBe('function');
  });

  it('should return the top value on the queue', () => {
    const queue = new Queue();
    const value = queue.add(42).remove();
    expect(value).toBe(42);
  });

  it('should empty the queue if there is only one node', () => {
    const queue = new Queue();
    expect(queue.isEmpty()).toBe(true);
  });

  it('should shift the values down', () => {
    const queue = new Queue();
    queue.add(42).add(38);
    expect(queue.top.value).toBe(42);
  });

  it('should shift the second value to the top', () => {
    const queue = new Queue();
    queue.add(42).add(38).remove();
    expect(queue.top.value).toBe(38);
  });

});

describe('#isEmpty', () => {

  it('should have a isEmpty method', () => {
    const queue = new Queue();
    expect(queue.isEmpty).toBeDefined();
    expect(typeof queue.isEmpty).toBe('function');
  });

  it('should not be empty if we add on a value', () => {
    const queue = new Queue();
    queue.add(42);
    expect(queue.isEmpty()).toBe(false);
  });

});

describe('#peek', () => {

  it('should have a peek method', () => {
    const queue = new Queue();
    expect(queue.peek).toBeDefined();
    expect(typeof queue.peek).toBe('function');
  });

  it('should have the same contents as #top', () => {
    const queue = new Queue();
    queue.add(42);
    expect(queue.peek()).toBe(queue.top);
  });

});
