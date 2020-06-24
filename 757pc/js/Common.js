// 分页数量
var pageCount = 5;

/**
 * 弹出层插件
 * 使用方法: 
 * 开启:MaskUtil.mask();
 * 关闭:MaskUtil.unmask(); 
 *  
 * MaskUtil.mask('其它提示文字...'); 
 */
var MaskUtil = (function(){  
      
    var $mask,$maskMsg;  
      
    var defMsg = '正在处理，请稍待。。。';
    
    function init(){  
        if(!$mask){  
            $mask = $("<div class=\"datagrid-mask mymask\"></div>").appendTo("body");  
        }
        if(!$maskMsg){  
            $maskMsg = $("<div class=\"datagrid-mask-msg mymask\">"+defMsg+"</div>")  
                .appendTo("body").css({'font-size':'12px'});  
        }  
          
        // $mask.css({width:"100%",height:$(document).height()});
		$mask.css({width:"100%",height:$(window).height()});  
          
        // var scrollTop = $(document.body).scrollTop();
		var scrollTop = 0;  
          
        $maskMsg.css({  
            left:( $(document.body).outerWidth(true) - 190 ) / 2  
            ,top:( ($(window).height() - 45) / 2 ) + scrollTop
        });   
                  
    }  
    
    return {  
        mask:function(msg){  
            init();  
            $mask.show();					
            $maskMsg.html(msg||defMsg).show();  
			$(".window-mask").css({"zIndex":9100});			
			$mask.css({"zIndex":9111});
			$maskMsg.css({"zIndex":9112});
        }  
        ,unmask:function(){  
            $mask.hide();  
            $maskMsg.hide();  
			$(".window-mask").css({"zIndex":1});			
			$mask.css({"zIndex":2});
			$maskMsg.css({"zIndex":3});
        }  
    }  
      
}());

// Jquery文本框光标位置插入内容
(function ($) {
    $.fn.extend({
        insertContent: function (myValue, t) {
            var $t = $(this)[0];
            if (document.selection) { // ie
                this.focus();
                var sel = document.selection.createRange();
                sel.text = myValue;
                this.focus();
                sel.moveStart('character', -l);
                var wee = sel.text.length;
                if (arguments.length == 2) {
                    var l = $t.value.length;
                    sel.moveEnd("character", wee + t);
                    t <= 0 ? sel.moveStart("character", wee - 2 * t
                        - myValue.length) : sel.moveStart(
                        "character", wee - t - myValue.length);
                    sel.select();
                }
            } else if ($t.selectionStart
                || $t.selectionStart == '0') {
                var startPos = $t.selectionStart;
                var endPos = $t.selectionEnd;
                var scrollTop = $t.scrollTop;
                $t.value = $t.value.substring(0, startPos)
                    + myValue
                    + $t.value.substring(endPos,
                        $t.value.length);
                this.focus();
                $t.selectionStart = startPos + myValue.length;
                $t.selectionEnd = startPos + myValue.length;
                $t.scrollTop = scrollTop;
                if (arguments.length == 2) {
                    $t.setSelectionRange(startPos - t,
                        $t.selectionEnd + t);
                    this.focus();
                }
            } else {
                this.value += myValue;
                this.focus();
            }
        }
    })
})(jQuery);

/**
 * [is_function 函数是否存在]
 */
function is_function(funcName) {
    try {
        if (typeof(eval(funcName)) == "function") {
            return true;
        }
    } catch(e) {}
    return false;
}

//判读是否有选中的复选框（有则返回用"-"分割的值的字符串）
function ifChecked(chkboxname){
    var myValue = "";
    for (var i = 0; i < document.getElementsByName(chkboxname).length; i++) {
        var e = document.getElementsByName(chkboxname)[i];
        if (e.checked) {
            if (myValue == "") {
                myValue = e.value;
            }
            else {
                myValue = myValue + "," + e.value;
            }
        }
    }
    return myValue;
}

//验证字符串是否只含数字，字母，汉字和下划线 是则返回True 否则返回False
function isUser(str){
	var reg = /[^A-Za-z0-9\u4e00-\u9fa5_]/g;
	if (reg.test(str)) {
		return (false);
	}
	else {
		return (true);
	}
}

// 判断是否为手机号  
function isPoneAvailable (phone) {
	var myreg = /^[1][3,4,5,7,8][0-9]{9}$/;
	if (!myreg.test(phone)) {
		return false;
	} else {
		return true;
	}
}

// 判断是否为电话号码
function isTelAvailable (tel) {
	var myreg = /^(([0\+]\d{2,3}-)?(0\d{2,3})-)(\d{7,8})(-(\d{3,}))?$/;
	if (!myreg.test(tel)) {
		return false;
	} else {
		return true;
	}
}

//设置单选框
function setDxk(chkboxname, theValue){
    var e;
    for (var i = 0; i < document.getElementsByName(chkboxname).length; i++) {
        e = document.getElementsByName(chkboxname)[i];
        if (e.value == theValue) {
            e.checked = true;
        }
    }
}

//设置复选框
function setFxk(theName, theValue){
	var e;
	var chkboxname = theName;
	if (theValue == "") {
		var thelist = '';
		for (var i = 0; i < document.getElementsByName(chkboxname).length; i++) {
			e = document.getElementsByName(chkboxname)[i];
			if (e.checked) {
				if (thelist != '') {
					thelist += ",";
				}
				thelist += e.value;
			}
		}
		document.getElementById(theName).value = thelist;
	}
	else {
		var theArray = theValue.split(",");
		for (var i = 0; i < theArray.length; i++) {
			for (var j = 0; j < document.getElementsByName(chkboxname).length; j++) {
				e = document.getElementsByName(chkboxname)[j];
				if (e.value == theArray[i]) {
					e.checked = true;
				}
			}
		}
	}
}

