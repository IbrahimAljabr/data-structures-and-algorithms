
const {Node} = require('./linked-list');
const {LinkedList} = require('./linked-list');
const { expect } = require('@jest/globals');

test('should check for the node if exists', () => {
    //arrange
    let value = 5;
    //act
    let node = new Node(5);
    //assert
    
    expect(node.next).toEqual(null);
    expect(node.value).toEqual(5);
});

test('should add new node to the head', () => {
    //arrange
    let ll = new LinkedList();// empty
    let value = 5;
    //act
    ll.insert(value);
    //assert

    expect(ll.head.value).toEqual(value);
    expect(ll.head.next).toBeNull();
});

// test('should check if the value is exists', () => {
//     //arrange
//     let ll = new LinkedList();// empty
//     ll.insert(10);
//     ll.insert(26);
//     ll.insert(45);
//     let value = 5;
//     //act
//     ll.includes(value);
//     //assert
//     // let count = 0;
//     // let lastNode = ll.head;
//     // while (count < 2) {
//     //     count++;
//     //     lastNode = lastNode.next;
//     // }

//     console.log('=================',ll);
//     expect(ll.head.value).toEqual(false);
//     expect(ll.next).toBeNull();
});
