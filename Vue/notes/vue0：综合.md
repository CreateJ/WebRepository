# vue1：基础知识

## 1.MVVM

View：Dom树，可视化的部分

View-Model：即我们所用的Vue，分为两部分，分别为DomLinsteners和DataBindings

1. DomLinstener: View->Model
2. DataBindings: Model->View

Model：js代码中自己定义的部分，或者网络上传来的数据

## 2.语法糖

语法糖（Syntactic sugar），也译为糖衣语法，是由英国计算机科学家彼得·约翰·兰达（Peter J. Landin）发明的一个术语，指计算机语言中添加的某种语法，这种语法对语言的功能并没有影响，但是更方便程序员使用。通常来说使用语法糖能够增加程序的可读性，从而减少程序代码出错的机会。



### Vue中的语法糖

### 已知语法糖

```javascript
v-on:click=''
@click=''
```

```javascript
v-bind:src=''
:src=''
```

## 3.Vue的生命周期

 可以理解为，vue是封装好的，创建的过程中，他会有很多步骤，当你定义了类似于**create**的生命周期函数之后，他会在做完一些我们看不见的操作之后，将这个**function**作为回调函数调用，在源码中是以**callHook(vm,fn())**的形式

# vue2：指令

## 1.v-for

自动遍历渲染相对应的数组内容

```html
<div id="app">
  <div :key="item.id" v-for="(item,index) in fruit">{{item.name}}</div>
</div>
<script src="../../js/vue.js"></script>
<script>
  let app = new Vue({
    el: '#app',
    data: {
      fruit: [{
        name: 'apple',
        id: 1,
      },{
        name: 'banana',
        id: 2,
      },{
        name: 'pear',
        id: 3,
      }]
    },
    methods: {
    }
  })
</script>
```

**tips**：注意这里记得使用**v-bind：key='id'**或者**：key='id'**来提高vue渲染器的性能，但是对于实际开发没有任何影响

## 2.v-once

被修饰的**html**标签中的**mustache**语法不会再因为变量内容修改而被修改，优点是可以提高网页性能

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

## 5.v-choak（解决闪动问题）

**更推荐使用v-text语法**

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

## 6.v-show

**决定元素是否显示出来**

```html
<div id="app">
  <div class="pink box"></div>
  <div class="lightBlue box" v-show="isShow"></div>
  <button @click="showHandle">显示/隐藏</button>
</div>
<script src="../../js/vue.js"></script>
<script>
  let app = new Vue({
    el: '#app',
    data: {
      isShow: true,
    },
    methods: {
      showHandle: function (){
        this.isShow = !this.isShow;
      }
    }
  })
</script>
```

## 7.v-if & v-else-if & v-else

```html
<div id="app">
  <div v-if="msg>90">优秀</div>
  <div v-else-if="msg<=90&&msg>80">良好</div>
  <div v-else-if="msg<=80&&msg>70">及格</div>
  <div v-else="msg<=70">不及格</div>
</div>
<script src="../../js/vue.js"></script>
<script>
  let app = new Vue({
    el: '#app',
    data: {
      msg: 88,
    },
    methods: {}
  })
</script>
```

**补充**：**v-if**可以和**v-for**一起使用

```HTML
<div id="app">
  <div v-if='item === 22' v-for="(item,key,index) in obj">{{(index + 1) + '---' + key + ': ' + item }}</div>
</div>
<script src="../../js/vue.js"></script>
<script>
  let app = new Vue({
    el: '#app',
    data: {
      obj: {
        name: 'Jamie',
        gender: 'male',
        age: 22
      }
    },
    methods: {}
  })
</script>
```

结果只显示

```
3---age: 22
```



# vue3：动态绑定

## 1.作用

让标签中无法动态修改的属性可以动态修改

## 2.v-bind语法糖

```
v-bind:src=''
:src=''
```

## 3.基本使用

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

## 4.使用v-bind动态修改class

### 1.对象语法

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

### 2.数组语法

略微鸡肋，知道有这个东西，以后说不定会用到

# vue4：事件修饰符

事件修饰符可以串联，**@click.stop.prevent='fun'**

## **1.阻止事件冒泡**（.stop）

