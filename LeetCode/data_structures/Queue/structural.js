function Queue() {
    // 属性
    this.items = [];
    // 方法
    // 1.将元素添加到队列enterQueue
    // 可以传入一个或多个参数
    Queue.prototype.enQueue = function (element) {
        this.items.push(element);
    }
    // 2.从队列中删除前端元素delQueue
    Queue.prototype.deQueue = function () {
        return this.items.shift();
    }
    // 3.查看最前面的元素
    Queue.prototype.front = function () {
        return this.items[0];
    }
    // 4.检查队列是否为空
    Queue.prototype.isEmpty = function () {
        return this.items.length == 0;
    }
    // 5.查看队列中的元素个数
    Queue.prototype.size = function () {
        return this.items.length;
    }
    Queue.prototype.toString = function () {
        let resultString = '';
        for(let i = 0; i < this.items.length; i++){
            resultString += this.items[i] + ' ';
        }
        return resultString;
    }

}