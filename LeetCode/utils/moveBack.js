function MoveBack(array, start, end) {// 用于将元素往后挪位并且将最后一位插入到开始位置
  let exchange = array[end]; // 保留最后一个元素
  for (let i = end - 1; i >= start; i--) { // 将前面后面的元素挪一位
    array[i+1] = array[i];
  }
  array[start] = exchange;
}
// eg:
// let array = [3,7,6,5,8];
// MoveBack(array,1,3);
// console.log(array); // 3,5,7,6,8