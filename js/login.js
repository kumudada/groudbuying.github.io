
//获取提交按钮
var loginSubmit = document.getElementById("submit");


//获取url
//账号和密码信息在网址里,这里是为了模拟上传过程，实际开发使用数据库的id
var str = location.href;
var strs;
//获取用户注册页面传递的信息
function getParamByUrl(url) {
    var theRequest = new Object();
    //indexOf 使用这个方法判断url信息中是否有需要的字符
    var index = url.indexOf("?");
    //如果监测到指定字符，就不会返回-1
    if (index != -1) {
        var str = url.substr(index + 1);
        strs = str.split("&");
        // console.log(strs);
        for (var i = 0; i < strs.length; i++) {
            theRequest[strs[i].split("=")[0]] = (strs[i].split("=")[1]);
        }
    }
    return theRequest;
}
console.log(getParamByUrl(str));
//调用函数 
var params = getParamByUrl(str);
//用户名是否匹配
//获取用户名的值
var userName = document.getElementById("username");
var userPass = document.getElementById("userpass");
//用户名外层div
var userNameDiv = userName.parentNode;
userName.onfocus = function () {
    userNameDiv.style.border = "1px solid #ffbe00";
}
userName.onblur = function () {
    userNameDiv.style.border = "1px solid #aaa";
    if (userName.value != params["phone"]) {
        userPass.style.color = "red";
        userPass.className = "display-inline";
        userPass.innerHTML = "手机号码不正确";
        loginSubmit.setAttribute("disabled", true);
        userNameDiv.style.border = "1px solid red";
    };
    if (userName.value == params["phone"]) {
        userPass.style.color = "yellowgreen";
        userPass.className = "display-inline";
        userPass.innerHTML = "手机号码正确";
        loginSubmit.removeAttribute("disabled");
    };
}
//密码监测

var passWord = document.getElementById("password");
var passTo = document.getElementById("passto");
//操作上方一致
var passWordDiv = passWord.parentNode;
passWord.onfocus = function () {
    passWordDiv.style.border = "1px solid #ffbe00";
}
passWord.onblur = function () {
    userNameDiv.style.border = "1px solid #aaa";
    if (passWord.value != params["phone"]) {
        passTo.style.color = "red";
        passTo.className = "display-inline";
        passTo.innerHTML = "密码不正确";
        loginSubmit.setAttribute("disabled", true);
        passWordDiv.style.border = "1px solid red";
    };
    if (passWord.value == params["pass"]) {
        passTo.style.color = "yellowgreen";
        passTo.className = "display-inline";
        passTo.innerHTML = "密码正确";
        loginSubmit.removeAttribute("disabled");
    };
}

//点击提交信息到index.html
loginSubmit.onclick = function () {
    if (passWord.value == '' || userName.value == '') {
        alert("请填写信息后登陆");
    } else {
        //跳转到index
        window.location.href = "./index.html?username=" + userName.value;
    };
};