// 去除HTML
function stripHTML(str) {
    var reTag = /<[^>]*>|<\/[^>]*>/gm;

    return str.replace(reTag,"");
}

/*Cookie操作*/

//两个参数，一个是cookie的名子，一个是值
function SetCookie(name, value){
    var Days = 30; //此 cookie 将被保存 30 天
    var exp = new Date(); //new Date("December 31, 9998");
    exp.setTime(exp.getTime() + Days * 24 * 60 * 60 * 1000);
    document.cookie = name + "=" + escape(value) + ";expires=" + exp.toGMTString()+";path=/";
}

//取cookies函数
function getCookie(name){
    var arr = document.cookie.match(new RegExp("(^| )" + name + "=([^;]*)(;|$)"));
    if (arr != null)
        return unescape(arr[2]);
    return null;
}

//删除cookie
function delCookie(name){
    var exp = new Date();
    exp.setTime(exp.getTime() - 1);
    var cval = getCookie(name);
    if (cval != null)
        document.cookie = name + "=" + cval + ";expires=" + exp.toGMTString()+";path=/";
}

// 顶部搜索
function searchForm(theForm){
    var url = $(theForm).attr('action');
    var param = "str/0_0_0_0_0_0_0";
    if( theForm.keywords.value.length != 0 ){
        param = "str/0_0_0_0_0_0_0_" + theForm.keywords.value;
    }

    window.location.href = url + '/' + param;
}

//全选
function selectAll(theObj,selectObj){
    if( theObj.checked ){
        $(selectObj).prop("checked",true);
    }else{
        $(selectObj).prop("checked",false);
    }
}

/**
 * [ajax_post 异步POST请求]
 */
function ajax_post(url, data, fn){
    layer.confirm('确定操作吗？', {
        btn: ['确定', '取消']
    }, function(){
        loding = layer.load(2, {
            shade: [0.1,'#fff']
        });

        $.ajax({
            url : url,
            type: 'post',
            dataType: 'json',
            data: data,
            success:function(ret){
                layer.close(loding);
                // 是否自定义了回调函数
                if (is_function(fn)) {
                    fn(ret);
                    return;
                }

                layer.msg(ret.msg,{'time':1000});
                if (ret.status == 1) {
                    setTimeout(function(){
                        location.reload();
                    }, 500);
                }
            }
        })
    }, function(){

    });
}

// 书籍评论
function AddComments(ActionUrl,LoginUrl){
    var BookID = $("#BookID").val();
    var theContent = $("#CommentsNeiRong").val();

    if( theContent.length == 0 ){
        layer.alert("请输入评论内容!",{
            "icon":0,
            "title":"提示"
        });
        return false;
    }

    var data = {
        "BookID":BookID,
        "theContent":theContent
    };

    $.ajax({
        url:ActionUrl, //发送地址加随机数
        type:"POST", //发送方式
        data:data,
        dataType: "json",
        async :true, //数据处理方式
        beforeSend:function(){
            MaskUtil.mask();
        },
        success:function(data,textStatus){
            MaskUtil.unmask();
            if(data.status == 1){
                window.location.reload(true);
			}else if(data.status == 3){
                // 登录弹窗
                LoginDialog(LoginUrl);
			}else{
                layer.alert(data.msg,{
                    "icon":0,
                    "title":"提示"
                });
			}
        }
    });
}

// 书籍评论
function AddReplay(ActionUrl,LoginUrl,theObj){
    var RongObj = $(theObj).parent().parent();
    var BookID = $("#BookID").val();
    var pid = RongObj.find("input[name='pid']").val();
    var theContent = RongObj.find("textarea[name='content']").val();

    if( theContent.length == 0 ){
        layer.alert("请输入回复内容!",{
            "icon":0,
            "title":"提示"
        });
        return false;
    }

    var data = {
        "BookID":BookID,
        "pid":pid,
        "theContent":theContent
    };

    $.ajax({
        url:ActionUrl, //发送地址加随机数
        type:"POST", //发送方式
        data:data,
        dataType: 'json',
        async :true, //数据处理方式
        beforeSend:function(){
            MaskUtil.mask();
        },
        success:function(data,textStatus){
            MaskUtil.unmask();
            if( data.status == 1 ){
                window.location.reload(true);
            }else if( data.status == 3 ){
                // 登录弹窗
                LoginDialog(LoginUrl);
            }else{
                layer.alert(data.msg,{
                    "icon":0,
                    "title":"提示"
                });
            }
        }
    });
}

// 充值金额
function rechargeAction(ActionUrl){
    var json = {};
    // 判断是否其他充值
    if( $("#Recharge .Recharge .otherMoney input[name='other']").attr("checked") ){
        json.Money = $("#otherMoney").val(); // 充值金额
        json.payMethod = $("#payMethod").val(); // 支付方式[1支付宝2微信]
        json.theContent = "充值完成"; // 消费内容
        if( $("#otherMoney").val() < 10 ){
            layer.alert("充值金额不得低于10元!",{
                "icon":0,
                "title":"提示"
            });
            return false;
        }
    }else{
        json.Money = $("#isMoney").val(); // 充值金额
        json.payMethod = $("#payMethod").val(); // 支付方式
        json.theContent = "充值完成"; // 消费内容
    }

    // 微信支付申请中
	/*
    if( json.payMethod == 2 ){
        layer.alert("支付申请中,请使用支付宝进行充值!",{
            "icon":0,
            "title":"提示"
        });
        return ;
    }*/

    $.ajax({
        url:ActionUrl, //发送地址加随机数
        type:"POST", //发送方式
        data:json,
        dataType: 'json',
        async :true, //数据处理方式
        beforeSend:function(){
            MaskUtil.mask();
        },
        success:function(data,textStatus){
            MaskUtil.unmask();
			
            if( parseInt(data.status) == 1 ){
                // 跳转
                window.location.href = data.data.backUrl;
            }else {
                layer.alert(data.msg,{
                    "icon":0,
                    "title":"提示"
                });
            }
        }
    });
}