```html
<!--正常情况下，父盒子的点击事件会被冒泡触发，使用.stop修饰
	之后，就可以阻止事件冒泡-->
<div id="app" @click="handleFather">
  <button @click.stop="handle">click</button>
</div>
<script src="../../js/vue.js"></script>
<script>
  let app = new Vue({
    el: '#app',
    data: {

    },
    methods: {
      handleFather: function (){
        alert('I am father!')
      },
      // 当直接调用函数名作为指令的时候，事件对象会
      // 作为第一个参数传进来，（有参数则为最后一个）
      handle: function (event){
        // 这里也有同样的作用
        // event.stopPropagation();
        alert('I am son!');
      }
    }
  })
</script>
```

## **2.阻止默认行为**（.prevent）

```html
<div id="app">
  <!--被prevent修饰之后，a标签的工作不再是跳转了-->
  <a href="https://www.baidu.com" @click.prevent="handle">百度</a>
</div>
<script src="../../js/vue.js"></script>
<script>
  let app = new Vue({
    el: '#app',
    data: {
    },
    methods: {
      handle: function (event){
        console.log('点击了!');
      }
    }
  })
</script>
```

# vue5：双向绑定及其底层原理实现

这里，**@input**的作用是**DomLinsteners**，**:value**的作用是**DataBindings**

```html
<div id="app">
  <!--这里三行的作用等价-->
  <input type="text" v-model="msg"><br>
  <input type="text" v-bind:value="msg" v-on:input="handle"><br>
  <input type="text" :value="msg" @input="msg=$event.target.value"><br>
  <div>{{msg}}</div>
</div>
<script src="../../js/vue.js"></script>
<script>
  let app = new Vue({
    el: '#app',
    data: {
      msg: '',
    },
    methods: {
      handle: function (event){
        //使用最新的输入域中的内容来更新msg的内容
        this.msg = event.target.value;
      }
    }
  })
</script>
```

# vue6：常用特性

## 1.表单操作

```html
<div id="app">
  <form action="http://itcast.cn">
    <div>
      <span>姓名：</span>
      <span>
          <input type="text" v-model='uname'>
        </span>
    </div>
    <div>
      <span>性别：</span>
      <span>
          <input type="radio" id="male" value="1" v-model='gender'>
          <label for="male">男</label>
          <input type="radio" id="female" value="2" v-model='gender'>
          <label for="female">女</label>
        </span>
    </div>
    <div>
      <span>爱好：</span>
      <input type="checkbox" id="ball" value="1" v-model='hobby'>
      <label for="ball">篮球</label>
      <input type="checkbox" id="sing" value="2" v-model='hobby'>
      <label for="sing">唱歌</label>
      <input type="checkbox" id="code" value="3" v-model='hobby'>
      <label for="code">写代码</label>
    </div>
    <div>
      <span>职业：</span>
      <select v-model='occupation' >
        <option value="0">请选择职业...</option>
        <option value="1">教师</option>
        <option value="2">软件工程师</option>
        <option value="3">律师</option>
      </select>
    </div>
    <div>
      <span>个人简介：</span>
      <textarea v-model='desc'></textarea>
    </div>
    <div>
      <!--注意要使用js的方式来提交-->
      <input type="submit" value="提交" @click.prevent='handle'>
    </div>
  </form>
</div>
</body>
<script>
  let app = new Vue({
    el: '#app',
    data: {
      uname: 'Jamie',
      gender: 1,
      hobby: ['1','2'],
      occupation: 1,
      desc: 'Jamie is a softwareEngineer!',
    },
    method:{
    }
  })
</script>
```

# vue7：组件

优先级：局部组件大于全局组件

## 1.局部组件

```html
    <div id="app">
      <cpm :key="index" v-for="(item,index) in id" :id="index"></cpm>
    </div>
    <script>
      // 局部组件
      const cpmc = Vue.extend({
            props: ["id"],
            data: function () {
              return {};
            },
            template: `
              <div>
                <h2>这个是组件{{id+1}}号</h2>
                <p>红红火火恍恍惚惚</p>
              </div>
              `,
          }
      );

      let vue = new Vue({
        el: "#app",
        data: {
          message: 1,
          id: [{ id: 0 }, { id: 1 }, { id: 3 }, { id: 4 }, { id: 5 }],
        },
        methods: {},
        components: {
          'cpm': cpmc,
        },
      });
    </script>
```



