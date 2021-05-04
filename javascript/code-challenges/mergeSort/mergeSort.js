"use strict";

function megaSort(arr) {
  let len = arr.length;
  let mid = Math.ceil(len / 2);
  if (len > 1) {
    let left = arr.slice(0, mid);
    let right = arr.slice(mid);
    megaSort(left);
    megaSort(right);
    merge(left, right, arr);
  }
  return arr;
}

function merge(right, left, arr) {
  let i = 0;
  let j = 0;
  let k = 0;
  while (i < left.length && j < right.length) {
    if (left[i] <= right[j]) {
      arr[k] = left[i];
      k++;
      i++;
    } else {
      arr[k] = right[j];
      k++;
      j++;
    }
  }
  if (i === left.length) {
    while (j < right.length) {
      arr[k] = right[j];
      j++;
      k++;
    }
  } else {
    while (i < left.length) {
      arr[k] = left[i];
      i++;
      k++;
    }
  }
}
module.exports = megaSort;