// 收藏处理
function BookFavo(theObj,BookID,ActionUrl,LoginUrl,successCallback){

    // 处理Json
    var json = {
        "BookID":BookID
    };

    $.ajax({
        url:ActionUrl, //发送地址加随机数
        type:"POST", //发送方式
        data:json,
        dataType: 'json',
        async :true, //数据处理方式
        beforeSend:function(){
            MaskUtil.mask();
        },
        success:function(data,textStatus){
            MaskUtil.unmask();
            if( data.status == 1 ){
                // 收藏数累加
                $("#FavoTotal").html( parseInt($("#FavoTotal").html(), 10) + 1 );
                $(theObj).html("已收藏");

                layer.alert(data.msg,{
                    "icon":0,
                    "title":"提示"
                });
                successCallback && successCallback();
            }else if( data.status == 5 ){
                // 收藏数累减
                $("#FavoTotal").html( parseInt($("#FavoTotal").html(), 10) - 1 );
                $(theObj).html("收藏");

                layer.alert(data.msg,{
                    "icon":0,
                    "title":"提示"
                });
                successCallback && successCallback();
            }else if( data.status == 3 ){
                // 登录弹窗
                LoginDialog(LoginUrl);
            } else{
                layer.alert(data.msg,{
                    "icon":0,
                    "title":"提示"
                });
            }
        }
    });
    return false;
}

// 点赞处理
function AgreeAction(theObj,BookID,ActionUrl,LoginUrl){
    // 当前对象
    var theObj = theObj;
    // 点赞、取消点赞
    if( $(theObj).attr("class").indexOf('b1') >= 0 ){
        $(theObj).removeClass("b1");
        $(theObj).html( parseInt($(theObj).html(), 10) - 1 );
    }else{
        $(theObj).addClass("b1");
        $(theObj).html( parseInt($(theObj).html(), 10) + 1 );
    }

    // 处理Json
    var json = {
        "BookID":BookID,
        "commentsID":$(theObj).attr("rel")
    };

    $.ajax({
        url:ActionUrl, //发送地址加随机数
        type:"POST", //发送方式
        data:json,
        dataType: 'json',
        async :true, //数据处理方式
        beforeSend:function(){
            // MaskUtil.mask();
        },
        success:function(data,textStatus){
            // MaskUtil.unmask();
            // 处理成功
            if( data.status == 1 || data.status == 5 ){
                return false;
            }else if( data.status == 3 ){
                // 登录弹窗
                LoginDialog(LoginUrl);
            }else{
                layer.alert(data.msg,{
                    "icon":0,
                    "title":"提示"
                });
            }
        }
    });
    return false;
}

// 投推荐票处理
function TouRecommendedVotesAction(ActionUrl){
    // 处理Json
    var json = {
        "BookID":$("#BookID").val(),
        "ChapterID":$("#ChapterID").val(),
        "MemberID":$("#MemberID").val(),
        "Num":$("#TouRecommendedNum").val()
    };

    if( parseInt(json.Num, 10) <= 0 ){
        layer.alert('投递需大于0',{
            "icon":0,
            "title":"提示"
        });
        return;
    }

    $.ajax({
        url:ActionUrl, //发送地址加随机数
        type:"POST", //发送方式
        data:json,
        dataType: 'json',
        async :true, //数据处理方式
        beforeSend:function(){
            MaskUtil.mask();
        },
        success:function(data,textStatus){
            MaskUtil.unmask();
            if( data.status == 1 ){
                // window.parent.location.href = window.parent.location.href;
                window.parent.location.reload(true);
            }else if( data.status == 10000 ){
                // 登录弹窗
            }else{
                layer.alert(data.msg,{
                    "icon":0,
                    "title":"提示"
                });
            }
        }
    });
}

// 投月票处理
function TouMonthlyTicketsVotesAction(ActionUrl){
    // 处理Json
    var json = {
        "BookID":$("#BookID").val(),
        "ChapterID":$("#ChapterID").val(),
        "MemberID":$("#MemberID").val(),
        "Num":$("#monthlyTicketsNum").val()
    };

    if( parseInt(json.Num, 10) <= 0 ){
        layer.alert('投递需大于0',{
            "icon":0,
            "title":"提示"
        });
        return;
    }

    $.ajax({
        url:ActionUrl, //发送地址加随机数
        type:"POST", //发送方式
        data:json,
        dataType: 'json',
        async :true, //数据处理方式
        beforeSend:function(){
            MaskUtil.mask();
        },
        success:function(data,textStatus){
            MaskUtil.unmask();
            if( data.status == 1 ){
                // window.parent.location.href = window.parent.location.href;
                window.parent.location.reload(true);
            }else if( data.status == 3 ){
                // 登录弹窗
            }else{
                layer.alert(data.msg,{
                    "icon":0,
                    "title":"提示"
                });
            }
        }
    });
}

