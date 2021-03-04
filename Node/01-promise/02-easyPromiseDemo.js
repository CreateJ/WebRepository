function promise1() {
  return new Promise(function(resolve, reject){
    setTimeout(() => {
      console.log('promise1')
      resolve('promise1 successful')
    },1000)
  })
}
function promise2() {
  return new Promise(function(resolve, reject){
    setTimeout(() => {
      console.log('promise2')
      resolve('promise2 successful')
    },1000)
  })
}


promise1()
    .then(res=> {
  console.log(res);
  return promise2()
})
    .then(res => {
  console.log(res)
})