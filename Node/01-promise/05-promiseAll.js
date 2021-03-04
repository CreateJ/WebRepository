function promiseA(){
  return new Promise((resolve, reject) => {
    setTimeout(()=>{
      console.log('PromiseA run!')
      resolve('PromiseA successful!')
    },3000)
  })
}

function promiseB(){
  return new Promise((resolve, reject) => {
    setTimeout(()=>{
      console.log('PromiseB run!')
      resolve('PromiseB successful!')
    },1000)
  })
}

Promise.all([new promiseA(), new promiseB()]).then(res=>{
  for (const re of res) {
    console.log(re)
  }
}).catch(err => {
  console.log(err)
})