## 2.全局组件

```html
    <div id="app">
      <comp></comp>
    </div>
    <script src="../../js/vue.js"></script>
    <script>

      //全局组件
      Vue.component('comp',{
        data: function(){
          return {
            items: [1,2,3,4,5],
          }
        },
        template: `
          <div>
            <h2 :key="index" v-for="(item,index) in items">{{index+1}}</h2>
          </div>
        `
      })
      const app = new Vue({
        el: '#app',
        data: {
          message: ''
        }
      })
    </script>
```

## 3.组件模板的分离

1.使用script的方式引入，type选择text/x-template

```html
	<div id="app">
      <cpn></cpn>
    </div>
    <!-- 下面全局组件会找到id为cpn的script标签，
  将里面的内容作为模板渲染到整个dom中 -->
    <script type="text/x-template" id="cpn">
      <h2>这个是写在script里面的模板</h2>
    </script>
    <script src="../../js/vue.js"></script>
    <script>
      Vue.component("cpn", {
        template: "#cpn",
      });
      const app = new Vue({
        el: "#app",
        data: {
          message: "",
        },
      });
    </script>
```

2.使用template的方式引入，注意id为组件注册的id

```html
	<div id="app">
      <cpn></cpn>
    </div>
    <!-- 下面全局组件会找到id为cpn的template标签，
  将里面的内容作为模板渲染到整个dom中 -->
    <template id="cpn">
      <h2>这个是写在template标签里面的模板</h2>
    </template>
    <script src="../../js/vue.js"></script>
    <script>
      Vue.component("cpn", {
        template: "#cpn",
      });
      const app = new Vue({
        el: "#app",
        data: {
          message: "",
        },
      });
    </script>
```

## 4.参数使用问题

在组件中，参数data对应的是一个函数，数据存放在函数return的对象中。

```javascript
			data: function () {
              return {//数据，};
            },
```

5.相同组件多次引用，之间数据不互通

## 6.父子传参

### 1.数组类型

```
props: ['parm1','parm2']
```

### 2.对象类型

```javascript
props: {
	'parm1': Array,//这里对象对用的参数用于限制传参进来的参数数据类型
	'parm2': {
		type: String,
		default: 'default_num' //默认值，如果没有传参进来，就使用默认值
	}
}
```

### 3.驼峰命名注意点

参数如果是用驼峰命名法的话，注意在使用的时候要使用'-'连接两个单词

```javascript
<cpm :c-name="parm1" :c-movies="parm2">

props: ['cName','cMovies']
```



## 7.子父传参

```html
    <!-- 子组件模板内容 -->
    <template id="tags">
      <div>
        <!-- 设置子组件的点击事件 -->
        <button :key="item.id" v-for="item in tags_list" @click="btnClick(item)">{{item.name}}</button>
      </div>
    </template>


    <div id="app">
      <!-- 引用模板，注册监听事件，与子组件的点击事件中传回的第一个参数同名，接收默认自带子组件传递过来的数据，这里cpnClick括号内不写，下方监听函数也可以直接使用item参数 -->
      <tags @item-click="cpmClick"></tags>
    </div>
    <script src="../../js/vue.js"></script>
    <script>
      Vue.component("tags", {
        template: "#tags",
        data: function () {
          return {
            tags_list: [
              { id: "aaa", name: "热门推荐" },
              { id: "bbb", name: "男生上衣" },
              { id: "ccc", name: "男生裤子" },
              { id: "ddd", name: "女生上衣" },
              { id: "eee", name: "女生裤子" },
            ],
          };
        },
        methods: {
          btnClick: function(item){
            // 设置子组件的点击事件，传回的数据名称以及数据
            this.$emit('item-click',item);
          }
        }
      });
      const app = new Vue({
        el: "#app",
        data: {
          message: "",
        },
        methods: {
          cpmClick: function(item){
            console.log('触发了父组件的点击事件,收到了'+item.name+'按钮传来的参数');
          }
        }
      });
    </script>
```

```
		@click="btnClick(item)"
		
		btnClick: function(item){
			// 将参数传递给父组件
            this.$emit('item-click',item);
          }
          
		@item-click="cpmClick"
		
		cpmClick: function(item){
            // 处理逻辑
          }
```

tips：传参只能使用‘-’命名法，否则失效