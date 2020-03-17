//10 --> 5 -->16
//
//let myLinkedList = {
//    head: {
//        value: 10,
//        next: {
//            value: 5,
//            next: {
//                value: 16,
//                next: null
//            }
//        }        
//    }
//}

class LinkedList {
    constructor(value) {
        this.head = {
            value: value,
            next: null
        }
        this.length = 1
        this.tail = this.head;
    }

    append(value) {
        const newNode = {
            value: value,
            next: null
        };
        this.tail.next = newNode;
        this.tail = newNode;
        this.length++;
        return this;
    }

    prepend(value) {
        const newNode = {
            value: value,
            next: null
        }
        newNode.next = this.head;
        this.head = newNode;
        this.length++;
        return this;
    } 

    printList() {
        const array = [];
        let currentNode = this.head;
        while(currentNode !== null) {
            array.push(currentNode.value);
            currentNode = currentNode.next;
        }
        console.log(array);
    }

    insert(index, value) {

    }
}

const myLinkedList = new LinkedList(10);

myLinkedList.append(5);
myLinkedList.prepend(1);
myLinkedList.append(16);
myLinkedList.printList();