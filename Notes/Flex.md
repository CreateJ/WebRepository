# 备注：

flex布局会让float，vertical-align，clear失效

# 1.骰子布局



## 1个骰子

**html通用部分**

```html
<div class="box parent">
  <div class="point son"></div>
</div>
```

**css通用部分**

```css
* {
  margin: 0;
  padding: 0;
}
.box {
  width: 300px;
  height: 300px;
  margin: 200px auto;
  border-radius: 10px;
  border-top: 1px solid transparent;
  background: lightblue;
}
.point {
  width: 60px;
  height: 60px;
  margin: 20px;
  border-radius: 50%;
  background: pink;
}
```

### 左上

```css
.parent{
  display: flex;
}
```

![image-20200730164118406](C:\Users\王二蛋\AppData\Roaming\Typora\typora-user-images\image-20200730164118406.png)

### 上中

```css
.parent{
  display: flex;
  justify-content: center;
}
```

![image-20200730164416769](C:\Users\王二蛋\AppData\Roaming\Typora\typora-user-images\image-20200730164416769.png)

### 右上

```css
/* 写法1 */
.parent{
  display: flex;
  flex-direction: row-reverse;
}
/* 写法2 */
.parent{
  display: flex;
  justify-content: flex-end;
}

```

![image-20200730170343992](C:\Users\王二蛋\AppData\Roaming\Typora\typora-user-images\image-20200730170343992.png)

### 左中

```css
.parent{
  display: flex;
  align-items: center;
}
```

![image-20200730170622066](C:\Users\王二蛋\AppData\Roaming\Typora\typora-user-images\image-20200730170622066.png)

### 中

```css
.parent{
  display: flex;
  justify-content: center;
  align-items: center;
}
```

![image-20200730170733605](C:\Users\王二蛋\AppData\Roaming\Typora\typora-user-images\image-20200730170733605.png)

### 右中

```css
.parent{
  display: flex;
  justify-content: flex-end;
  align-items: center;
}
```

![image-20200730170837790](C:\Users\王二蛋\AppData\Roaming\Typora\typora-user-images\image-20200730170837790.png)

### 左下

```css
.parent{
  display: flex;
  justify-content: flex-start;
  align-items: flex-end;
}
```

![image-20200731091553282](C:\Users\王二蛋\AppData\Roaming\Typora\typora-user-images\image-20200731091553282.png)

### 中下

```css
.parent{
  display: flex;
  justify-content: center;
  align-items: flex-end;
}
```

![image-20200731093309139](C:\Users\王二蛋\AppData\Roaming\Typora\typora-user-images\image-20200731093309139.png)

### 右下

```css
.parent{
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
}
```

![image-20200731093410746](C:\Users\王二蛋\AppData\Roaming\Typora\typora-user-images\image-20200731093410746.png)

## 2个骰子

**css通用部分**

```css
* {
  margin: 0;
  padding: 0;
}
.box {
  width: 300px;
  height: 300px;
  margin: 200px auto;
  border-radius: 10px;
  border-top: 1px solid transparent;
  background: lightblue;
}
.point {
  width: 60px;
  height: 60px;
  margin: 20px;
  border-radius: 50%;
  background: pink;
}
```

**html通用部分**

```html
<div class="box parent">
  <div class="point son"></div>
  <div class="point son"></div>
</div>
```

### 上侧平分

![image-20200731095704640](C:\Users\王二蛋\AppData\Roaming\Typora\typora-user-images\image-20200731095704640.png)

```css
.parent{
  display: flex;
  /* 中间填充空格 */
  justify-content: space-between;
}
```

### 左侧平分

![image-20200731095937041](C:\Users\王二蛋\AppData\Roaming\Typora\typora-user-images\image-20200731095937041.png)

```css
.parent{
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
```

