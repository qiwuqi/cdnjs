//统计代码
function count(){
	//document.write('<script type="text/javascript" src="//js.users.51.la/205542925.js"></script>');
}

//目录页卡片切换 逆水行舟 2019-10-29 
function a_catalog(){            
	$('#a_info').parent().removeClass("act");
	$('#a_catalog').parent().addClass("act");
	if( $('#catalog').is(':hidden') ) $('#catalog,#info').toggle();
}

function a_info(){            
	$('#a_catalog').parent().removeClass("act");
	$('#a_info').parent().addClass("act");
	if( $('#info').is(':hidden') ) $('#catalog,#info').toggle();
}
//搜索框
function search(){const placestr = '猫腻';document.write('<form name="t_frmsearch" method="post" action="/search/"  target="_blank" onsubmit="return chkval()"><input autocomplete="off" id="searchkey" type="text" name="searchkey" class="search_input" placeholder="'+placestr+'"><input type="hidden" name="searchtype" value="all"><button type="submit" name="Submit" id="search_btn" title="搜索" ><i class="fa fa-search fa-lg"></i></button></form>');}
function chkval(){
	let skey = '';
	if($('#searchkey').val() == ''){
	  skey = $('#searchkey').attr('placeholder');
	  // $('#searchkey').val(skey);
	}else{
	  skey = $('#searchkey').val(); 
	  if(skey.length < 2){
		alert('不能少于二个字');
		return false;
	  }
  }
	  skey = tran_search(skey); 
	  $('#searchkey').val(skey);
		return true;
  }
// 书库页移动端筛选菜单控制 逆水行舟2019-7-3
function store_menu(){
	if ($('#after_menu').css('display') == 'block'){
		$('#store_menu').addClass('fa-bars').removeClass('fa-remove');
	}else{
		$('#store_menu').addClass('fa-remove').removeClass('fa-bars');
	}
	$('#after_menu').toggle('normal');
}

//返回顶部底部
function gotop(){$('body,html').animate({scrollTop:0},300);}
function gofooter(){$('body,html').animate({scrollTop:$(document).height()},300);}

//picture lazy
function setEcho(){ 
	$("img.lazy").lazyload({effect : "fadeIn"})
}

function setCookies(cookieName,cookieValue,minutes){ let today = new Date(); let expire = new Date(); let exp=minutes*1000*60||1000*3600*24*365;expire.setTime(today.getTime() + exp); document.cookie = cookieName+'='+escape(cookieValue)+ ';expires='+expire.toGMTString()+'; path=/'; } function readCookies(cookieName){ let theCookie=''+document.cookie; let ind=theCookie.indexOf(cookieName); if (ind==-1 || cookieName=='') return ''; let ind1=theCookie.indexOf(';',ind); if (ind1==-1) ind1=theCookie.length; let rico_ret = theCookie.substring(ind+cookieName.length+1,ind1).replace(/%/g, '%25'); return unescape(decodeURI(rico_ret)); }

var jieqiUserInfo = new  Array(); jieqiUserInfo['jieqiUserId'] = 0; jieqiUserInfo['jieqiUserUname'] = ''; jieqiUserInfo['jieqiUserUname_un'] = ''; jieqiUserInfo['jieqiUserName'] = ''; jieqiUserInfo['jieqiUserName_un'] = ''; jieqiUserInfo['jieqiUserGroup'] = 0; jieqiUserInfo['jieqiUserGroupName'] = ''; jieqiUserInfo['jieqiUserGroupName_un'] = ''; jieqiUserInfo['jieqiUserVip'] = 0; jieqiUserInfo['jieqiUserHonorId'] = 0; jieqiUserInfo['jieqiUserHonor'] = ''; jieqiUserInfo['jieqiUserHonor_un'] = ''; jieqiUserInfo['jieqiNewMessage'] = 0; jieqiUserInfo['jieqiUserPassword'] = ''; if(document.cookie.indexOf('jieqiUserInfo') >= 0){ var cookieInfo = readCookies('jieqiUserInfo'); start = 0; offset = cookieInfo.indexOf(',', start); while(offset > 0){ tmpval = cookieInfo.substring(start, offset); tmpidx = tmpval.indexOf('='); if(tmpidx > 0){ tmpname = tmpval.substring(0, tmpidx); tmpval = tmpval.substring(tmpidx+1, tmpval.length); jieqiUserInfo[tmpname] = tmpval; } start = offset+1; if(offset < cookieInfo.length){ offset = cookieInfo.indexOf(',', start); if(offset == -1) offset =  cookieInfo.length; }else{ offset = -1; } } setCookies('jieqiUserInfo',cookieInfo); }


