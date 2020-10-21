$(function() {
  load();
  $('#title').on('keydown',function (event){
    if(event.keyCode === 13){
      if($(this).val() === ''){
        alert('输入值为空，请检查并重新输入');
      }else {
        var local = getDate();
        local.push({title:$(this).val(),done:false});
        saveDate(local);
        load();
        $(this).val('');
       }
    }
  })

  // 渲染加载数据
  function load() {
    // 读取本地存储的数据
    var data = getDate();
    console.log(data);
    // 遍历之前先要清空ol里面的元素内容
    $("ol, ul").empty();
    var todoCount = 0; // 正在进行的个数
    var doneCount = 0; // 已经完成的个数
    // 遍历这个数据
    $.each(data, function(i, n) {
      // console.log(n);
      if (n.done) {
        $("ul").prepend("<li><input type='checkbox' checked='checked' > <p>" + n.title + "</p> <a href='javascript:;' id=" + i + " ></a></li>");
        doneCount++;
      } else {
        $("ol").prepend("<li><input type='checkbox' > <p>" + n.title + "</p> <a href='javascript:;' id=" + i + " ></a></li>");
        todoCount++;
      }

    });
    $("#todocount").text(todoCount);
    $("#donecount").text(doneCount);

  }
})