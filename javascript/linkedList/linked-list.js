'use strict';
class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }

    insert(value) {

        var newNode = new Node(value);

        if(this.head){
            newNode.next = this.head;
            this.head = newNode;
        }else {
            this.head = newNode;
        }
    }
    includes(value){

        

        while (value) {
            if(this.head.value === value){
                console.log('TTTTTTTTTTTTTTTT',value,this.head.value);
                return true;
            }
            else{
                console.log('FFFFFFFFFFFFFFFFF',value);
                return false;
            }
        }
    }

}

module.exports = {
    LinkedList,
    Node
    }
;
