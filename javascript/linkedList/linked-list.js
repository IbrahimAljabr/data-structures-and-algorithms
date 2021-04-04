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

        let current = this.head;

        while (current) {

            if(current.value === value){
                return true;
            }

            current= current.next;
                return false;
            
        }
    }

    toString(){

        let current = this.head;
        let toStr ='';
        
        while (current) {
            toStr += `{${current.value}}->`;
            current= current.next;
        }
        
        return toStr+='null';
    }

    append(value){

        let newNode = new Node(value)
        let current = this.head;

        while (current){
                current=current.next;
        }
        current = newNode;
    }

    insertAfter(value, newVal) {

        let newNode = new Node(newVal);
        let current = this.head;

        while (current) {

          if (current.value === value) {

            let tem = current.next;
            current.next = newNode;
            newNode.next = tem;
            return;
          }
          current = current.next;
        }
        
      }

      insertBefore(value, newVal) {
          
        let newNode = new Node(newVal);
        let current = this.head;
        while (current && current.next !== null) {
          if (current.next.value === value) {
            let temp = current.next;
            current.next = newNode;
            node.next = temp;
            return;
          }
          current = current.next;
        }
        
      }

   

}

module.exports = {
    LinkedList,
    Node
    }
;
