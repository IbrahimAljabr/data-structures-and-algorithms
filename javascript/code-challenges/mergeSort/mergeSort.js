"use strict";

function megaSort(arr) {
  let len = arr.length;
  if (len <= 1) {
    return arr;
  } else {
    let mid = Math.floor(len / 2);
    let right = arr.slice(mid);
    let left = arr.slice(0, mid);

    let sortRight = megaSort(right);
    let sortLeft = megaSort(left);

    return merge(sortRight, sortLeft, arr);
  }
}

function merge(right, left, arr) {
  console.log(left, right);
  let i = 0;
  let j = 0;
  let k = 0;
  while (j < right.length && i < left.length) {
    if (right[j] < left[i]) {
      console.log("what ", j, i, arr);
      arr[k] = right[j];
      j++;
    } else {
      arr[k] = left[i];
      j++;
    }
    k++;
  }
  if (j === right.length) {
    while (i < left.length) {
      arr[k] = left[i];
      i++;
      k++;
    }
  } else {
    while (j < right.length) {
      arr[k] = right[j];
      j++;
      k++;
    }
  }
}
module.exports = megaSort;
