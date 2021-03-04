// 没有被点出来的情况,this的指向只有全局global或者是undefined

function funOuter(){
  function outer(){
    console.log('this:::',this)
  }
  return outer
}

function Run(){
  let fun = funOuter();
  fun();
}

Run();