
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

test('should append node to the end of the list  ', () => {

    let ll = new LinkedList();

    ll.insert(4);

    ll.append(8);
    expect(ll.toString()).toEqual("{4}->{8}->null");
});

test("should append multiple value to the end of linked list", () => {

    let ll = new LinkedList();

    ll.insert(5);
    ll.insert(20);
    ll.insert(43);

    ll.append(4);
    ll.append(6);
    expect(ll.toString()).toEqual("{43}->{20}->{5}->{4}->{6}->null");
  });

  test('should insert after the value ',()=>{

    let ll = new LinkedList();

    ll.insert(42);
    ll.insert(6);
    ll.insert(18);
    ll.insert(33);

    ll.insertAfter(6,200)
    expect(ll.toString()).toEqual("{33}->{18}->{6}->{200}->{42}->null")
  });

  test('should insert before the value ',()=>{

    let ll = new LinkedList();

    ll.insert(42);
    ll.insert(6);
    ll.insert(18);
    ll.insert(33);

    ll.insertBefore(6,200)
    expect(ll.toString()).toEqual("{33}->{18}->{200}->{6}->{42}->null")
  });
  test('should insert after the last node in the list ',()=>{

    let ll = new LinkedList();

    ll.insert(42);
    ll.insert(6);
    ll.insert(18);
    ll.insert(33);

    ll.insertAfter(42,200)
    expect(ll.toString()).toEqual("{33}->{18}->{6}->{42}->{200}->null")
  });

  test('should insert before the first node in the list ',()=>{

    let ll = new LinkedList();

    ll.insert(42);
    ll.insert(62);
    ll.insert(18);
    ll.insert(33);

    ll.insertBefore(33,200)
    expect(ll.toString()).toEqual("{200}->{33}->{18}->{62}->{42}->null")
  });

  test('should check the Unit Tests for the K  ',()=>{

    let ll = new LinkedList();

    ll.insert(42);
    ll.insert(62);
    ll.insert(18);
    ll.insert(33);

    
    
    expect(ll.kthFromEnd(10)).toEqual("Exception");
    expect(ll.kthFromEnd(4)).toEqual("Exception");
    expect(ll.kthFromEnd(-2)).toEqual("Exception");
    expect(ll.kthFromEnd(2)).toEqual(18);
  });

  test('should check the link list of size 1  ',()=>{

    let ll = new LinkedList();

    ll.insert(42);

    expect(ll.kthFromEnd(0)).toEqual(42)
  });

  test('should check the Unit Tests for the K  ',()=>{

    let ll = new LinkedList();
    let ll2 = new LinkedList();
    let no = new Node();

    ll.insert(4);
    ll.insert(6);
    ll.insert(1);
    ll.insert(3);

    ll2.insert(420);
    ll2.insert(620);
    ll2.insert(180);
    ll2.insert(330);

    let list1 = ll;
    let list2 = ll2;
    // let ness = zipLists(ll,ll2)
    
    // console.log(ness);

    expect(ll.zipLists(list1,list2)).toEqual(18);

  });
  