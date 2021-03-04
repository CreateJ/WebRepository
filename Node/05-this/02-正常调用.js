let person = {
  name: 'Same',
  eat: function(){
    console.log('吃了一斤')
    console.log('this:::',this)
  }
}

person.eat();