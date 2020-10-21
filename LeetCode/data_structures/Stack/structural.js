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
    // 7、输出转化好的二进制数字
    Stack.prototype.transToBin = function(){
        var bin = '';
        for(var i = 0; i < this.items.length; i++){
            bin += (this.items[this.items.length-i-1]);
        }
        return bin;
    }
}