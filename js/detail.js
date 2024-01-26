window.addEventListener('load', function () {
    var box = this.document.querySelector('.sK_container')
    var preview = document.querySelector('.sk_bd_box_img');
    var mask = document.querySelector('.mask');
    var big = document.querySelector('.big');

    preview.addEventListener('mouseover', function () {
        mask.style.display = 'block';
        big.style.display = 'block';
    })
    preview.addEventListener('mouseout', function () {
        mask.style.display = 'none';
        big.style.display = 'none';
    })
    preview.addEventListener('mousemove', function (e) {
        var x = e.pageX - this.offsetLeft - box.offsetLeft;
        var y = e.pageY - this.offsetTop - box.offsetTop;
        console.log(x,y);
        // console.log(this.offsetLeft,this.offsetTop);// 

        var maskMax = preview.offsetWidth - mask.offsetWidth;
        var maskX = x - mask.offsetWidth / 2;
        var maskY = y - mask.offsetHeight / 2;
        if (maskX <= 0) {
            maskX = 0;
        } else if (maskX >= maskMax) {
            maskX = maskMax;
        }
        if (maskY <= 0) {
            maskY = 0;
        } else if (maskY >= maskMax) {
            maskY = maskMax;
        }
        mask.style.left = maskX + 'px';
        mask.style.top = maskY + 'px';
        var bigIMg = document.querySelector('.bigImg');
        // 大图片最大移动距离
        var bigMax = bigIMg.offsetWidth - big.offsetWidth;
        // 大图片的移动距离 X Y
        var bigX = maskX * bigMax / maskMax;
        var bigY = maskY * bigMax / maskMax;
        bigIMg.style.left = -bigX + 'px';
        bigIMg.style.top = -bigY + 'px';
    })
})