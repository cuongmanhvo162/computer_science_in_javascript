class Node {
    constructor(data, next = null) {
        this.data = data;
        this.next = next;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }
    
    insertFirst(data) {
        this.head = new Node(data, this.head);
    }

    size() {
        let count = 0;
        if(!this.head) {
            return count;
        }
        let node = this.head;
        while(node !== null) {
            count++;
            node = node.next;
        }
        return count;
    }

    print() {
        if(!this.head) {
            return;
        }
        let node = this.head;
        while(node !== null) {
            console.log(node.data);
            node = node.next;
        }
    }

    delete() {
        this.head = null;
    }
}

function main() {
    console.log("Singly Linkedlist");

    let list = new LinkedList();
    
    for(let i = 10; i > 0; i--) {
        list.insertFirst(i);
    }

    list.print();
}

main();