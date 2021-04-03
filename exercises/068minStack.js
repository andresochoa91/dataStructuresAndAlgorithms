// Design a stack that supports push, pop, top, and retrieving the minimum element in constant time.

//     push(x) -- Push element x onto stack.
//     pop() -- Removes the element on top of the stack.
//     top() -- Get the top element.
//     getMin() -- Retrieve the minimum element in the stack.


class MinStack {
  constructor() {
      this.stack = [];
      this.min = Infinity;
  }
  pop = () => {
      this.min = Infinity;
      this.stack.pop();
      this.stack.forEach(val => {
          if (val < this.min) this.min = val;
      })
  }
  
  push = (num) => {
      this.stack.push(num);
      if (num < this.min) this.min = num; 
  }

  top = () => this.stack[this.stack.length - 1];
      
  getMin = () => this.min;    
};

let myStack = new MinStack(1);