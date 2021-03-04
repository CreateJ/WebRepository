// 简单的异步实例
setTimeout(function() {
  console.log(123);
  setTimeout(function() {
    console.log(321);
    // ...
  }, 2000);
}, 1000);