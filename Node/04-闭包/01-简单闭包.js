(function(){  // 先定义一个作用域
  let Person = (function(){
    let _money = 10000000;
    function Person(){

    }
    Person.prototype.buy = function (){
      _money -= 100;
      console.log(_money)
    }
    return Person;
  })()

  let teacher = new Person();
  teacher.buy(); // 9999900
  // console.log(teacher._money) //undefined
  // 这里可以看到，通过使用闭包，保护变量，可以防止变量被外部控制
  let teacherWife = new Person();
  teacherWife.buy(); //9999800
  // 但是这里带来了另一弊端，所有创建的实例对象，都共用一个变量
  // 因为Person没有被销毁

})()