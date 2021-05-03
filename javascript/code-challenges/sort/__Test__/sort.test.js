const sortt = require("../sort");
describe("sort", () => {
  test("0", () => {
    let param1 = [20, 15, 5, 1, 17, 4, 25];
    let result = sortt(param1);
    expect(result).toEqual([1, 4, 5, 15, 17, 20, 25]);
  });
});
