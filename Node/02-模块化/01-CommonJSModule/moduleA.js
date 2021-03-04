const b = require('./moduleB')
setTimeout(()=>{
  console.log(b+'moduleA')
},1000)