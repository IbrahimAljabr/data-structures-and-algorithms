
const {Node} = require('../linked-list.js');
const {LinkedList} = require('../linked-list.js');
const { expect } = require('@jest/globals');

test('should check the node', () => {
    //arrange
    let value = 5;
    //act
    let node = new Node(value);
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

test('should add to the list ', () => {
    //arrange
    let ll = new LinkedList();
    //act
    ll.insert(10);
    ll.insert(15);
    //assert
    
    expect(ll.head.value).toEqual(15);
});


test('should check if the value is exists', () => {
    //arrange
    let ll = new LinkedList();
    ll.insert(10);
    ll.insert(26);
    ll.insert(45);
    let value = 5;
    let value2 = 45;
    //act
    let ifExists =ll.includes(value);
    let ifExists2 =ll.includes(value2);

    expect(ifExists).toEqual(false);
    expect(ifExists2).toEqual(true);
});

test('should get the values as a nodes', () => {
    //arrange
    let ll = new LinkedList();
    ll.insert(10);
    ll.insert(26);
    ll.insert(45);
    //act
    let newString =ll.toString();

    expect(newString).toEqual("{45}->{26}->{10}->null");
});
