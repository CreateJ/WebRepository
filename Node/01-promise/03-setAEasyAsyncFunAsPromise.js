// // 原函数
// function dynamicFunc(cb) {
//   setTimeout(function() {
//     console.log('1s后执行');
//     cb();
//   }, 1000);
// }
// var callback = function() {
//   console.log('在异步结束后log');
// }
// // 传入回调方式的方法执行
// dynamicFunc(callback);

// 自己尝试的改写promise
function promise1(){
  return new Promise((resolve, reject) => {
    console.log('Say Successful after 1s!')
    setTimeout(()=>{
      resolve('Successful!')
    },1000)
  })
}

function callback(){
  console.log('This is callback!')
  return 'This is value from callback！'
}

const p1 = new promise1();

p1.then(res => {
  const callbackValue = callback();
  console.log(callbackValue)
  console.log(res)
})