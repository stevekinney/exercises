const { EmptyList, ListNode } = require('./functional-lists');

describe('Functional List', () => {
  let empty, list1, list2, list3, list4;

  beforeEach(() => {
    empty = new EmptyList();
    list1 = empty.push('c').push('b').push('a');
    list2 = list1.append(list1);
  });

  describe('EmptyList', () => {

    it('should be empty', () => {
      expect(empty.isEmpty()).toBe(true);
    });

    it('should show a pair of parentheses with .toString()', () => {
      expect(empty.toString()).toBe('()');
    });

    it('should have a length of 0', () => {
      expect(empty.length()).toBe(0);
    });

    it('should have a #push method return a new object', () => {
      expect(empty.push('a')).not.toBe(empty);
    });

  });

  describe('ListNode', () => {

    it('should add a node with a given value to the beginning of the list', () => {
      const list = empty.push('a').push('b');
      expect(list.toString()).toBe('(b a)');
    });

    it('can append two lists together', () => {
      expect(list2.tail().tail().tail()).toBe(list1);
    });

    it('should append stuff correctly', () => {
      var emptyList = new EmptyList();
      var one = emptyList.push(3);
      var two = one.push(2);
      var three = two.push(1);
      var oneAndThree = one.append(three);

      console.log(one);

      expect(one.head()).toBe(3);
      expect(oneAndThree.tail()).toBe(three);
    });

    it('should not be empty', () => {
      const list = new ListNode('a');
      expect(list.isEmpty()).toBe(false);
    });

    it('should create new lists with the correct length', () => {
      const list = (new EmptyList()).push(1).push(2).push(3);
      expect(list.length()).toBe(3);
    });

  });

  it('Simple checks', () => {
    expect((new EmptyList()).push('c').push('a').toString()).toBe('(a c)');
  });
});
