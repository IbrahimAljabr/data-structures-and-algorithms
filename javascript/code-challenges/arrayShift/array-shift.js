

let arr = [1,2,3,4,5,6,7,8,9,0,];

let num = 99;

function insertShiftArray(arr,num) {
    
    let newArr = [];

    for (let i = 0; i < arr.length; i++) {

    newArr.push(arr[i]);
        

      if(Math.ceil(arr.length/2) == i){
        
        
        newArr.push(num)
        
        }
    }

console.log(newArr)
  return newArr;
}

insertShiftArray(arr,num);