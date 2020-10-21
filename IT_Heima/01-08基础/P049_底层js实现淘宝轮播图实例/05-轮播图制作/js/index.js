window.addEventListener('load',function(){
    let arrow_l = document.querySelector('.arrow-l');
    let arrow_r = document.querySelector('.arrow-r');
    let focus = document.querySelector('.focus');

    let timer = setInterval(function () {
        arrow_r.click();
    },2000);

    focus.addEventListener('mouseenter',function(){
        arrow_l.style.display = 'block';
        arrow_r.style.display = 'block';
        clearInterval(timer);
        timer = null;
    });
    focus.addEventListener('mouseleave',function(){
        arrow_l.style.display = 'none';
        arrow_r.style.display = 'none';
        timer = setInterval(function () {
            arrow_r.click();
        },2000);
    });

    let ul = focus.querySelector('ul');
    let ol = focus.querySelector('ol');
    let circle = 0;

    let focusWidth = focus.offsetWidth; // 721

    // 根据ul->li的节点数量生成ol->li
    for(var i=0;i<ul.children.length;i++){
        // 创建并添加li到ol中
        var li = document.createElement('li');
        ol.appendChild(li);
        li.setAttribute('data-index',i+'');
        li.addEventListener('click',function () {
            animate(ul,-i * focusWidth);
            circle = i;
        });
    };

    // 默认选中第一个
    ol.children[0].className = 'current';

    // 修改选中的小圆点
    function set_circle(circle_arg){
        for(let j=0;j<ol.children.length;j++){
            ol.children[j].className = '';
        }
        ol.children[circle_arg].className = 'current';
    }
    // 深复制第一个节点添加到ul的最后
    let first_ul_li_copy = ul.children[0].cloneNode(true);
    ul.appendChild(first_ul_li_copy);


    // 设置节流阀,防止因为点击过快导致图片动画异常
    let flag = false;
    arrow_r.addEventListener('click',function () {
        if(flag){
            flag = true;
            circle++;
            // 这里需要在执行到最后一张之后有一个动画，
            // 然后回调函数的主要作用是让其无缝衔接
            animate(ul,-circle * focusWidth,function () {
                flag = true;
                if(circle >= ol.children.length){
                    ul.style.left = 0 + 'px';
                    circle = 0;
                    ol.children[circle].className = 'current';
                }
            });
            circle = circle < 0 ? ol.children.length-1:circle;
            set_circle(circle);
        }

    });

    arrow_l.addEventListener('click',function () {
        if(flag){
            flag = true;
            circle--;
            if(circle <= -1){
                circle = ol.children.length -1;
                ul.style.left = -ol.children.length * focusWidth + 'px';
            }
            animate(ul,-circle * focusWidth,function () {
                flag = false;
            });
            set_circle(circle);
        }

    });



})