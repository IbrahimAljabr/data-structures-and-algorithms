'use strict';

let arr = [1,2,3,4,5,6,7,8,9,0];

function reverseArray(arr) {
    
    let reArray=[];

    for (let i = arr.length-1; i>=0; i--) {
        
        reArray.push(arr[i]);
    }
  return reArray;
}

reverseArray(arr);


