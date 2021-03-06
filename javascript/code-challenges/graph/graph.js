class Vertex {
  constructor(value) {
    this.value = value;
  }
}
class Edge {
  constructor(vertex, weight) {
    this.vertex = vertex;
    this.weight = weight;
  }
}

class Graph {
  constructor() {
    this._adjacencyList = new Map();
  }
  addVertex(vertex) {
    this._adjacencyList.set(vertex, []);
    return vertex;
  }
  addDirectedEdge(startVertex, endVertex, weight = 0) {
    if (
      !this._adjacencyList.has(startVertex) ||
      !this._adjacencyList.has(endVertex)
    ) {
      throw new Error("INVALID NODE");
    }
    const adjacencies = this._adjacencyList.get(startVertex);
    adjacencies.push(new Edge(endVertex, weight));
    return adjacencies;
  }
  getNeighbors(vertex) {
    if (!this._adjacencyList.has(vertex)) {
      throw new Error("__ERROR__ Invalid Vertex", vertex);
    }
    return this._adjacencyList.get(vertex);
  }
  printAll() {
    for (const [vertex, edge] of this._adjacencyList.entries()) {
      console.log(vertex);
      console.log(edge);
    }
  }
  getNodes() {
    let set = new Set();
    for (const [vertex] of this._adjacencyList.entries()) {
      set.add(vertex);
    }
    return Array.from(set);
  }
  size() {
    if (this._adjacencyList.size === 0) {
      return null;
    }
    return this._adjacencyList.size;
  }
}
module.exports = { Graph, Edge, Vertex };
