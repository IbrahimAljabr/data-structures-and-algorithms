const quickSort = require("../quickSort");

describe("quickSort", () => {
  test("should sort the array", () => {
    let result = [10, 2, 72, 24, 62, 8];
    expect(quickSort(result, 0, result.length - 1)).toEqual([
      2,
      8,
      10,
      24,
      62,
      72,
    ]);
  });
});
