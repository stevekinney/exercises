const Stack = require('./stack');

describe('#push', () => {

  it('should have a push method', () => {
    const stack = new Stack();
    expect(stack.push).toBeDefined();
    expect(typeof stack.push).toBe('function');
  });

  it('should set a new value to the top of the stack', () => {
    const stack = new Stack();
    stack.push(42);
    expect(stack.top.value).toBe(42);
  });

});

describe('#pop', () => {

  it('should have a pop method', () => {
    const stack = new Stack();
    expect(stack.pop).toBeDefined();
    expect(typeof stack.pop).toBe('function');
  });

  it('should return the top value on the stack', () => {
    const stack = new Stack();
    const value = stack.push(42).pop();
    expect(value).toBe(42);
  });

  it('should empty the stack if there is only one node', () => {
    const stack = new Stack();
    expect(stack.isEmpty()).toBe(true);
  });

  it('should shift the values down', () => {
    const stack = new Stack();
    stack.push(42).push(38);
    expect(stack.top.value).toBe(38);
  });

  it('should shift the second value to the top', () => {
    const stack = new Stack();
    stack.push(42).push(38).pop();
    expect(stack.top.value).toBe(42);
  });

});

describe('#isEmpty', () => {

  it('should have a isEmpty method', () => {
    const stack = new Stack();
    expect(stack.isEmpty).toBeDefined();
    expect(typeof stack.isEmpty).toBe('function');
  });

  it('should not be empty if we push on a value', () => {
    const stack = new Stack();
    stack.push(42);
    expect(stack.isEmpty()).toBe(false);
  });

});

describe('#peek', () => {

  it('should have a peek method', () => {
    const stack = new Stack();
    expect(stack.peek).toBeDefined();
    expect(typeof stack.peek).toBe('function');
  });

  it('should have the same contents as #top', () => {
    const stack = new Stack();
    stack.push(42);
    expect(stack.peek()).toBe(stack.top);
  });

});
