// 快排前置 荷兰数问题 暂时不考虑等于flag的情况
const Helan1 = (nums, flag) => {
  let flagIndex = 0;
  for(const index in nums){
    if(nums[index] < flag){
      let tmp = nums[index];
      nums[index] = nums[flagIndex];
      nums[flagIndex] = tmp;
      flagIndex++;
    }
  }
  return nums
}

console.log(Helan1([3,8,7,4,2,4,5], 4))


// 快排前置 荷兰数问题 考虑等于flag的情况
const Helan2 = (nums, flag) => {
  let less= -1;
  let more = nums.length
  let current = 0;
  while( current !== more){
    if(nums[current] === flag){
      current++;
    }else if(nums[current] < flag){
      const tmp = nums[less+1]
      nums[less+1] = nums[current];
      nums[current] = tmp;
      less++;
      current++;
    }else {
      const tmp = nums[more-1];
      nums[more-1] = nums[current]
      nums[current] = tmp;
      more --;
    }
  }
  return nums
}
console.log(Helan2([3,8,7,4,2,4,5], 4))