// 打赏处理[书籍内页]
function book_detailShang(ActionUrl) {
    var wsCount = $("#wsCount").val(); // 打赏金额
    var BookID = $("#BookID").val(); // 打赏书籍
    var json = {
        //"theType": 2,
        "BookID": BookID,
        "wsCount": wsCount
    };

    $.ajax({
        url: ActionUrl, //发送地址加随机数
        type: "POST", //发送方式
        data: json,
        dataType: 'json',
        async: true, //数据处理方式
        beforeSend: function () {
            MaskUtil.mask();
        },
        success: function (data, textStatus) {
            MaskUtil.unmask();
            if (data.status == 1) {
                layer.alert("打赏成功!", {
                    "icon": 0,
                    "title": "提示"
                });
                // 刷新页面
                setTimeout(function () {
                    window.parent.location.reload(true);
                },100);
            } else {
                layer.alert(data.msg, {
                    "icon": 0,
                    "title": "提示"
                });
            }
        }
    });
}

// 投递刀片
function TouDaopianAction(ActionUrl){
    // 处理Json
    var json = {
        "BookID":$("#BookID").val(),
        "ChapterID":$("#ChapterID").val(),
        "MemberID":$("#MemberID").val(),
        "Num":$(".checkbox-danger input[name='daopian']:checked").val(),
        "FontCount":$(".checkbox-danger input[name='fontCount']:checked").val(),
    };

    $.ajax({
        url:ActionUrl, //发送地址加随机数
        type:"POST", //发送方式
        data:json,
        dataType: 'json',
        async :true, //数据处理方式
        beforeSend:function(){
            MaskUtil.mask();
        },
        success:function(data,textStatus){
            MaskUtil.unmask();
            if( data.status == 1 ){
                // window.parent.location.href = window.parent.location.href;
                window.parent.location.reload(true);
            }else if( data.status == 3 ){
                // 登录弹窗
            }else{
                layer.alert(data.msg,{
                    "icon":0,
                    "title":"提示"
                });
            }
        }
    });
}

//头像上传框架加载-On
function showUpfileDialogOne(ActionUrl){
    layer.open({
        type: 2,
        title: false,
        maxmin: false,
        shadeClose: false, //点击遮罩关闭层
        area : ['440px' , '550px'],
        fix:true,
        content:ActionUrl
    });
}

// 单章节查看
function MemberSingleChapter(ActionUrl,LoginUrl,SubscribeBookUrl,NextChapterUrl){

    $.ajax({
        url:ActionUrl, //发送地址加随机数
        type:"POST", //发送方式
        data:{sign:'a3NvcnQoJHBhcmEpOw=='},
        dataType: 'json',
        async :true, //数据处理方式
        beforeSend:function(){
            MaskUtil.mask();
        },
        success:function(data,textStatus){
            MaskUtil.unmask();
            if( data.status == 1 ){
                // $("#ChapterContent").html(data.data.show_content);
                // 章节内容
                var listArr = data.data.show_content;
                // 章节插图
                var chapterpic = data.data.chapterpic;
                var html = "";
                for (var i = 0; i < listArr.length; i ++){
                    // html += '<p class="chapter">' + base64.decode(listArr[i]) + '<i data-pgid="1" class="J_Num num num1">2</i></p>';
                    if(parseInt(listArr[i].tsukkomi, 10) == 0){
                        html += '<p class="chapter">' + base64.decode(listArr[i].content) + '<i data-pgid="'+ listArr[i].paragraph_index +'" class="J_Num num"></i></p>';
                    }else{
                        html += '<p class="chapter">' + base64.decode(listArr[i].content) + '<i data-pgid="'+ listArr[i].paragraph_index +'" class="J_Num num num1">'+ listArr[i].tsukkomi +'</i></p>';
                    }
                }

                // 章节插图是否存在
                if(chapterpic.length > 0){
                    for (var i = 0; i < chapterpic.length; i ++){
                        html += '<p class="chapter chapterpic"><img src="' + chapterpic[i].url + '" alt="'+ chapterpic[i].miaoshu +'" /></p>';
                    }
                }

                // 作者说的话追加
                if( data.data.miaoshu != '' ){
                    html += "<div class='authorContent'>" + base64.decode(data.data.miaoshu) + "</div>";
                }

                // 数据内容增加
                $("#ChapterContent").html(html);

                // 异步调用一次下一章的接口请求，移动端APP为一次性调用的两个章节，则PC端也需一次性调用两个章节以保持阅读章节历史的统一
                // if( NextChapterUrl != '' ){
                //     $.ajax({
                //         url: NextChapterUrl, //发送地址加随机数
                //         type: "POST", //发送方式
                //         data: {isMarket:true},
                //         dataType: 'json',
                //         async: true, //数据处理方式
                //         beforeSend: function () {
                //             // MaskUtil.mask();
                //         },
                //         success: function (data, textStatus) {
                //
                //         }
                //     });
                // }
            }else if( data.status == 3 ){
                // 登录弹窗
                LoginDialog(LoginUrl);
            }else{
                var index = layer.alert(data.msg,{
                    "icon":0,
                    "title":"提示"
                });
                setTimeout(function(){
                    layer.close(index);
                    layer.open({
                        type: 2,
                        title: false,
                        maxmin: false,
                        shadeClose: false, //点击遮罩关闭层
                        area : ["550px" , "400px"],
                        fix:false,
                        content:SubscribeBookUrl
                    });
                },1500);
            }
        }
    });
}

