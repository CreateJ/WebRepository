$(function () {
    comSum();
    // 实现全选功能
    $('.checkall').change(function () {
        var ischeck = $(this).prop('checked');
        $('.checkall').prop('checked',ischeck);
        $('.j-checkbox').prop('checked',ischeck);

        // 全选的勾选状况改变的时候，修改全部项目
        if(ischeck){
            $('.cart-item').addClass('check-cart-item');
        }else {
            $('.cart-item').removeClass('check-cart-item');
        }
        comSum()
    });

    // 当选中个数等于元素个数的时候，两个checkall选项自动选上
    $('.j-checkbox').change(function () {
        // 勾选情况改变的时候，改变选中的背景效果
        if ($(this).prop('checked')){
            $(this).parent().parent().addClass('check-cart-item');
        }else{
            $(this).parent().parent().removeClass('check-cart-item');
        }
        // 检测时是否全部选中，是则讲全选按钮的勾选状态改为全选，反之取消
        if($('.j-checkbox:checked').length < $('.j-checkbox').length){
            $('.checkall').prop('checked',false);
        } else {
            $('.checkall').prop('checked',true);

        }
        comSum()
    });

    // 加减购物车功能
    $('.decrement').click(function () {
        var index = $(this).parent('.quantity-form').parent('.p-num').parent('.cart-item').index();
        var num = parseInt($(this).siblings('.itxt').val());
        if(num > 1){
            $(this).siblings('.itxt').val(--num + '');
            comSmallSum(index);
            comSum();
        }
    });
    $('.increment').click(function () {
        var index = $(this).parent('.quantity-form').parent('.p-num').parent('.cart-item').index();
        var num = parseInt($(this).siblings('.itxt').val());
        $(this).siblings('.itxt').val(++num);
        comSmallSum(index);
        comSum();
    });

    // 直接修改数量
    $('.itxt').change(function () {
        var num = parseInt($(this).val());
        if(num < 1){
            alert('请输入大于0的整数！');
            $(this).val('1');
        }
        var index = $(this).parent('.quantity-form').parent('.p-num').parent('.cart-item').index();
        comSmallSum(index);
        comSum();
    })

    // 删除按钮
    $('.p-action a').click(function () {
        $(this).parent().parent().remove();
    })

    // 单间商品价格小计
    function comSmallSum(index) {
        var price = parseFloat($('.p-price').eq(index).text().split('￥')[1]);
        var num = $('.itxt').eq(index).val();
        $('.p-sum').eq(index).text('￥'+(num * price).toFixed(2));
    }
    
    // 计算购物车商品价格
    function comSum() {
        var price_sum = 0;
        var num_sum = 0;
        $('.p-sum').each(function (i,element) {
            if($(element).siblings('.p-checkbox').children('.j-checkbox').prop('checked')){
                price_sum += parseFloat($(element).text().split('￥')[1]);
            }
        });
        $('.itxt').each(function (i,element) {
            if ($(element).parent().parent().siblings('.p-checkbox').children('.j-checkbox').prop('checked'))
            num_sum += parseInt($(element).val())
        });
        $('.price-sum').children('em').text('￥'+price_sum.toFixed(2));
        $('.amount-sum').children('em').text(num_sum);
    }
})