function tips(title){
	let arr = [
		'拒接垃圾，只做精品。每一本书都经过挑选和审核。',
		'网页底部有简繁体切换，我们会帮您记住选择。',
		'书名会因各种原因进行更名，使用“作者名”搜索更容易找到想看的小说。',
		'无需注册登录，“足迹” 会自动保存您的阅读记录。',
		'收藏+分享'+title+'，是对网站最大的肯定和支持。',
		'移动端、PC端使用同一网址，自动适应，极致阅读体验。',
		'阅读页快捷键：上一章（←）、下一章（→）、回目录（回车）'
	]
	let index = Math.floor(Math.random()*arr.length); 
	document.write('Tip：'+arr[index]);
}

function logout(){
	if (window.confirm("\n确定退出登录吗？")) {
			setCookies("jieqiUserInfo","1",-1); //删除cookie
			window.location.href = "/logout.php?jumpurl="+window.location.href;
	}
}

//不注册登录 发送消息 2019-8-19
function newmessage() {
	if(readCookies('report_msg_time')){
		let time = 60 - Math.floor(((new Date()).getTime() - readCookies('report_msg_time'))/1000);
		alert("\n对不起\n\n一分钟只可操作一次，还剩: "+ time +"秒");
		return;
	}else{
		setCookies('report_msg_time', (new Date()).getTime() , 1); 	//cookie名,cookie值,过期时间(分钟)
		window.location.href = "/newmessage/";
	}
}

