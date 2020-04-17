class Queue {
  constructor () {
    this.array = [];     
  }

  enqueue = (value) => {
    this.array = [value, ...this.array];
    return this;
  }

  dequeue = () => {
    this.array.pop();
    return this;
  }

  peek = () => {
    if (this.array.length === 0) {
      return null;
    }
    return this.array[this.array.length - 1];
  }
}

let myQueue = new Queue();
myQueue.enqueue("hello");
myQueue.enqueue("how");
console.log(myQueue.dequeue());
console.log(myQueue.peek())
