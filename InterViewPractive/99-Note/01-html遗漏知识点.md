# 1.table标签

```html
  <table border="1">
    <thead>
      <tr>
        <th>Month</th>
        <th>Savings</th>
      </tr>
    </thead>
  
    <tfoot>
      <tr>
        <td>Sum</td>
        <td>$180</td>
      </tr>
    </tfoot>
  
    <tbody>
      <tr>
        <td>January</td>
        <td>$100</td>
      </tr>
      <tr>
        <td>February</td>
        <td>$80</td>
      </tr>
    </tbody>
  </table>
```

加载顺序 thead>tbody>tfoot

长表格被打印时，thead和tfoot可以被打印包含在每张页面上