window.onload = function () {
    // 禁用提交按钮
    var frmContact = document.getElementById("frmContact");

    //一，获取手机号格式验证
    /*
    onfocus 在焦点上时的事件 onblur 离开焦点触发
    --当鼠标离开input焦点时，监测数值，格式正确，显示手机号正确
    */
    var phone = document.getElementsByName('phone');
    //获取所有span
    var span = document.getElementsByTagName("span");

    //获取焦点函数
    phone[0].onfocus = function () {
        this.style.border = "1px solid #ff8e00";
        span[0].className = "display-none";
    };
    //鼠标离开恢复边框
    phone[0].onblur = function () {
        //恢复边框
        this.style.border = "1px solid #999";
        // console.log(phone[0].value);
        var phoneValue = phone[0].value;
        //手机号的正则
        let phoneReg = new RegExp(/^[1][0-9]{10}$/);
        //判断手机号格式是否正确
        var phoneResult = phoneReg.test(phoneValue);
        //1.当输入框为空时
        if (phoneValue == '') {
            //颜色为红
            span[0].style.color = "red";
            //显示
            span[0].className = "display-inline";
            span[0].innerHTML = '手机号不能为空';
            this.style.border = "1px solid red";
            frmContact.setAttribute("disabled", true);
        };
        if (phoneValue != '') {
            if (phoneResult) {
                //2.当输入框内容正确时
                span[0].className = "display-inline";
                //颜色为绿
                span[0].style.color = "yellowgreen";
                //恢复边框
                this.style.border = "1px solid #999";
                //文字改变
                span[0].innerHTML = '手机号可用';
                frmContact.removeAttribute("disabled");

            } else {
                //3.当输入框内容错误时
                span[0].className = "display-inline";
                //颜色为红
                span[0].style.color = "red";
                //恢复边框
                this.style.border = "1px solid red";
                //文字改变
                span[0].innerHTML = '请输入正确手机号';
                frmContact.setAttribute("disabled", true);
            };
        };

    };

    //手机验证码验证
    /*
    一般情况下是通过接口向手机发送短信，服务器校验验证码，判断
    这里我们通过随机数，随机一个四位数的随机数，校验是否和随机数相同
    */
    //获取验证码按钮

    //span[1]
    var button = document.getElementsByTagName("button");
    //
    button[0].onclick = function () {
        //生成四位随机数
        function rendomf() {
            var randomfour = Math.floor(Math.random() * (9999 - 1000) + 1000);
            return randomfour;
        };
        var randomf = rendomf();
        // console.log(randomf);
        span[1].className = "display-inline";
        span[1].innerHTML = randomf;
    };

    //获取短信验证
    var code = document.getElementById("code");
    //短信框
    code.onfocus = function () {
        this.style.border = "1px solid #ff8e00";
        span[2].className = "display-none";
    };
    code.onblur = function () {
        //获取短信框的值
        var codeValue = code.value;
        // console.log(codeValue);
        //1.当输入框为空时
        if (codeValue == '') {
            //颜色为红
            span[2].style.color = "red";
            //显示
            span[2].className = "display-inline";
            span[2].innerHTML = '请输入短信验证码';
            this.style.border = "1px solid red";
            frmContact.setAttribute("disabled", true);

        };
        if (codeValue != '') {
            // console.log("你好");
            if (codeValue == span[1].innerHTML) {
                //2.当输入框内容正确时
                span[2].className = "display-inline";
                //颜色为绿
                span[2].style.color = "yellowgreen";
                //恢复边框
                this.style.border = "1px solid #999";
                //文字改变
                span[2].innerHTML = '验证码正确';
                frmContact.removeAttribute("disabled");

            } else {
                //3.当输入框内容错误时
                span[2].className = "display-inline";
                //颜色为红
                span[2].style.color = "red";
                //恢复边框
                this.style.border = "1px solid red";
                //文字改变
                span[2].innerHTML = '验证码错误';
                frmContact.setAttribute("disabled", true);
            };

        };
    };

    //密码强度验证
    /* 
    根据正则判断用户输入的密码强度
    键盘监听事件实时获取用户输入的value值
    返回的级别，返回长度多少就亮几个灯，改变背景颜色
    
    */
    var password = document.getElementById("password");
    var val = password.value;
    //四个级别
    // var aStr = ["弱", "中", "强", "安全"];
    //获取b标签
    var tipsB = document.getElementById("tips").getElementsByTagName("b");
    //用户输入内容判断
    function checkStrong(val) {
        var modes = 0;
        if (val.length < 6) { return 0 };//如果密码长度小于6，安全性低
        if (/\d/.test(val)) modes++;//判断全是数字
        if (/[a-z]/.test(val)) modes++//判断全是小写字母
        if (/[A-Z]/.test(val)) modes++//判断全是大写字母
        if (/\W/.test(val)) modes++//判断特殊字符
        if (val.length > 20) return 4;
        return modes;
    };

    //操作密码框
    //焦点的获取
    password.onfocus = function () {
        password.style.border = "1px solid #ffbe00";
    };
    password.onblur = function () {
        password.style.border = "1px solid #aaa";
        // tipsB
        if (password.value == '') {
            for (let j = 0; j < tipsB.length; j++) {
                tipsB[j].style.backgroundColor = "#EEEEEE";
                frmContact.setAttribute("disabled", true);
            };
        };


    };
    //键盘的监听

    password.onkeyup = function () {
        //获取用户输入的内容
        var passValue = password.value;
        //执行函数判断用户输入的内容
        var num = checkStrong(passValue);

        // console.log(num);
        //获取下方span

        // 根据返回值给b标签添加颜色
        switch (num) {
            case 0:
                break;
            case 1:
                tipsB[0].style.backgroundColor = "red";
                // tipsB[0].innerHTML = aStr[num - 1];
                break;
            case 2:
                tipsB[0].style.backgroundColor = "yellow";
                tipsB[1].style.backgroundColor = "yellow";
                // tipsB[0].innerHTML = aStr[num - 1];
                break;
            case 3:
                for (var i = 0; i < 3; i++) {
                    tipsB[i].style.backgroundColor = "green";
                    // tipsB[i].innerHTML = aStr[num - 1];
                };
                break;
            case 4:
                for (var i = 0; i < 4; i++) {
                    tipsB[i].style.backgroundColor = "green";
                    // tipsB[i].innerHTML = aStr[num - 1];
                };
                break;
        };
    };


    //确认密码输入模块
    //获取确认密码的输入框
    var passRepeat = document.getElementById("passrepeat");
    //获取确认输入密码的value值
    // var passRepeatValue = passRepeat.value;

    //下面的span为 span[3]
    //当前焦点时
    passRepeat.onfocus = function () {
        //改变边框
        this.style.border = "1px solid #ffbe00";
        //隐藏提示
        span[3].className = "display-none";
    };
    //失去焦点时
    passRepeat.onblur = function () {
        passRepeat.style.border = "1px solid #aaa"
        var passRepeatValue = passRepeat.value;
        var passWordValue = password.value;
        if (passRepeatValue == '') {
            this.style.border = "1px solid red";
            span[3].style.color = "red";
            span[3].className = "displayinline";
            span[3].innerHTML = "再次填写密码";
            frmContact.setAttribute("disabled", true);
        }
        if (passRepeatValue != '') {
            if (passRepeatValue != passWordValue) {
                this.style.border = "1px solid red";
                span[3].style.color = "red";
                span[3].className = "displayinline";
                span[3].innerHTML = "两次填写的密码不匹配！"
            } else {
                span[3].style.color = "green";
                span[3].className = "displayinline";
                span[3].innerHTML = "两次填写的密码匹配";
                frmContact.removeAttribute("disabled");
            };
        }

    };

    //监听按钮被点击
    frmContact.onclick = function () {
        //将数据通过ajax发送到php后台
        //如果信息有空的，禁止点击确认注册
        if (phone[0].value == "" || code.value == "" || password.value == "" || passrepeat.value == "") {
            alert("请填写信息后再注册");
        } else {
            //跳转页面
            window.location.href = "./login.html?phone=" + phone[0].value + "&pass=" + password.value;
        }
    };
}
