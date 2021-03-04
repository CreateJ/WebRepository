require(['04-moduleA', '05-moduleB', 'son/01-moduleC'],function (moduleA, moduleB, moduleC){
  console.log(moduleA, 'moduleA')
  console.log(moduleB, 'moduleB')
  console.log(moduleC, 'moduleC')
})
console.log('Sync task')