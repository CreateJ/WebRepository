# 1.栈

## 1.特点

后进先出、受限制的线性结构

## 2.实现

通过js的数组，能够轻松完成封装其所有基本功能

```javascript
function Stack(){
    this.items = [];

    // 1、入栈
    Stack.prototype.push = function (element) {
        this.items.push(element);
    }
    // 2、出栈
    Stack.prototype.pop = function () {
        return this.items.pop();
    }
    // 3、查看栈顶元素
    Stack.prototype.peek = function () {
        return this.items.peek();
    }
    // 4、判断栈是否为空
    Stack.prototype.isEmpty = function () {
        return this.items.length == 0;
    }
    // 5、获取栈中元素的数量
    Stack.prototype.size = function () {
        return this.items.length;
    }
    // 6、toString方法
    Stack.prototype.toString = function(){
        var resultString = '';
        for(var i = 0; i < this.items.length; i++){
            resultString += this.items[i] + ' ';
        }
        return resultString;
    }
}
```

## 3.实际应用

### 1.leetcodeT504

**问题描述：**

给定一个整数，将其转化为7进制，并以字符串形式输出。

**示例 1:**

```
输入: 100
输出: "202"
```

**示例 2:**

```
输入: -7
输出: "-10"
```

**代码**

```javascript
var convertToBase7 = function(num) {
    var a = num;
    var arr = [];
    var isFu = false;
    if(a < 0){ 		//考虑需要转换的数字小于0的情况
        isFu = true;	//直接将其转换成正数
        a = a * -1;
    }
    if(a == 0){		//考虑需要转换的数字等于0的情况
        return '0';
    }
    while(a != 0){	
        arr.push(a % 7);
        a = Math.floor(a / 7);
    }
    var resultStr = '';
    for(var i = arr.length-1; i >= 0 ; i--){
        resultStr += arr[i]+'';
    }
    if(isFu){		//转换完成之后如果之前为负数，则在前面加上‘-’号
        resultStr = '-' + resultStr;
    }
    return resultStr;
};
```

