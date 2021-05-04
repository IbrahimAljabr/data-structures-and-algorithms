const megaSort = require("./mergeSort");
describe("megaSort", () => {
  test("Happy Path ", () => {
    let arr = [14, 16, 22, 16, 15, 2, 84, 6];
    expect(megaSort(arr)).toStrictEqual([2, 6, 14, 15, 16, 16, 22, 84]);
  });
  test("should return empty array ", () => {
    let arr = [];
    expect(megaSort(arr)).toStrictEqual([]);
  });
});
