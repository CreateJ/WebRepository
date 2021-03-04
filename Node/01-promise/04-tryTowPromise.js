function promiseA(){
  return new Promise((resolve, reject) => {
    const a = 0;
    setTimeout(()=> {
      if(a > 5){
        resolve('PromiseA successful!')
      }else {
        reject('PromiseA failure!')
      }
    }, 1000)
  })
}

function promiseB(){
  return new Promise((resolve, reject) => {
    const a = 0;
    setTimeout(()=> {
      if(a > 5){
        resolve('PromiseB successful!')
      }else {
        reject('PromiseB failure!')
      }
    }, 1000)
  })
}

const pA = new promiseA();
// 拦截失败优先级，then > catch
// 只要在then中有传入onReject方法，则会有比catch更高的优先级
// pA.then(res=>{
//   console.log(res)
//   return promiseB()
// },err=>{
//   console.log(err, 'then')
// }).catch(err=> {
//   console.log(err, 'catch')
// })

pA.then(res=>{
  console.log(res)

}).catch(err=> {
  console.log(err, 'catch')
  return promiseB()
}).catch(err => {
  console.log(err)
})