// 找到数组中重复出现的数值 多个重复只输出一个即可

const findRepeatNumber = function (nums) {
  let map = {};
  for (const num of nums) {
    if (map[num]) {
      return num
    }else {
      map[num] = 1 ;
    }
  }
};

console.log(findRepeatNumber([1,2,3,4,1]))