let bookmax = 20;
function LastRead(){this.bookList="bookList"} LastRead.prototype={ set:function(bid,uri,bookname,chaptername,author,img_url){ if(!(bid&&uri&&bookname&&chaptername&&author&&img_url))return; var v=bid+'#'+uri+'#'+bookname+'#'+chaptername+'#'+author+'#'+img_url; var aBooks = lastread.getBook(); var aBid = new Array(); for (i=0; i<aBooks.length;i++){aBid.push(aBooks[i][0]);} if($.inArray(bid, aBid) != -1){ lastread.remove(bid); }else{ while (aBooks.length >= bookmax) { lastread.remove(aBooks[0][0]); aBooks = lastread.getBook(); } } this.setItem(bid,v); this.setBook(bid) }, get:function(k){ return this.getItem(k)?this.getItem(k).split("#"):""; }, remove:function(k){ this.removeItem(k); this.removeBook(k) }, setBook:function(v){ var reg=new RegExp("(^|#)"+v); var books =	this.getItem(this.bookList); if(books==""){ books=v; } else{ if(books.search(reg)==-1){ books+="#"+v; } else{ books.replace(reg,"#"+v); } } this.setItem(this.bookList,books) }, getBook:function(){ var v=this.getItem(this.bookList)?this.getItem(this.bookList).split("#"):Array(); var books=Array(); if(v.length){ for(var i=0;i<v.length;i++){ var tem=this.getItem(v[i]).split('#'); if (tem.length>3)books.push(tem); } } return books }, removeBook:function(v){ var reg=new RegExp("(^|#)"+v); var books=this.getItem(this.bookList); if(!books){ books=""; } else{ if(books.search(reg)!=-1){ books=books.replace(reg,""); } } this.setItem(this.bookList,books) }, setItem:function(k,v){ if(!!window.localStorage){ localStorage.setItem(k,v); } else{ var expireDate=new Date(); var EXPIR_MONTH=30*24*3600*1000; expireDate.setTime(expireDate.getTime()+12*EXPIR_MONTH); document.cookie=k+"="+encodeURIComponent(v)+";expires="+expireDate.toGMTString()+"; path=/"; } }, getItem:function(k){ var value=""; var result=""; if(!!window.localStorage){ result=window.localStorage.getItem(k); value=result||""; } else{ var reg=new RegExp("(^| )"+k+"=([^;]*)(;|\x24)"); var result=reg.exec(document.cookie); if(result){ value=decodeURIComponent(result[2])||""; } } return value }, removeItem:function(k){ if(!!window.localStorage){ window.localStorage.removeItem(k); } else{ var expireDate=new Date(); expireDate.setTime(expireDate.getTime()-1000); document.cookie=k+"= "+";expires="+expireDate.toGMTString(); } }, removeAll:function(){ if(!!window.localStorage){ window.localStorage.clear(); } else{ var v=this.getItem(this.bookList)?this.getItem(this.bookList).split("#"):Array(); var books=Array(); if(v.length){ for( i in v ){ var tem=this.removeItem(v[k]); } } this.removeItem(this.bookList); } } }
function removebook(k){lastread.remove(k);showtempbooks();}function removeall(){lastread.removeAll();showtempbooks();}
function showtempbooks(){
	var books=lastread.getBook().reverse(); //倒序
	var cover = '';
	var bookhtml = '<p class="title jcc">阅读记录：'+books.length+' / '+bookmax+' &nbsp;&nbsp;<a href="javascript:removeall();" onclick="return confirm(\'确定要移除全部记录吗？\')"><i class="fa fa-trash-o fa-lg">&nbsp;</i>清空</a></p><p class="jcc s_gray">本机有效 最近阅读排在最前 到达上限删掉最后</p><ul>';
	if (books.length){
		for(var i=0 ;i<books.length;i++){
     		 if( i < bookmax ){
				bookhtml += '<li><div class="img_span"><a href="'+books[i][0]+'"><img src="'+books[i][5]+'" /></a></div><div class="bookcase-items"><p><a href="'+books[i][0]+'"><b>'+books[i][2]+'</b></a><span>&nbsp;&nbsp;<i class="fa fa-user-circle"></i>&nbsp;'+books[i][4]+'</span></p><p>读到：'+books[i][3]+'</p><p><a class="bookcase_btn red" href="'+books[i][1]+'"><i class="fa fa-file-text-o">&nbsp;</i>继续阅读</a>&nbsp;<a class="bookcase_btn gray" href="javascript:removebook(\''+books[i][0]+'\')" onclick="return confirm(\'确定要将本书移除吗？\')"><i class="fa fa-trash-o">&nbsp;</i>移除记录</a></p></div></li>';
				} 
		}
		bookhtml += '</ul>';
   	}else{
	 	bookhtml += '<li><b style="color:red;padding:20px 0;">还没有阅读记录哦 ( ˙﹏˙ )( ˙﹏˙ )，去找找书看吧。</b></li></ul>';
   	}
	$("#tempBookcase").html(bookhtml);
}
window.lastread = new LastRead();


