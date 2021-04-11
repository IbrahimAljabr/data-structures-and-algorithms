const { LinkedList } = require("../linkedList/linked-list");
function zipList(list2, list1) {
  if (!list1.head || !list2.head) {
    return "Empty list";
  }

  let current1 = list1.head;
  let current2 = list2.head;
  let zipped = new LinkedList();

  let len = list1.length + list2.length;

  for (let i = 0; i < len; i++) {
    if (i % 2 == 0) {
      zipped.insert(current1.value);
      current1 = current1.next;
    } else {
      zipped.insert(current2.value);
      current2 = current2.next;
    }
  }
  if (current2) {
    list2.insert(current2.value);
  } else if (current1) {
    list1.insert(current1.value);
  }
  return zipped.toString();
}

module.exports = zipList;
