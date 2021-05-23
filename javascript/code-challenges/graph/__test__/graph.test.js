const { Graph } = require("../graph");
const { Vertex } = require("../graph");
describe("tell", () => {
  test("should add new vertex", () => {
    const graph = new Graph();
    const ten = new Vertex(10);

    expect(ten).toEqual({ value: 10 });
  });

  test("should add directed edge", () => {
    const graph = new Graph();

    const ten = new Vertex(10);
    const two = new Vertex(2);

    graph.addVertex(ten);
    graph.addVertex(two);

    expect(graph.addDirectedEdge(ten, two)).toEqual([
      { vertex: { value: 2 }, weight: 0 },
    ]);
  });

  test("should get neighbors", () => {
    const graph = new Graph();

    const ten = new Vertex(10);
    const two = new Vertex(2);

    graph.addVertex(ten);
    graph.addVertex(two);

    graph.addDirectedEdge(ten, two);

    expect(graph.getNeighbors(ten)).toEqual([
      { vertex: { value: 2 }, weight: 0 },
    ]);
  });

  test("should get Get all the Nodes", () => {
    const graph = new Graph();

    const ten = new Vertex(10);
    const two = new Vertex(2);

    graph.addVertex(ten);
    graph.addVertex(two);

    graph.addDirectedEdge(ten, two);

    expect(graph.getNodes()).toEqual([{ value: 10 }, { value: 2 }]);
  });

  test("should get size", () => {
    const graph = new Graph();

    const ten = new Vertex(10);
    const two = new Vertex(2);

    graph.addVertex(ten);
    graph.addVertex(two);

    graph.addDirectedEdge(ten, two);

    expect(graph.size()).toEqual(2);
  });
});
