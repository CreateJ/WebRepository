# 1.作用

让标签中无法动态修改的属性可以动态修改

# 2.v-bind语法糖

```
v-bind:src=''
:src=''
```

# 3.基本使用

```html
<div id="app">
  <!--只有使用v-bind修饰的属性，才是可以动态变化的-->
  <img v-bind:src="imgURL" alt="">
  <!--错误写法-->
  <!--<img src="imgURL" alt="">-->
</div>
<script src="../../js/vue.js"></script>
<script>
  let app = new Vue({
    el: '#app',
    data: {
      imgURL:'https://images.pexels.com/photos/163077/' +
          'mario-yoschi-figures-funny-163077.jpeg?' +
          'auto=compress&cs=tinysrgb&dpr=1&w=500',
    },
  })
</script>
```

# 4.使用v-bind动态修改class

## 1.对象语法

通过添加**v-bind**并在类名中以对象的形式

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>v-bind动态修改类名</title>
  <style>
    .active {
      color: red;
    }
  </style>
</head>
<body>
<div id="app">
  <!--这里对量里面的格式是{类名1:boolean,类名2:boolean}-->
  <h2 :class="{active:isActive}">王二蛋</h2>
  <!--这里对量里面的格式是{类名1:boolean,类名2:boolean}-->
  <!--<h2 class='title' :class="{active:isActive}">王二蛋</h2>-->
  <button @click="change">切换</button>
</div>
<script src="../../js/vue.js"></script>
<script>
  let app = new Vue({
    el: '#app',
    data: {
      isActive: true,
    },
    methods: {
      change: function (){
        this.isActive = !this.isActive;
      }
    }
  })
</script>
</body>
</html>
```

## 2.数组语法

略微鸡肋，知道有这个东西，以后说不定会用到