// 给你一个整数数组 nums ，除某个元素仅出现 一次 外，其余每个元素都恰出现 三次 。请你找出并返回那个只出现了一次的元素。
const singleNumber = function(nums) {
  const map = {};
  for(const num of nums){
    if(map[num]){
      map[num]++;
    }else {
      map[num]=1;
    }
  }
  for(const tmp in map){
    if(map[tmp]===1){
      return tmp
    }
  }
};

console.log(singleNumber([1,1,1,0]))
