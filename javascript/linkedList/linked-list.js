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
        this.length=0;
    }

    insert(value) {

        var newNode = new Node(value);

        if(this.head){
            newNode.next = this.head;
            this.head = newNode;
            this.length++;
        }else {
            this.head = newNode;
            this.length++;
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
            if (current.next == null) {
                current.next = newNode;
                break;
            }
            else{
                current=current.next;
                
            }
        }
    }

    insertAfter(value, newVal) {

        let newNode = new Node(newVal);
        let current = this.head;

        while (current) {

          if (current.value === value) {

            let replace = current.next;
            current.next = newNode;
            newNode.next = replace;
            return;
          }
          current = current.next;
        }
        
      }

      insertBefore(value, newVal) {

        let newNode = new Node(newVal);
        let current = this.head;


        if(value === current.value){
            
            newNode.next = this.head;
            this.head = newNode;
        }

        while (current && current.next !== null) {

          if (current.next.value === value) {

            let replace = current.next;
            current.next = newNode;
            newNode.next = replace;
            return;
          }
          current = current.next;
        }
        
      }

      kthFromEnd(k) {
   
        let current = this.head;

        if (k <= this.length - 1 && k >= 0) {

            
          for (let i = this.length - 1; i >= 0; i--) {
            if (k == i) {
                
              return current.value;
            }
            current = current.next;
          }
        } else {
          return "Exception";
        }
      }


      zipList = (list1, list2) => {

        if (!list1.head || !list2.head) {
          return "Empty list";
        }

        let current1 = list1.head;
        let current2 = list2.head;

        for (let i = 0; i < list1.length + list2.length - 1; i++) {

          if (i % 2 == 0) {

            this.append(current1.value);
            current1 = current1.next;
          } else {

            this.append(current2.value);
            current2 = current2.next;
          }
        }
        if (current2) {

          this.append(current2.value);
        } else if (current1) {

          this.append(current1.value);
        }
        return this;
      }
   

}

module.exports = {
    LinkedList,
    Node
    }
;
