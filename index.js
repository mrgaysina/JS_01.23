class Stack {
  constructor(max = 10) {
    if (typeof max !== 'number' || max === Infinity || max === -Infinity || Number.isNaN(max) || max < 0) {
      throw new Error('Invalid limit value');
    } else {
      this.max = max;
      this.stack = [];
      this.lastelem = 0;
    }
  }

  push(elem) {
    if (this.lastelem === this.max) {
      throw new Error('Limit exceeded');
    } else {
      this.stack = [...this.stack, elem];
      this.lastelem += 1;
      return this.stack;
    }
  }

  pop() {
    if (this.lastelem === 0) {
      throw new Error('Empty stack');
    } else {
      this.stack.length = this.lastelem - 1;
      this.lastelem -= 1;
      return this.stack;
    }
  }

  peek() {
    if (this.lastelem === 0) {
      return null;
    }
    return this.stack[this.lastelem - 1];
  }

  isEmpty() {
    return this.lastelem === 0;
  }

  isArray() {
    let newArr = [];
    if (this.lastelem === 0) {
      return newArr;
    }
    newArr = [...this.stack];
    return newArr;
  }

  static fromIterable(iterable) {
    if (typeof iterable[Symbol.iterator] !== 'function') {
      throw new Error('Not iterable');
    } else {
      const stack = new Stack(iterable.max);
      for (let i = 0; i < iterable.length; i++) {
        stack.push(iterable[i]);
      }
      return stack;
    }
  }
}

class LinkedList {
  constructor() {
    this.first = null;
    this.last = null;
  }

  append(elem) {
    if (typeof elem === 'object') {
      elem = Object.values(elem);
      const node = new Node(elem.toString());
      if (this.last) {
        this.last.next = node;
        this.last = node;
      } else {
        this.last = node;
      }
      if (!this.first) {
        this.first = node;
      }
    } else {
      const node = new Node(elem);
      if (this.last) {
        this.last.next = node;
        this.last = node;
      } else {
        this.last = node;
      }
      if (!this.first) {
        this.first = node;
      }
    }
  }

  prepend(elem) {
    if (typeof elem === 'object') {
      elem = Object.values(elem);
      const node = new Node(elem.toString());
      if (this.first) {
        node.next = this.first;
        this.first = node;
      } else {
        this.first = node;
        this.last = node;
      }
    } else {
      const node = new Node(elem);
      if (this.first) {
        node.next = this.first;
        this.first = node;
      } else {
        this.first = node;
        this.last = node;
      }
    }
  }

  find(elem, current = this?.first) {
    if (current === null) {
      return null;
    }
    if (current?.value === elem) {
      return current;
    }
    return this.find(elem, current?.next);
  }

  toArray(current = this.first, array = []) {
    if (current === null) {
      return array;
    }
    array.push(current);
    return this.toArray(current.next, array);
  }

  static fromIterable(iterable) {
    let list = new LinkedList();
    if (typeof iterable[Symbol.iterator] !== 'function') {
      throw new Error('Not iterable');
    } else {
      for (let i = 0; i < iterable.length; i++) {
        list.append(iterable[i]);
      }
      return list;
    }
  }
}

class Node {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}
