
let arr = [4,8,15,16,23,42,50,60,70,80,90,100] ;
let num = 70;



function BinarySearch(arr,num) {
    let start = 0;
    let end = arr.length-1;
    while(start <= end){
      let mid = Math.floor((start + end)/2);
      if(num === arr[mid]){
        return mid
      }
      if(num < arr[mid]){
        end=mid -1
      }
      if(num > arr[mid]){
        start=mid +1
      }
      if(start > end){
       return  'not found'
      }
    }
}


module.exports = {
    array : BinarySearch
   
}
