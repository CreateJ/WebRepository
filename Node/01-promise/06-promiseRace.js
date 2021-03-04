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


Promise.race([promiseA(),promiseB]).then(res=>{
  console.log(res)
})