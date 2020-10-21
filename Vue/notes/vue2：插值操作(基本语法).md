## 1.v-for

自动遍历渲染相对应的数组内容

```html
<div id="app">
  <div v-for="item in items">{{item}}</div>
</div>
<script src="../../js/vue.js"></script>
<script>
  let app = new Vue({
    el: '#app',
    data: {
      items: [1,2,3,4,5],
    },
    methods: {

    }
  })
</script>
```

## 2.v-once

被修饰的**html**标签中的**mustache**语法不会再因为变量内容修改而被修改

```html
<div id="app">
  <div>{{message}}</div>
  <div v-once>{{message}}</div>
  <!--  v-once的作用是让被修饰的标签的mustache语法
  不会因为对象内容被修改而修改-->
  <button v-on:click="click">修改</button>
</div>
<script src="../../js/vue.js"></script>
<script>
  let app = new Vue({
    el: '#app',
    data: {
      message: '修改前是阴天',
    },
    methods: {
      click: function () {
        this.message = '修改后是晴天';
      },
    }
  })
</script>
```

## 3.v-text和v-html

**v-text**跟原生js的**ele.innerText()**有类似的意思

**v-html**和原生js的**ele.innerHTML()**有类似的意思

```html
<div id="app">
  <div>{{message}}你好帅！</div>
  <div v-text="message">你好帅！</div>
  <!--v-text不够灵活-->
  <div v-html="url"></div>
  <a href=""></a>
</div>
<script src="../../js/vue.js"></script>
<script>
  let app = new Vue({
    el: '#app',
    data: {
      message: '你好二蛋！',
      url: '<a href="#">你好二蛋！</a>'
    },
    methods: {

    }
  })
</script>
```

## 4.v-pre

让被修饰的标签中的**mustache**语法失效，从而直接显示双大括号

```html
<div id="app">
  <div>{{message}}</div>
  <div v-pre>{{message}}</div>
  <!--v-pre = prevent：作用是让mustache语法失效-->
</div>
<script src="../../js/vue.js"></script>
<script>
  let app = new Vue({
    el: '#app',
    data: {
      message: 123,
    },
    methods: {

    }
  })
</script>
```

## 5.v-choak

vue解析之前，div中有一个属性v-cloak

vue解析之后，div中的v-cloak属性被删除

```html
<!--css部分-->
<style>
    [v-cloak] {
      display: none;
    }
  </style>

<!--html部分-->
<div id="app">
  <h2 v-cloak>{{message}}</h2>
</div>

<!--js部分-->
<script>
  setTimeout(function () {
    let app = new Vue({
      el: '#app',
      data: {
        message: '你好二蛋！',
      },
      methods: {

      }
    })
  },2000)
</script>
```

