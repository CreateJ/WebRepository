let animate = function (obj,target,callback) {
    clearInterval(obj.timer);               // 重置一下计时器
    obj.timer = setInterval(function(){
        var step = (target - obj.offsetLeft)/10;
        if(step > 0){                       // 根据step向上或向下取整
            step = Math.ceil(step);
        }else{
            step = Math.floor(step);
        }
        if (obj.offsetLeft == target){
            clearInterval(obj.timer);
            if(callback){                   // 回调函数：在原来的函数执行完之后执行的函数
                callback();                 // 正常情况下是将其他函数当作参数写入
            }                               // 而后调用
        }
        console.log(obj.offsetLeft + ' 1 ' + step);
        obj.style.left = (obj.offsetLeft + step) + 'px';
        console.log(obj.offsetLeft + ' 2 ' + step);
    },1000/60);
};