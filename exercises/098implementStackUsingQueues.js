// Implement a last in first out (LIFO) stack using only two queues. The implemented stack should support all the functions of a normal queue (push, top, pop, and empty).

// Implement the MyStack class:

//     void push(int x) Pushes element x to the top of the stack.
//     int pop() Removes the element on the top of the stack and returns it.
//     int top() Returns the element on the top of the stack.
//     boolean empty() Returns true if the stack is empty, false otherwise.

// Notes:

//     You must use only standard operations of a queue, which means only push to back, peek/pop from front, size, and is empty operations are valid.
//     Depending on your language, the queue may not be supported natively. You may simulate a queue using a list or deque (double-ended queue), as long as you use only a queue's standard operations.

// Example 1:

// Input
// ["MyStack", "push", "push", "top", "pop", "empty"]
// [[], [1], [2], [], [], []]
// Output
// [null, null, null, 2, 2, false]

// Explanation
// MyStack myStack = new MyStack();
// myStack.push(1);
// myStack.push(2);
// myStack.top(); // return 2
// myStack.pop(); // return 2
// myStack.empty(); // return False

// Follow-up: Can you implement the stack such that each operation is amortized O(1) time complexity? In other words, performing n operations will take overall O(n) time even if one of those operations may take longer. You can use more than two queues.


class MyStack {
  constructor() {
    this.queue1 = [];
    this.queue2 = [];        
    this.queue3 = [];         
  }
  
  push = (x) => this.queue1.push(x);

  fillQueue2 = () => {
    if (this.queue1.length) {
      while (this.queue1.length > 0) {
        this.queue3 = this.queue2;
        this.queue2 = [];
        this.queue2.push(this.queue1.shift());
        while (this.queue3.length) this.queue2.push(this.queue3.shift());    
      }
    }
  }

  pop = () => {
    this.fillQueue2();
    return this.queue2.shift();
  };

  top = () => {
    this.fillQueue2();
    return this.queue2[0];
  };

  empty = () => !this.queue1.length && !this.queue2.length;
};