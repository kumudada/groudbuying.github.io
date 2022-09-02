window.onload = function () {
    // 页头的下拉菜单

    // 获取dropdown
    var dropdown = document.getElementById("dropdown");
    // 获取dropdown下的li
    var dropdownLi = dropdown.getElementsByTagName("li");
    // console.log(dropdown);
    // console.log(dropdownLi);

    for (let i = 0; i < dropdownLi.length; i++) {
        if (i == 1) {
            continue
        } else {
            dropdownLi[i].onmouseover = function () {
                this.classList.add("show");
            };
            dropdownLi[i].onmouseout = function () {
                this.classList.remove("show");
            };
        }

    };

    // 详细分类中的显示
    var dropright = document.getElementById("dropright");
    var droprightLi = document.getElementsByTagName("li");
    for (let i = 0; i < droprightLi.length; i++) {
        droprightLi[i].onmouseover = function () {
            this.classList.add("show");
        };
        droprightLi[i].onmouseout = function () {
            this.classList.remove("show");
        };
    };

    //获取内容盒子
    var items = document.querySelectorAll(".item");//图片
    // 获取园点
    var points = document.querySelectorAll(".point")//点
    // 左侧按钮
    var left = document.getElementById("leftBtn");
    // 右侧按钮
    var right = document.getElementById("rightBtn");
    // 整个盒子
    var all = document.querySelector(".wrap")
    // 两个定时器
    var index = 0;
    var time = 0;//定时器跳转参数初始化




    //每次运行前先清除重置class
    //清除active方法 包装函数
    var clearActive = function () {
        for (i = 0; i < items.length; i++) {
            items[i].className = 'item';
        }
        for (j = 0; j < points.length; j++) {
            points[j].className = 'point';
        }
    }

    //改变active方法
    var goIndex = function () {
        //清除
        clearActive();
        //初始化时默认为第一个盒子
        items[index].className = 'item active';
        points[index].className = 'point active'
    }
    //左按钮事件
    var goLeft = function () {
        // 如果
        if (index == 0) {
            index = 4;
        } else {
            index--;
        }
        goIndex();
    }

    //右按钮事件
    var goRight = function () {
        if (index < 4) {
            index++;
        } else {
            index = 0;
        }
        goIndex();
    }


    //绑定点击事件监听
    left.addEventListener('click', function () {
        goLeft();
        time = 0;//计时器跳转清零
    })

    right.addEventListener('click', function () {
        goRight();
        time = 0;//计时器跳转清零
    })

    for (i = 0; i < points.length; i++) {
        points[i].addEventListener('click', function () {
            var pointIndex = this.getAttribute('data-index')
            index = pointIndex;
            goIndex();
            time = 0;//计时器跳转清零
        })
    };
    //计时器
    var timer;
    function play() {
        timer = setInterval(() => {
            time++;
            if (time == 20) {
                goRight();
                time = 0;
            }
        }, 100)
    }
    play();
    //移入清除计时器
    all.onmousemove = function () {
        clearInterval(timer)
    };
    //移出启动计时器
    all.onmouseleave = function () {
        play();
    };


    //猫眼电影效果
    //1.鼠标移入显示左右箭头
    //获取整个盒子
    var movidShow = document.getElementById("movidShow");
    //获取两个按钮
    var moveLeft = document.getElementsByClassName("btn-pre");
    var moveRight = document.getElementsByClassName("btn-next");
    //插入鼠标移入事件
    //移入显示
    movidShow.onmouseover = function () {
        for (let i = 0; i < moveLeft.length; i++) {
            moveLeft[i].style.display = "block";
        };
        for (let j = 0; j < moveRight.length; j++) {
            moveRight[j].style.display = "block";
        };
    };
    //移出隐藏
    movidShow.onmouseout = function () {
        for (let i = 0; i < moveLeft.length; i++) {
            moveLeft[i].style.display = "none";
        };
        for (let j = 0; j < moveRight.length; j++) {
            moveRight[j].style.display = "none";
        };
    };

    // id=movieTab 
    //2.鼠标移入即将上映显示相应的tab栏
    // 现在热映 nowHotMovie   即将上映 commingMovie
    //获取tab栏
    var movieTab = document.getElementById('movieTab');
    //获取li
    var movieTabLi = movieTab.getElementsByTagName("li");
    //获取两个不同的小tab
    var nowHotMovie = document.getElementById("nowHotMovie");
    var commingMovie = document.getElementById("commingMovie");

    //获取两个小三角
    var sanjiao = document.getElementsByClassName("sanjiao");

    //鼠标移入相应li
    // console.log(movieTabLi);
    // 正在热映
    movieTabLi[1].onmousemove = function () {
        nowHotMovie.style.display = "block";
        commingMovie.style.display = "none";
        //小三角
        sanjiao[0].style.display = "block";
        sanjiao[1].style.display = "none";

    };
    // 即将上映
    movieTabLi[2].onmousemove = function () {
        nowHotMovie.style.display = "none";
        commingMovie.style.display = "block";
        //小三角
        sanjiao[0].style.display = "none";
        sanjiao[1].style.display = "block";
    };

    // 3.电影滑动
    //获取两个按钮,上面已经获取过了
    //moveLeft[0]  moveRight[0]
    //获取电影内容盒子
    var sliderContent = document.getElementsByClassName('slider-content');
    //初始化x轴的值
    var x = 0;
    for (var m = 0; m < 2; m++) {
        moveRight[m].onclick = function () {
            for (var i = 0; i < 2; i++) {

                // sliderContent[i].
                x = x - 1165
                if (x < -1165) { x = -1165 };
                sliderContent[i].style.left = x + 'px';
            };
        };
        moveLeft[m].onclick = function () {
            for (var i = 0; i < 2; i++) {

                // sliderContent[i].
                x = x + 1165
                if (x > 0) { x = 0 };
                sliderContent[i].style.left = x + 'px';
            };
        };
    };


    //推荐民宿的显示和隐藏
    var hotelTab = document.getElementById('hotel-tab');
    var hotelTabLi = hotelTab.getElementsByTagName('li');
    var container = document.getElementById('container');
    var containerDiv = container.getElementsByClassName('tablist');

    for (var i = 0; i < hotelTabLi.length; i++) {
        hotelTabLi[i].index = i;
        hotelTabLi[i].onmouseover = function () {
            for (var j = 0; j < hotelTabLi.length; j++) {
                hotelTabLi[j].className = '';
                containerDiv[j].style.display = 'none';
            }
            this.className = 'act';
            containerDiv[this.index].style.display = 'block';
        }
        for (var m = 1; m < hotelTabLi.length; m++) {
            hotelTabLi[m].className = '';
            containerDiv[m].style.display = "none";
        }
    }

}