//for big5
//s = simplified 简体, t = traditional 繁体, n = normal 正常显示
var zh_default = 'n'; //默认
var zh_choose = ''; 
var zh_expires = 365; 
var zh_class = 'zh_click'; 
var zh_style_active = 'color:gray'; 
var zh_style_inactive = '';
var zh_autoLang_t = true;  //是否自动检测繁体浏览器
var zh_autoLang_s = true;  //是否自动检测简体浏览器
var zh_langReg_t = /^zh-tw|zh-hk$/i;
var zh_langReg_s = /^zh-cn$/i;
var zh_s = "皑蔼碍爱翱袄奥坝罢摆败颁办绊帮绑镑谤剥饱宝报鲍辈贝钡狈备惫绷笔毕毙闭边编贬变辩辫鳖瘪濒滨宾摈饼拨钵铂驳卜补参蚕残惭惨灿苍舱仓沧厕侧册测层诧搀掺蝉馋谗缠铲产阐颤场尝长偿肠厂畅钞车彻尘陈衬撑称惩诚骋痴迟驰耻齿炽冲虫宠畴踌筹绸丑橱厨锄雏础储触处传疮闯创锤纯绰辞词赐聪葱囱从丛凑窜错达带贷担单郸掸胆惮诞弹当挡党荡档捣岛祷导盗灯邓敌涤递缔点垫电淀钓调迭谍叠钉顶锭订东动栋冻斗犊独读赌镀锻断缎兑队对吨顿钝夺鹅额讹恶饿儿尔饵贰发罚阀珐矾钒烦范贩饭访纺飞废费纷坟奋愤粪丰枫锋风疯冯缝讽凤肤辐抚辅赋复负讣妇缚该钙盖干赶秆赣冈刚钢纲岗皋镐搁鸽阁铬个给龚宫巩贡钩沟构购够蛊顾剐关观馆惯贯广规硅归龟闺轨诡柜贵刽辊滚锅国过骇韩汉阂鹤贺横轰鸿红后壶护沪户哗华画划话怀坏欢环还缓换唤痪焕涣黄谎挥辉毁贿秽会烩汇讳诲绘荤浑伙获货祸击机积饥讥鸡绩缉极辑级挤几蓟剂济计记际继纪夹荚颊贾钾价驾歼监坚笺间艰缄茧检碱硷拣捡简俭减荐槛鉴践贱见键舰剑饯渐溅涧浆蒋桨奖讲酱胶浇骄娇搅铰矫侥脚饺缴绞轿较秸阶节茎惊经颈静镜径痉竞净纠厩旧驹举据锯惧剧鹃绢杰洁结诫届紧锦仅谨进晋烬尽劲荆觉决诀绝钧军骏开凯颗壳课垦恳抠库裤夸块侩宽矿旷况亏岿窥馈溃扩阔蜡腊莱来赖蓝栏拦篮阑兰澜谰揽览懒缆烂滥捞劳涝乐镭垒类泪篱离里鲤礼丽厉励砾历沥隶俩联莲连镰怜涟帘敛脸链恋炼练粮凉两辆谅疗辽镣猎临邻鳞凛赁龄铃凌灵岭领馏刘龙聋咙笼垄拢陇楼娄搂篓芦卢颅庐炉掳卤虏鲁赂禄录陆驴吕铝侣屡缕虑滤绿峦挛孪滦乱抡轮伦仑沦纶论萝罗逻锣箩骡骆络妈玛码蚂马骂吗买麦卖迈脉瞒馒蛮满谩猫锚铆贸么霉没镁门闷们锰梦谜弥觅绵缅庙灭悯闽鸣铭谬谋亩钠纳难挠脑恼闹馁腻撵捻酿鸟聂啮镊镍柠狞宁拧泞钮纽脓浓农疟诺欧鸥殴呕沤盘庞国爱赔喷鹏骗飘频贫苹凭评泼颇扑铺朴谱脐齐骑岂启气弃讫牵扦钎铅迁签谦钱钳潜浅谴堑枪呛墙蔷强抢锹桥乔侨翘窍窃钦亲轻氢倾顷请庆琼穷趋区躯驱龋颧权劝却鹊让饶扰绕热韧认纫荣绒软锐闰润洒萨鳃赛伞丧骚扫涩杀纱筛晒闪陕赡缮伤赏烧绍赊摄慑设绅审婶肾渗声绳胜圣师狮湿诗尸时蚀实识驶势释饰视试寿兽枢输书赎属术树竖数帅双谁税顺说硕烁丝饲耸怂颂讼诵擞苏诉肃虽绥岁孙损笋缩琐锁獭挞抬摊贪瘫滩坛谭谈叹汤烫涛绦腾誊锑题体屉条贴铁厅听烃铜统头图涂团颓蜕脱鸵驮驼椭洼袜弯湾顽万网韦违围为潍维苇伟伪纬谓卫温闻纹稳问瓮挝蜗涡窝呜钨乌诬无芜吴坞雾务误锡牺袭习铣戏细虾辖峡侠狭厦锨鲜纤咸贤衔闲显险现献县馅羡宪线厢镶乡详响项萧销晓啸蝎协挟携胁谐写泻谢锌衅兴汹锈绣虚嘘须许绪续轩悬选癣绚学勋询寻驯训讯逊压鸦鸭哑亚讶阉烟盐严颜阎艳厌砚彦谚验鸯杨扬疡阳痒养样瑶摇尧遥窑谣药爷页业叶医铱颐遗仪彝蚁艺亿忆义诣议谊译异绎荫阴银饮樱婴鹰应缨莹萤营荧蝇颖哟拥佣痈踊咏涌优忧邮铀犹游诱舆鱼渔娱与屿语吁御狱誉预驭鸳渊辕园员圆缘远愿约跃钥岳粤悦阅云郧匀陨运蕴酝晕韵杂灾载攒暂赞赃脏凿枣灶责择则泽贼赠扎札轧铡闸诈斋债毡盏斩辗崭栈战绽张涨帐账胀赵蛰辙锗这贞针侦诊镇阵挣睁狰帧郑证织职执纸挚掷帜质钟终种肿众诌轴皱昼骤猪诸诛烛瞩嘱贮铸筑驻专砖转赚桩庄装妆壮状锥赘坠缀谆浊兹资渍踪综总纵邹诅组钻致钟么为只凶准启板里雳余链泄";
var zh_t = "皚藹礙愛翺襖奧壩罷擺敗頒辦絆幫綁鎊謗剝飽寶報鮑輩貝鋇狽備憊繃筆畢斃閉邊編貶變辯辮鼈癟瀕濱賓擯餅撥缽鉑駁蔔補參蠶殘慚慘燦蒼艙倉滄廁側冊測層詫攙摻蟬饞讒纏鏟産闡顫場嘗長償腸廠暢鈔車徹塵陳襯撐稱懲誠騁癡遲馳恥齒熾沖蟲寵疇躊籌綢醜櫥廚鋤雛礎儲觸處傳瘡闖創錘純綽辭詞賜聰蔥囪從叢湊竄錯達帶貸擔單鄲撣膽憚誕彈當擋黨蕩檔搗島禱導盜燈鄧敵滌遞締點墊電澱釣調叠諜疊釘頂錠訂東動棟凍鬥犢獨讀賭鍍鍛斷緞兌隊對噸頓鈍奪鵝額訛惡餓兒爾餌貳發罰閥琺礬釩煩範販飯訪紡飛廢費紛墳奮憤糞豐楓鋒風瘋馮縫諷鳳膚輻撫輔賦複負訃婦縛該鈣蓋幹趕稈贛岡剛鋼綱崗臯鎬擱鴿閣鉻個給龔宮鞏貢鈎溝構購夠蠱顧剮關觀館慣貫廣規矽歸龜閨軌詭櫃貴劊輥滾鍋國過駭韓漢閡鶴賀橫轟鴻紅後壺護滬戶嘩華畫劃話懷壞歡環還緩換喚瘓煥渙黃謊揮輝毀賄穢會燴彙諱誨繪葷渾夥獲貨禍擊機積饑譏雞績緝極輯級擠幾薊劑濟計記際繼紀夾莢頰賈鉀價駕殲監堅箋間艱緘繭檢堿鹼揀撿簡儉減薦檻鑒踐賤見鍵艦劍餞漸濺澗漿蔣槳獎講醬膠澆驕嬌攪鉸矯僥腳餃繳絞轎較稭階節莖驚經頸靜鏡徑痙競淨糾廄舊駒舉據鋸懼劇鵑絹傑潔結誡屆緊錦僅謹進晉燼盡勁荊覺決訣絕鈞軍駿開凱顆殼課墾懇摳庫褲誇塊儈寬礦曠況虧巋窺饋潰擴闊蠟臘萊來賴藍欄攔籃闌蘭瀾讕攬覽懶纜爛濫撈勞澇樂鐳壘類淚籬離裏鯉禮麗厲勵礫曆瀝隸倆聯蓮連鐮憐漣簾斂臉鏈戀煉練糧涼兩輛諒療遼鐐獵臨鄰鱗凜賃齡鈴淩靈嶺領餾劉龍聾嚨籠壟攏隴樓婁摟簍蘆盧顱廬爐擄鹵虜魯賂祿錄陸驢呂鋁侶屢縷慮濾綠巒攣孿灤亂掄輪倫侖淪綸論蘿羅邏鑼籮騾駱絡媽瑪碼螞馬罵嗎買麥賣邁脈瞞饅蠻滿謾貓錨鉚貿麽黴沒鎂門悶們錳夢謎彌覓綿緬廟滅憫閩鳴銘謬謀畝鈉納難撓腦惱鬧餒膩攆撚釀鳥聶齧鑷鎳檸獰甯擰濘鈕紐膿濃農瘧諾歐鷗毆嘔漚盤龐國愛賠噴鵬騙飄頻貧蘋憑評潑頗撲鋪樸譜臍齊騎豈啓氣棄訖牽扡釺鉛遷簽謙錢鉗潛淺譴塹槍嗆牆薔強搶鍬橋喬僑翹竅竊欽親輕氫傾頃請慶瓊窮趨區軀驅齲顴權勸卻鵲讓饒擾繞熱韌認紉榮絨軟銳閏潤灑薩鰓賽傘喪騷掃澀殺紗篩曬閃陝贍繕傷賞燒紹賒攝懾設紳審嬸腎滲聲繩勝聖師獅濕詩屍時蝕實識駛勢釋飾視試壽獸樞輸書贖屬術樹豎數帥雙誰稅順說碩爍絲飼聳慫頌訟誦擻蘇訴肅雖綏歲孫損筍縮瑣鎖獺撻擡攤貪癱灘壇譚談歎湯燙濤縧騰謄銻題體屜條貼鐵廳聽烴銅統頭圖塗團頹蛻脫鴕馱駝橢窪襪彎灣頑萬網韋違圍爲濰維葦偉僞緯謂衛溫聞紋穩問甕撾蝸渦窩嗚鎢烏誣無蕪吳塢霧務誤錫犧襲習銑戲細蝦轄峽俠狹廈鍁鮮纖鹹賢銜閑顯險現獻縣餡羨憲線廂鑲鄉詳響項蕭銷曉嘯蠍協挾攜脅諧寫瀉謝鋅釁興洶鏽繡虛噓須許緒續軒懸選癬絢學勳詢尋馴訓訊遜壓鴉鴨啞亞訝閹煙鹽嚴顔閻豔厭硯彥諺驗鴦楊揚瘍陽癢養樣瑤搖堯遙窯謠藥爺頁業葉醫銥頤遺儀彜蟻藝億憶義詣議誼譯異繹蔭陰銀飲櫻嬰鷹應纓瑩螢營熒蠅穎喲擁傭癰踴詠湧優憂郵鈾猶遊誘輿魚漁娛與嶼語籲禦獄譽預馭鴛淵轅園員圓緣遠願約躍鑰嶽粵悅閱雲鄖勻隕運蘊醞暈韻雜災載攢暫贊贓髒鑿棗竈責擇則澤賊贈紮劄軋鍘閘詐齋債氈盞斬輾嶄棧戰綻張漲帳賬脹趙蟄轍鍺這貞針偵診鎮陣掙睜猙幀鄭證織職執紙摯擲幟質鍾終種腫衆謅軸皺晝驟豬諸誅燭矚囑貯鑄築駐專磚轉賺樁莊裝妝壯狀錐贅墜綴諄濁茲資漬蹤綜總縱鄒詛組鑽緻鐘麼為隻兇準啟闆裡靂餘鍊洩";
String.prototype.tran=function(){
	var s1,s2;
	if(zh_choose=='t'){
	   s1 = zh_s;
	   s2 = zh_t;
	}else if(zh_choose=='s'){
	   s1 = zh_t;
	   s2 = zh_s;
	}else{
	   return this;
	}
	var a = '';
	for(var i=0;i<this.length;i++){
		var c = this.charAt(i);
		var p = s1.indexOf(c);
		a += p < 0 ? c : s2.charAt(p);
	}
	return a;
}
//for search input @rico
function tran_search(str){
	var s1,s2;
	zh_choose = readCookies('zh_choose');
	if(zh_choose=='t'){
	   s1 = zh_t;
	   s2 = zh_s;
	}else{
	    return str;
	}
	var a = '';
	for(var i=0;i<str.length;i++){
		var c = str.charAt(i);//返回第 i 个字符
		var p = s1.indexOf(c); //该字符是否在列表中,不在返回-1,否则返回offset
		a += p < 0 ? c : s2.charAt(p); //不在列表(-1),返回自身
	}
	return a;
}

