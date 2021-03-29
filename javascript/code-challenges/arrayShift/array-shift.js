    
const express = require('express');

const app = express();

let arr = [0,1,2,3,4,5,6,7,8,9];
let num = 99;

function insertShiftArray(arr,num) {
    
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {

      if(Math.ceil(arr.length/2) == i){

        newArr.push(num)
        }
         newArr.push(arr[i]);
    }

  return newArr;
}



module.exports = {
    array:insertShiftArray(arr,num)
}
