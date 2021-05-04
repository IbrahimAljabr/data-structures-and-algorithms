const megaSort = require("./mergeSort");
describe("megaSort", () => {
  test("Happy Path return an array sorted successfully", () => {
    let arr = [14, 16, 22, 16, 15, 2, 84, 6];
    expect(megaSort(arr)).toStrictEqual("s");
  });
});
