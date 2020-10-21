# let 与 const 关键字

let能享有块级作用域的特点，一个变量在同一个作用域中无法被let声明2次

const声明的变量一旦创建就必须初始化，且后续无法修改

tips： const声明的复杂对象，只能保证指向的地址不变，地址所存储内容无法保证不被修改

## 三个高级js数组函数

```javascript
// filter： 过滤
new_arr = old_arr.filter(fun(n){
	// 逻辑 return true 时，将n加入new_arr,否则不加入
})
// map： 计算
new_arr = old_arr.map(fun(n){
	// return 计算结果，将计算结果push到new_arr中
})
// reduce: 汇总
res = old_arr.reduce(fun(preValue,n){
	// return preValue和n的计算逻辑，例如preValue+n,计算数组中数字的总和
},0)//这里0为preValue的默认值
```

