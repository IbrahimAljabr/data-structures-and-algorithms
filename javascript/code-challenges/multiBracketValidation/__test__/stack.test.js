const multi = require("../multi-bracket-validation");
const { expect } = require("@jest/globals");

test("should return true if the multi Bracket are equal", () => {
  //arrange
  let value = "{{{}}}";
  //act

  expect(multi(value)).toEqual(true);
});
test("should return true if the multi Bracket are closed", () => {
  //arrange
  let value = "({helllo})";
  //act

  expect(multi(value)).toEqual(true);
});
test("should return false if the bracket not closed", () => {
  //arrange
  let value = "((((()))";
  //act

  expect(multi(value)).toEqual(false);
});
test("should return false if the brackets are not the same", () => {
  //arrange
  let value = "((}}";
  //act

  expect(multi(value)).toEqual(false);
});