// 吐槽模板渲染
function commentRender(typeNo,obj, dataList,tsukkomiCount, page) {
    var pageShow = false;
    var pageInfo = "";

    // 吐槽html
    var tsukkomi_list = "";
    // 吐槽总页数
    pageCountB = Math.ceil(tsukkomiCount / pageCount);

    // 分页html
    if(pageCountB > 1){
        // 上一页设置
        if(page <= 1){
            pageInfo += '					<a href="javascript:;" data-no="-1" class="prev noprev J_PagePrev">&nbsp;</a> '+ page +'/'+ pageCountB +'';
        }else{
            pageInfo += '					<a href="javascript:;" data-no="'+ (page - 1) +'" class="prev J_PagePrev">&nbsp;</a> '+ page +'/'+ pageCountB +'';
        }
        if(page < pageCountB){
            pageInfo += '					<a href="javascript:;" data-no="'+ (page + 1) +'" class="next  J_PageNext">&nbsp;</a>';
        }else{
            pageInfo += '					<a href="javascript:;" data-no="-1" class="next nonext J_PageNext">&nbsp;</a>';
        }
    }

    tsukkomi_list += '<div class="chapter-comment-wrap">';
    tsukkomi_list += '    <div class="chapter-comment">';
    tsukkomi_list += '        <div class="chapter-bg">';
    tsukkomi_list += '			  <div class="J_ChapterCnt">';
    tsukkomi_list += '				<div class="chapter-comment-list">';
    tsukkomi_list += '					<ul>';
    // 如有吐槽数据
    if (dataList.length > 0) {
        for(var i = 0,count = dataList.length;i<count;i ++) {
            tsukkomi_list += '						<li data-tsukkomi-id="11075545">';
            tsukkomi_list += '							<div class="hd clearfix">';
            tsukkomi_list += '								<div class="name ly-fl">';
            tsukkomi_list += '									<a href="'+ dataList[i].url +'" target="_blank" class="img">';
            tsukkomi_list += '										<img src="'+ dataList[i].theFace +'" alt="'+ dataList[i].nickname +'">';
            tsukkomi_list += '									</a>';
            tsukkomi_list += '									<a href="'+ dataList[i].url +'" target="_blank">';
            tsukkomi_list += '										'+ dataList[i].nickname +'';
            tsukkomi_list += '									</a>';
            tsukkomi_list += '								<span style="float:right;">'+ dataList[i].addTime +'</span></div>';
            // tsukkomi_list += '								<div class="date ly-fr" style=""></div>';
            tsukkomi_list += '							</div>';
            tsukkomi_list += '							<div class="">';
            tsukkomi_list += '								<p>';
            tsukkomi_list += '									'+ dataList[i].tsukkomi_content +'';
            tsukkomi_list += '								</p>';
            // tsukkomi_list += '								<div class="state J_TsukkomiOpt">';
            // tsukkomi_list += '									<a href="javascript:;" class="J_Zan zan ">赞(<i>0</i>)</a>';
            // tsukkomi_list += '									<a href="javascript:;" class="J_Hei hei ">黑(<i>0</i>)</a>';
            // tsukkomi_list += '								</div>';
            tsukkomi_list += '							</div>';
            tsukkomi_list += '						</li>';
        }
    }

    tsukkomi_list += '					</ul>';
    tsukkomi_list += '				</div>';
    tsukkomi_list += '				<div class="chapter-comment-page">';
    tsukkomi_list += '					<span>共<i id="tsukkomiCount">' + tsukkomiCount + '</i>条评论</span>';
    tsukkomi_list += pageInfo;
    tsukkomi_list += '				</div>';
    tsukkomi_list += '            </div>';
    tsukkomi_list += '            <div class="chapter-comment-form">';
    tsukkomi_list += '				<input type="text" placeholder="吐槽这一段(50字内)" maxlength="50" onkeydown="stopBubble(this);" />';
    tsukkomi_list += '				<button class="chapter-comment-submit btn-primary J_ChapterSubmit" href="javascript:;">发送章评</button>';
    tsukkomi_list += '				<i class="glyphicon glyphicon-remove close_button" href="javascript:;"></i>';
    tsukkomi_list += '			  </div>';
    tsukkomi_list += '        </div>';
    tsukkomi_list += '    </div>';
    tsukkomi_list += '</div>';

    // 渲染模板
    if (typeNo===0) {
        obj.after(tsukkomi_list);
    } else if (typeNo===1) {
        obj.next().remove();
        obj.after(tsukkomi_list);
    }

    // 阅读默认样式
    var defaultOptions = {
        "theme":"#F6F4EC",
        "family":"Microsoft YaHei",
        "size":"16",
        "wrapWidth":"1100",
        "ChapterWidth":"604",
        "reading":"nextChapter"
    };
    var options = null;
    if (getCookie("BookReadTheme") != null) {
        options = JSON.parse(getCookie("BookReadTheme"));
    }else{
        options = defaultOptions;
        console.log(options)
    }
    // 评论宽度设置
    $(".chapter-comment-wrap").css({"width":options.wrapWidth});
}

