// 你的面前有一堵矩形的、由 n 行砖块组成的砖墙。这些砖块高度相同（也就是一个单位高）但是宽度不同。每一行砖块的宽度之和应该相等。
// 你现在要画一条 自顶向下 的、穿过 最少 砖块的垂线。如果你画的线只是从砖块的边缘经过，就不算穿过这块砖。
// 你不能沿着墙的两个垂直边缘之一画线，这样显然是没有穿过一块砖的。
// 给你一个二维数组 wall ，该数组包含这堵墙的相关信息。其中，wall[i] 是一个代表从左至右每块砖的宽度的数组。你需要找出怎样画才能使这条线
// 穿过的砖块数量最少 ，并且返回 穿过的砖块数量 。

/**
 * @param {number[][]} wall
 * @return {number}
 */
const leastBricks = function(wall) {
  let lines = 0;
  for(let i = 0; i< wall[0].length; i++){
    lines+=wall[0][i];
  }
  lines--;
  if(lines === 0){
    return wall.length;
  }
  let isOneLine = true;
  for(const bricks of wall){
    if(bricks.length>1){
      isOneLine = false;
    }
  }
  if(isOneLine) return wall.length
  const nums = {};
  for(const bricks of wall){
    let line = 0;
    for(const brick of bricks){
      line+=brick;
      if(nums[line-1]){
        nums[line-1] -= 1;
      }else {
        nums[line-1] = wall.length-1
      }
    }
  }
  let min = 9999999;
  for(const index in nums){
    if(parseInt(index, 10) === lines) continue
    if(nums[index] < min){
      min = nums[index];
    }
  }
  return min
};

console.log(leastBricks([[1,2,2,1],[3,1,2],[1,3,2],[2,4],[3,1,2],[1,3,1,1]]));

