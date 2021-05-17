function tree_intersection(tree, tree2) {
  let tArray = tree.postOrder();
  let t2Array = tree2.postOrder();
  let result = tArray.filter((value) => t2Array.includes(value));
  return result;
}
module.exports = tree_intersection;
