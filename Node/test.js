let arrB = [1,4,5,8,9];
let arrA = [2,3,6,7,10];

function Mix(arr1, arr2){
  let p1 = 0;
  let p2 = 0;
  let sum = [];
  let isInsert = true;

  function pushAll(index, array, sum, lastNum){
    for(let i = index; i < array.length; i++){
      if(lastNum<=array[i] && isInsert == false){
        sum.push(lastNum)
        isInsert = true;
      }
      sum.push(array[i])
    }
  }

  while(p1 <= arr1.length-1 || p2 <= arr2.length-1){

    if(arr1[p1]<=arr2[p2]){
      sum.push(arr1[p1++]);
    }else{
      sum.push(arr2[p2++])
    }

    if(p1 == arr1.length-1){
      pushAll()

    }

  }
  return sum;
}

console.log(Mix(arrA,arrB));