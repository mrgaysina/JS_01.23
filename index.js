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