// 吐槽查看
function tsukkomi_list(chapter_id,book_id,tsukkomiUrl,tsukkomiaddUrl,LoginUrl) {

    // 吐槽上一页
    $("#ChapterContent").on('click', ".J_PagePrev", function () {
        var self = $(this);
        if (self.hasClass('noprev')) return;//已经没有上一页
        if (self.attr("disabled")) return;//防止重复点击

        var obj = self.closest('.J_ChapterCnt');
        var $p = $(this).closest(".chapter-comment-wrap").prev();

        page = parseInt(self.attr('data-no'));

        var paragraph_index = parseInt(obj.closest('.chapter-comment-wrap').prev('.chapter').find(".J_Num").attr('data-pgid'));
        if (isNaN(paragraph_index)) {
            paragraph_index = parseInt(obj.closest('.chapter-comment-wrap').prev('i').attr('data-pgid'));
        }

        $.ajax({
            url: tsukkomiUrl,
            type: 'POST',
            data: {
                page: page,
                count: pageCount,
                chapter_id: chapter_id,
                paragraph_index: paragraph_index
            },
            dataType: 'json',
            async: true, //数据处理方式
            beforeSend: function() {
                self.attr("disabled", true);
            },
            complete: function() {
                self.attr("disabled", false);
            },
            success: function (data) {
                if (data.status == 1) {
                    // 数据获取
                    var dataList = data.data.data;
                    var tsukkomiCount = data.data.count;

                    // 数据模板渲染
                    commentRender(1, $p, dataList, tsukkomiCount, page);
                } else if (data.status == 3) {
                    // 登录弹窗
                    LoginDialog(LoginUrl);
                } else {
                    // 数据加载失败
                }
            }
        });
    });

    // 吐槽下一页
    $("#ChapterContent").on('click', ".J_PageNext", function () {
        var self = $(this);
        if (self.hasClass('nonext')) return;//已经没有下一页
        if (self.attr("disabled")) return;//防止重复点击

        var obj = self.closest('.J_ChapterCnt');
        var $p = $(this).closest(".chapter-comment-wrap").prev();

        page = parseInt(self.attr('data-no'));

        var paragraph_index = parseInt(obj.closest('.chapter-comment-wrap').prev('.chapter').find(".J_Num").attr('data-pgid'));
        if (isNaN(paragraph_index)) {
            paragraph_index = parseInt(obj.closest('.chapter-comment-wrap').prev('i').attr('data-pgid'));
        }

        $.ajax({
            url: tsukkomiUrl,
            type: 'POST',
            data: {
                page: page,
                count: pageCount,
                chapter_id: chapter_id,
                paragraph_index: paragraph_index
            },
            dataType: 'json',
            async: true, //数据处理方式
            beforeSend: function() {
                self.attr("disabled", true);
            },
            complete: function() {
                self.attr("disabled", false);
            },
            // error: function() {
            //     commentRender(0, $p, {tsukkomi_list: {}}, page);
            // },
            success: function (data) {
                if (data.status == 1) {
                    // 数据获取
                    var dataList = data.data.data;
                    var tsukkomiCount = data.data.count;

                    // 数据模板渲染
                    commentRender(1, $p, dataList, tsukkomiCount, page);
                } else if (data.status == 3) {
                    // 登录弹窗
                    LoginDialog(LoginUrl);
                } else {
                    // 数据加载失败
                }
            }
        });
    });
	
	// 吐槽关闭按钮
    $("#ChapterContent").on('click', '.close_button', function () {
        // 移出已经存在的吐槽列表
        $("#ChapterContent").find('div.chapter-comment-wrap').remove();
	});

    // 吐槽
    $("#ChapterContent").on('click', '.J_Num', function () {
        var paragraph_index = $(this).attr('data-pgid');
        var $p = $(this).closest("p");
        var open = true;
        if ($p.next('div.chapter-comment-wrap').length) {
            open = false;
        }

        // 移出已经存在的吐槽列表
        $("#ChapterContent").find('div.chapter-comment-wrap').remove();

        if (open) {
            //其他收起
            page = 1;
            $.ajax({
                url: tsukkomiUrl,
                type: 'POST',
                data: {
                    page: page,
                    count: pageCount,
                    chapter_id: chapter_id,
                    paragraph_index: paragraph_index
                },
                dataType: 'json',
                async: true, //数据处理方式
                beforeSend: function () {
                    // MaskUtil.mask();
                },
                // error: function() {
                //     commentRender(0, $p, {tsukkomi_list: {}}, page);
                // },
                success: function (data) {
                    if (data.status == 1) {
                        // 数据获取
                        var dataList = data.data.data;
                        var tsukkomiCount = data.data.count;

                        // 数据模板渲染
                        commentRender(0, $p, dataList, tsukkomiCount, page);
                    } else if (data.status == 3) {
                        // 登录弹窗
                        LoginDialog(LoginUrl);
                    } else {
                        // 数据加载失败
                    }
                }
            });
        }
    });

    //发布吐槽
    $("#ChapterContent").on('click', '.J_ChapterSubmit', function () {
        // 吐槽HTML
        var tsukkomi_list = "";
        var self = $(this);
        if (self.attr("disabled")) return;
        var box = self.closest(".chapter-comment-wrap");
        var p = box.prev('p.chapter');

        var paragraph_index = parseInt(p.find(".J_Num").attr('data-pgid'));
        if (isNaN(paragraph_index)) {
            var num = self.num = box.prev('i');
        } else {
            var num = self.num = p.find('.J_Num');
        }

        var obj = box.find('.J_ChapterCnt');

        var value = $.trim(self.prev("input").val());
        if (value.length > 50) {
            layer.alert("章评50字以内!", {
                "icon": 0,
                "title": "提示"
            });
            return false;
        }
        if (value.length == 0) {
            layer.alert("章评内容为空!", {
                "icon": 0,
                "title": "提示"
            });
            return false;
        }

        var json = {
            BookID: book_id,
            ChapterID: chapter_id,
            paragraph_index: paragraph_index,
            chapter_content: stripHTML(p.html()),
            tsukkomi_content: value
        };

        $.ajax({
            url: tsukkomiaddUrl, //发送地址加随机数
            type: "POST", //发送方式
            data: json,
            dataType: 'json',
            async: true, //数据处理方式
            beforeSend: function () {
                self.attr("disabled", true);
            },
            complete: function () {
                self.attr("disabled", false);
                self.prev("input").val("");
            },
            success: function (data, textStatus) {
                // MaskUtil.unmask();
                if (data.status == 1) {
                    var dataList = data.data;
                    // 吐槽数据插入
                    tsukkomi_list += '						<li data-tsukkomi-id="11075545">';
                    tsukkomi_list += '							<div class="hd clearfix">';
                    tsukkomi_list += '								<div class="name ly-fl">';
                    tsukkomi_list += '									<a href="' + dataList.url + '" target="_blank" class="img">';
                    tsukkomi_list += '										<img src="' + dataList.theFace + '" alt="' + dataList.nickname + '">';
                    tsukkomi_list += '									</a>';
                    tsukkomi_list += '									<a href="' + dataList.url + '" target="_blank">';
                    tsukkomi_list += '										' + dataList.nickname + '';
                    tsukkomi_list += '									</a>';
                    tsukkomi_list += '								</div>';
                    tsukkomi_list += '								<div class="date ly-fr">' + dataList.addTime + '</div>';
                    tsukkomi_list += '							</div>';
                    tsukkomi_list += '							<div class="bd">';
                    tsukkomi_list += '								<p>';
                    tsukkomi_list += '									' + dataList.tsukkomi_content + '';
                    tsukkomi_list += '								</p>';
                    // tsukkomi_list += '								<div class="state J_TsukkomiOpt">';
                    // tsukkomi_list += '									<a href="javascript:;" class="J_Zan zan ">赞(<i>0</i>)</a>';
                    // tsukkomi_list += '									<a href="javascript:;" class="J_Hei hei ">黑(<i>0</i>)</a>';
                    // tsukkomi_list += '								</div>';
                    tsukkomi_list += '							</div>';
                    tsukkomi_list += '						</li>';

                    // 显示发布吐槽
                    obj.find("ul").prepend(tsukkomi_list);
                    obj.find("#tsukkomiCount").html(parseInt(obj.find("#tsukkomiCount").html(), 10) + 1);
                    // 吐槽数量显示
                    if (self.num.text()) {
                        self.num.text(parseInt(self.num.text()) + 1);
                    } else {
                        self.num.addClass('num1');
                        self.num.text(1);
                    }
                } else if (data.status == 3) {
                    // 登录弹窗
                    LoginDialog(LoginUrl);
                } else {
                    var index = layer.alert(data.msg, {
                        "icon": 0,
                        "title": "提示"
                    });
                }
            }
        });
    });
}

