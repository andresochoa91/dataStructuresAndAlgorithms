class Stack {
  constructor() {
    this.values = {};
    this.last = null;
    this.length = 0;
  }
  pop = () => {
    delete this.values[this.length - 1];
    this.length--;
    this.last = this.values[this.length - 1];
  }

  push = (item) => {
    this.values[this.length] = item;
    this.length++;
    this.last = item;
  }

  peek = () => {
    return this.last;
  }

  lookup = () => {
    return Object.values(this.values); 
  }
}

let myStack = new Stack();


class Queue {
  constructor(value) {
    this.head = {
      value: value,
      prev: null 
    };
    this.tail = this.head;
    this.length = 1;
  }

  enqueue = (value) => {
    let newNode = {value: value, prev: null};
    if (this.length === 0) {
      this.head = newNode;
      this.tail = this.head;
    }
    this.head.prev = newNode;
    this.head = newNode;
    this.length++;
  }

  dequeue = () => {
    if (this.length <= 1) {
      let newNode = {value: null, prev: null};
      this.head = newNode
      this.tail = this.head;
      this.length = 0;
    } else {
      this.tail = this.tail.prev;
      this.length--;    
    }
  }

  peek = () => {
    return this.tail.value;
  }
} 
