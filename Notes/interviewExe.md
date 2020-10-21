# 从输入URL到渲染出整个页面的过程

**包括三个部分：**

1、DNS解析URL的过程

2、浏览器发送请求与服务器交互的过程

3、浏览器对接收到的html页面渲染的过程

**一、DNS解析URL的过程**

   DNS解析的过程就是寻找哪个服务器上有请求的资源。因为ip地址不容易记忆，一般会使用URL域名（如www.baidu.com）作为网址。DNS解析就是将域名翻译成IP地址的过程。

具体过程：

1）浏览器缓存：浏览器会按照一定的频率 缓存DNS记录

2）操作系统缓存：如果浏览器缓存中找不到需要的DNS记录，就会取操作系统中找

3）路由缓存：路由器也有DNS缓存

4）ISP的DNS服务器：ISP有专门的DNS服务器应对DNS查询请求

5）根服务器：ISP的DNS服务器找不到之后，就要向根服务器发出请求，进行递归查询

**二、浏览器与服务器交互过程**

1）首先浏览器利用tcp协议通过三次握手与服务器建立连接

　　http请求包括header和body。header中包括请求的方式（get和post）、请求的协议 （http、https、ftp）、请求的地址ip、缓存cookie。body中有请求的内容。

2）浏览器根据解析到的IP地址和端口号发起http的get请求.

3）服务器接收到http请求之后，开始搜索html页面，并使用http返回响应报文

4）若状态码为200显示响应成功，浏览器接收到返回的html页面之后，开始进行页面的渲染

**三、浏览器页面渲染过程**

1）浏览器根据深度遍历的方式把html节点遍历成dom 树

2）将css解析成CSS DOM树

3）将dom树和CSS DOM树构造成render树

4）JS根据得到的render树 计算所有节点在屏幕中的位置，进行布局（回流）

5）遍历render树并调用硬件API绘制所有节点（重绘）



**渲染render树的过程**

1. 从DOM树的根节点开始遍历每个可见的节点。

2. 对于每个可见的节点，找到CSS树中的对应的规则，并且应用他们。

3. 根据每个可见的节点及其对应的样式，组合生成渲染树。

   

# TCP三次握手四次挥手

**三次握手**

客户端：请求建立新连接

服务器：收到连接请求，且连接有效，同意连接

客户端：接收到服务器同意连接的信息

开始传输数据

四次挥手

客户端：请求断开连接

服务器：已接收到断开连接的请求

服务器：已经准备好释放资源和断开连接（接收到然后准备一下）

客户端：收到服务器主备好释放连接的信息

# CSS中em与rem的区别

px：固定像素，无法改变大小

em：相对于父元素字体大小，如父元素font-size = 12px,则1em = 12px

rem：相对于根元素字体大小，如根元素font-size = 12px,则1rem = 12px（更优，只有一个参照物，即html）

# 小程序px和rpx的区别

1rpx为移动设备屏幕宽度的750分之一

例如iphone6的宽度为750px，则1rpx=0.5px

# CSS垂直居中的多种方法

1. verticle-align:middle（元素的display为inline-block）
2. 伪元素before添加第一点

3. display:flex而子元素align-self
4. 父元素display:table，子元素display:table-cell
5. 使用一个空白元素占用空间，使元素移位
6. 父元素position:relative，子元素position:absolute，top:50px，margin上移元素高度的一半
7. 设置字体的时候可以设置line-height等于父元素的height

# CSS盒模型

margin+border+padding+content

# null与undefined

null说明此处不应该有值，是特殊的object对象

undefined说明应该有值，但是还没有定义

# JS继承方式

**原型链**

```js
function Person (name, age) {
    this.name = name;
    this.age = age;
}
Person.prototype.say = function(){
    console.log('hello, my name is ' + this.name);
};
function Man() {
}
Man.prototype = new Person('pursue');
var man1 = new Man();
man1.say(); //hello, my name is pursue
var man2 = new Man();
console.log(man1.say === man2.say);//true
console.log(man1.name === man2.name);//true
```

将整个父类以一个参数的形式传入，找到的属性方法都是同一个，对子类进行修改相当于对父类实例对象进行修改。

**构造函数继承**

```javascript
function Person (name, age) {
    this.name = name;
    this.age = age;
}
Person.prototype.say = function(){
    console.log('hello, my name is ' + this.name);
};
function Man(name, age) {
    Person.apply(this, arguments);
}
//Man.prototype = new Person('pursue');
var man1 = new Man('joe');
var man2 = new Man('david');
console.log(man1.name === man2.name);//false
man1.say(); //say is not a function
```

构造函数继承无法继承父类的方法。

**组合继承**

```javascript
function Person (name, age) {
    this.name = name;
    this.age = age;
}
Person.prototype.say = function(){
    console.log('hello, my name is ' + this.name);
};
function Man(name, age) {
    Person.apply(this, arguments);
}
Man.prototype = new Person();
var man1 = new Man('joe');
var man2 = new Man('david');
console.log(man1.name === man2.name);//false
console.log(man1.say === man2.say);//true
man1.say(); //hello, my name is joe
```

既可以使用父类的方法，子类实例的属性也可以各自覆盖。

但是这个时候，只要一个子类对对父类的方法进行覆盖，另一个子类的方法也会受到影响

**寄生组合方式**

```javascript
function Person (name, age) {
            this.name = name;
            this.age = age;
        }
Person.prototype.say = function(){
    console.log('hello, my name is ' + this.name);
};
function Man(name, age) {
    Person.apply(this, arguments);
}

Man.prototype = Object.create(Person.prototype);//a.
Man.prototype.constructor = Man;//b.
var man1 = new Man('pursue');
var man2 = new Man('joe');
console.log(man1.say == man2.say);
console.log(man1.name == man2.name);
```

对实例属性和原型属性分别进行了继承

