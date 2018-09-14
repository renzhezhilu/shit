//字符串长度
"string".length
//返回指定索引位置的字符
"abc".charAt(1) //"b"
//返回指定索引位置字符的Unicode编码
"abc诶比西".charCodeAt(1) //98
//Unicode编码转成字符
String.fromCharCode(97) //"a"
//连接字符串
"123".concat("456") //"123456"
"0".concat(123) //"123"
"abc"+"123" //"abc123"
//返回指定字符串第一次出现的位置,没有返回-1
"wtf".indexOf("w") //0  
"1.345,2.2".indexOf(".") //1
//最后一次出现的位置，没有返回-1
"wftwtf".lastIndexOf("w") //3
"wftwtf".lastIndexOf("wtf") //3

//找到一个或多个正则表达式的匹配，没有返回null
"old school".match('o') //返回对象[0 : "o" groups : undefined index : 0 input : "old school" length : 1]
"old school".match(/o/g) //返回数组 ["o", "o", "o"]
"123".match(/0/) //null
var yyu = "123".match(/0/)
Boolean(yyu) //false  //null
var yyu = "123".match(/1/)
Boolean(yyu) //true

//替换与正则表达式匹配的子串
"Hip Hop".replace(/Hop/,'Hop Is Power') //第一个 "Hip Hop Is Power"
"Hip Hop".replace(/p/g,'P') //全局 "HiP HoP"
"Hip Hop".replace(/p/g,'1') //没有找到 "Hip Hop"

//返回与正则表达式匹配的子串的起始位置，没有返回-1
"Popin".search(/i/) //3
"Popin&Locking".search(/in/g) //3
"Popin&Locking".search(/l/i) //6

//返回指定开始位置（包括开始位置，若为负数则从末尾处开始计算起始位置，即-1表示倒数第一个）
//到指定结束位置（不包括结束位置，若未指定此参数，则包括从指定的开始位置开始到字符串结尾的所有字符）的字符串
"She is Good Dancer".slice(0,3) //"She"
"She is Good Dancer".slice(-6,-1) //"Dance"

//substr(index,length)：提取从指定index（索引，必需，若为负数则从末尾处开始计算起始位置，即-1表示倒数第一个）
//开始的length（长度，可选，若未指定此参数，则包括从指定的index开始到字符串结尾的所有字符）个字符
"She is Good Dancer".substr(4,3) //"is "
"She is Good Dancer".substr(-6,6) //"Dancer"

//提取指定开始位置（包括开始位置）到结束位置（不包括结束位置，可选，若未指定此参数，
//则包括从指定的开始位置开始到字符串结尾的所有字符）的字符
//与 slice() 和 substr() 方法不同的是，substring() 不接受负的参数
"She is Good Dancer".substring(0,3) //"She"
"She is Good Dancer".substring(-1,7) //负数变成0 "She is "
"She is Good Dancer".substring(-19,7) //"She is "

//将字符串分割为子字符串数组（第二个参数可指定返回的数组的最大长度，可选）
"do not want to work".split(" ") //返回数组 ["do", "not", "want", "to", "work"]

//将字符串转换为小写
"Yo~ Bro Wath is up".toLowerCase() //"yo~ bro wath is up"
//转换为大写
"Yo~ Bro Wath is up".toUpperCase() //"YO~ BRO WATH IS UP"

//返回字符串
[1,2,3].toString() //"1,2,3"
"do not want to work".split(" ").toString() //"do,not,want,to,work"

//////////////////////////////////////////////////////////////////////////////////////////

//搜索字符返回结果数量并添加标记
//content字符串,value搜索词,gi修饰符,which需要的结果
var searchStr = function(content,value,gi,which){
  if(!gi) gi="g"
  let reg = new RegExp(value,gi)
  let jg = content.match(reg)
  if(!jg) return "没有符合的结果！"
  if(which=="num") return jg.length
  if(which=="con") return content.replace(reg,"#"+value+"#")
  else return "结果"+jg.length+"个\n"+content.replace(reg,"#"+value+"#")
}
var nn ="今天天气真好啊啊啊啊啊哦哦哦哦"
searchStr(nn,"天","g")
// "结果2个
// 今#天##天#气真好啊啊啊啊啊哦哦哦哦"
//学习：https://www.cnblogs.com/guoyeqiang/p/8178336.html

//////////////////////////////////////////////////////////////////////////////////////////

//对比两个字符串的相似性
var comparedStr = function(con1,con2,wordnum){
  if(!wordnum) wordnum=5
  con1.lenght
  let searchnumtime = parseInt(con1.lenght/wordnum)
  for(let i=0;i<searchnumtime;i++){
    con1.substr(0,wordnum)
  }
  con1.substr(0,wordnum)
}


var comparedStr = function(con1,con2,wordnum){
  if(!con1 || !con2) return "缺少字符串-function(con1*,con2*,wordnum)"
  if(!wordnum) wordnum=2
  let s = {
    con1:con1,
    con2:con2,
    regexp:new RegExp(),
    wordnum:wordnum, //词汇对比
    conlong:"",
    conshort:"",
    constay:"",
    conarray:[],
    jg_proportion:0,
    jg:0
  }
  //用短的去对比长的
  if(s.con1.length>=s.con2.length) {s.conlong=s.con1; s.conshort=s.con2}
  else {s.conlong=s.con2; s.conshort=s.con1}
  s.jg_proportion = s.wordnum / s.conshort.length //每段得分占比
  for(let i=0;i<s.conshort.length;i+=s.wordnum){
    let confrag = s.conshort.substr(i,s.wordnum)
    s.regexp=new RegExp(confrag,"g");
    let result = s.regexp.test(s.conlong);
    if(result) s.jg+=s.jg_proportion
  }
  return "相似度："+Math.round(s.jg*100)+"%"
}








