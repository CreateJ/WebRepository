//给你一个数组 nums 。数组「动态和」的计算公式为：runningSum[i] = sum(nums[0]…nums[i])
var runningSum = function(nums) {
  const result = [];
  let tmp = 0;
  for (const num of nums){
    tmp+=num;
    result.push(tmp)
  }
  return result
};

console.log(runningSum([1,2,3,4,5]))
