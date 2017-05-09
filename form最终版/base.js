$(function () {
    //进来就获取焦点
    $("#input1").trigger("focus", function () {
    });
    //设置输入框1获取焦点事件
    $("#input1").blur(function () {
        //获取刚输入的内容，若为空，则让他“请输入昵称
        var val1 = $("#input1").val();
        //若不为空就判断输入是否合法
        if (val1 == "") {
            $(this).next().text("请输入昵称").css("color", "red");
        } else if (/^[(\u4e00-\u9fa5)|(A-Za-z)]+[0-9]*$/.test(val1)) {
            $(this).next().text("");
            return;
        } else {
            $(this).next().text("您输入的昵称不正确，请再次输入!!!").css("color", "red");
        }
    });
    //设置输入框2获取焦点事件
    $("#input2").blur(function () {
        //获取刚输入的内容，若为空，则让他“请输入密码
        var val2=$(this).val();
        console.log(val2);
        //长度大于6小于12 的才判断，否则另外判断
        console.log(this.value.length);
        if ( this.value.length> 6 && this.value.length< 12) {
            if (/^[A-Za-z0-9_-]+$/.test(val2)) {
                $(this).next().text("");
                return;
            } else {
                $(this).next().text("您输入的密码不正确，请再次输入!!!").css("color", "red");
            }
        } else {//长度小于6或大于16
            //若为空，就让它输入
            if (val2.length == 0) {
                $(this).next().text("请输入密码").css("color", "red");
            } else {
                //不为空，但长度太短或者太长，就提示
                $(this).next().text("您输入的密码长度不正确，请再次输入!!!").css("color", "red");
            }
        }
    });
    //设置输入框3获取焦点事件
    $("#input3").blur(function () {
    //判断是否跟上次输入的一样，不一样就输入错误
        //获取输入框2 的值
        var val2 = $("#input2").val();
        //获取输入框3的值
        var val3 = $("#input3").val();
        //输入值为空提示
        if(val3==""){
            $(this).next().text("请再次输入密码").css("color", "red");
        }else if(val2===val3){
            //输入值等于上次的值就不提示
                $(this).next().text("");
                return;
            }else{
            //输入值不等于上次值，就提示
            $(this).next().text("请输入的有误，请重新设置密码").css("color", "red");
        }


    });
    //设置输入框4获取焦点事件
    $("#input4").blur(function () {
        //获取输入框4的值
        var val4= $("#input4").val();
        if(/0?(13|14|15|18)[0-9]{9}/.test(val4)){
            //输入值格式正确就不提示
            $(this).next().text("");
            return;
        }else{
            if(val4==""){
                $(this).next().text("请输入您的手机号码").css("color", "red");
            }else{
                $(this).next().text("请输入的有误，请重新输入").css("color", "red");
            }

        }
    });
});
