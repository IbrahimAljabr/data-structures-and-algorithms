function SelectionSort(arr) {
  let len = arr.length;
  let min = 0;
  let temp = 0;
  for (let i = 0; i < len - 1; i++) {
    console.log(arr);
    min = i;
    for (let j = i + 1; j < len; j++) {
      if (arr[j] < arr[min]) {
        min = j;
      }
    }
    temp = arr[min];
    arr[min] = arr[i];
    arr[i] = temp;
  }
  return arr;
}
module.exports = SelectionSort;
