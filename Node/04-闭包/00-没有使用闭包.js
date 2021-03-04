// 在我们定义对象的时候，由于并不能设置私有属性，所以数据不够安全
(function(){
  let Person = function(){
    this.money = 100000;
    Person.prototype.buy = function(){
      this.money -= 100;
      console.log(this.money);
    }
  }
  let teacher = new Person();
  teacher.buy();
  // 由于外部数据可以随便访问对象里面的内容，导致数据不安全
  // 或者行为不可控
  teacher.money = 0;
  teacher.buy();
})()