// 书籍评论回复
function AddReplayOne(ActionUrl){
    var BookID = $("#BookID").val();
    var pid = $("#pid").val();
    var AuthorID = $("#AuthorID").val();
    var theUser = $("#theUser").val();
    var isAuthorReply = $("#isAuthorReply").val();
    var theContent = $("#contentB").val();

    if( theContent.length == 0 ){
        layer.alert("请输入回复内容!",{
            "icon":0,
            "title":"提示"
        });
        return false;
    }

    var json = {
        "BookID":BookID,
        "pid":pid,
        "AuthorID":AuthorID,
        "theUser":theUser,
        "isAuthorReply":isAuthorReply,
        "theContent":theContent
    };

    $.ajax({
        url:ActionUrl, //发送地址加随机数
        type:"POST", //发送方式
        data:json,
        dataType: 'json',
        async :true, //数据处理方式
        beforeSend:function(){
            MaskUtil.mask();
        },
        success:function(data,textStatus){
            MaskUtil.unmask();
            if( data.status == 1 ){
                window.parent.location.reload(true);
            }else{
                layer.alert(data.msg,{
                    "icon":0,
                    "title":"提示"
                });
            }
        }
    });
}

// 关注/取消关注处理
function isFollow(theObj,toUserID,ActionUrl,LoginUrl){

    // 处理Json
    var json = {
        "toUserID":toUserID
    };

    $.ajax({
        url:ActionUrl, //发送地址加随机数
        type:"POST", //发送方式
        data:json,
        dataType: 'json',
        async :true, //数据处理方式
        // beforeSend:function(){
        //     MaskUtil.mask();
        // },
        success:function(data,textStatus){
            // MaskUtil.unmask();
            if( data.status == 1 ){
                $(theObj).html("已关注");

                /*
                layer.alert(data.msg,{
                    "icon":0,
                    "title":"提示"
                });
                */
            }else if( data.status == 5 ){
                $(theObj).html("加关注");

                /*
                layer.alert(data.msg,{
                    "icon":0,
                    "title":"提示"
                });
                */
            }else if( data.status == 3 ){
                // 登录弹窗
                LoginDialog(LoginUrl);
            }else{
                layer.alert(data.msg,{
                    "icon":0,
                    "title":"提示"
                });
            }
        }
    });
    return false;
}

// 阻止浏览器默认行为
function stopBubble(e) {
    //如果提供了事件对象，则这是一个非IE浏览器
    if ( e && e.stopPropagation ){
        //因此它支持W3C的stopPropagation()方法
        e.stopPropagation();
    }else{
        //否则，我们需要使用IE的方式来取消事件冒泡
        window.event.cancelBubble = true;
    }
}

// 登录弹窗
function LoginDialog(LoginUrl) {
    layer.open({
        type: 2,
        title: false,
        maxmin: false,
        shadeClose: false, //点击遮罩关闭层
        area: ["440px", "408px"],
        fix: true,
        content: LoginUrl
    });
}

