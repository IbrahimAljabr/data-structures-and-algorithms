const { LinkedList } = require("../../linkedList/linked-list");
const zipList = require("../ll-zip");
const { expect } = require("@jest/globals");

test("should get the values as a nodes", () => {
  //arrange
  let ll = new LinkedList();
  ll.insert(10);
  ll.insert(26);
  ll.insert(45);

  let ll2 = new LinkedList();
  ll2.insert(100);
  ll2.insert(260);
  ll2.insert(450);
  //act
  let newString = zipList(ll, ll2);

  expect(newString).toEqual("{10}->{100}->{26}->{260}->{45}->{450}->null");
});

test("should get the values as a nodes", () => {
  //arrange
  let ll = new LinkedList();

  let ll2 = new LinkedList();
  //act
  let newString = zipList(ll, ll2);

  expect(newString).toEqual("Empty list");
});
