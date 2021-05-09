const HashTable = require("./hashtable");

describe("get", () => {
  let inst;

  beforeEach(() => {
    inst = new HashTable();
    inst.add("first", "anything");
  });
  test("should add and return the array index", () => {
    let result = inst.hash("first");
    expect(result).toBe(983);
  });

  test("should add and return the array index", () => {
    let result = inst.get("first");
    expect(result).toBe("anything");
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
