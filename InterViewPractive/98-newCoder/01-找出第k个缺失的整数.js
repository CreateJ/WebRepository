function getInter(array, start){
  let obj = {};
  for(let i in array){
    obj[array[i]] = 1;
  }
  let k = 0;
  for(let x = 0;x<array[array.length-1];x++){
    if(obj[x] !== 1){
      if(k == start){
        return x
      }
      k++;
    }
  }
}

console.log(getInter([2,3,4,7,11],5))