function zh_tranBody(obj){
	document.title = document.title.tran();
	var o = (typeof(obj) == "object") ? obj.childNodes : document.body.childNodes;
	for (var i = 0; i < o.length; i++){
		var c = o.item(i);
		if('||BR|HR|TEXTAREA|SCRIPT|'.indexOf("|"+c.tagName+"|") > 0) continue;
		if(c.className == zh_class){
			if(c.id == zh_class + '_' + zh_choose){
				c.setAttribute('style', zh_style_active);
				c.style.cssText = zh_style_active;
			}else{
				c.setAttribute('style', zh_style_inactive);
				c.style.cssText = zh_style_inactive;
			}
			continue;   
		}
		if(c.title != '' && c.title != null){
			c.title = c.title.tran();
		}
		if(c.alt != '' && c.alt != null){
			c.alt = c.alt.tran();
		}
		if(c.tagName == "INPUT" && c.value != '' && c.type != 'text' && c.type != 'hidden' && c.type != 'password'){
			c.value = c.value.tran();
		}
		if(c.tagName == "INPUT"){
			c.placeholder = c.placeholder.tran();
		}
		if(c.nodeType == 3){
			c.data = c.data.tran();  
		}else{
			zh_tranBody(c);
		}
	}
}
function zh_tran(go){
	if(go) zh_choose = go;
	setCookies('zh_choose', zh_choose, zh_expires);
	if(go == 'n'){
	   window.location.reload();
	}else {
	   zh_tranBody();
	}
}
function zh_getLang(){
	if(readCookies('zh_choose')){
	   zh_choose = readCookies('zh_choose');
	   return true;
	}
	if(!zh_autoLang_t && !zh_autoLang_s){
		return false;
	}
	if(navigator.language){
		zh_browserLang = navigator.language;
	}
	if(zh_autoLang_t && zh_langReg_t.test(zh_browserLang)){
		zh_choose = 't';
	}else if(zh_autoLang_s && zh_langReg_s.test(zh_browserLang)){
		zh_choose = 's';
	}
	setCookies('zh_choose', zh_choose, zh_expires);
	if(zh_choose == zh_default){
		return false;
	}
	return true;
}
function zh_init(){
	zh_getLang();
	c = document.getElementById(zh_class + '_' + zh_choose);
	if(zh_choose != zh_default){
		if(window.onload){
			window.onload_before_zh_init = window.onload;
			window.onload = function(){
				zh_tran(zh_choose);
				window.onload_before_zh_init();
			};
		}else{
			window.onload = function(){
				zh_tran(zh_choose);
			};
		}
	}
}
zh_init();