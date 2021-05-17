const reWord = require("./repeated-word.js");
describe("reWord", () => {
  test("should return the right value", () => {
    let result = reWord("Once upon a time, there was a brave princess who...");
    expect(result).toBe("a");
  });
  test("should return the right value", () => {
    let result = reWord(
      "It was a queer, sultry summer, the summer they electrocuted the Rosenbergs, and I didn’t know what I was doing in New York..."
    );
    expect(result).toBe("was");
  });
  test("should return the right value", () => {
    let result = reWord("1 2 3 4 5 6 7 ");
    expect(result).toBe("nothing");
  });
});