/*
 * []
 * @Author: Careless
 * @Date:   2015-11-16 16:58:25
 * @Email:  563559606@qq.com
 * @Copyright:
 */
/**
 * [file_upload 图片上传]
 * @param  {[type]} conf [配置]
 */
function file_upload(conf){
    var oldConf = {
        // 选完文件后，是否自动上传。
        auto: true,
        // swf文件路径
        swf: '/static/common/webuploader/Uploader.swf',
        // 文件接收服务端。
        server: '',
        // 选择文件的按钮。可选。
        // 内部根据当前运行是创建，可能是input元素，也可能是flash.
        pick: '',
        duplicate:true,
        mulit:false,
        // 只允许选择图片文件。
        accept: {
            title: 'Images',
            extensions: 'gif,jpg,jpeg,bmp,png',
            mimeTypes: 'image/jpg,image/jpeg,image/png'
        }
    };

    var newConf = $.extend(oldConf, conf)
    var uploader = WebUploader.create(newConf);

    var loding;
    // 当有文件添加进来的时候
    uploader.on( 'fileQueued', function( file ) {
        loding = layer.load(1, {
            shade: [0.2,'#000']
        });
    });

    // 文件上传成功
    uploader.on( 'uploadSuccess', function( file,ret ) {
        layer.close(loding);
        // layer.msg(ret.msg,{'time':1000});
        if (ret.status == 1) {
            // 是否自定义了回调函数
            if (is_function(newConf.callback)) {
                newConf.callback(ret);
            } else {
                var info = '<div class="upimg-box">\
                                <span class="glyphicon glyphicon-remove-sign remove-img"></span>\
                                <input type="hidden" id="'+newConf.inputname+'" name="'+newConf.inputname+'" value="'+ret.data.path+'">\
                                <img src="'+ret.data.path+'" alt="" style="width:967px; height:240px;" />\
                            </div>';

                if (newConf.mulit == true) {
                    $(newConf.container).find('.allimg-verify-del').remove();
                    $(newConf.container).find('.upimg-ts').remove();
                    $(newConf.container).find('.Validform_checktip').remove();
                    $(newConf.container).append(info);
                } else {
                    $(newConf.container).html(info);
                }
            }
        }
    });
}

/*
 * []
 * @Author: Careless
 * @Date:   2015-11-16 16:58:25
 * @Email:  563559606@qq.com
 * @Copyright:
 */
/**
 * [file_upload 文件上传]
 * @param  {[type]} conf [配置]
 */
function file_uploadB(conf){
    var oldConf = {
        // 选完文件后，是否自动上传。
        auto: true,
        // swf文件路径
        swf: '/static/common/webuploader/Uploader.swf',
        // 文件接收服务端。
        server: '',
        // 选择文件的按钮。可选。
        // 内部根据当前运行是创建，可能是input元素，也可能是flash.
        pick: '',
        duplicate:true,
        mulit:false,
        // 只允许选择图片文件。
        accept: {
            title: 'file',
            extensions: 'doc,xls,ppt,docx,xlsx,pptx,rar,zip',
            mimeTypes: 'application/msword,application/vnd.ms-excel,application/vnd.ms-powerpoint,application/vnd.openxmlformats-officedocument.wordprocessingml.document,application/vnd.openxmlformats-officedocument.spreadsheetml.sheet,application/vnd.openxmlformats-officedocument.presentationml.presentation,application/rar,application/zip'
            // mimeTypes: ''
        }
    };

    var newConf = $.extend(oldConf, conf)
    var uploader = WebUploader.create(newConf);

    var loding;
    // 当有文件添加进来的时候
    uploader.on( 'fileQueued', function( file ) {
        loding = layer.load(1, {
            shade: [0.2,'#000']
        });
    });

    // 文件上传成功
    uploader.on( 'uploadSuccess', function( file,ret ) {
        layer.close(loding);
        // layer.msg(ret.msg,{'time':1000});
        if (ret.status == 1) {
            // 是否自定义了回调函数
            if (is_function(newConf.callback)) {
                newConf.callback(ret);
            } else {
                var info = '<img src="/static/index/Img/attachment_1.png" width="15" height="15" alt="附件" />';
                info += '&nbsp;<a href="'+ret.data.path+'" target="_blank" title="下载附件">点击下载</a>';
                info += '<input type="hidden" id="'+newConf.inputname+'" name="'+newConf.inputname+'" value="'+ret.data.path+'">';

                if (newConf.mulit == true) {
                    $(newConf.container).find('.allimg-verify-del').remove();
                    $(newConf.container).find('.upimg-ts').remove();
                    $(newConf.container).find('.Validform_checktip').remove();
                    $(newConf.container).append(info);
                } else {
                    $(newConf.container).html(info);
                }
            }
        }
    });
}

/**
 * 分页ajax化
 * pageEle: 分页区域选择器
 * contentEle: 数据显示区域选择器
 * @param options
 */
function page2ajax(options) {
    options = options || {};
    var pageEle = options.pageEle;
    var contentEle = options.contentEle;
    var ems = $(pageEle).find("em");

    var linkEvent = function () {
        var self = $(this);
        var url = self.attr("data-link");

        $.ajax({
            url : url,
            dataType: "html",
            type: "get",
            success: function (html) {
                $(contentEle).html(html);
            }
        });
    };

    ems.each(function (ind, item) {
        var self = $(item);
        if(!self.has("a")) {
            return;
        }
        var link = self.find("a").attr("href");
        if(!link || link.indexOf("javascript") >= 0) {
            return;
        }
        self.find("a").attr("href", "javascript:void(0)");
        self.attr("data-link", link);

        self.click(linkEvent);
    });

}