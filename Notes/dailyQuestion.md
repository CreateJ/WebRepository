# 描述

本文档用于记录leetcode每日一题的做题情况。

# day200713：350.两个数组的交集II

**描述**

给定两个数组，编写一个函数来计算它们的交集。 

**示例 1：**

```
输入：nums1 = [1,2,2,1], nums2 = [2,2]
输出：[2,2]
```

**示例 2:**

```
输入：nums1 = [4,9,5], nums2 = [9,4,9,8,4]
输出：[4,9]
```

**思路：**

1. 分别使用两个字典统计数字出现的次数
2. 遍历其中一个字典，寻找另一个字典中是否出现相同相同的key
3. 若出现，对比权值，按照权值小的次数添加进resStr数组中

**实现：**

```javascript
var intersect = function(nums1, nums2) {
    var dic1 = new Array();
    var dic2 = new Array();
    for(var a in nums1){
        var s = nums1[a]+'';
        if (dic1[s] == undefined){ 	//若从未出现过，初始化这个键值对
            dic1[s] = '1';
        }else{	//若出现过，则将其对应的value转换成数字+1再转成字符串储存
            dic1[s] = (parseInt(dic1[s])+1)+'';
        }
    }
    for(var b in nums2){
        var s = nums2[b]+'';
        if (dic2[s] == undefined){
            dic2[s] = '1';
        }else{
            dic2[s] = (parseInt(dic2[s])+1)+'';
        }
    }
    
    var resArr=[];
    for(var key2 in dic2){
        if(dic1[key2] != undefined){
            // 比较相同的键值在两个字典中对应的值大小，
            // 取小的作为次数，将键加入数组中
            if(parseInt(dic1[key2]) >= parseInt(dic2[key2])){
                for(var i = 0; i < parseInt(dic2[key2]);i++){
                    resArr.push(parseInt(key2));
                }
            }else{
                for(var i = 0; i < parseInt(dic1[key2]);i++){
                    resArr.push(parseInt(key2));
                }
            }
        }
    }
    return resArr;
};
```

# day200714：120.三角形最小路径和

**题目描述：**

给定一个三角形，找出自顶向下的最小路径和。每一步只能移动到下一行中相邻的结点上。

相邻的结点 在这里指的是 下标 与 上一层结点下标 相同或者等于 上一层结点下标 + 1 的两个结点。

例如，给定三角形：

```
[
     [2],
    [3,4],
   [6,5,7],
  [4,1,8,3]
]
```

自顶向下的最小路径和为 `11`（即，**2** + **3** + **5** + **1** = 11）。

**思路：**

自下而上，可以更好的推进最小路径，否则需要多次判断。

1. 深复制一个与三角形最后一行的数组resArr，用于保存当前的路径权值
2. 按照顺序计算两个相邻路径长度，取小的与上层路径长度相加并覆盖到resArr中。
3. 遍历到倒数第二行停止，获取resArr第一个元素，返回

**实现：**

```javascript
var minimumTotal = function(triangle) {
    var resArr = [];
        for(var i = 0; i < triangle.length; i++){
            resArr[i]=triangle[triangle.length-1][i];
        }

        for(var i = triangle.length-1; i > 0; i--){
            for(var j = 0; j < i; j++){
                // 比较当前路径长度，取较小的与上层相加并覆盖
                if (resArr[j] <= resArr[j+1]){
                    resArr[j] = resArr[j] + triangle[i-1][j];
                }else{
                    resArr[j] = resArr[j+1] + triangle[i-1][j];
                }
            }
        }

        return resArr[0];
};
```

