window.addEventListener('load',function (e) {
    let preview_img = document.querySelector('.preview_img');
    let mask = document.querySelector('.mask');
    let big = document.querySelector('.big');
    let bigImg = big.querySelector('.bigImg');
    let preX = 0;
    let preY = 0;

    preview_img.addEventListener('mousemove',function (e) {
        mask.style.display = 'block';
        big.style.display = 'block';
        preX = e.pageX - preview_img.parentNode.parentNode.offsetLeft;
        preY = e.pageY - preview_img.parentNode.parentNode.offsetTop;
        if (preX < 150){preX = 150;}
        if (preY < 150){preY = 150;}
        if (preX > 250){preX = 246;}
        if (preY > 250){preY = 246;}
        mask.style.left = preX - 150 + 'px';
        mask.style.top = preY - 150 + 'px';
        bigImg.style.left = parseInt(mask.style.left) * (-3)  +'px';
        bigImg.style.top = parseInt(mask.style.top) * (-3)  +'px';
    });

    preview_img.addEventListener('mouseout',function (e) {
        mask.style.display = 'none';
        big.style.display = 'none';
    })
});



