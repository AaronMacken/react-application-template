export class MinStack {
  mainStack: Array<number> = [];
  minStack: Array<number> = [];

  push(number: number) {
    this.mainStack.push(number);

    if (!this.minStack.length) {
      this.minStack.push(number);

      return;
    }

    const nextMinStackValue = number < this.minStackTop ? number : this.minStackTop;

    this.minStack.push(nextMinStackValue);
  }

  pop() {
    this.mainStack.pop();
    this.minStack.pop();
  }

  top() {
    return this.mainStack[this.mainStack.length - 1];
  }

  getMin() {
    return this.minStack[this.minStack.length - 1];
  }

  get isMinStackEmpty() {
    return Boolean(!this.minStack.length);
  }

  get minStackTop() {
    if (this.isMinStackEmpty) {
      return null;
    }

    return this.minStack[this.minStack.length - 1];
  }
}
