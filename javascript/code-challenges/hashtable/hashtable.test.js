const HashTable = require("./hashtable");

describe("get", () => {
  let inst;

  beforeEach(() => {
    inst = new HashTable();
    inst.add("first", "00000000");
    inst.add("first", "99999999");
    inst.add("first", "++++++++");
    inst.add("first", "========");
    inst.add("two", "########");
  });
  test("should add and return the array index", () => {
    let result = inst.hash("first");
    expect(result).toBe(983);
  });

  test("should add and return the array index", () => {
    let result = inst.get("first");
    expect(result).toStrictEqual([
      "00000000",
      "99999999",
      "++++++++",
      "========",
    ]);
  });
  test("should add and return the array index", () => {
    let result = inst.get("65462");
    expect(result).toBe(null);
  });
  test("should check if the array is empty", () => {
    let result = inst.contains("first");
    expect(result).toBe(true);
  });
  test("should check if the array is empty", () => {
    let result = inst.contains("yes");
    expect(result).toBe(false);
  });
});
