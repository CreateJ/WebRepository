$(function(){
  load();

  //1.添加待办事项
  $('.form-control').on('keydown',function (event){
    if(event.keyCode === 13){
      if($(this).val() != ''){
        var local = getData();
        local.push({thing:$(this).val(),done:false});
        console.log(local);
        setData(local);
        load();
        $(this).val('');
      }else {
        alert('输入为空，请重新输入！');
      }
    }
  })

  //2.删除
  $('ul').on('click','li a',function (){
    // 这里$(this)指向a
    var data = getData();
    var index = $(this).attr('data-id');
    console.log(index);
    data.splice(index,1);
    setData(data);
    load();
  })

  // 3.将正在进行事件移到已经完成
  $('ul').on('click','input',function (){
    var data = getData();
    var index = $(this).siblings('a').attr('data-id');
    data[index].done = $(this).prop('checked');
    setData(data);
    load();
  })

  //初始化加载
  function load(){
    var data = getData();
    $('ul').empty();
    var doingCount = 0;
    var doneCount = 0;
    $.each(data, function (i,n){
      if(n.done === false){
        $('.doing-list').prepend('<li class="test li-doing">\n' +
            '          <input type="checkbox">\n' +
            '          <span>'+n.thing+'</span>\n' +
            '          <a data-id="'+i+'" href="javascript:;">\n' +
            '            <img src="img/delete.png" alt="" class="float-right delete-icon">\n' +
            '          </a>\n' +
            '        </li>')
        doingCount++;
      }else {
        $('.done-list').prepend('<li class="test li-done">\n' +
            '          <input type="checkbox" checked>\n' +
            '          <span>'+n.thing+'</span>\n' +
            '          <a data-id="'+i+'" href="javascript:;">\n' +
            '            <img src="img/delete.png" alt="" class="float-right delete-icon">\n' +
            '          </a>\n' +
            '        </li>');
        doneCount++;
      }
    })
    $('.doing-count').text(doingCount);
    $('.done-count').text(doneCount);
  }

  //获取数据
  function getData(){
    var json_data = localStorage.getItem('todolist');
    if(json_data != null){
      return JSON.parse(json_data);
    }else {
      return [];
    }
  }

  // 保存数据
  function setData(data){
    localStorage.setItem('todolist',JSON.stringify(data));
  }
})