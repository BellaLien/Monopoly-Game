 

var  original1 = 10000;
var  original2 = 10000;
var  original3 = 10000;
var  original4 = 10000;
var startmoney = 2000;

function Changeplayername1(){
    var NewPlayername1=document.getElementById("name1box").value;
    document.getElementById("name1").innerHTML=NewPlayername1;
    document.getElementById("original1").innerHTML=original1;
}
function Changeplayername2(){
    var NewPlayername2=document.getElementById("name2box").value;
    document.getElementById("name2").innerHTML=NewPlayername2;
    document.getElementById("original2").innerHTML=original2;
}
function Changeplayername3(){
    var NewPlayername3=document.getElementById("name3box").value;
    document.getElementById("name3").innerHTML=NewPlayername3;
    document.getElementById("original3").innerHTML=original3;
}
function Changeplayername4(){
    var NewPlayername4=document.getElementById("name4box").value;
    document.getElementById("name4").innerHTML=NewPlayername4;
    document.getElementById("original4").innerHTML=original4;
}

var pingtung_house = 0;
var kaohsiung_house = 0;
var anping_house = 0;
var tainan_house = 0;
var kenting_house = 0;
var chiayi_house = 0;
var taichung_house = 0;
var chuban_house = 0;
var yunlin_house = 0;
var taitung_house = 0;
var chunghwua_house = 0;
var yilan_house = 0;
var keelung_house = 0;
var taipei_house = 0;
var taoyuan_house = 0;
var miaoli_house = 0;

//骰子亂數取值
var interval = null;
function initial()
{
    var button1 = document.getElementById( "start" );
    button1.addEventListener( "click", start, false );
    var button2 = document.getElementById( "stop" );
    button2.addEventListener( "click", stop, false );
}

function start()
{ 
  if ( interval )
      return; 
  interval = window.setInterval( "run()", 50 ); 
}


var dieValue;
function run()
{
   var x = document.getElementById( "die" )
   for (var i = 0; i < 1; i++)
   {
      dieValue = Math.floor ( 1 + Math.random() * 6);
      x.src = "die" + dieValue + ".png";
   }
}

var turn = 1;
function stop()
{
   window.clearInterval (interval);
   interval = null;

   if (turn % 4 == 1){
      dotmove1();
   }
   else if (turn % 4 == 2){
      dotmove2();
   }
   else if (turn % 4 == 3){
      dotmove3();
   }
   else if (turn % 4 == 0){
      dotmove4();
      turn = 0;
   }
   turn++;
}

//使用骰子的值移動玩家的旗子
function dotmove1() 
{
  var step1x = 0;
  var step1y = 0;
  var xsum1 = 0;
  var ysum1 = 0;
  var xmove1 = 0;
  var ymove1 = 0;
  var counter1 = 1;
  var dot1 = document.getElementById ("dot1");
  var x1 = dot1.offsetLeft;
  var y1 = dot1.offsetTop; 


  for (var j = 0; j < dieValue; j++)
  {     

      if (counter1 % 6 != 0){
        if (dot1.offsetLeft < 549 && dot1.offsetTop < 112){
          step1x += 110;
          xsum1 = step1x;
          x1 += xsum1;
          xmove1 = x1;
          dot1.style.left = xmove1 + 'px';
        }
        else if (dot1.offsetLeft > 549 && dot1.offsetTop < 514){
          step1y += 110;
          ysum1 = step1y;
          y1 += ysum1;
          ymove1 = y1;
          dot1.style.top = ymove1 + 'px';
        }
        else if (dot1.offsetTop > 514 && dot1.offsetLeft > 114){
          step1x += 110;
          xsum1 = step1x;
          x1 -= xsum1;
          xmove1 = x1;
          dot1.style.left = xmove1 + 'px';
        }
        else if (dot1.offsetTop > 112 && dot1.offsetLeft < 114){
          step1y += 110;
          ysum1 = step1y;
          y1 -= ysum1;
          ymove1 = y1;
          dot1.style.top = ymove1 + 'px';
        }
      }

      if (counter1 % 6 == 0){
        if (dot1.offsetLeft < 114  && dot1.offsetTop < 112){
          step1x += 110;
          xsum1 = step1x;
          x1 += xsum1;
          xmove1 = x1;
          dot1.style.left = xmove1 + 'px';
        }
        else if (dot1.offsetLeft > 549 && dot1.offsetTop < 514){
          step1y += 110;
          ysum1 = step1y;
          y1 += ysum1;
          ymove1 = y1;
          dot1.style.top = ymove1 + 'px';
        }
        else if (dot1.offsetTop > 514 && dot1.offsetLeft > 114){
          step1x += 110;
          xsum1 = step1x;
          x1 -= xsum1;
          xmove1 = x1;
          dot1.style.left = xmove1 + 'px';
        }
        else if (dot1.offsetTop > 514 && dot1.offsetLeft < 114){
          step1y += 110;
          ysum1 = step1y;
          y1 -= ysum1;
          ymove1 = y1;
          dot1.style.top = ymove1 + 'px';
        }
      }
      
      step1y = 0;
      step1x = 0;
      counter1++;
      turncounter1();
  }

  if (counter1 % 7 == 0){
        counter1 = 2;
  }

  if (j == dieValue){
    BuyPlant1();
  }
}

var player1count = 0;
function turncounter1()
{
  if (player1count < 20){
    player1count ++;
  }
  else{
    original1 += startmoney;
    document.getElementById("original1").innerHTML=original1;
    player1count = 1; 
  }
}

function BuyPlant1(){
  var pingtung = document.getElementById ("pingtung");
  var kaohsiung = document.getElementById ("kaohsiung");
  var anping = document.getElementById ("anping");
  var tainan = document.getElementById ("tainan");
  var kenting = document.getElementById ("kenting");
  var chiayi = document.getElementById ("chiayi");
  var taichung = document.getElementById("taichung");
  var chuban = document.getElementById ("chuban");
  var yunlin = document.getElementById ("yunlin");
  var taitung = document.getElementById ("taitung");
  var chunghwua = document.getElementById ("chunghwua");
  var yilan = document.getElementById ("yilan");
  var keelung = document.getElementById ("keelung");
  var taipei = document.getElementById ("taipei");
  var taoyuan = document.getElementById ("taoyuan");
  var miaoli = document.getElementById ("miaoli");
  var playground1 = document.getElementById ("playground1");
  var playground2 = document.getElementById ("playground2");
  var playground3 = document.getElementById ("playground3");
  var startpoint = document.getElementById("startpoint");
  var r;
  var build;
  var payfor;
  var payvalue = 0;

if (original1 > 0){
  if (dot1.offsetLeft > pingtung.offsetLeft && dot1.offsetLeft < kaohsiung.offsetLeft && dot1.offsetTop <= 112){
    if (pingtung.style.backgroundColor == "white"){
       r = confirm("您要購買土地嗎？將會花費1000元");
       if(r){
        pingtung.style.backgroundColor = "#77DDFF";
        original1 -= 1000;
        // if (original1 < 0){
        //   var bankruptcytest = alert("破產！");
        // }
        document.getElementById("original1").innerHTML=original1;
      }
    }

    else if (pingtung.style.backgroundColor == "rgb(119, 221, 255)"){
    build = confirm("您要蓋房子嗎？將會花費500元");
      if(build && pingtung_house < 5){
          pingtung_house += 1;
          original1 -= 500;
          document.getElementById("pingtung_house").innerHTML=pingtung_house;
          document.getElementById("original1").innerHTML=original1;
        }
      else if(build && pingtung_house == 5)
        window.alert("房子最多只能蓋5層！");
      }

    else if (pingtung.style.backgroundColor == "rgb(255, 164, 136)"){
    payvalue = (pingtung_house*500)+500;
    payfor = window.alert("這是玩家2的土地，您需支付共" + payvalue + "!")
    original1 -= payvalue; 
    original2 += payvalue;     
    document.getElementById("original1").innerHTML=original1;
    document.getElementById("original2").innerHTML=original2; 
    }

    else if (pingtung.style.backgroundColor = "rgb(187, 255, 0)"){
    payvalue = (pingtung_house*500)+500;
    payfor = window.alert("這是玩家3的土地，您需支付共" + payvalue + "!")
    original1 -= payvalue; 
    original3 += payvalue;       
    document.getElementById("original1").innerHTML=original1;
    document.getElementById("original3").innerHTML=original3; 
    }

    else if (pingtung.style.backgroundColor = "rgb(255, 255, 119)"){
    payvalue = (pingtung_house*500)+500;
    payfor = window.alert("這是玩家4的土地，您需支付共" + payvalue + "!")
    original1 -= payvalue;  
    original4 += payvalue;    
    document.getElementById("original1").innerHTML=original1;
    document.getElementById("original4").innerHTML=original4; 
    }
}

 
  else if (dot1.offsetLeft > kaohsiung.offsetLeft && dot1.offsetLeft < anping.offsetLeft && dot1.offsetTop <= 112){
      if (kaohsiung.style.backgroundColor == "white"){
        r = confirm("您要購買土地嗎？將會花費1000元");
      if(r){
        kaohsiung.style.backgroundColor = "#77DDFF";
        original1 -= 1000;
        document.getElementById("original1").innerHTML=original1;
      }
    }

      else if (kaohsiung.style.backgroundColor == "rgb(119, 221, 255)"){
      build = confirm("您要蓋房子嗎？將會花費500元");
        if(build && kaohsiung_house < 5){
            kaohsiung_house += 1;
            original1 -= 500;
            document.getElementById("kaohsiung_house").innerHTML=kaohsiung_house;
            document.getElementById("original1").innerHTML=original1;
          }
        else if(build && kaohsiung_house == 5)
          window.alert("房子最多只能蓋5層！");
        }
      

      else if (kaohsiung.style.backgroundColor == "rgb(255, 164, 136)"){
      payvalue = (kaohsiung_house*500)+500;
      payfor = window.alert("這是玩家2的土地，您需支付共" + payvalue + "!")
      original1 -= payvalue; 
      original2 += payvalue;     
      document.getElementById("original1").innerHTML=original1;
      document.getElementById("original2").innerHTML=original2; 
      }

      else if (kaohsiung.style.backgroundColor = "rgb(187, 255, 0)"){
      payvalue = (kaohsiung_house*500)+500;
      payfor = window.alert("這是玩家3的土地，您需支付共" + payvalue + "!")
      original1 -= payvalue; 
      original3 += payvalue;       
      document.getElementById("original1").innerHTML=original1;
      document.getElementById("original3").innerHTML=original3; 
      }

      else if (kaohsiung.style.backgroundColor = "rgb(255, 255, 119)"){
      payvalue = (kaohsiung_house*500)+500;
      payfor = window.alert("這是玩家4的土地，您需支付共" + payvalue + "!")
      original1 -= payvalue;  
      original4 += payvalue;    
      document.getElementById("original1").innerHTML=original1;
      document.getElementById("original4").innerHTML=original4;
      }
}

  else if (dot1.offsetLeft > anping.offsetLeft && dot1.offsetLeft < tainan.offsetLeft && dot1.offsetTop <= 112){
      if (anping.style.backgroundColor == "white"){
        r = confirm("您要購買土地嗎？將會花費1000元");
      if(r){
        anping.style.backgroundColor = "#77DDFF";
        original1 -= 1000;
        document.getElementById("original1").innerHTML=original1;
      }
    }
      else if (anping.style.backgroundColor == "rgb(119, 221, 255)"){
      build = confirm("您要蓋房子嗎？將會花費500元");
        if(build && anping_house < 5){
            anping_house += 1;
            original1 -= 500;
            document.getElementById("anping_house").innerHTML=anping_house;
            document.getElementById("original1").innerHTML=original1;
          }
        else if(build && anping_house == 5)
          window.alert("房子最多只能蓋5層！");
        }

      else if (anping.style.backgroundColor == "rgb(255, 164, 136)"){
      payvalue = (anping_house*500)+500;
      payfor = window.alert("這是玩家2的土地，您需支付共" + payvalue + "!")
      original1 -= payvalue; 
      original2 += payvalue;     
      document.getElementById("original1").innerHTML=original1;
      document.getElementById("original2").innerHTML=original2; 
      }

      else if (anping.style.backgroundColor = "rgb(187, 255, 0)"){
      payvalue = (anping_house*500)+500;
      payfor = window.alert("這是玩家3的土地，您需支付共" + payvalue + "!")
      original1 -= payvalue; 
      original3 += payvalue;       
      document.getElementById("original1").innerHTML=original1;
      document.getElementById("original3").innerHTML=original3; 
      }

      else if (anping.style.backgroundColor = "rgb(255, 255, 119)"){
      payvalue = (anping_house*500)+500;
      payfor = window.alert("這是玩家4的土地，您需支付共" + payvalue + "!")
      original1 -= payvalue;  
      original4 += payvalue;    
      document.getElementById("original1").innerHTML=original1;
      document.getElementById("original4").innerHTML=original4;
      }
}

  else if  (dot1.offsetLeft > tainan.offsetLeft && dot1.offsetLeft < playground1.offsetLeft && dot1.offsetTop <= 112){
      if (tainan.style.backgroundColor == "white"){
        r = confirm("您要購買土地嗎？將會花費1000元");
      if(r){
        tainan.style.backgroundColor = "#77DDFF";
        original1 -= 1000;
        document.getElementById("original1").innerHTML=original1;
      }
    }
    
    else if (tainan.style.backgroundColor == "rgb(119, 221, 255)"){
    build = confirm("您要蓋房子嗎？將會花費500元");
      if(build && tainan_house < 5){
          tainan_house += 1;
          original1 -= 500;
          document.getElementById("tainan_house").innerHTML=tainan_house;
          document.getElementById("original1").innerHTML=original1;
        }
      else if(build && tainan_house == 5)
          window.alert("房子最多只能蓋5層！");
        }
    

    else if (tainan.style.backgroundColor == "rgb(255, 164, 136)"){
      payvalue = (tainan_house*500)+500;
      payfor = window.alert("這是玩家2的土地，您需支付共" + payvalue + "!")
      original1 -= payvalue; 
      original2 += payvalue;     
      document.getElementById("original1").innerHTML=original1;
      document.getElementById("original2").innerHTML=original2; 
    }

    else if (tainan.style.backgroundColor = "rgb(187, 255, 0)"){
      payvalue = (tainan_house*500)+500;
      payfor = window.alert("這是玩家3的土地，您需支付共" + payvalue + "!")
      original1 -= payvalue; 
      original3 += payvalue;       
      document.getElementById("original1").innerHTML=original1;
      document.getElementById("original3").innerHTML=original3; 
    }

    else if (tainan.style.backgroundColor = "rgb(255, 255, 119)"){
      payvalue = (tainan_house*500)+500;
      payfor = window.alert("這是玩家4的土地，您需支付共" + payvalue + "!")
      original1 -= payvalue;  
      original4 += payvalue;    
      document.getElementById("original1").innerHTML=original1;
      document.getElementById("original4").innerHTML=original4;
    }
}

  else if  (dot1.offsetLeft > 549 && dot1.offsetLeft < 657 && dot1.offsetTop < yunlin.offsetTop && dot1.offsetTop > chiayi.offsetTop){
    if (chiayi.style.backgroundColor == "white"){
        r = confirm("您要購買土地嗎？將會花費1000元");
      if(r){
        chiayi.style.backgroundColor = "#77DDFF";
        original1 -= 1000;
        document.getElementById("original1").innerHTML=original1;
      }
    }
    else if (chiayi.style.backgroundColor == "rgb(119, 221, 255)"){
    build = confirm("您要蓋房子嗎？將會花費500元");
      if(build && chiayi_house < 5){
          chiayi_house += 1;
          original1 -= 500;
          document.getElementById("chiayi_house").innerHTML=chiayi_house;
          document.getElementById("original1").innerHTML=original1;
        }
      else if(build && chiayi_house == 5)
          window.alert("房子最多只能蓋5層！");
        }
    

    else if (chiayi.style.backgroundColor == "rgb(255, 164, 136)"){
      payvalue = (chiayi_house*500)+500;
      payfor = window.alert("這是玩家2的土地，您需支付共" + payvalue + "!")
      original1 -= payvalue; 
      original2 += payvalue;     
      document.getElementById("original1").innerHTML=original1;
      document.getElementById("original2").innerHTML=original2; 
    }

    else if (chiayi.style.backgroundColor = "rgb(187, 255, 0)"){
      payvalue = (chiayi_house*500)+500;
      payfor = window.alert("這是玩家3的土地，您需支付共" + payvalue + "!")
      original1 -= payvalue; 
      original3 += payvalue;       
      document.getElementById("original1").innerHTML=original1;
      document.getElementById("original3").innerHTML=original3; 
    }

    else if (chiayi.style.backgroundColor = "rgb(255, 255, 119)"){
      payvalue = (chiayi_house*500)+500;
      payfor = window.alert("這是玩家4的土地，您需支付共" + payvalue + "!")
      original1 -= payvalue;  
      original4 += payvalue;    
      document.getElementById("original1").innerHTML=original1;
      document.getElementById("original4").innerHTML=original4;
    }
  }
  
  else if  (dot1.offsetLeft > 549 && dot1.offsetLeft < 657 && dot1.offsetTop < chunghwua.offsetTop && dot1.offsetTop > yunlin.offsetTop){
      if (yunlin.style.backgroundColor == "white"){
        r = confirm("您要購買土地嗎？將會花費1000元");
      if(r){
        yunlin.style.backgroundColor = "#77DDFF";
        original1 -= 1000;
        document.getElementById("original1").innerHTML=original1;
      }
    }
    else if (yunlin.style.backgroundColor == "rgb(119, 221, 255)"){
    build = confirm("您要蓋房子嗎？將會花費500元");
      if(build && yunlin_house < 5){
          yunlin_house += 1;
          original1 -= 500;
          document.getElementById("yunlin_house").innerHTML=yunlin_house;
          document.getElementById("original1").innerHTML=original1;
        }
      else if(build && yunlin_house == 5)
          window.alert("房子最多只能蓋5層！");
        }
    

    else if (yunlin.style.backgroundColor == "rgb(255, 164, 136)"){
      payvalue = (yunlin_house*500)+500;
      payfor = window.alert("這是玩家2的土地，您需支付共" + payvalue + "!")
      original1 -= payvalue; 
      original2 += payvalue;     
      document.getElementById("original1").innerHTML=original1;
      document.getElementById("original2").innerHTML=original2; 
    }

    else if (yunlin.style.backgroundColor = "rgb(187, 255, 0)"){
      payvalue = (yunlin_house*500)+500;
      payfor = window.alert("這是玩家3的土地，您需支付共" + payvalue + "!")
      original1 -= payvalue; 
      original3 += payvalue;       
      document.getElementById("original1").innerHTML=original1;
      document.getElementById("original3").innerHTML=original3; 
    }

    else if (yunlin.style.backgroundColor = "rgb(255, 255, 119)"){
      payvalue = (yunlin_house*500)+500;
      payfor = window.alert("這是玩家4的土地，您需支付共" + payvalue + "!")
      original1 -= payvalue;  
      original4 += payvalue;    
      document.getElementById("original1").innerHTML=original1;
      document.getElementById("original4").innerHTML=original4;
    }
  }
  
  else if (dot1.offsetLeft > 549 && dot1.offsetLeft < 657 && dot1.offsetTop < taichung.offsetTop && dot1.offsetTop > chunghwua.offsetTop){
      if (chunghwua.style.backgroundColor == "white"){
        r = confirm("您要購買土地嗎？將會花費1000元");
      if(r){
        chunghwua.style.backgroundColor = "#77DDFF";
        original1 -= 1000;
        document.getElementById("original1").innerHTML=original1;
      }
    }
    else if (chunghwua.style.backgroundColor == "rgb(119, 221, 255)"){
    build = confirm("您要蓋房子嗎？將會花費500元");
      if(build && chunghwua_house < 5){
          chunghwua_house += 1;
          original1 -= 500;
          document.getElementById("chunghwua_house").innerHTML=chunghwua_house;
          document.getElementById("original1").innerHTML=chunghwua_house;
        }
      else if(build && chunghwua_house == 5)
          window.alert("房子最多只能蓋5層！");
        }
    

    else if (chunghwua.style.backgroundColor == "rgb(255, 164, 136)"){
      payvalue = (chunghwua_house*500)+500;
      payfor = window.alert("這是玩家2的土地，您需支付共" + payvalue + "!")
      original1 -= payvalue; 
      original2 += payvalue;     
      document.getElementById("original1").innerHTML=original1;
      document.getElementById("original2").innerHTML=original2; 
    }

    else if (chunghwua.style.backgroundColor = "rgb(187, 255, 0)"){
      payvalue = (chunghwua_house*500)+500;
      payfor = window.alert("這是玩家3的土地，您需支付共" + payvalue + "!")
      original1 -= payvalue; 
      original3 += payvalue;       
      document.getElementById("original1").innerHTML=original1;
      document.getElementById("original3").innerHTML=original3; 
    }

    else if (chunghwua.style.backgroundColor = "rgb(255, 255, 119)"){
      payvalue = (chunghwua_house*500)+500;
      payfor = window.alert("這是玩家4的土地，您需支付共" + payvalue + "!")
      original1 -= payvalue;  
      original4 += payvalue;    
      document.getElementById("original1").innerHTML=original1;
      document.getElementById("original4").innerHTML=original4;
    }
  }

  else if (dot1.offsetLeft > 549 && dot1.offsetLeft < 657 && dot1.offsetTop < playground2.offsetTop && dot1.offsetTop > taichung.offsetTop){
      if (taichung.style.backgroundColor == "white"){
        r = confirm("您要購買土地嗎？將會花費1000元");
      if(r){
        taichung.style.backgroundColor = "#77DDFF";
        original1 -= 1000;
        document.getElementById("original1").innerHTML=original1;
      }
    }
    else if (taichung.style.backgroundColor == "rgb(119, 221, 255)"){
    build = confirm("您要蓋房子嗎？將會花費500元");
      if(build && taichung_house < 5){
          taichung_house += 1;
          original1 -= 500;
          document.getElementById("taichung_house").innerHTML=taichung_house;
          document.getElementById("original1").innerHTML=original1;
        }
      else if(build && taichung_house == 5)
          window.alert("房子最多只能蓋5層！");
        }
    

    else if (taichung.style.backgroundColor == "rgb(255, 164, 136)"){
      payvalue = (taichung_house*500)+500;
      payfor = window.alert("這是玩家2的土地，您需支付共" + payvalue + "!")
      original1 -= payvalue; 
      original2 += payvalue;     
      document.getElementById("original1").innerHTML=original1;
      document.getElementById("original2").innerHTML=original2; 
    }

    else if (taichung.style.backgroundColor = "rgb(187, 255, 0)"){
      payvalue = (taichung_house*500)+500;
      payfor = window.alert("這是玩家3的土地，您需支付共" + payvalue + "!")
      original1 -= payvalue; 
      original3 += payvalue;       
      document.getElementById("original1").innerHTML=original1;
      document.getElementById("original3").innerHTML=original3; 
    }

    else if (taichung.style.backgroundColor = "rgb(255, 255, 119)"){
      payvalue = (taichung_house*500)+500;
      payfor = window.alert("這是玩家4的土地，您需支付共" + payvalue + "!")
      original1 -= payvalue;  
      original4 += payvalue;    
      document.getElementById("original1").innerHTML=original1;
      document.getElementById("original4").innerHTML=original4;
    }
  }
  
  else if  (dot1.offsetLeft > miaoli.offsetLeft && dot1.offsetLeft < playground2.offsetLeft && dot1.offsetTop > 549){
      if (miaoli.style.backgroundColor == "white"){
        r = confirm("您要購買土地嗎？將會花費1000元");
      if(r){
        miaoli.style.backgroundColor = "#77DDFF";
        original1 -= 1000;
        document.getElementById("original1").innerHTML=original1;
      }
    }
    else if (miaoli.style.backgroundColor == "rgb(119, 221, 255)"){
    build = confirm("您要蓋房子嗎？將會花費500元");
      if(build && miaoli_house < 5){
          miaoli_house += 1;
          original1 -= 500;
          document.getElementById("miaoli_house").innerHTML=miaoli_house;
          document.getElementById("original1").innerHTML=original1;
        }
      else if(build && miaoli_house == 5)
          window.alert("房子最多只能蓋5層！");
        }
    

    else if (miaoli.style.backgroundColor == "rgb(255, 164, 136)"){
      payvalue = (miaoli_house*500)+500;
      payfor = window.alert("這是玩家2的土地，您需支付共" + payvalue + "!")
      original1 -= payvalue; 
      original2 += payvalue;     
      document.getElementById("original1").innerHTML=original1;
      document.getElementById("original2").innerHTML=original2; 
    }

    else if (miaoli.style.backgroundColor = "rgb(187, 255, 0)"){
      payvalue = (miaoli_house*500)+500;
      payfor = window.alert("這是玩家3的土地，您需支付共" + payvalue + "!")
      original1 -= payvalue; 
      original3 += payvalue;       
      document.getElementById("original1").innerHTML=original1;
      document.getElementById("original3").innerHTML=original3; 
    }

    else if (miaoli.style.backgroundColor = "rgb(255, 255, 119)"){
      payvalue = (miaoli_house*500)+500;
      payfor = window.alert("這是玩家4的土地，您需支付共" + payvalue + "!")
      original1 -= payvalue;  
      original4 += payvalue;    
      document.getElementById("original1").innerHTML=original1;
      document.getElementById("original4").innerHTML=original4;
    }
  }
    else if (dot1.offsetLeft > taoyuan.offsetLeft && dot1.offsetLeft < miaoli.offsetLeft && dot1.offsetTop > 549){
      if (taoyuan.style.backgroundColor == "white"){
        r = confirm("您要購買土地嗎？將會花費1000元");
      if(r){
        taoyuan.style.backgroundColor = "#77DDFF";
        original1 -= 1000;
        document.getElementById("original1").innerHTML=original1;
      }
    }
      else if (taoyuan.style.backgroundColor == "rgb(119, 221, 255)"){
    build = confirm("您要蓋房子嗎？將會花費500元");
      if(build && taoyuan_house < 5){
          taoyuan_house += 1;
          original1 -= 500;
          document.getElementById("taoyuan_house").innerHTML=taoyuan_house;
          document.getElementById("original1").innerHTML=original1;
        }
      else if(build && taoyuan_house == 5)
          window.alert("房子最多只能蓋5層！");
        }
    

    else if (taoyuan.style.backgroundColor == "rgb(255, 164, 136)"){
      payvalue = (taoyuan_house*500)+500;
      payfor = window.alert("這是玩家2的土地，您需支付共" + payvalue + "!")
      original1 -= payvalue; 
      original2 += payvalue;     
      document.getElementById("original1").innerHTML=original1;
      document.getElementById("original2").innerHTML=original2; 
    }

    else if (taoyuan.style.backgroundColor = "rgb(187, 255, 0)"){
      payvalue = (taoyuan_house*500)+500;
      payfor = window.alert("這是玩家3的土地，您需支付共" + payvalue + "!")
      original1 -= payvalue; 
      original3 += payvalue;       
      document.getElementById("original1").innerHTML=original1;
      document.getElementById("original3").innerHTML=original3; 
    }

    else if (taoyuan.style.backgroundColor = "rgb(255, 255, 119)"){
      payvalue = (taoyuan_house*500)+500;
      payfor = window.alert("這是玩家4的土地，您需支付共" + payvalue + "!")
      original1 -= payvalue;  
      original4 += payvalue;    
      document.getElementById("original1").innerHTML=original1;
      document.getElementById("original4").innerHTML=original4;
    }
  }

  else if  (dot1.offsetLeft > taipei.offsetLeft && dot1.offsetLeft < taoyuan.offsetLeft && dot1.offsetTop > 549){
      if (taipei.style.backgroundColor == "white"){
        r = confirm("您要購買土地嗎？將會花費1000元");
      if(r){
        taipei.style.backgroundColor = "#77DDFF";
        original1 -= 1000;
        document.getElementById("original1").innerHTML=original1;
      }
    }

    else if (taipei.style.backgroundColor == "rgb(119, 221, 255)"){
    build = confirm("您要蓋房子嗎？將會花費500元");
      if(build && taipei_house < 5){
          taipei_house += 1;
          original1 -= 500;
          document.getElementById("taipei_house").innerHTML=taipei_house;
          document.getElementById("original1").innerHTML=original1;
        }
      else if(build && taipei_house == 5)
          window.alert("房子最多只能蓋5層！");
        }
    

    else if (taipei.style.backgroundColor == "rgb(255, 164, 136)"){
      payvalue = (taipei_house*500)+500;
      payfor = window.alert("這是玩家2的土地，您需支付共" + payvalue + "!")
      original1 -= payvalue; 
      original2 += payvalue;     
      document.getElementById("original1").innerHTML=original1;
      document.getElementById("original2").innerHTML=original2; 
    }

    else if (taipei.style.backgroundColor = "rgb(187, 255, 0)"){
      payvalue = (taipei_house*500)+500;
      payfor = window.alert("這是玩家3的土地，您需支付共" + payvalue + "!")
      original1 -= payvalue; 
      original3 += payvalue;       
      document.getElementById("original1").innerHTML=original1;
      document.getElementById("original3").innerHTML=original3; 
    }

    else if (taipei.style.backgroundColor = "rgb(255, 255, 119)"){
      payvalue = (taipei_house*500)+500;
      payfor = window.alert("這是玩家4的土地，您需支付共" + payvalue + "!")
      original1 -= payvalue;  
      original4 += payvalue;    
      document.getElementById("original1").innerHTML=original1;
      document.getElementById("original4").innerHTML=original4;
    }
  }
  
  else if (dot1.offsetLeft > keelung.offsetLeft && dot1.offsetLeft < taipei.offsetLeft && dot1.offsetTop > 549){
      if (keelung.style.backgroundColor == "white"){
        r = confirm("您要購買土地嗎？將會花費1000元");
      if(r){
        keelung.style.backgroundColor = "#77DDFF";
        original1 -= 1000;
        document.getElementById("original1").innerHTML=original1;
      }
    }
    
    else if (keelung.style.backgroundColor == "rgb(119, 221, 255)"){
    build = confirm("您要蓋房子嗎？將會花費500元");
      if(build && keelung_house < 5){
          keelung_house += 1;
          original1 -= 500;
          document.getElementById("keelung_house").innerHTML=keelung_house;
          document.getElementById("original1").innerHTML=original1;
        }
      else if(build && keelung_house == 5)
          window.alert("房子最多只能蓋5層！");
        }
    

    else if (keelung.style.backgroundColor == "rgb(255, 164, 136)"){
      payvalue = (keelung_house*500)+500;
      payfor = window.alert("這是玩家2的土地，您需支付共" + payvalue + "!")
      original1 -= payvalue; 
      original2 += payvalue;     
      document.getElementById("original1").innerHTML=original1;
      document.getElementById("original2").innerHTML=original2; 
    }

    else if (keelung.style.backgroundColor = "rgb(187, 255, 0)"){
      payvalue = (keelung_house*500)+500;
      payfor = window.alert("這是玩家3的土地，您需支付共" + payvalue + "!")
      original1 -= payvalue; 
      original3 += payvalue;       
      document.getElementById("original1").innerHTML=original1;
      document.getElementById("original3").innerHTML=original3; 
    }

    else if (keelung.style.backgroundColor = "rgb(255, 255, 119)"){
      payvalue = (keelung_house*500)+500;
      payfor = window.alert("這是玩家4的土地，您需支付共" + payvalue + "!")
      original1 -= payvalue;  
      original4 += payvalue;    
      document.getElementById("original1").innerHTML=original1;
      document.getElementById("original4").innerHTML=original4;
    }
  }
  
  else if  (dot1.offsetTop > yilan.offsetTop && dot1.offsetTop < playground3.offsetTop && dot1.offsetLeft <= 112){
      if (yilan.style.backgroundColor == "white"){
        r = confirm("您要購買土地嗎？將會花費1000元");
      if(r){
        yilan.style.backgroundColor = "#77DDFF";
        original1 -= 1000;
        document.getElementById("original1").innerHTML=original1;
      }
    }
    else if (yilan.style.backgroundColor == "rgb(119, 221, 255)"){
    build = confirm("您要蓋房子嗎？將會花費500元");
      if(build && yilan_house < 5){
          yilan_house += 1;
          original1 -= 500;
          document.getElementById("yilan_house").innerHTML=yilan_house;
          document.getElementById("original1").innerHTML=original1;
        }
      else if(build && yilan_house == 5)
          window.alert("房子最多只能蓋5層！");
        }
    

    else if (yilan.style.backgroundColor == "rgb(255, 164, 136)"){
      payvalue = (yilan_house*500)+500;
      payfor = window.alert("這是玩家2的土地，您需支付共" + payvalue + "!")
      original1 -= payvalue; 
      original2 += payvalue;     
      document.getElementById("original1").innerHTML=original1;
      document.getElementById("original2").innerHTML=original2; 
    }

    else if (yilan.style.backgroundColor = "rgb(187, 255, 0)"){
      payvalue = (yilan_house*500)+500;
      payfor = window.alert("這是玩家3的土地，您需支付共" + payvalue + "!")
      original1 -= payvalue; 
      original3 += payvalue;       
      document.getElementById("original1").innerHTML=original1;
      document.getElementById("original3").innerHTML=original3; 
    }

    else if (yilan.style.backgroundColor = "rgb(255, 255, 119)"){
      payvalue = (yilan_house*500)+500;
      payfor = window.alert("這是玩家4的土地，您需支付共" + payvalue + "!")
      original1 -= payvalue;  
      original4 += payvalue;    
      document.getElementById("original1").innerHTML=original1;
      document.getElementById("original4").innerHTML=original4;
    }
  }
    else if (dot1.offsetTop > taitung.offsetTop && dot1.offsetTop < yilan.offsetTop && dot1.offsetLeft <= 112){
      if (taitung.style.backgroundColor == "white"){
        r = confirm("您要購買土地嗎？將會花費1000元");
      if(r){
        taitung.style.backgroundColor = "#77DDFF";
        original1 -= 1000;
        document.getElementById("original1").innerHTML=original1;
      }
    }
    else if (taitung.style.backgroundColor == "rgb(119, 221, 255)"){
    build = confirm("您要蓋房子嗎？將會花費500元");
      if(build && taitung_house < 5){
          taitung_house += 1;
          original1 -= 500;
          document.getElementById("taitung_house").innerHTML=taitung_house;
          document.getElementById("original1").innerHTML=original1;
        }
      else if(build && taitung_house == 5)
          window.alert("房子最多只能蓋5層！");
        }
    

    else if (taitung.style.backgroundColor == "rgb(255, 164, 136)"){
      payvalue = (taitung_house*500)+500;
      payfor = window.alert("這是玩家2的土地，您需支付共" + payvalue + "!")
      original1 -= payvalue; 
      original2 += payvalue;     
      document.getElementById("original1").innerHTML=original1;
      document.getElementById("original2").innerHTML=original2; 
    }

    else if (taitung.style.backgroundColor = "rgb(187, 255, 0)"){
      payvalue = (taitung_house*500)+500;
      payfor = window.alert("這是玩家3的土地，您需支付共" + payvalue + "!")
      original1 -= payvalue; 
      original3 += payvalue;       
      document.getElementById("original1").innerHTML=original1;
      document.getElementById("original3").innerHTML=original3; 
    }

    else if (taitung.style.backgroundColor = "rgb(255, 255, 119)"){
      payvalue = (taitung_house*500)+500;
      payfor = window.alert("這是玩家4的土地，您需支付共" + payvalue + "!")
      original1 -= payvalue;  
      original4 += payvalue;    
      document.getElementById("original1").innerHTML=original1;
      document.getElementById("original4").innerHTML=original4;
    }
  }

    else if (dot1.offsetTop > chuban.offsetTop && dot1.offsetTop < taitung.offsetTop && dot1.offsetLeft <= 112){
      if (chuban.style.backgroundColor == "white"){
        r = confirm("您要購買土地嗎？將會花費1000元");
      if(r){
        chuban.style.backgroundColor = "#77DDFF";
        original1 -= 1000;
        document.getElementById("original1").innerHTML=original1;
      }
    }
    else if (chuban.style.backgroundColor == "rgb(119, 221, 255)"){
    build = confirm("您要蓋房子嗎？將會花費500元");
      if(build && chuban_house < 5){
          chuban_house += 1;
          original1 -= 500;
          document.getElementById("chuban_house").innerHTML=chuban_house;
          document.getElementById("original1").innerHTML=original1;
        }
      else if(build && chuban_house == 5)
          window.alert("房子最多只能蓋5層！");
        }
    

    else if (chuban.style.backgroundColor == "rgb(255, 164, 136)"){
      payvalue = (chuban_house*500)+500;
      payfor = window.alert("這是玩家2的土地，您需支付共" + payvalue + "!")
      original1 -= payvalue; 
      original2 += payvalue;     
      document.getElementById("original1").innerHTML=original1;
      document.getElementById("original2").innerHTML=original2; 
    }

    else if (chuban.style.backgroundColor = "rgb(187, 255, 0)"){
      payvalue = (chuban_house*500)+500;
      payfor = window.alert("這是玩家3的土地，您需支付共" + payvalue + "!")
      original1 -= payvalue; 
      original3 += payvalue;       
      document.getElementById("original1").innerHTML=original1;
      document.getElementById("original3").innerHTML=original3; 
    }

    else if (chuban.style.backgroundColor = "rgb(255, 255, 119)"){
      payvalue = (chuban_house*500)+500;
      payfor = window.alert("這是玩家4的土地，您需支付共" + payvalue + "!")
      original1 -= payvalue;  
      original4 += payvalue;    
      document.getElementById("original1").innerHTML=original1;
      document.getElementById("original4").innerHTML=original4;
    }
  }
 
  else if  (dot1.offsetTop > kenting.offsetTop && dot1.offsetTop < chuban.offsetTop && dot1.offsetLeft <= 112){
      if (kenting.style.backgroundColor == "white"){
        r = confirm("您要購買土地嗎？將會花費1000元");
      if(r){
        kenting.style.backgroundColor = "#77DDFF";
        original1 -= 1000;
        document.getElementById("original1").innerHTML=original1;
      }
    }
    else if (kenting.style.backgroundColor == "rgb(119, 221, 255)"){
    build = confirm("您要蓋房子嗎？將會花費500元");
      if(build && kenting_house < 5){
          kenting_house += 1;
          original1 -= 500;
          document.getElementById("kenting_house").innerHTML=kenting_house
          document.getElementById("original1").innerHTML=original1;
        }
      else if(build && kenting_house == 5)
          window.alert("房子最多只能蓋5層！");
        }
    

    else if (kenting.style.backgroundColor == "rgb(255, 164, 136)"){
      payvalue = (kenting_house*500)+500;
      payfor = window.alert("這是玩家2的土地，您需支付共" + payvalue + "!")
      original1 -= payvalue; 
      original2 += payvalue;     
      document.getElementById("original1").innerHTML=original1;
      document.getElementById("original2").innerHTML=original2; 
    }

    else if (kenting.style.backgroundColor = "rgb(187, 255, 0)"){
      payvalue = (kenting_house*500)+500;
      payfor = window.alert("這是玩家3的土地，您需支付共" + payvalue + "!")
      original1 -= payvalue; 
      original3 += payvalue;       
      document.getElementById("original1").innerHTML=original1;
      document.getElementById("original3").innerHTML=original3; 
    }

    else if (kenting.style.backgroundColor = "rgb(255, 255, 119)"){
      payvalue = (kenting_house*500)+500;
      payfor = window.alert("這是玩家4的土地，您需支付共" + payvalue + "!")
      original1 -= payvalue;  
      original4 += payvalue;    
      document.getElementById("original1").innerHTML=original1;
      document.getElementById("original4").innerHTML=original4;
    }
  }
}
  else if (original1 < 0)
    var bankruptcy = window.alert("您已破產！遊戲結束！");
}


function dotmove2() 
{
  var step2x = 0;
  var step2y = 0;
  var xsum2 = 0;
  var ysum2 = 0;
  var xmove2 = 0;
  var ymove2 = 0;
  var counter2 = 1;
  var dot2 = document.getElementById ("dot2");
  var x2 = dot2.offsetLeft;
  var y2 = dot2.offsetTop; 


  for (var j = 0; j < dieValue; j++)
  {     

      if (counter2 % 6 != 0){
        if (dot2.offsetLeft < 549 && dot2.offsetTop < 112){
          step2x += 110;
          xsum2 = step2x;
          x2 += xsum2;
          xmove2 = x2;
          dot2.style.left = xmove2 + 'px';
        }
        else if (dot2.offsetLeft > 549 && dot2.offsetTop < 514){
          step2y += 110;
          ysum2 = step2y;
          y2 += ysum2;
          ymove2 = y2;
          dot2.style.top = ymove2 + 'px';
        }
        else if (dot2.offsetTop > 514 && dot2.offsetLeft > 114){
          step2x += 110;
          xsum2 = step2x;
          x2 -= xsum2;
          xmove2 = x2;
          dot2.style.left = xmove2 + 'px';
        }
        else if (dot2.offsetTop > 112 && dot2.offsetLeft < 114){
          step2y += 110;
          ysum2 = step2y;
          y2 -= ysum2;
          ymove2 = y2;
          dot2.style.top = ymove2 + 'px';
        }
      }

      if (counter2 % 6 == 0){
        if (dot2.offsetLeft < 114  && dot2.offsetTop < 112){
          step2x += 110;
          xsum2 = step2x;
          x2 += xsum2;
          xmove2 = x2;
          dot2.style.left = xmove2 + 'px';
        }
        else if (dot2.offsetLeft > 549 && dot2.offsetTop < 514){
          step2y += 110;
          ysum2 = step2y;
          y2 += ysum2;
          ymove2 = y2;
          dot2.style.top = ymove2 + 'px';
        }
        else if (dot2.offsetTop > 514 && dot2.offsetLeft > 114){
          step2x += 110;
          xsum2 = step2x;
          x2 -= xsum2;
          xmove2 = x2;
          dot2.style.left = xmove2 + 'px';
        }
        else if (dot2.offsetTop > 514 && dot2.offsetLeft < 114){
          step2y += 110;
          ysum2 = step2y;
          y2 -= ysum2;
          ymove2 = y2;
          dot2.style.top = ymove2 + 'px';
        }
      }
      
      step2y = 0;
      step2x = 0;
      counter2++;
      turncounter2();
  }

  if (counter2 % 7 == 0){
        counter2 = 2;
  }

  if (j == dieValue){
    BuyPlant2();
  }
}

var player2count = 0;
function turncounter2()
{
  if (player2count < 20){
    player2count ++;
  }
  else{
    original2 += startmoney;
    document.getElementById("original2").innerHTML=original2;
    player2count = 1; 
  }
}

function BuyPlant2(){
  var pingtung = document.getElementById ("pingtung");
  var kaohsiung = document.getElementById ("kaohsiung");
  var anping = document.getElementById ("anping");
  var tainan = document.getElementById ("tainan");
  var kenting = document.getElementById ("kenting");
  var chiayi = document.getElementById ("chiayi");
  var taichung = document.getElementById("taichung");
  var chuban = document.getElementById ("chuban");
  var yunlin = document.getElementById ("yunlin");
  var taitung = document.getElementById ("taitung");
  var chunghwua = document.getElementById ("chunghwua");
  var yilan = document.getElementById ("yilan");
  var keelung = document.getElementById ("keelung");
  var taipei = document.getElementById ("taipei");
  var taoyuan = document.getElementById ("taoyuan");
  var miaoli = document.getElementById ("miaoli");
  var playground1 = document.getElementById ("playground1");
  var playground2 = document.getElementById ("playground2");
  var playground3 = document.getElementById ("playground3");
  var startpoint = document.getElementById("startpoint");
  var r;
  var build;
  var payfor;
  var payvalue = 0;

if (original2 > 0){
  if (dot2.offsetLeft > pingtung.offsetLeft && dot2.offsetLeft < kaohsiung.offsetLeft && dot2.offsetTop <= 112){
    if (pingtung.style.backgroundColor == "white"){
       r = confirm("您要購買土地嗎？將會花費1000元");
       if(r){
        pingtung.style.backgroundColor = "#ffa488";
        original2 -= 1000;
        document.getElementById("original2").innerHTML=original2;
      }
    }

    else if (pingtung.style.backgroundColor == "rgb(255, 164, 136)"){
    build = confirm("您要蓋房子嗎？將會花費500元");
      if(build && pingtung_house < 5){
          pingtung_house += 1;
          original2 -= 500;
          document.getElementById("pingtung_house").innerHTML=pingtung_house;
          document.getElementById("original2").innerHTML=original2;
        }
      else if(build && pingtung_house == 5)
        window.alert("房子最多只能蓋5層！");
      }

    else if (pingtung.style.backgroundColor == "rgb(119, 221, 255)"){
    payvalue = (pingtung_house*500)+500;
    payfor = window.alert("這是玩家1的土地，您需支付共" + payvalue + "!")
    original2 -= payvalue; 
    document.getElementById("original2").innerHTML=original2; 
    original1 += payvalue;  
    document.getElementById("original1").innerHTML=original1;
    }

    else if (pingtung.style.backgroundColor = "rgb(187, 255, 0)"){
    payvalue = (pingtung_house*500)+500;
    payfor = window.alert("這是玩家3的土地，您需支付共" + payvalue + "!")
    original2 -= payvalue; 
    original3 += payvalue;       
    document.getElementById("original2").innerHTML=original2;
    document.getElementById("original3").innerHTML=original3; 
    }

    else if (pingtung.style.backgroundColor = "rgb(255, 255, 119)"){
    payvalue = (pingtung_house*500)+500;
    payfor = window.alert("這是玩家4的土地，您需支付共" + payvalue + "!")
    original2 -= payvalue;  
    original4 += payvalue;    
    document.getElementById("original2").innerHTML=original2;
    document.getElementById("original4").innerHTML=original4; 
    }
}

 
  else if (dot2.offsetLeft > kaohsiung.offsetLeft && dot2.offsetLeft < anping.offsetLeft && dot2.offsetTop <= 112){
      if (kaohsiung.style.backgroundColor == "white"){
        r = confirm("您要購買土地嗎？將會花費1000元");
      if(r){
        kaohsiung.style.backgroundColor = "rgb(255, 164, 136)";
        original2 -= 1000;
        document.getElementById("original2").innerHTML=original2;
      }
    }

      else if (kaohsiung.style.backgroundColor == "rgb(255, 164, 136)"){
      build = confirm("您要蓋房子嗎？將會花費500元");
        if(build && kaohsiung_house < 5){
            kaohsiung_house += 1;
            original2 -= 500;
            document.getElementById("kaohsiung_house").innerHTML=kaohsiung_house;
            document.getElementById("original2").innerHTML=original2;
          }
        else if(build && kaohsiung_house == 5)
          window.alert("房子最多只能蓋5層！");
        }
      

      else if (kaohsiung.style.backgroundColor == "rgb(119, 221, 255)"){
      payvalue = (kaohsiung_house*500)+500;
      payfor = window.alert("這是玩家1的土地，您需支付共" + payvalue + "!")
      original2 -= payvalue; 
      original1  += payvalue;
      document.getElementById("original2").innerHTML=original2;      
      document.getElementById("original1").innerHTML=original1;
      }

      else if (kaohsiung.style.backgroundColor = "rgb(187, 255, 0)"){
      payvalue = (kaohsiung_house*500)+500;
      payfor = window.alert("這是玩家3的土地，您需支付共" + payvalue + "!")
      original2 -= payvalue; 
      original3 += payvalue;       
      document.getElementById("original2").innerHTML=original2;
      document.getElementById("original3").innerHTML=original3; 
      }

      else if (kaohsiung.style.backgroundColor = "rgb(255, 255, 119)"){
      payvalue = (kaohsiung_house*500)+500;
      payfor = window.alert("這是玩家4的土地，您需支付共" + payvalue + "!")
      original2 -= payvalue;  
      original4 += payvalue;    
      document.getElementById("original2").innerHTML=original2;
      document.getElementById("original4").innerHTML=original4;
      }
}

  else if (dot2.offsetLeft > anping.offsetLeft && dot2.offsetLeft < tainan.offsetLeft && dot2.offsetTop <= 112){
      if (anping.style.backgroundColor == "white"){
        r = confirm("您要購買土地嗎？將會花費1000元");
      if(r){
        anping.style.backgroundColor = "rgb(255, 164, 136)";
        original2 -= 1000;
        document.getElementById("original2").innerHTML=original2;
      }
    }
      else if (anping.style.backgroundColor == "rgb(255, 164, 136)"){
      build = confirm("您要蓋房子嗎？將會花費500元");
        if(build && anping_house < 5){
            anping_house += 1;
            original2 -= 500;
            document.getElementById("anping_house").innerHTML=anping_house;
            document.getElementById("original2").innerHTML=original2;
          }
        else if(build && anping_house == 5)
          window.alert("房子最多只能蓋5層！");
        }

      else if (anping.style.backgroundColor == "rgb(119, 221, 255)"){
      payvalue = (anping_house*500)+500;
      payfor = window.alert("這是玩家1的土地，您需支付共" + payvalue + "!")
      original2 -= payvalue; 
      original1 += payvalue;     
      document.getElementById("original1").innerHTML=original1;
      document.getElementById("original2").innerHTML=original2; 
      }

      else if (anping.style.backgroundColor = "rgb(187, 255, 0)"){
      payvalue = (anping_house*500)+500;
      payfor = window.alert("這是玩家3的土地，您需支付共" + payvalue + "!")
      original2 -= payvalue; 
      original3 += payvalue;       
      document.getElementById("original2").innerHTML=original2;
      document.getElementById("original3").innerHTML=original3; 
      }

      else if (anping.style.backgroundColor = "rgb(255, 255, 119)"){
      payvalue = (anping_house*500)+500;
      payfor = window.alert("這是玩家4的土地，您需支付共" + payvalue + "!")
      original2 -= payvalue;  
      original4 += payvalue;    
      document.getElementById("original2").innerHTML=original2;
      document.getElementById("original4").innerHTML=original4;
      }
}

  else if  (dot2.offsetLeft > tainan.offsetLeft && dot2.offsetLeft < playground1.offsetLeft && dot2.offsetTop <= 112){
      if (tainan.style.backgroundColor == "white"){
        r = confirm("您要購買土地嗎？將會花費1000元");
      if(r){
        tainan.style.backgroundColor = "rgb(255, 164, 136)";
        original2 -= 1000;
        document.getElementById("original2").innerHTML=original2;
      }
    }
    
    else if (tainan.style.backgroundColor == "rgb(255, 164, 136)"){
    build = confirm("您要蓋房子嗎？將會花費500元");
      if(build && tainan_house < 5){
          tainan_house += 1;
          original2 -= 500;
          document.getElementById("tainan_house").innerHTML=tainan_house;
          document.getElementById("original2").innerHTML=original2;
        }
      else if(build && tainan_house == 5)
          window.alert("房子最多只能蓋5層！");
        }
    

    else if (tainan.style.backgroundColor == "rgb(119, 221, 255)"){
      payvalue = (tainan_house*500)+500;
      payfor = window.alert("這是玩家1的土地，您需支付共" + payvalue + "!")
      original2 -= payvalue; 
      original1 += payvalue;     
      document.getElementById("original1").innerHTML=original1;
      document.getElementById("original2").innerHTML=original2; 
    }

    else if (tainan.style.backgroundColor = "rgb(187, 255, 0)"){
      payvalue = (tainan_house*500)+500;
      payfor = window.alert("這是玩家3的土地，您需支付共" + payvalue + "!")
      original2 -= payvalue; 
      original3 += payvalue;       
      document.getElementById("original2").innerHTML=original2;
      document.getElementById("original3").innerHTML=original3; 
    }

    else if (tainan.style.backgroundColor = "rgb(255, 255, 119)"){
      payvalue = (tainan_house*500)+500;
      payfor = window.alert("這是玩家4的土地，您需支付共" + payvalue + "!")
      original2 -= payvalue;  
      original4 += payvalue;    
      document.getElementById("original2").innerHTML=original2;
      document.getElementById("original4").innerHTML=original4;
    }
}

  else if  (dot2.offsetLeft > 549 && dot2.offsetLeft < 657 && dot2.offsetTop < yunlin.offsetTop && dot2.offsetTop > chiayi.offsetTop){
    if (chiayi.style.backgroundColor == "white"){
        r = confirm("您要購買土地嗎？將會花費1000元");
      if(r){
        chiayi.style.backgroundColor = "rgb(255, 164, 136)";
        original2 -= 1000;
        document.getElementById("original2").innerHTML=original2;
      }
    }
    else if (chiayi.style.backgroundColor == "rgb(255, 164, 136)"){
    build = confirm("您要蓋房子嗎？將會花費500元");
      if(build && chiayi_house < 5){
          chiayi_house += 1;
          original2 -= 500;
          document.getElementById("chiayi_house").innerHTML=chiayi_house;
          document.getElementById("original2").innerHTML=original2;
        }
      else if(build && chiayi_house == 5)
          window.alert("房子最多只能蓋5層！");
        }
    

    else if (chiayi.style.backgroundColor == "rgb(119, 221, 255)"){
      payvalue = (chiayi_house*500)+500;
      payfor = window.alert("這是玩家1的土地，您需支付共" + payvalue + "!")
      original2 -= payvalue; 
      original1 += payvalue;     
      document.getElementById("original1").innerHTML=original1;
      document.getElementById("original2").innerHTML=original2; 
    }

    else if (chiayi.style.backgroundColor = "rgb(187, 255, 0)"){
      payvalue = (chiayi_house*500)+500;
      payfor = window.alert("這是玩家3的土地，您需支付共" + payvalue + "!")
      original2 -= payvalue; 
      original3 += payvalue;       
      document.getElementById("original2").innerHTML=original2;
      document.getElementById("original3").innerHTML=original3; 
    }

    else if (chiayi.style.backgroundColor = "rgb(255, 255, 119)"){
      payvalue = (chiayi_house*500)+500;
      payfor = window.alert("這是玩家4的土地，您需支付共" + payvalue + "!")
      original2 -= payvalue;  
      original4 += payvalue;    
      document.getElementById("original2").innerHTML=original2;
      document.getElementById("original4").innerHTML=original4;
    }
  }
  
  else if  (dot2.offsetLeft > 549 && dot2.offsetLeft < 657 && dot2.offsetTop < chunghwua.offsetTop && dot2.offsetTop > yunlin.offsetTop){
      if (yunlin.style.backgroundColor == "white"){
        r = confirm("您要購買土地嗎？將會花費1000元");
      if(r){
        yunlin.style.backgroundColor = "rgb(255, 164, 136)";
        original2 -= 1000;
        document.getElementById("original2").innerHTML=original2;
      }
    }
    else if (yunlin.style.backgroundColor == "rgb(255, 164, 136)"){
    build = confirm("您要蓋房子嗎？將會花費500元");
      if(build && yunlin_house < 5){
          yunlin_house += 1;
          original2 -= 500;
          document.getElementById("yunlin_house").innerHTML=yunlin_house;
          document.getElementById("original2").innerHTML=original2;
        }
      else if(build && yunlin_house == 5)
          window.alert("房子最多只能蓋5層！");
        }
    

    else if (yunlin.style.backgroundColor == "rgb(119, 221, 255)"){
      payvalue = (yunlin_house*500)+500;
      payfor = window.alert("這是玩家1的土地，您需支付共" + payvalue + "!")
      original2 -= payvalue; 
      original1 += payvalue;     
      document.getElementById("original1").innerHTML=original1;
      document.getElementById("original2").innerHTML=original2; 
    }

    else if (yunlin.style.backgroundColor = "rgb(187, 255, 0)"){
      payvalue = (yunlin_house*500)+500;
      payfor = window.alert("這是玩家3的土地，您需支付共" + payvalue + "!")
      original2 -= payvalue; 
      original3 += payvalue;       
      document.getElementById("original2").innerHTML=original2;
      document.getElementById("original3").innerHTML=original3; 
    }

    else if (yunlin.style.backgroundColor = "rgb(255, 255, 119)"){
      payvalue = (yunlin_house*500)+500;
      payfor = window.alert("這是玩家4的土地，您需支付共" + payvalue + "!")
      original2 -= payvalue;  
      original4 += payvalue;    
      document.getElementById("original2").innerHTML=original2;
      document.getElementById("original4").innerHTML=original4;
    }
  }
  
  else if (dot2.offsetLeft > 549 && dot2.offsetLeft < 657 && dot2.offsetTop < taichung.offsetTop && dot2.offsetTop > chunghwua.offsetTop){
      if (chunghwua.style.backgroundColor == "white"){
        r = confirm("您要購買土地嗎？將會花費1000元");
      if(r){
        chunghwua.style.backgroundColor = "rgb(255, 164, 136)";
        original2 -= 1000;
        document.getElementById("original2").innerHTML=original2;
      }
    }
    else if (chunghwua.style.backgroundColor == "rgb(255, 164, 136)"){
    build = confirm("您要蓋房子嗎？將會花費500元");
      if(build && chunghwua_house < 5){
          chunghwua_house += 1;
          original2 -= 500;
          document.getElementById("chunghwua_house").innerHTML=chunghwua_house;
          document.getElementById("original2").innerHTML=original2;
        }
      else if(build && chunghwua_house == 5)
          window.alert("房子最多只能蓋5層！");
        }
    

    else if (chunghwua.style.backgroundColor == "rgb(119, 221, 255)"){
      payvalue = (chunghwua_house*500)+500;
      payfor = window.alert("這是玩家1的土地，您需支付共" + payvalue + "!")
      original2 -= payvalue; 
      original1 += payvalue;     
      document.getElementById("original2").innerHTML=original1;
      document.getElementById("original2").innerHTML=original2; 
    }

    else if (chunghwua.style.backgroundColor = "rgb(187, 255, 0)"){
      payvalue = (chunghwua_house*500)+500;
      payfor = window.alert("這是玩家3的土地，您需支付共" + payvalue + "!")
      original2 -= payvalue; 
      original3 += payvalue;       
      document.getElementById("original2").innerHTML=original2;
      document.getElementById("original3").innerHTML=original3; 
    }

    else if (chunghwua.style.backgroundColor = "rgb(255, 255, 119)"){
      payvalue = (chunghwua_house*500)+500;
      payfor = window.alert("這是玩家4的土地，您需支付共" + payvalue + "!")
      original2 -= payvalue;  
      original4 += payvalue;    
      document.getElementById("original2").innerHTML=original2;
      document.getElementById("original4").innerHTML=original4;
    }
  }

  else if (dot2.offsetLeft > 549 && dot2.offsetLeft < 657 && dot2.offsetTop < playground2.offsetTop && dot2.offsetTop > taichung.offsetTop){
      if (taichung.style.backgroundColor == "white"){
        r = confirm("您要購買土地嗎？將會花費1000元");
      if(r){
        taichung.style.backgroundColor = "rgb(255, 164, 136)";
        original2 -= 1000;
        document.getElementById("original2").innerHTML=original2;
      }
    }
    else if (taichung.style.backgroundColor == "rgb(255, 164, 136)"){
    build = confirm("您要蓋房子嗎？將會花費500元");
      if(build && taichung_house < 5){
          taichung_house += 1;
          original2 -= 500;
          document.getElementById("taichung_house").innerHTML=taichung_house;
          document.getElementById("original2").innerHTML=original2;
        }
      else if(build && taichung_house == 5)
          window.alert("房子最多只能蓋5層！");
        }
    

    else if (taichung.style.backgroundColor == "rgb(119, 221, 255)"){
      payvalue = (taichung_house*500)+500;
      payfor = window.alert("這是玩家1的土地，您需支付共" + payvalue + "!")
      original2 -= payvalue; 
      original1 += payvalue;     
      document.getElementById("original1").innerHTML=original;
      document.getElementById("original2").innerHTML=original2; 
    }

    else if (taichung.style.backgroundColor = "rgb(187, 255, 0)"){
      payvalue = (taichung_house*500)+500;
      payfor = window.alert("這是玩家3的土地，您需支付共" + payvalue + "!")
      original2 -= payvalue; 
      original3 += payvalue;       
      document.getElementById("original2").innerHTML=original2;
      document.getElementById("original3").innerHTML=original3; 
    }

    else if (taichung.style.backgroundColor = "rgb(255, 255, 119)"){
      payvalue = (taichung_house*500)+500;
      payfor = window.alert("這是玩家4的土地，您需支付共" + payvalue + "!")
      original2 -= payvalue;  
      original4 += payvalue;    
      document.getElementById("original2").innerHTML=original2;
      document.getElementById("original4").innerHTML=original4;
    }
  }
  
  else if  (dot2.offsetLeft > miaoli.offsetLeft && dot2.offsetLeft < playground2.offsetLeft && dot2.offsetTop > 549){
      if (miaoli.style.backgroundColor == "white"){
        r = confirm("您要購買土地嗎？將會花費1000元");
      if(r){
        miaoli.style.backgroundColor = "rgb(255, 164, 136)";
        original2 -= 1000;
        document.getElementById("original2").innerHTML=original2;
      }
    }
    else if (miaoli.style.backgroundColor == "rgb(255, 164, 136)"){
    build = confirm("您要蓋房子嗎？將會花費500元");
      if(build && miaoli_house < 5){
          miaoli_house += 1;
          original2 -= 500;
          document.getElementById("miaoli_house").innerHTML=miaoli_house;
          document.getElementById("original2").innerHTML=original2;
        }
      else if(build && miaoli_house == 5)
          window.alert("房子最多只能蓋5層！");
        }
    

    else if (miaoli.style.backgroundColor == "rgb(119, 221, 255)"){
      payvalue = (miaoli_house*500)+500;
      payfor = window.alert("這是玩家1的土地，您需支付共" + payvalue + "!")
      original2 -= payvalue; 
      original1 += payvalue;     
      document.getElementById("original1").innerHTML=original1;
      document.getElementById("original2").innerHTML=original2; 
    }

    else if (miaoli.style.backgroundColor = "rgb(187, 255, 0)"){
      payvalue = (miaoli_house*500)+500;
      payfor = window.alert("這是玩家3的土地，您需支付共" + payvalue + "!")
      original2 -= payvalue; 
      original3 += payvalue;       
      document.getElementById("original2").innerHTML=original2;
      document.getElementById("original3").innerHTML=original3; 
    }

    else if (miaoli.style.backgroundColor = "rgb(255, 255, 119)"){
      payvalue = (miaoli_house*500)+500;
      payfor = window.alert("這是玩家4的土地，您需支付共" + payvalue + "!")
      original2 -= payvalue;  
      original4 += payvalue;    
      document.getElementById("original2").innerHTML=original2;
      document.getElementById("original4").innerHTML=original4;
    }
  }
    else if (dot2.offsetLeft > taoyuan.offsetLeft && dot2.offsetLeft < miaoli.offsetLeft && dot2.offsetTop > 549){
      if (taoyuan.style.backgroundColor == "white"){
        r = confirm("您要購買土地嗎？將會花費1000元");
      if(r){
        taoyuan.style.backgroundColor = "rgb(255, 164, 136)";
        original2 -= 1000;
        document.getElementById("original2").innerHTML=original2;
      }
    }
      else if (taoyuan.style.backgroundColor == "rgb(255, 164, 136)"){
    build = confirm("您要蓋房子嗎？將會花費500元");
      if(build && taoyuan_house < 5){
          taoyuan_house += 1;
          original2 -= 500;
          document.getElementById("taoyuan_house").innerHTML=taoyuan_house;
          document.getElementById("original2").innerHTML=original2;
        }
      else if(build && taoyuan_house == 5)
          window.alert("房子最多只能蓋5層！");
        }
    

    else if (taoyuan.style.backgroundColor == "rgb(119, 221, 255)"){
      payvalue = (taoyuan_house*500)+500;
      payfor = window.alert("這是玩家1的土地，您需支付共" + payvalue + "!")
      original2 -= payvalue; 
      original1 += payvalue;     
      document.getElementById("original1").innerHTML=original1;
      document.getElementById("original2").innerHTML=original2; 
    }

    else if (taoyuan.style.backgroundColor = "rgb(187, 255, 0)"){
      payvalue = (taoyuan_house*500)+500;
      payfor = window.alert("這是玩家3的土地，您需支付共" + payvalue + "!")
      original2 -= payvalue; 
      original3 += payvalue;       
      document.getElementById("original2").innerHTML=original2;
      document.getElementById("original3").innerHTML=original3; 
    }

    else if (taoyuan.style.backgroundColor = "rgb(255, 255, 119)"){
      payvalue = (taoyuan_house*500)+500;
      payfor = window.alert("這是玩家4的土地，您需支付共" + payvalue + "!")
      original2 -= payvalue;  
      original4 += payvalue;    
      document.getElementById("original2").innerHTML=original2;
      document.getElementById("original4").innerHTML=original4;
    }
  }

  else if  (dot2.offsetLeft > taipei.offsetLeft && dot2.offsetLeft < taoyuan.offsetLeft && dot2.offsetTop > 549){
      if (taipei.style.backgroundColor == "white"){
        r = confirm("您要購買土地嗎？將會花費1000元");
      if(r){
        taipei.style.backgroundColor = "rgb(255, 164, 136)";
        original2 -= 1000;
        document.getElementById("original2").innerHTML=original2;
      }
    }

    else if (taipei.style.backgroundColor == "rgb(255, 164, 136)"){
    build = confirm("您要蓋房子嗎？將會花費500元");
      if(build && taipei_house < 5){
          taipei_house += 1;
          original2 -= 500;
          document.getElementById("taipei_house").innerHTML=taipei_house;
          document.getElementById("original2").innerHTML=original2;
        }
      else if(build && taipei_house == 5)
          window.alert("房子最多只能蓋5層！");
        }
    

    else if (taipei.style.backgroundColor == "rgb(119, 221, 255)"){
      payvalue = (taipei_house*500)+500;
      payfor = window.alert("這是玩家1的土地，您需支付共" + payvalue + "!")
      original2 -= payvalue; 
      original1 += payvalue;     
      document.getElementById("original1").innerHTML=original1;
      document.getElementById("original2").innerHTML=original2; 
    }

    else if (taipei.style.backgroundColor = "rgb(187, 255, 0)"){
      payvalue = (taipei_house*500)+500;
      payfor = window.alert("這是玩家3的土地，您需支付共" + payvalue + "!")
      original2 -= payvalue; 
      original3 += payvalue;       
      document.getElementById("original2").innerHTML=original2;
      document.getElementById("original3").innerHTML=original3; 
    }

    else if (taipei.style.backgroundColor = "rgb(255, 255, 119)"){
      payvalue = (taipei_house*500)+500;
      payfor = window.alert("這是玩家4的土地，您需支付共" + payvalue + "!")
      original2 -= payvalue;  
      original4 += payvalue;    
      document.getElementById("original2").innerHTML=original2;
      document.getElementById("original4").innerHTML=original4;
    }
  }
  
  else if (dot2.offsetLeft > keelung.offsetLeft && dot2.offsetLeft < taipei.offsetLeft && dot2.offsetTop > 549){
      if (keelung.style.backgroundColor == "white"){
        r = confirm("您要購買土地嗎？將會花費1000元");
      if(r){
        keelung.style.backgroundColor = "rgb(255, 164, 136)";
        original2 -= 1000;
        document.getElementById("original2").innerHTML=original2;
      }
    }
    
    else if (keelung.style.backgroundColor == "rgb(255, 164, 136)"){
    build = confirm("您要蓋房子嗎？將會花費500元");
      if(build && keelung_house < 5){
          keelung_house += 1;
          original2 -= 500;
          document.getElementById("keelung_house").innerHTML=keelung_house;
          document.getElementById("original2").innerHTML=original2;
        }
      else if(build && keelung_house == 5)
          window.alert("房子最多只能蓋5層！");
        }
    

    else if (keelung.style.backgroundColor == "rgb(119, 221, 255)"){
      payvalue = (keelung_house*500)+500;
      payfor = window.alert("這是玩家1的土地，您需支付共" + payvalue + "!")
      original2 -= payvalue; 
      original1 += payvalue;     
      document.getElementById("original1").innerHTML=original1;
      document.getElementById("original2").innerHTML=original2; 
    }

    else if (keelung.style.backgroundColor = "rgb(187, 255, 0)"){
      payvalue = (keelung_house*500)+500;
      payfor = window.alert("這是玩家3的土地，您需支付共" + payvalue + "!")
      original2 -= payvalue; 
      original3 += payvalue;       
      document.getElementById("original2").innerHTML=original2;
      document.getElementById("original3").innerHTML=original3; 
    }

    else if (keelung.style.backgroundColor = "rgb(255, 255, 119)"){
      payvalue = (keelung_house*500)+500;
      payfor = window.alert("這是玩家4的土地，您需支付共" + payvalue + "!")
      original2 -= payvalue;  
      original4 += payvalue;    
      document.getElementById("original2").innerHTML=original2;
      document.getElementById("original4").innerHTML=original4;
    }
  }
  
  else if  (dot2.offsetTop > yilan.offsetTop && dot2.offsetTop < playground3.offsetTop && dot2.offsetLeft <= 112){
      if (yilan.style.backgroundColor == "white"){
        r = confirm("您要購買土地嗎？將會花費1000元");
      if(r){
        yilan.style.backgroundColor = "rgb(255, 164, 136)";
        original2 -= 1000;
        document.getElementById("original2").innerHTML=original2;
      }
    }
    else if (yilan.style.backgroundColor == "rgb(255, 164, 136)"){
    build = confirm("您要蓋房子嗎？將會花費500元");
      if(build && yilan_house < 5){
          yilan_house += 1;
          original2 -= 500;
          document.getElementById("yilan_house").innerHTML=yilan_house;
          document.getElementById("original2").innerHTML=original2;
        }
      else if(build && yilan_house == 5)
          window.alert("房子最多只能蓋5層！");
        }
    

    else if (yilan.style.backgroundColor == "rgb(119, 221, 255)"){
      payvalue = (yilan_house*500)+500;
      payfor = window.alert("這是玩家1的土地，您需支付共" + payvalue + "!")
      original2 -= payvalue; 
      original1 += payvalue;     
      document.getElementById("original1").innerHTML=original1;
      document.getElementById("original2").innerHTML=original2; 
    }

    else if (yilan.style.backgroundColor = "rgb(187, 255, 0)"){
      payvalue = (yilan_house*500)+500;
      payfor = window.alert("這是玩家3的土地，您需支付共" + payvalue + "!")
      original2 -= payvalue; 
      original3 += payvalue;       
      document.getElementById("original2").innerHTML=original2;
      document.getElementById("original3").innerHTML=original3; 
    }

    else if (yilan.style.backgroundColor = "rgb(255, 255, 119)"){
      payvalue = (yilan_house*500)+500;
      payfor = window.alert("這是玩家4的土地，您需支付共" + payvalue + "!")
      original2 -= payvalue;  
      original4 += payvalue;    
      document.getElementById("original2").innerHTML=original2;
      document.getElementById("original4").innerHTML=original4;
    }
  }
    else if (dot2.offsetTop > taitung.offsetTop && dot2.offsetTop < yilan.offsetTop && dot2.offsetLeft <= 112){
      if (taitung.style.backgroundColor == "white"){
        r = confirm("您要購買土地嗎？將會花費1000元");
      if(r){
        taitung.style.backgroundColor = "rgb(255, 164, 136)";
        original2 -= 1000;
        document.getElementById("original2").innerHTML=original2;
      }
    }
    else if (taitung.style.backgroundColor == "rgb(255, 164, 136)"){
    build = confirm("您要蓋房子嗎？將會花費500元");
      if(build && taitung_house < 5){
          taitung_house += 1;
          original2 -= 500;
          document.getElementById("taitung_house").innerHTML=taitung_house;
          document.getElementById("original2").innerHTML=original2;
        }
      else if(build && taitung_house == 5)
          window.alert("房子最多只能蓋5層！");
        }
    

    else if (taitung.style.backgroundColor == "rgb(119, 221, 255)"){
      payvalue = (taitung_house*500)+500;
      payfor = window.alert("這是玩家1的土地，您需支付共" + payvalue + "!")
      original2 -= payvalue; 
      original1 += payvalue;     
      document.getElementById("original1").innerHTML=original1;
      document.getElementById("original2").innerHTML=original2; 
    }

    else if (taitung.style.backgroundColor = "rgb(187, 255, 0)"){
      payvalue = (taitung_house*500)+500;
      payfor = window.alert("這是玩家3的土地，您需支付共" + payvalue + "!")
      original2 -= payvalue; 
      original3 += payvalue;       
      document.getElementById("original2").innerHTML=original2;
      document.getElementById("original3").innerHTML=original3; 
    }

    else if (taitung.style.backgroundColor = "rgb(255, 255, 119)"){
      payvalue = (taitung_house*500)+500;
      payfor = window.alert("這是玩家4的土地，您需支付共" + payvalue + "!")
      original2 -= payvalue;  
      original4 += payvalue;    
      document.getElementById("original2").innerHTML=original2;
      document.getElementById("original4").innerHTML=original4;
    }
  }

    else if (dot2.offsetTop > chuban.offsetTop && dot2.offsetTop < taitung.offsetTop && dot2.offsetLeft <= 112){
      if (chuban.style.backgroundColor == "white"){
        r = confirm("您要購買土地嗎？將會花費1000元");
      if(r){
        chuban.style.backgroundColor = "rgb(255, 164, 136)";
        original2 -= 1000;
        document.getElementById("original2").innerHTML=original2;
      }
    }
    else if (chuban.style.backgroundColor == "rgb(255, 164, 136)"){
    build = confirm("您要蓋房子嗎？將會花費500元");
      if(build && chuban_house < 5){
          chuban_house += 1;
          original2 -= 500;
          document.getElementById("chuban_house").innerHTML=chuban_house;
          document.getElementById("original2").innerHTML=original2;
        }
      else if(build && chuban_house == 5)
          window.alert("房子最多只能蓋5層！");
        }
    

    else if (chuban.style.backgroundColor == "rgb(119, 221, 255)"){
      payvalue = (chuban_house*500)+500;
      payfor = window.alert("這是玩家1的土地，您需支付共" + payvalue + "!")
      original2 -= payvalue; 
      original1 += payvalue;     
      document.getElementById("original1").innerHTML=original1;
      document.getElementById("original2").innerHTML=original2; 
    }

    else if (chuban.style.backgroundColor = "rgb(187, 255, 0)"){
      payvalue = (chuban_house*500)+500;
      payfor = window.alert("這是玩家3的土地，您需支付共" + payvalue + "!")
      original2 -= payvalue; 
      original3 += payvalue;       
      document.getElementById("original2").innerHTML=original2;
      document.getElementById("original3").innerHTML=original3; 
    }

    else if (chuban.style.backgroundColor = "rgb(255, 255, 119)"){
      payvalue = (chuban_house*500)+500;
      payfor = window.alert("這是玩家4的土地，您需支付共" + payvalue + "!")
      original2 -= payvalue;  
      original4 += payvalue;    
      document.getElementById("original2").innerHTML=original2;
      document.getElementById("original4").innerHTML=original4;
    }
  }
 
  else if  (dot2.offsetTop > kenting.offsetTop && dot2.offsetTop < chuban.offsetTop && dot2.offsetLeft <= 112){
      if (kenting.style.backgroundColor == "white"){
        r = confirm("您要購買土地嗎？將會花費1000元");
      if(r){
        kenting.style.backgroundColor = "rgb(255, 164, 136)";
        original2 -= 1000;
        document.getElementById("original2").innerHTML=original2;
      }
    }
    else if (kenting.style.backgroundColor == "rgb(255, 164, 136)"){
    build = confirm("您要蓋房子嗎？將會花費500元");
      if(build && kenting_house < 5){
          kenting_house += 1;
          original2 -= 500;
          document.getElementById("kenting_house").innerHTML=kenting_house
          document.getElementById("original2").innerHTML=original2;
        }
      else if(build && kenting_house == 5)
          window.alert("房子最多只能蓋5層！");
        }
    

    else if (kenting.style.backgroundColor == "rgb(119, 221, 255)"){
      payvalue = (kenting_house*500)+500;
      payfor = window.alert("這是玩家1的土地，您需支付共" + payvalue + "!")
      original2 -= payvalue; 
      original1 += payvalue;     
      document.getElementById("original1").innerHTML=original1;
      document.getElementById("original2").innerHTML=original2; 
    }

    else if (kenting.style.backgroundColor = "rgb(187, 255, 0)"){
      payvalue = (kenting_house*500)+500;
      payfor = window.alert("這是玩家3的土地，您需支付共" + payvalue + "!")
      original2 -= payvalue; 
      original3 += payvalue;       
      document.getElementById("original2").innerHTML=original2;
      document.getElementById("original3").innerHTML=original3; 
    }

    else if (kenting.style.backgroundColor = "rgb(255, 255, 119)"){
      payvalue = (kenting_house*500)+500;
      payfor = window.alert("這是玩家4的土地，您需支付共" + payvalue + "!")
      original2 -= payvalue;  
      original4 += payvalue;    
      document.getElementById("original2").innerHTML=original2;
      document.getElementById("original4").innerHTML=original4;
    }
  }
}
  else if (original2 < 0)
    var bankruptcy = window.alert("您已破產！遊戲結束！");
}



function dotmove3() 
{
  var step3x = 0;
  var step3y = 0;
  var xsum3 = 0;
  var ysum3 = 0;
  var xmove3 = 0;
  var ymove3 = 0;
  var counter3 = 1;
  var dot3 = document.getElementById ("dot3");
  var x3 = dot3.offsetLeft;
  var y3 = dot3.offsetTop; 


  for (var j = 0; j < dieValue; j++)
  {     

      if (counter3 % 6 != 0){
        if (dot3.offsetLeft < 549 && dot3.offsetTop < 112){
          step3x += 110;
          xsum3 = step3x;
          x3 += xsum3;
          xmove3 = x3;
          dot3.style.left = xmove3 + 'px';
        }
        else if (dot3.offsetLeft > 549 && dot3.offsetTop < 514){
          step3y += 110;
          ysum3 = step3y;
          y3 += ysum3;
          ymove3 = y3;
          dot3.style.top = ymove3 + 'px';
        }
        else if (dot3.offsetTop > 514 && dot3.offsetLeft > 114){
          step3x += 110;
          xsum3 = step3x;
          x3 -= xsum3;
          xmove3 = x3;
          dot3.style.left = xmove3 + 'px';
        }
        else if (dot3.offsetTop > 112 && dot3.offsetLeft < 114){
          step3y += 110;
          ysum3 = step3y;
          y3 -= ysum3;
          ymove3 = y3;
          dot3.style.top = ymove3 + 'px';
        }
      }

      if (counter3 % 6 == 0){
        if (dot3.offsetLeft < 114  && dot3.offsetTop < 112){
          step3x += 110;
          xsum3 = step3x;
          x3 += xsum3;
          xmove3 = x3;
          dot3.style.left = xmove3 + 'px';
        }
        else if (dot3.offsetLeft > 549 && dot3.offsetTop < 514){
          step3y += 110;
          ysum3 = step3y;
          y3 += ysum3;
          ymove3 = y3;
          dot3.style.top = ymove3 + 'px';
        }
        else if (dot3.offsetTop > 514 && dot3.offsetLeft > 114){
          step3x += 110;
          xsum3 = step3x;
          x3 -= xsum3;
          xmove3 = x3;
          dot3.style.left = xmove3 + 'px';
        }
        else if (dot3.offsetTop > 514 && dot3.offsetLeft < 114){
          step3y += 110;
          ysum3 = step3y;
          y3 -= ysum3;
          ymove3 = y3;
          dot3.style.top = ymove3 + 'px';
        }
      }
      
      step3y = 0;
      step3x = 0;
      counter3++;
      turncounter3();
  }

  if (counter3 % 7 == 0){
        counter3 = 2;
  }

  if (j == dieValue){
      BuyPlant3();
  }
}

var player3count = 0;
function turncounter3()
{
  if (player3count < 20){
    player3count ++;
  }
  else{
    original3 += startmoney;
    document.getElementById("original3").innerHTML=original3;
    player3count = 1; 
  }
}

function BuyPlant3(){
  var pingtung = document.getElementById ("pingtung");
  var kaohsiung = document.getElementById ("kaohsiung");
  var anping = document.getElementById ("anping");
  var tainan = document.getElementById ("tainan");
  var kenting = document.getElementById ("kenting");
  var chiayi = document.getElementById ("chiayi");
  var taichung = document.getElementById("taichung");
  var chuban = document.getElementById ("chuban");
  var yunlin = document.getElementById ("yunlin");
  var taitung = document.getElementById ("taitung");
  var chunghwua = document.getElementById ("chunghwua");
  var yilan = document.getElementById ("yilan");
  var keelung = document.getElementById ("keelung");
  var taipei = document.getElementById ("taipei");
  var taoyuan = document.getElementById ("taoyuan");
  var miaoli = document.getElementById ("miaoli");
  var playground1 = document.getElementById ("playground1");
  var playground2 = document.getElementById ("playground2");
  var playground3 = document.getElementById ("playground3");
  var startpoint = document.getElementById("startpoint");
  var r;
  var build;
  var payfor;
  var payvalue = 0;

if (original3 > 0){
  if (dot3.offsetLeft > pingtung.offsetLeft && dot3.offsetLeft < kaohsiung.offsetLeft && dot3.offsetTop <= 112){
    if (pingtung.style.backgroundColor == "white"){
       r = confirm("您要購買土地嗎？將會花費1000元");
       if(r){
        pingtung.style.backgroundColor = "#BBFF00";
        original3 -= 1000;
        document.getElementById("original3").innerHTML=original3;
      }
    }

    else if (pingtung.style.backgroundColor == "rgb(187, 255, 0)"){
    build = confirm("您要蓋房子嗎？將會花費500元");
      if(build && pingtung_house < 5){
          pingtung_house += 1;
          original3 -= 500;
          document.getElementById("pingtung_house").innerHTML=pingtung_house;
          document.getElementById("original3").innerHTML=original3;
        }
      else if(build && pingtung_house == 5)
        window.alert("房子最多只能蓋5層！");
      }

    else if (pingtung.style.backgroundColor == "rgb(119, 221, 255)"){
    payvalue = (pingtung_house*500)+500;
    payfor = window.alert("這是玩家1的土地，您需支付共" + payvalue + "!")
    original3 -= payvalue; 
    document.getElementById("original3").innerHTML=original3; 
    original1 += payvalue;  
    document.getElementById("original1").innerHTML=original1;
    }

    else if (pingtung.style.backgroundColor = "rgb(187, 255, 0)"){
    payvalue = (pingtung_house*500)+500;
    payfor = window.alert("這是玩家2的土地，您需支付共" + payvalue + "!")
    original3 -= payvalue; 
    original2 += payvalue;       
    document.getElementById("original3").innerHTML=original3;
    document.getElementById("original2").innerHTML=original2; 
    }

    else if (pingtung.style.backgroundColor = "rgb(255, 255, 119)"){
    payvalue = (pingtung_house*500)+500;
    payfor = window.alert("這是玩家4的土地，您需支付共" + payvalue + "!")
    original3 -= payvalue;  
    original4 += payvalue;    
    document.getElementById("original3").innerHTML=original3;
    document.getElementById("original4").innerHTML=original4; 
    }
}

 
  else if (dot3.offsetLeft > kaohsiung.offsetLeft && dot3.offsetLeft < anping.offsetLeft && dot3.offsetTop <= 112){
      if (kaohsiung.style.backgroundColor == "white"){
        r = confirm("您要購買土地嗎？將會花費1000元");
      if(r){
        kaohsiung.style.backgroundColor = "rgb(187, 255, 0)";
        original3 -= 1000;
        document.getElementById("original3").innerHTML=original3;
      }
    }

      else if (kaohsiung.style.backgroundColor == "rgb(187, 255, 0)"){
      build = confirm("您要蓋房子嗎？將會花費500元");
        if(build && kaohsiung_house < 5){
            kaohsiung_house += 1;
            original3 -= 500;
            document.getElementById("kaohsiung_house").innerHTML=kaohsiung_house;
            document.getElementById("original3").innerHTML=original3;
          }
        else if(build && kaohsiung_house == 5)
          window.alert("房子最多只能蓋5層！");
        }
      

      else if (kaohsiung.style.backgroundColor == "rgb(119, 221, 255)"){
      payvalue = (kaohsiung_house*500)+500;
      payfor = window.alert("這是玩家1的土地，您需支付共" + payvalue + "!")
      original3 -= payvalue; 
      original1  += payvalue;
      document.getElementById("original3").innerHTML=original3;      
      document.getElementById("original1").innerHTML=original1;
      }

      else if (kaohsiung.style.backgroundColor = "rgb(255, 164, 136)"){
      payvalue = (kaohsiung_house*500)+500;
      payfor = window.alert("這是玩家2的土地，您需支付共" + payvalue + "!")
      original3 -= payvalue; 
      original2 += payvalue;       
      document.getElementById("original3").innerHTML=original3;
      document.getElementById("original2").innerHTML=original2; 
      }

      else if (kaohsiung.style.backgroundColor = "rgb(255, 255, 119)"){
      payvalue = (kaohsiung_house*500)+500;
      payfor = window.alert("這是玩家4的土地，您需支付共" + payvalue + "!")
      original3 -= payvalue;  
      original4 += payvalue;    
      document.getElementById("original3").innerHTML=original3;
      document.getElementById("original4").innerHTML=original4;
      }
}

  else if (dot3.offsetLeft > anping.offsetLeft && dot3.offsetLeft < tainan.offsetLeft && dot3.offsetTop <= 112){
      if (anping.style.backgroundColor == "white"){
        r = confirm("您要購買土地嗎？將會花費1000元");
      if(r){
        anping.style.backgroundColor = "rgb(187, 255, 0)";
        original3 -= 1000;
        document.getElementById("original3").innerHTML=original3;
      }
    }
      else if (anping.style.backgroundColor == "rgb(187, 255, 0)"){
      build = confirm("您要蓋房子嗎？將會花費500元");
        if(build && anping_house < 5){
            anping_house += 1;
            original3 -= 500;
            document.getElementById("anping_house").innerHTML=anping_house;
            document.getElementById("original3").innerHTML=original3;
          }
        else if(build && anping_house == 5)
          window.alert("房子最多只能蓋5層！");
        }

      else if (anping.style.backgroundColor == "rgb(119, 221, 255)"){
      payvalue = (anping_house*500)+500;
      payfor = window.alert("這是玩家1的土地，您需支付共" + payvalue + "!")
      original3 -= payvalue; 
      original1 += payvalue;     
      document.getElementById("original1").innerHTML=original1;
      document.getElementById("original3").innerHTML=original3; 
      }

      else if (anping.style.backgroundColor = "rgb(255, 164, 136)"){
      payvalue = (anping_house*500)+500;
      payfor = window.alert("這是玩家2的土地，您需支付共" + payvalue + "!")
      original3 -= payvalue; 
      original2 += payvalue;       
      document.getElementById("original3").innerHTML=original3;
      document.getElementById("original2").innerHTML=original2; 
      }

      else if (anping.style.backgroundColor = "rgb(255, 255, 119)"){
      payvalue = (anping_house*500)+500;
      payfor = window.alert("這是玩家4的土地，您需支付共" + payvalue + "!")
      original3 -= payvalue;  
      original4 += payvalue;    
      document.getElementById("original3").innerHTML=original3;
      document.getElementById("original4").innerHTML=original4;
      }
}

  else if  (dot3.offsetLeft > tainan.offsetLeft && dot3.offsetLeft < playground1.offsetLeft && dot3.offsetTop <= 112){
      if (tainan.style.backgroundColor == "white"){
        r = confirm("您要購買土地嗎？將會花費1000元");
      if(r){
        tainan.style.backgroundColor = "rgb(187, 255, 0)";
        original3 -= 1000;
        document.getElementById("original3").innerHTML=original3;
      }
    }
    
    else if (tainan.style.backgroundColor == "rgb(187, 255, 0)"){
    build = confirm("您要蓋房子嗎？將會花費500元");
      if(build && tainan_house < 5){
          tainan_house += 1;
          original3 -= 500;
          document.getElementById("tainan_house").innerHTML=tainan_house;
          document.getElementById("original3").innerHTML=original3;
        }
      else if(build && tainan_house == 5)
          window.alert("房子最多只能蓋5層！");
        }
    

    else if (tainan.style.backgroundColor == "rgb(119, 221, 255)"){
      payvalue = (tainan_house*500)+500;
      payfor = window.alert("這是玩家1的土地，您需支付共" + payvalue + "!")
      original3 -= payvalue; 
      original1 += payvalue;     
      document.getElementById("original1").innerHTML=original1;
      document.getElementById("original3").innerHTML=original3; 
    }

    else if (tainan.style.backgroundColor = "rgb(255, 164, 136)"){
      payvalue = (tainan_house*500)+500;
      payfor = window.alert("這是玩家2的土地，您需支付共" + payvalue + "!")
      original3 -= payvalue; 
      original2 += payvalue;       
      document.getElementById("original3").innerHTML=original3;
      document.getElementById("original2").innerHTML=original2; 
    }

    else if (tainan.style.backgroundColor = "rgb(255, 255, 119)"){
      payvalue = (tainan_house*500)+500;
      payfor = window.alert("這是玩家4的土地，您需支付共" + payvalue + "!")
      original3 -= payvalue;  
      original4 += payvalue;    
      document.getElementById("original3").innerHTML=original3;
      document.getElementById("original4").innerHTML=original4;
    }
}

  else if  (dot3.offsetLeft > 549 && dot3.offsetLeft < 657 && dot3.offsetTop < yunlin.offsetTop && dot3.offsetTop > chiayi.offsetTop){
    if (chiayi.style.backgroundColor == "white"){
        r = confirm("您要購買土地嗎？將會花費1000元");
      if(r){
        chiayi.style.backgroundColor = "rgb(187, 255, 0)";
        original3 -= 1000;
        document.getElementById("original3").innerHTML=original3;
      }
    }
    else if (chiayi.style.backgroundColor == "rgb(187, 255, 0)"){
    build = confirm("您要蓋房子嗎？將會花費500元");
      if(build && chiayi_house < 5){
          chiayi_house += 1;
          original3 -= 500;
          document.getElementById("chiayi_house").innerHTML=chiayi_house;
          document.getElementById("original3").innerHTML=original3;
        }
      else if(build && chiayi_house == 5)
          window.alert("房子最多只能蓋5層！");
        }
    

    else if (chiayi.style.backgroundColor == "rgb(119, 221, 255)"){
      payvalue = (chiayi_house*500)+500;
      payfor = window.alert("這是玩家1的土地，您需支付共" + payvalue + "!")
      original3 -= payvalue; 
      original1 += payvalue;     
      document.getElementById("original1").innerHTML=original1;
      document.getElementById("original3").innerHTML=original3; 
    }

    else if (chiayi.style.backgroundColor = "rgb(255, 164, 136)"){
      payvalue = (chiayi_house*500)+500;
      payfor = window.alert("這是玩家2的土地，您需支付共" + payvalue + "!")
      original3 -= payvalue; 
      original2 += payvalue;       
      document.getElementById("original3").innerHTML=original3;
      document.getElementById("original2").innerHTML=original2; 
    }

    else if (chiayi.style.backgroundColor = "rgb(255, 255, 119)"){
      payvalue = (chiayi_house*500)+500;
      payfor = window.alert("這是玩家4的土地，您需支付共" + payvalue + "!")
      original3 -= payvalue;  
      original4 += payvalue;    
      document.getElementById("original3").innerHTML=original3;
      document.getElementById("original4").innerHTML=original4;
    }
  }
  
  else if  (dot3.offsetLeft > 549 && dot3.offsetLeft < 657 && dot3.offsetTop < chunghwua.offsetTop && dot3.offsetTop > yunlin.offsetTop){
      if (yunlin.style.backgroundColor == "white"){
        r = confirm("您要購買土地嗎？將會花費1000元");
      if(r){
        yunlin.style.backgroundColor = "rgb(187, 255, 0)";
        original3 -= 1000;
        document.getElementById("original3").innerHTML=original3;
      }
    }
    else if (yunlin.style.backgroundColor == "rgb(187, 255, 0)"){
    build = confirm("您要蓋房子嗎？將會花費500元");
      if(build && yunlin_house < 5){
          yunlin_house += 1;
          original3 -= 500;
          document.getElementById("yunlin_house").innerHTML=yunlin_house;
          document.getElementById("original3").innerHTML=original3;
        }
      else if(build && yunlin_house == 5)
          window.alert("房子最多只能蓋5層！");
        }
    

    else if (yunlin.style.backgroundColor == "rgb(119, 221, 255)"){
      payvalue = (yunlin_house*500)+500;
      payfor = window.alert("這是玩家1的土地，您需支付共" + payvalue + "!")
      original3 -= payvalue; 
      original1 += payvalue;     
      document.getElementById("original1").innerHTML=original1;
      document.getElementById("original3").innerHTML=original3; 
    }

    else if (yunlin.style.backgroundColor = "rgb(255, 164, 136)"){
      payvalue = (yunlin_house*500)+500;
      payfor = window.alert("這是玩家2的土地，您需支付共" + payvalue + "!")
      original3 -= payvalue; 
      original2 += payvalue;       
      document.getElementById("original3").innerHTML=original3;
      document.getElementById("original2").innerHTML=original2; 
    }

    else if (yunlin.style.backgroundColor = "rgb(255, 255, 119)"){
      payvalue = (yunlin_house*500)+500;
      payfor = window.alert("這是玩家4的土地，您需支付共" + payvalue + "!")
      original3 -= payvalue;  
      original4 += payvalue;    
      document.getElementById("original3").innerHTML=original3;
      document.getElementById("original4").innerHTML=original4;
    }
  }
  
  else if (dot3.offsetLeft > 549 && dot3.offsetLeft < 657 && dot3.offsetTop < taichung.offsetTop && dot3.offsetTop > chunghwua.offsetTop){
      if (chunghwua.style.backgroundColor == "white"){
        r = confirm("您要購買土地嗎？將會花費1000元");
      if(r){
        chunghwua.style.backgroundColor = "rgb(187, 255, 0)";
        original3 -= 1000;
        document.getElementById("original3").innerHTML=original3;
      }
    }
    else if (chunghwua.style.backgroundColor == "rgb(187, 255, 0)"){
    build = confirm("您要蓋房子嗎？將會花費500元");
      if(build && chunghwua_house < 5){
          chunghwua_house += 1;
          original3 -= 500;
          document.getElementById("chunghwua_house").innerHTML=chunghwua_house;
          document.getElementById("original3").innerHTML=original3;
        }
      else if(build && chunghwua_house == 5)
          window.alert("房子最多只能蓋5層！");
        }
    

    else if (chunghwua.style.backgroundColor == "rgb(119, 221, 255)"){
      payvalue = (chunghwua_house*500)+500;
      payfor = window.alert("這是玩家1的土地，您需支付共" + payvalue + "!")
      original3 -= payvalue; 
      original1 += payvalue;     
      document.getElementById("original3").innerHTML=original1;
      document.getElementById("original3").innerHTML=original3; 
    }

    else if (chunghwua.style.backgroundColor = "rgb(255, 164, 136)"){
      payvalue = (chunghwua_house*500)+500;
      payfor = window.alert("這是玩家2的土地，您需支付共" + payvalue + "!")
      original3 -= payvalue; 
      original2 += payvalue;       
      document.getElementById("original3").innerHTML=original3;
      document.getElementById("original2").innerHTML=original2; 
    }

    else if (chunghwua.style.backgroundColor = "rgb(255, 255, 119)"){
      payvalue = (chunghwua_house*500)+500;
      payfor = window.alert("這是玩家4的土地，您需支付共" + payvalue + "!")
      original3 -= payvalue;  
      original4 += payvalue;    
      document.getElementById("original3").innerHTML=original3;
      document.getElementById("original4").innerHTML=original4;
    }
  }

  else if (dot3.offsetLeft > 549 && dot3.offsetLeft < 657 && dot3.offsetTop < playground2.offsetTop && dot3.offsetTop > taichung.offsetTop){
      if (taichung.style.backgroundColor == "white"){
        r = confirm("您要購買土地嗎？將會花費1000元");
      if(r){
        taichung.style.backgroundColor = "rgb(187, 255, 0)";
        original3 -= 1000;
        document.getElementById("original3").innerHTML=original3;
      }
    }
    else if (taichung.style.backgroundColor == "rgb(187, 255, 0)"){
    build = confirm("您要蓋房子嗎？將會花費500元");
      if(build && taichung_house < 5){
          taichung_house += 1;
          original3 -= 500;
          document.getElementById("taichung_house").innerHTML=taichung_house;
          document.getElementById("original3").innerHTML=original3;
        }
      else if(build && taichung_house == 5)
          window.alert("房子最多只能蓋5層！");
        }
    

    else if (taichung.style.backgroundColor == "rgb(119, 221, 255)"){
      payvalue = (taichung_house*500)+500;
      payfor = window.alert("這是玩家1的土地，您需支付共" + payvalue + "!")
      original3 -= payvalue; 
      original1 += payvalue;     
      document.getElementById("original1").innerHTML=original;
      document.getElementById("original3").innerHTML=original3; 
    }

    else if (taichung.style.backgroundColor = "rgb(255, 164, 136)"){
      payvalue = (taichung_house*500)+500;
      payfor = window.alert("這是玩家2的土地，您需支付共" + payvalue + "!")
      original3 -= payvalue; 
      original2 += payvalue;       
      document.getElementById("original3").innerHTML=original3;
      document.getElementById("original2").innerHTML=original2; 
    }

    else if (taichung.style.backgroundColor = "rgb(255, 255, 119)"){
      payvalue = (taichung_house*500)+500;
      payfor = window.alert("這是玩家4的土地，您需支付共" + payvalue + "!")
      original3 -= payvalue;  
      original4 += payvalue;    
      document.getElementById("original3").innerHTML=original3;
      document.getElementById("original4").innerHTML=original4;
    }
  }
  
  else if  (dot3.offsetLeft > miaoli.offsetLeft && dot3.offsetLeft < playground2.offsetLeft && dot3.offsetTop > 549){
      if (miaoli.style.backgroundColor == "white"){
        r = confirm("您要購買土地嗎？將會花費1000元");
      if(r){
        miaoli.style.backgroundColor = "rgb(187, 255, 0)";
        original3 -= 1000;
        document.getElementById("original3").innerHTML=original3;
      }
    }
    else if (miaoli.style.backgroundColor == "rgb(187, 255, 0)"){
    build = confirm("您要蓋房子嗎？將會花費500元");
      if(build && miaoli_house < 5){
          miaoli_house += 1;
          original3 -= 500;
          document.getElementById("miaoli_house").innerHTML=miaoli_house;
          document.getElementById("original3").innerHTML=original3;
        }
      else if(build && miaoli_house == 5)
          window.alert("房子最多只能蓋5層！");
        }
    

    else if (miaoli.style.backgroundColor == "rgb(119, 221, 255)"){
      payvalue = (miaoli_house*500)+500;
      payfor = window.alert("這是玩家1的土地，您需支付共" + payvalue + "!")
      original3 -= payvalue; 
      original1 += payvalue;     
      document.getElementById("original1").innerHTML=original1;
      document.getElementById("original3").innerHTML=original3; 
    }

    else if (miaoli.style.backgroundColor = "rgb(255, 164, 136)"){
      payvalue = (miaoli_house*500)+500;
      payfor = window.alert("這是玩家2的土地，您需支付共" + payvalue + "!")
      original3 -= payvalue; 
      original2 += payvalue;       
      document.getElementById("original3").innerHTML=original3;
      document.getElementById("original2").innerHTML=original2; 
    }

    else if (miaoli.style.backgroundColor = "rgb(255, 255, 119)"){
      payvalue = (miaoli_house*500)+500;
      payfor = window.alert("這是玩家4的土地，您需支付共" + payvalue + "!")
      original3 -= payvalue;  
      original4 += payvalue;    
      document.getElementById("original3").innerHTML=original3;
      document.getElementById("original4").innerHTML=original4;
    }
  }
    else if (dot3.offsetLeft > taoyuan.offsetLeft && dot3.offsetLeft < miaoli.offsetLeft && dot3.offsetTop > 549){
      if (taoyuan.style.backgroundColor == "white"){
        r = confirm("您要購買土地嗎？將會花費1000元");
      if(r){
        taoyuan.style.backgroundColor = "rgb(187, 255, 0)";
        original3 -= 1000;
        document.getElementById("original3").innerHTML=original3;
      }
    }
      else if (taoyuan.style.backgroundColor == "rgb(187, 255, 0)"){
    build = confirm("您要蓋房子嗎？將會花費500元");
      if(build && taoyuan_house < 5){
          taoyuan_house += 1;
          original3 -= 500;
          document.getElementById("taoyuan_house").innerHTML=taoyuan_house;
          document.getElementById("original3").innerHTML=original3;
        }
      else if(build && taoyuan_house == 5)
          window.alert("房子最多只能蓋5層！");
        }
    

    else if (taoyuan.style.backgroundColor == "rgb(119, 221, 255)"){
      payvalue = (taoyuan_house*500)+500;
      payfor = window.alert("這是玩家1的土地，您需支付共" + payvalue + "!")
      original3 -= payvalue; 
      original1 += payvalue;     
      document.getElementById("original1").innerHTML=original1;
      document.getElementById("original3").innerHTML=original3; 
    }

    else if (taoyuan.style.backgroundColor = "rgb(255, 164, 136)"){
      payvalue = (taoyuan_house*500)+500;
      payfor = window.alert("這是玩家2的土地，您需支付共" + payvalue + "!")
      original3 -= payvalue; 
      original2 += payvalue;       
      document.getElementById("original3").innerHTML=original3;
      document.getElementById("original2").innerHTML=original2; 
    }

    else if (taoyuan.style.backgroundColor = "rgb(255, 255, 119)"){
      payvalue = (taoyuan_house*500)+500;
      payfor = window.alert("這是玩家4的土地，您需支付共" + payvalue + "!")
      original3 -= payvalue;  
      original4 += payvalue;    
      document.getElementById("original3").innerHTML=original3;
      document.getElementById("original4").innerHTML=original4;
    }
  }

  else if  (dot3.offsetLeft > taipei.offsetLeft && dot3.offsetLeft < taoyuan.offsetLeft && dot3.offsetTop > 549){
      if (taipei.style.backgroundColor == "white"){
        r = confirm("您要購買土地嗎？將會花費1000元");
      if(r){
        taipei.style.backgroundColor = "rgb(187, 255, 0)";
        original3 -= 1000;
        document.getElementById("original3").innerHTML=original3;
      }
    }

    else if (taipei.style.backgroundColor == "rgb(187, 255, 0)"){
    build = confirm("您要蓋房子嗎？將會花費500元");
      if(build && taipei_house < 5){
          taipei_house += 1;
          original3 -= 500;
          document.getElementById("taipei_house").innerHTML=taipei_house;
          document.getElementById("original3").innerHTML=original3;
        }
      else if(build && taipei_house == 5)
          window.alert("房子最多只能蓋5層！");
        }
    

    else if (taipei.style.backgroundColor == "rgb(119, 221, 255)"){
      payvalue = (taipei_house*500)+500;
      payfor = window.alert("這是玩家1的土地，您需支付共" + payvalue + "!")
      original3 -= payvalue; 
      original1 += payvalue;     
      document.getElementById("original1").innerHTML=original1;
      document.getElementById("original3").innerHTML=original3; 
    }

    else if (taipei.style.backgroundColor = "rgb(255, 164, 136)"){
      payvalue = (taipei_house*500)+500;
      payfor = window.alert("這是玩家2的土地，您需支付共" + payvalue + "!")
      original3 -= payvalue; 
      original2 += payvalue;       
      document.getElementById("original3").innerHTML=original3;
      document.getElementById("original2").innerHTML=original2; 
    }

    else if (taipei.style.backgroundColor = "rgb(255, 255, 119)"){
      payvalue = (taipei_house*500)+500;
      payfor = window.alert("這是玩家4的土地，您需支付共" + payvalue + "!")
      original3 -= payvalue;  
      original4 += payvalue;    
      document.getElementById("original3").innerHTML=original3;
      document.getElementById("original4").innerHTML=original4;
    }
  }
  
  else if (dot3.offsetLeft > keelung.offsetLeft && dot3.offsetLeft < taipei.offsetLeft && dot3.offsetTop > 549){
      if (keelung.style.backgroundColor == "white"){
        r = confirm("您要購買土地嗎？將會花費1000元");
      if(r){
        keelung.style.backgroundColor = "rgb(187, 255, 0)";
        original3 -= 1000;
        document.getElementById("original3").innerHTML=original3;
      }
    }
    
    else if (keelung.style.backgroundColor == "rgb(187, 255, 0)"){
    build = confirm("您要蓋房子嗎？將會花費500元");
      if(build && keelung_house < 5){
          keelung_house += 1;
          original3 -= 500;
          document.getElementById("keelung_house").innerHTML=keelung_house;
          document.getElementById("original3").innerHTML=original3;
        }
      else if(build && keelung_house == 5)
          window.alert("房子最多只能蓋5層！");
        }
    

    else if (keelung.style.backgroundColor == "rgb(119, 221, 255)"){
      payvalue = (keelung_house*500)+500;
      payfor = window.alert("這是玩家1的土地，您需支付共" + payvalue + "!")
      original3 -= payvalue; 
      original1 += payvalue;     
      document.getElementById("original1").innerHTML=original1;
      document.getElementById("original3").innerHTML=original3; 
    }

    else if (keelung.style.backgroundColor = "rgb(255, 164, 136)"){
      payvalue = (keelung_house*500)+500;
      payfor = window.alert("這是玩家2的土地，您需支付共" + payvalue + "!")
      original3 -= payvalue; 
      original2 += payvalue;       
      document.getElementById("original3").innerHTML=original3;
      document.getElementById("original2").innerHTML=original2; 
    }

    else if (keelung.style.backgroundColor = "rgb(255, 255, 119)"){
      payvalue = (keelung_house*500)+500;
      payfor = window.alert("這是玩家4的土地，您需支付共" + payvalue + "!")
      original3 -= payvalue;  
      original4 += payvalue;    
      document.getElementById("original3").innerHTML=original3;
      document.getElementById("original4").innerHTML=original4;
    }
  }
  
  else if  (dot3.offsetTop > yilan.offsetTop && dot3.offsetTop < playground3.offsetTop && dot3.offsetLeft <= 112){
      if (yilan.style.backgroundColor == "white"){
        r = confirm("您要購買土地嗎？將會花費1000元");
      if(r){
        yilan.style.backgroundColor = "rgb(187, 255, 0)";
        original3 -= 1000;
        document.getElementById("original3").innerHTML=original3;
      }
    }
    else if (yilan.style.backgroundColor == "rgb(187, 255, 0)"){
    build = confirm("您要蓋房子嗎？將會花費500元");
      if(build && yilan_house < 5){
          yilan_house += 1;
          original3 -= 500;
          document.getElementById("yilan_house").innerHTML=yilan_house;
          document.getElementById("original3").innerHTML=original3;
        }
      else if(build && yilan_house == 5)
          window.alert("房子最多只能蓋5層！");
        }
    

    else if (yilan.style.backgroundColor == "rgb(119, 221, 255)"){
      payvalue = (yilan_house*500)+500;
      payfor = window.alert("這是玩家1的土地，您需支付共" + payvalue + "!")
      original3 -= payvalue; 
      original1 += payvalue;     
      document.getElementById("original1").innerHTML=original1;
      document.getElementById("original3").innerHTML=original3; 
    }

    else if (yilan.style.backgroundColor = "rgb(255, 164, 136)"){
      payvalue = (yilan_house*500)+500;
      payfor = window.alert("這是玩家2的土地，您需支付共" + payvalue + "!")
      original3 -= payvalue; 
      original2 += payvalue;       
      document.getElementById("original3").innerHTML=original3;
      document.getElementById("original2").innerHTML=original2; 
    }

    else if (yilan.style.backgroundColor = "rgb(255, 255, 119)"){
      payvalue = (yilan_house*500)+500;
      payfor = window.alert("這是玩家4的土地，您需支付共" + payvalue + "!")
      original3 -= payvalue;  
      original4 += payvalue;    
      document.getElementById("original3").innerHTML=original3;
      document.getElementById("original4").innerHTML=original4;
    }
  }
    else if (dot3.offsetTop > taitung.offsetTop && dot3.offsetTop < yilan.offsetTop && dot3.offsetLeft <= 112){
      if (taitung.style.backgroundColor == "white"){
        r = confirm("您要購買土地嗎？將會花費1000元");
      if(r){
        taitung.style.backgroundColor = "rgb(187, 255, 0)";
        original3 -= 1000;
        document.getElementById("original3").innerHTML=original3;
      }
    }
    else if (taitung.style.backgroundColor == "rgb(187, 255, 0)"){
    build = confirm("您要蓋房子嗎？將會花費500元");
      if(build && taitung_house < 5){
          taitung_house += 1;
          original3 -= 500;
          document.getElementById("taitung_house").innerHTML=taitung_house;
          document.getElementById("original3").innerHTML=original3;
        }
      else if(build && taitung_house == 5)
          window.alert("房子最多只能蓋5層！");
        }
    

    else if (taitung.style.backgroundColor == "rgb(119, 221, 255)"){
      payvalue = (taitung_house*500)+500;
      payfor = window.alert("這是玩家1的土地，您需支付共" + payvalue + "!")
      original3 -= payvalue; 
      original1 += payvalue;     
      document.getElementById("original1").innerHTML=original1;
      document.getElementById("original3").innerHTML=original3; 
    }

    else if (taitung.style.backgroundColor = "rgb(255, 164, 136)"){
      payvalue = (taitung_house*500)+500;
      payfor = window.alert("這是玩家2的土地，您需支付共" + payvalue + "!")
      original3 -= payvalue; 
      original2 += payvalue;       
      document.getElementById("original3").innerHTML=original3;
      document.getElementById("original2").innerHTML=original2; 
    }

    else if (taitung.style.backgroundColor = "rgb(255, 255, 119)"){
      payvalue = (taitung_house*500)+500;
      payfor = window.alert("這是玩家4的土地，您需支付共" + payvalue + "!")
      original3 -= payvalue;  
      original4 += payvalue;    
      document.getElementById("original3").innerHTML=original3;
      document.getElementById("original4").innerHTML=original4;
    }
  }

    else if (dot3.offsetTop > chuban.offsetTop && dot3.offsetTop < taitung.offsetTop && dot3.offsetLeft <= 112){
      if (chuban.style.backgroundColor == "white"){
        r = confirm("您要購買土地嗎？將會花費1000元");
      if(r){
        chuban.style.backgroundColor = "rgb(187, 255, 0)";
        original3 -= 1000;
        document.getElementById("original3").innerHTML=original3;
      }
    }
    else if (chuban.style.backgroundColor == "rgb(187, 255, 0)"){
    build = confirm("您要蓋房子嗎？將會花費500元");
      if(build && chuban_house < 5){
          chuban_house += 1;
          original3 -= 500;
          document.getElementById("chuban_house").innerHTML=chuban_house;
          document.getElementById("original3").innerHTML=original3;
        }
      else if(build && chuban_house == 5)
          window.alert("房子最多只能蓋5層！");
        }
    

    else if (chuban.style.backgroundColor == "rgb(119, 221, 255)"){
      payvalue = (chuban_house*500)+500;
      payfor = window.alert("這是玩家1的土地，您需支付共" + payvalue + "!")
      original3 -= payvalue; 
      original1 += payvalue;     
      document.getElementById("original1").innerHTML=original1;
      document.getElementById("original3").innerHTML=original3; 
    }

    else if (chuban.style.backgroundColor = "rgb(255, 164, 136)"){
      payvalue = (chuban_house*500)+500;
      payfor = window.alert("這是玩家2的土地，您需支付共" + payvalue + "!")
      original3 -= payvalue; 
      original2 += payvalue;       
      document.getElementById("original3").innerHTML=original3;
      document.getElementById("original2").innerHTML=original2; 
    }

    else if (chuban.style.backgroundColor = "rgb(255, 255, 119)"){
      payvalue = (chuban_house*500)+500;
      payfor = window.alert("這是玩家4的土地，您需支付共" + payvalue + "!")
      original3 -= payvalue;  
      original4 += payvalue;    
      document.getElementById("original3").innerHTML=original3;
      document.getElementById("original4").innerHTML=original4;
    }
  }
 
  else if  (dot3.offsetTop > kenting.offsetTop && dot3.offsetTop < chuban.offsetTop && dot3.offsetLeft <= 112){
      if (kenting.style.backgroundColor == "white"){
        r = confirm("您要購買土地嗎？將會花費1000元");
      if(r){
        kenting.style.backgroundColor = "rgb(187, 255, 0)";
        original3 -= 1000;
        document.getElementById("original3").innerHTML=original3;
      }
    }
    else if (kenting.style.backgroundColor == "rgb(187, 255, 0)"){
    build = confirm("您要蓋房子嗎？將會花費500元");
      if(build && kenting_house < 5){
          kenting_house += 1;
          original3 -= 500;
          document.getElementById("kenting_house").innerHTML=kenting_house
          document.getElementById("original3").innerHTML=original3;
        }
      else if(build && kenting_house == 5)
          window.alert("房子最多只能蓋5層！");
        }
    

    else if (kenting.style.backgroundColor == "rgb(119, 221, 255)"){
      payvalue = (kenting_house*500)+500;
      payfor = window.alert("這是玩家1的土地，您需支付共" + payvalue + "!")
      original3 -= payvalue; 
      original1 += payvalue;     
      document.getElementById("original1").innerHTML=original1;
      document.getElementById("original3").innerHTML=original3; 
    }

    else if (kenting.style.backgroundColor = "rgb(255, 164, 136)"){
      payvalue = (kenting_house*500)+500;
      payfor = window.alert("這是玩家2的土地，您需支付共" + payvalue + "!")
      original3 -= payvalue; 
      original2 += payvalue;       
      document.getElementById("original3").innerHTML=original3;
      document.getElementById("original3").innerHTML=original2; 
    }

    else if (kenting.style.backgroundColor = "rgb(255, 255, 119)"){
      payvalue = (kenting_house*500)+500;
      payfor = window.alert("這是玩家4的土地，您需支付共" + payvalue + "!")
      original3 -= payvalue;  
      original4 += payvalue;    
      document.getElementById("original3").innerHTML=original3;
      document.getElementById("original4").innerHTML=original4;
    }
  }
}
  else if (original3 < 0)
    var bankruptcy = window.alert("您已破產！遊戲結束！");
}


function dotmove4() 
{
  var step4x = 0;
  var step4y = 0;
  var xsum4 = 0;
  var ysum4 = 0;
  var xmove4 = 0;
  var ymove4 = 0;
  var counter4 = 1;
  var dot4 = document.getElementById ("dot4");
  var x4 = dot4.offsetLeft;
  var y4 = dot4.offsetTop; 


  for (var j = 0; j < dieValue; j++)
  {     

      if (counter4 % 6 != 0){
        if (dot4.offsetLeft < 549 && dot4.offsetTop < 112){
          step4x += 110;
          xsum4 = step4x;
          x4 += xsum4;
          xmove4 = x4;
          dot4.style.left = xmove4 + 'px';
        }
        else if (dot4.offsetLeft > 549 && dot4.offsetTop < 514){
          step4y += 110;
          ysum4 = step4y;
          y4 += ysum4;
          ymove4 = y4;
          dot4.style.top = ymove4 + 'px';
        }
        else if (dot4.offsetTop > 514 && dot4.offsetLeft > 114){
          step4x += 110;
          xsum4 = step4x;
          x4 -= xsum4;
          xmove4 = x4;
          dot4.style.left = xmove4 + 'px';
        }
        else if (dot4.offsetTop > 112 && dot4.offsetLeft < 114){
          step4y += 110;
          ysum4 = step4y;
          y4 -= ysum4;
          ymove4 = y4;
          dot4.style.top = ymove4 + 'px';
        }
      }

      if (counter4 % 6 == 0){
        if (dot4.offsetLeft < 114  && dot4.offsetTop < 112){
          step4x += 110;
          xsum4 = step4x;
          x4 += xsum4;
          xmove4 = x4;
          dot4.style.left = xmove4 + 'px';
        }
        else if (dot4.offsetLeft > 549 && dot4.offsetTop < 514){
          step4y += 110;
          ysum4 = step4y;
          y4 += ysum4;
          ymove4 = y4;
          dot4.style.top = ymove4 + 'px';
        }
        else if (dot4.offsetTop > 514 && dot4.offsetLeft > 114){
          step4x += 110;
          xsum4 = step4x;
          x4 -= xsum4;
          xmove4 = x4;
          dot4.style.left = xmove4 + 'px';
        }
        else if (dot4.offsetTop > 514 && dot4.offsetLeft < 114){
          step4y += 110;
          ysum4 = step4y;
          y4 -= ysum4;
          ymove4 = y4;
          dot4.style.top = ymove4 + 'px';
        }
      }
      
      step4y = 0;
      step4x = 0;
      counter4++;
      turncounter4();
  }

  if (counter4 % 7 == 0){
        counter4 = 2;
  }

  if (j == dieValue){
      BuyPlant4();
  }
  
}


var player4count = 0;
function turncounter4()
{
  if (player4count < 20){
    player4count ++;
  }
  else{
    original4 += startmoney;
    document.getElementById("original4").innerHTML=original4;
    player4count = 1; 
  }
}


function BuyPlant4(){
  var pingtung = document.getElementById ("pingtung");
  var kaohsiung = document.getElementById ("kaohsiung");
  var anping = document.getElementById ("anping");
  var tainan = document.getElementById ("tainan");
  var kenting = document.getElementById ("kenting");
  var chiayi = document.getElementById ("chiayi");
  var taichung = document.getElementById("taichung");
  var chuban = document.getElementById ("chuban");
  var yunlin = document.getElementById ("yunlin");
  var taitung = document.getElementById ("taitung");
  var chunghwua = document.getElementById ("chunghwua");
  var yilan = document.getElementById ("yilan");
  var keelung = document.getElementById ("keelung");
  var taipei = document.getElementById ("taipei");
  var taoyuan = document.getElementById ("taoyuan");
  var miaoli = document.getElementById ("miaoli");
  var playground1 = document.getElementById ("playground1");
  var playground2 = document.getElementById ("playground2");
  var playground3 = document.getElementById ("playground3");
  var startpoint = document.getElementById("startpoint");
  var r;
  var build;
  var payfor;
  var payvalue = 0;

if (original4 > 0){
  if (dot4.offsetLeft > pingtung.offsetLeft && dot4.offsetLeft < kaohsiung.offsetLeft && dot4.offsetTop <= 112){
    if (pingtung.style.backgroundColor == "white"){
       r = confirm("您要購買土地嗎？將會花費1000元");
       if(r){
        pingtung.style.backgroundColor = "#FFFF77";
        original4 -= 1000;
        document.getElementById("original4").innerHTML=original4;
      }
    }

    else if (pingtung.style.backgroundColor == "rgb(255, 255, 119)"){
    build = confirm("您要蓋房子嗎？將會花費500元");
      if(build && pingtung_house < 5){
          pingtung_house += 1;
          original4 -= 500;
          document.getElementById("pingtung_house").innerHTML=pingtung_house;
          document.getElementById("original4").innerHTML=original4;
        }
      else if(build && pingtung_house == 5)
        window.alert("房子最多只能蓋5層！");
      }

    else if (pingtung.style.backgroundColor == "rgb(119, 221, 255)"){
    payvalue = (pingtung_house*500)+500;
    payfor = window.alert("這是玩家1的土地，您需支付共" + payvalue + "!")
    original4 -= payvalue; 
    document.getElementById("original4").innerHTML=original4; 
    original1 += payvalue;  
    document.getElementById("original1").innerHTML=original1;
    }

    else if (pingtung.style.backgroundColor = "rgb(255, 255, 119)"){
    payvalue = (pingtung_house*500)+500;
    payfor = window.alert("這是玩家2的土地，您需支付共" + payvalue + "!")
    original4 -= payvalue; 
    original2 += payvalue;       
    document.getElementById("original4").innerHTML=original4;
    document.getElementById("original2").innerHTML=original2; 
    }

    else if (pingtung.style.backgroundColor = "rgb(187, 255, 0)"){
    payvalue = (pingtung_house*500)+500;
    payfor = window.alert("這是玩家3的土地，您需支付共" + payvalue + "!")
    original4 -= payvalue;  
    original3 += payvalue;    
    document.getElementById("original4").innerHTML=original4;
    document.getElementById("original3").innerHTML=original3; 
    }
}

 
  else if (dot4.offsetLeft > kaohsiung.offsetLeft && dot4.offsetLeft < anping.offsetLeft && dot4.offsetTop <= 112){
      if (kaohsiung.style.backgroundColor == "white"){
        r = confirm("您要購買土地嗎？將會花費1000元");
      if(r){
        kaohsiung.style.backgroundColor = "rgb(255, 255, 119)";
        original4 -= 1000;
        document.getElementById("original4").innerHTML=original4;
      }
    }

      else if (kaohsiung.style.backgroundColor == "rgb(255, 255, 119)"){
      build = confirm("您要蓋房子嗎？將會花費500元");
        if(build && kaohsiung_house < 5){
            kaohsiung_house += 1;
            original4 -= 500;
            document.getElementById("kaohsiung_house").innerHTML=kaohsiung_house;
            document.getElementById("original4").innerHTML=original4;
          }
        else if(build && kaohsiung_house == 5)
          window.alert("房子最多只能蓋5層！");
        }
      

      else if (kaohsiung.style.backgroundColor == "rgb(119, 221, 255)"){
      payvalue = (kaohsiung_house*500)+500;
      payfor = window.alert("這是玩家1的土地，您需支付共" + payvalue + "!")
      original4 -= payvalue; 
      original1  += payvalue;
      document.getElementById("original4").innerHTML=original4;      
      document.getElementById("original1").innerHTML=original1;
      }

      else if (kaohsiung.style.backgroundColor = "rgb(255, 164, 136)"){
      payvalue = (kaohsiung_house*500)+500;
      payfor = window.alert("這是玩家2的土地，您需支付共" + payvalue + "!")
      original4 -= payvalue; 
      original2 += payvalue;       
      document.getElementById("original4").innerHTML=original4;
      document.getElementById("original2").innerHTML=original2; 
      }

      else if (kaohsiung.style.backgroundColor = "rgb(187, 255, 0)"){
      payvalue = (kaohsiung_house*500)+500;
      payfor = window.alert("這是玩家3的土地，您需支付共" + payvalue + "!")
      original4 -= payvalue;  
      original3 += payvalue;    
      document.getElementById("original4").innerHTML=original4;
      document.getElementById("original3").innerHTML=original3;
      }
}

  else if (dot4.offsetLeft > anping.offsetLeft && dot4.offsetLeft < tainan.offsetLeft && dot4.offsetTop <= 112){
      if (anping.style.backgroundColor == "white"){
        r = confirm("您要購買土地嗎？將會花費1000元");
      if(r){
        anping.style.backgroundColor = "rgb(255, 255, 119)";
        original4 -= 1000;
        document.getElementById("original4").innerHTML=original4;
      }
    }
      else if (anping.style.backgroundColor == "rgb(255, 255, 119)"){
      build = confirm("您要蓋房子嗎？將會花費500元");
        if(build && anping_house < 5){
            anping_house += 1;
            original4 -= 500;
            document.getElementById("anping_house").innerHTML=anping_house;
            document.getElementById("original4").innerHTML=original4;
          }
        else if(build && anping_house == 5)
          window.alert("房子最多只能蓋5層！");
        }

      else if (anping.style.backgroundColor == "rgb(119, 221, 255)"){
      payvalue = (anping_house*500)+500;
      payfor = window.alert("這是玩家1的土地，您需支付共" + payvalue + "!")
      original4 -= payvalue; 
      original1 += payvalue;     
      document.getElementById("original1").innerHTML=original1;
      document.getElementById("original4").innerHTML=original4; 
      }

      else if (anping.style.backgroundColor = "rgb(255, 164, 136)"){
      payvalue = (anping_house*500)+500;
      payfor = window.alert("這是玩家2的土地，您需支付共" + payvalue + "!")
      original4 -= payvalue; 
      original2 += payvalue;       
      document.getElementById("original4").innerHTML=original4;
      document.getElementById("original2").innerHTML=original2; 
      }

      else if (anping.style.backgroundColor = "rgb(187, 255, 0)"){
      payvalue = (anping_house*500)+500;
      payfor = window.alert("這是玩家3的土地，您需支付共" + payvalue + "!")
      original4 -= payvalue;  
      original3 += payvalue;    
      document.getElementById("original4").innerHTML=original4;
      document.getElementById("original3").innerHTML=original3;
      }
}

  else if  (dot4.offsetLeft > tainan.offsetLeft && dot4.offsetLeft < playground1.offsetLeft && dot4.offsetTop <= 112){
      if (tainan.style.backgroundColor == "white"){
        r = confirm("您要購買土地嗎？將會花費1000元");
      if(r){
        tainan.style.backgroundColor = "rgb(255, 255, 119)";
        original4 -= 1000;
        document.getElementById("original4").innerHTML=original4;
      }
    }
    
    else if (tainan.style.backgroundColor == "rgb(255, 255, 119)"){
    build = confirm("您要蓋房子嗎？將會花費500元");
      if(build && tainan_house < 5){
          tainan_house += 1;
          original4 -= 500;
          document.getElementById("tainan_house").innerHTML=tainan_house;
          document.getElementById("original4").innerHTML=original4;
        }
      else if(build && tainan_house == 5)
          window.alert("房子最多只能蓋5層！");
        }
    

    else if (tainan.style.backgroundColor == "rgb(119, 221, 255)"){
      payvalue = (tainan_house*500)+500;
      payfor = window.alert("這是玩家1的土地，您需支付共" + payvalue + "!")
      original4 -= payvalue; 
      original1 += payvalue;     
      document.getElementById("original1").innerHTML=original1;
      document.getElementById("original4").innerHTML=original4; 
    }

    else if (tainan.style.backgroundColor = "rgb(255, 164, 136)"){
      payvalue = (tainan_house*500)+500;
      payfor = window.alert("這是玩家2的土地，您需支付共" + payvalue + "!")
      original4 -= payvalue; 
      original2 += payvalue;       
      document.getElementById("original4").innerHTML=original4;
      document.getElementById("original2").innerHTML=original2; 
    }

    else if (tainan.style.backgroundColor = "rgb(187, 255, 0)"){
      payvalue = (tainan_house*500)+500;
      payfor = window.alert("這是玩家3的土地，您需支付共" + payvalue + "!")
      original4 -= payvalue;  
      original3 += payvalue;    
      document.getElementById("original4").innerHTML=original4;
      document.getElementById("original3").innerHTML=original3;
    }
}

  else if  (dot4.offsetLeft > 549 && dot4.offsetLeft < 657 && dot4.offsetTop < yunlin.offsetTop && dot4.offsetTop > chiayi.offsetTop){
    if (chiayi.style.backgroundColor == "white"){
        r = confirm("您要購買土地嗎？將會花費1000元");
      if(r){
        chiayi.style.backgroundColor = "rgb(255, 255, 119)";
        original4 -= 1000;
        document.getElementById("original4").innerHTML=original4;
      }
    }
    else if (chiayi.style.backgroundColor == "rgb(255, 255, 119)"){
    build = confirm("您要蓋房子嗎？將會花費500元");
      if(build && chiayi_house < 5){
          chiayi_house += 1;
          original4 -= 500;
          document.getElementById("chiayi_house").innerHTML=chiayi_house;
          document.getElementById("original4").innerHTML=original4;
        }
      else if(build && chiayi_house == 5)
          window.alert("房子最多只能蓋5層！");
        }
    

    else if (chiayi.style.backgroundColor == "rgb(119, 221, 255)"){
      payvalue = (chiayi_house*500)+500;
      payfor = window.alert("這是玩家1的土地，您需支付共" + payvalue + "!")
      original4 -= payvalue; 
      original1 += payvalue;     
      document.getElementById("original1").innerHTML=original1;
      document.getElementById("original4").innerHTML=original4; 
    }

    else if (chiayi.style.backgroundColor = "rgb(255, 164, 136)"){
      payvalue = (chiayi_house*500)+500;
      payfor = window.alert("這是玩家2的土地，您需支付共" + payvalue + "!")
      original4 -= payvalue; 
      original2 += payvalue;       
      document.getElementById("original4").innerHTML=original4;
      document.getElementById("original2").innerHTML=original2; 
    }

    else if (chiayi.style.backgroundColor = "rgb(187, 255, 0)"){
      payvalue = (chiayi_house*500)+500;
      payfor = window.alert("這是玩家3的土地，您需支付共" + payvalue + "!")
      original4 -= payvalue;  
      original3 += payvalue;    
      document.getElementById("original4").innerHTML=original4;
      document.getElementById("original3").innerHTML=original3;
    }
  }
  
  else if  (dot4.offsetLeft > 549 && dot4.offsetLeft < 657 && dot4.offsetTop < chunghwua.offsetTop && dot4.offsetTop > yunlin.offsetTop){
      if (yunlin.style.backgroundColor == "white"){
        r = confirm("您要購買土地嗎？將會花費1000元");
      if(r){
        yunlin.style.backgroundColor = "rgb(255, 255, 119)";
        original4 -= 1000;
        document.getElementById("original4").innerHTML=original4;
      }
    }
    else if (yunlin.style.backgroundColor == "rgb(255, 255, 119)"){
    build = confirm("您要蓋房子嗎？將會花費500元");
      if(build && yunlin_house < 5){
          yunlin_house += 1;
          original4 -= 500;
          document.getElementById("yunlin_house").innerHTML=yunlin_house;
          document.getElementById("original4").innerHTML=original4;
        }
      else if(build && yunlin_house == 5)
          window.alert("房子最多只能蓋5層！");
        }
    

    else if (yunlin.style.backgroundColor == "rgb(119, 221, 255)"){
      payvalue = (yunlin_house*500)+500;
      payfor = window.alert("這是玩家1的土地，您需支付共" + payvalue + "!")
      original4 -= payvalue; 
      original1 += payvalue;     
      document.getElementById("original1").innerHTML=original1;
      document.getElementById("original4").innerHTML=original4; 
    }

    else if (yunlin.style.backgroundColor = "rgb(255, 164, 136)"){
      payvalue = (yunlin_house*500)+500;
      payfor = window.alert("這是玩家2的土地，您需支付共" + payvalue + "!")
      original4 -= payvalue; 
      original2 += payvalue;       
      document.getElementById("original4").innerHTML=original4;
      document.getElementById("original2").innerHTML=original2; 
    }

    else if (yunlin.style.backgroundColor = "rgb(187, 255, 0)"){
      payvalue = (yunlin_house*500)+500;
      payfor = window.alert("這是玩家3的土地，您需支付共" + payvalue + "!")
      original4 -= payvalue;  
      original3 += payvalue;    
      document.getElementById("original4").innerHTML=original4;
      document.getElementById("original3").innerHTML=original3;
    }
  }
  
  else if (dot4.offsetLeft > 549 && dot4.offsetLeft < 657 && dot4.offsetTop < taichung.offsetTop && dot4.offsetTop > chunghwua.offsetTop){
      if (chunghwua.style.backgroundColor == "white"){
        r = confirm("您要購買土地嗎？將會花費1000元");
      if(r){
        chunghwua.style.backgroundColor = "rgb(255, 255, 119)";
        original4 -= 1000;
        document.getElementById("original4").innerHTML=original4;
      }
    }
    else if (chunghwua.style.backgroundColor == "rgb(255, 255, 119)"){
    build = confirm("您要蓋房子嗎？將會花費500元");
      if(build && chunghwua_house < 5){
          chunghwua_house += 1;
          original4 -= 500;
          document.getElementById("chunghwua_house").innerHTML=chunghwua_house;
          document.getElementById("original4").innerHTML=original4;
        }
      else if(build && chunghwua_house == 5)
          window.alert("房子最多只能蓋5層！");
        }
    

    else if (chunghwua.style.backgroundColor == "rgb(119, 221, 255)"){
      payvalue = (chunghwua_house*500)+500;
      payfor = window.alert("這是玩家1的土地，您需支付共" + payvalue + "!")
      original4 -= payvalue; 
      original1 += payvalue;     
      document.getElementById("original4").innerHTML=original1;
      document.getElementById("original4").innerHTML=original4; 
    }

    else if (chunghwua.style.backgroundColor = "rgb(255, 164, 136)"){
      payvalue = (chunghwua_house*500)+500;
      payfor = window.alert("這是玩家2的土地，您需支付共" + payvalue + "!")
      original4 -= payvalue; 
      original2 += payvalue;       
      document.getElementById("original4").innerHTML=original4;
      document.getElementById("original2").innerHTML=original2; 
    }

    else if (chunghwua.style.backgroundColor = "rgb(187, 255, 0)"){
      payvalue = (chunghwua_house*500)+500;
      payfor = window.alert("這是玩家3的土地，您需支付共" + payvalue + "!")
      original4 -= payvalue;  
      original3 += payvalue;    
      document.getElementById("original4").innerHTML=original4;
      document.getElementById("original3").innerHTML=original3;
    }
  }

  else if (dot4.offsetLeft > 549 && dot4.offsetLeft < 657 && dot4.offsetTop < playground2.offsetTop && dot4.offsetTop > taichung.offsetTop){
      if (taichung.style.backgroundColor == "white"){
        r = confirm("您要購買土地嗎？將會花費1000元");
      if(r){
        taichung.style.backgroundColor = "rgb(255, 255, 119)";
        original4 -= 1000;
        document.getElementById("original4").innerHTML=original4;
      }
    }
    else if (taichung.style.backgroundColor == "rgb(255, 255, 119)"){
    build = confirm("您要蓋房子嗎？將會花費500元");
      if(build && taichung_house < 5){
          taichung_house += 1;
          original4 -= 500;
          document.getElementById("taichung_house").innerHTML=taichung_house;
          document.getElementById("original4").innerHTML=original4;
        }
      else if(build && taichung_house == 5)
          window.alert("房子最多只能蓋5層！");
        }
    

    else if (taichung.style.backgroundColor == "rgb(119, 221, 255)"){
      payvalue = (taichung_house*500)+500;
      payfor = window.alert("這是玩家1的土地，您需支付共" + payvalue + "!")
      original4 -= payvalue; 
      original1 += payvalue;     
      document.getElementById("original1").innerHTML=original;
      document.getElementById("original4").innerHTML=original4; 
    }

    else if (taichung.style.backgroundColor = "rgb(255, 164, 136)"){
      payvalue = (taichung_house*500)+500;
      payfor = window.alert("這是玩家2的土地，您需支付共" + payvalue + "!")
      original4 -= payvalue; 
      original2 += payvalue;       
      document.getElementById("original4").innerHTML=original4;
      document.getElementById("original2").innerHTML=original2; 
    }

    else if (taichung.style.backgroundColor = "rgb(187, 255, 0)"){
      payvalue = (taichung_house*500)+500;
      payfor = window.alert("這是玩家3的土地，您需支付共" + payvalue + "!")
      original4 -= payvalue;  
      original3 += payvalue;    
      document.getElementById("original4").innerHTML=original4;
      document.getElementById("original3").innerHTML=original3;
    }
  }
  
  else if  (dot4.offsetLeft > miaoli.offsetLeft && dot4.offsetLeft < playground2.offsetLeft && dot4.offsetTop > 549){
      if (miaoli.style.backgroundColor == "white"){
        r = confirm("您要購買土地嗎？將會花費1000元");
      if(r){
        miaoli.style.backgroundColor = "rgb(255, 255, 119)";
        original4 -= 1000;
        document.getElementById("original4").innerHTML=original4;
      }
    }
    else if (miaoli.style.backgroundColor == "rgb(255, 255, 119)"){
    build = confirm("您要蓋房子嗎？將會花費500元");
      if(build && miaoli_house < 5){
          miaoli_house += 1;
          original4 -= 500;
          document.getElementById("miaoli_house").innerHTML=miaoli_house;
          document.getElementById("original4").innerHTML=original4;
        }
      else if(build && miaoli_house == 5)
          window.alert("房子最多只能蓋5層！");
        }
    

    else if (miaoli.style.backgroundColor == "rgb(119, 221, 255)"){
      payvalue = (miaoli_house*500)+500;
      payfor = window.alert("這是玩家1的土地，您需支付共" + payvalue + "!")
      original4 -= payvalue; 
      original1 += payvalue;     
      document.getElementById("original1").innerHTML=original1;
      document.getElementById("original4").innerHTML=original4; 
    }

    else if (miaoli.style.backgroundColor = "rgb(255, 164, 136)"){
      payvalue = (miaoli_house*500)+500;
      payfor = window.alert("這是玩家2的土地，您需支付共" + payvalue + "!")
      original4 -= payvalue; 
      original2 += payvalue;       
      document.getElementById("original4").innerHTML=original4;
      document.getElementById("original2").innerHTML=original2; 
    }

    else if (miaoli.style.backgroundColor = "rgb(187, 255, 0)"){
      payvalue = (miaoli_house*500)+500;
      payfor = window.alert("這是玩家3的土地，您需支付共" + payvalue + "!")
      original4 -= payvalue;  
      original3 += payvalue;    
      document.getElementById("original4").innerHTML=original4;
      document.getElementById("original3").innerHTML=original3;
    }
  }
    else if (dot4.offsetLeft > taoyuan.offsetLeft && dot4.offsetLeft < miaoli.offsetLeft && dot4.offsetTop > 549){
      if (taoyuan.style.backgroundColor == "white"){
        r = confirm("您要購買土地嗎？將會花費1000元");
      if(r){
        taoyuan.style.backgroundColor = "rgb(255, 255, 119)";
        original4 -= 1000;
        document.getElementById("original4").innerHTML=original4;
      }
    }
      else if (taoyuan.style.backgroundColor == "rgb(255, 255, 119)"){
    build = confirm("您要蓋房子嗎？將會花費500元");
      if(build && taoyuan_house < 5){
          taoyuan_house += 1;
          original4 -= 500;
          document.getElementById("taoyuan_house").innerHTML=taoyuan_house;
          document.getElementById("original4").innerHTML=original4;
        }
      else if(build && taoyuan_house == 5)
          window.alert("房子最多只能蓋5層！");
        }
    

    else if (taoyuan.style.backgroundColor == "rgb(119, 221, 255)"){
      payvalue = (taoyuan_house*500)+500;
      payfor = window.alert("這是玩家1的土地，您需支付共" + payvalue + "!")
      original4 -= payvalue; 
      original1 += payvalue;     
      document.getElementById("original1").innerHTML=original1;
      document.getElementById("original4").innerHTML=original4; 
    }

    else if (taoyuan.style.backgroundColor = "rgb(255, 164, 136)"){
      payvalue = (taoyuan_house*500)+500;
      payfor = window.alert("這是玩家2的土地，您需支付共" + payvalue + "!")
      original4 -= payvalue; 
      original2 += payvalue;       
      document.getElementById("original4").innerHTML=original4;
      document.getElementById("original2").innerHTML=original2; 
    }

    else if (taoyuan.style.backgroundColor = "rgb(187, 255, 0)"){
      payvalue = (taoyuan_house*500)+500;
      payfor = window.alert("這是玩家3的土地，您需支付共" + payvalue + "!")
      original4 -= payvalue;  
      original3 += payvalue;    
      document.getElementById("original4").innerHTML=original4;
      document.getElementById("original3").innerHTML=original3;
    }
  }

  else if  (dot4.offsetLeft > taipei.offsetLeft && dot4.offsetLeft < taoyuan.offsetLeft && dot4.offsetTop > 549){
      if (taipei.style.backgroundColor == "white"){
        r = confirm("您要購買土地嗎？將會花費1000元");
      if(r){
        taipei.style.backgroundColor = "rgb(255, 255, 119)";
        original4 -= 1000;
        document.getElementById("original4").innerHTML=original4;
      }
    }

    else if (taipei.style.backgroundColor == "rgb(255, 255, 119)"){
    build = confirm("您要蓋房子嗎？將會花費500元");
      if(build && taipei_house < 5){
          taipei_house += 1;
          original4 -= 500;
          document.getElementById("taipei_house").innerHTML=taipei_house;
          document.getElementById("original4").innerHTML=original4;
        }
      else if(build && taipei_house == 5)
          window.alert("房子最多只能蓋5層！");
        }
    

    else if (taipei.style.backgroundColor == "rgb(119, 221, 255)"){
      payvalue = (taipei_house*500)+500;
      payfor = window.alert("這是玩家1的土地，您需支付共" + payvalue + "!")
      original4 -= payvalue; 
      original1 += payvalue;     
      document.getElementById("original1").innerHTML=original1;
      document.getElementById("original4").innerHTML=original4; 
    }

    else if (taipei.style.backgroundColor = "rgb(255, 164, 136)"){
      payvalue = (taipei_house*500)+500;
      payfor = window.alert("這是玩家2的土地，您需支付共" + payvalue + "!")
      original4 -= payvalue; 
      original2 += payvalue;       
      document.getElementById("original4").innerHTML=original4;
      document.getElementById("original2").innerHTML=original2; 
    }

    else if (taipei.style.backgroundColor = "rgb(187, 255, 0)"){
      payvalue = (taipei_house*500)+500;
      payfor = window.alert("這是玩家3的土地，您需支付共" + payvalue + "!")
      original4 -= payvalue;  
      original3 += payvalue;    
      document.getElementById("original4").innerHTML=original4;
      document.getElementById("original3").innerHTML=original3;
    }
  }
  
  else if (dot4.offsetLeft > keelung.offsetLeft && dot4.offsetLeft < taipei.offsetLeft && dot4.offsetTop > 549){
      if (keelung.style.backgroundColor == "white"){
        r = confirm("您要購買土地嗎？將會花費1000元");
      if(r){
        keelung.style.backgroundColor = "rgb(255, 255, 119)";
        original4 -= 1000;
        document.getElementById("original4").innerHTML=original4;
      }
    }
    
    else if (keelung.style.backgroundColor == "rgb(255, 255, 119)"){
    build = confirm("您要蓋房子嗎？將會花費500元");
      if(build && keelung_house < 5){
          keelung_house += 1;
          original4 -= 500;
          document.getElementById("keelung_house").innerHTML=keelung_house;
          document.getElementById("original4").innerHTML=original4;
        }
      else if(build && keelung_house == 5)
          window.alert("房子最多只能蓋5層！");
        }
    

    else if (keelung.style.backgroundColor == "rgb(119, 221, 255)"){
      payvalue = (keelung_house*500)+500;
      payfor = window.alert("這是玩家1的土地，您需支付共" + payvalue + "!")
      original4 -= payvalue; 
      original1 += payvalue;     
      document.getElementById("original1").innerHTML=original1;
      document.getElementById("original4").innerHTML=original4; 
    }

    else if (keelung.style.backgroundColor = "rgb(255, 164, 136)"){
      payvalue = (keelung_house*500)+500;
      payfor = window.alert("這是玩家2的土地，您需支付共" + payvalue + "!")
      original4 -= payvalue; 
      original2 += payvalue;       
      document.getElementById("original4").innerHTML=original4;
      document.getElementById("original2").innerHTML=original2; 
    }

    else if (keelung.style.backgroundColor = "rgb(187, 255, 0)"){
      payvalue = (keelung_house*500)+500;
      payfor = window.alert("這是玩家3的土地，您需支付共" + payvalue + "!")
      original4 -= payvalue;  
      original3 += payvalue;    
      document.getElementById("original4").innerHTML=original4;
      document.getElementById("original3").innerHTML=original3;
    }
  }
  
  else if  (dot4.offsetTop > yilan.offsetTop && dot4.offsetTop < playground3.offsetTop && dot4.offsetLeft <= 112){
      if (yilan.style.backgroundColor == "white"){
        r = confirm("您要購買土地嗎？將會花費1000元");
      if(r){
        yilan.style.backgroundColor = "rgb(255, 255, 119)";
        original4 -= 1000;
        document.getElementById("original4").innerHTML=original4;
      }
    }
    else if (yilan.style.backgroundColor == "rgb(255, 255, 119)"){
    build = confirm("您要蓋房子嗎？將會花費500元");
      if(build && yilan_house < 5){
          yilan_house += 1;
          original4 -= 500;
          document.getElementById("yilan_house").innerHTML=yilan_house;
          document.getElementById("original4").innerHTML=original4;
        }
      else if(build && yilan_house == 5)
          window.alert("房子最多只能蓋5層！");
        }
    

    else if (yilan.style.backgroundColor == "rgb(119, 221, 255)"){
      payvalue = (yilan_house*500)+500;
      payfor = window.alert("這是玩家1的土地，您需支付共" + payvalue + "!")
      original4 -= payvalue; 
      original1 += payvalue;     
      document.getElementById("original1").innerHTML=original1;
      document.getElementById("original4").innerHTML=original4; 
    }

    else if (yilan.style.backgroundColor = "rgb(255, 164, 136)"){
      payvalue = (yilan_house*500)+500;
      payfor = window.alert("這是玩家2的土地，您需支付共" + payvalue + "!")
      original4 -= payvalue; 
      original2 += payvalue;       
      document.getElementById("original4").innerHTML=original4;
      document.getElementById("original2").innerHTML=original2; 
    }

    else if (yilan.style.backgroundColor = "rgb(187, 255, 0)"){
      payvalue = (yilan_house*500)+500;
      payfor = window.alert("這是玩家3的土地，您需支付共" + payvalue + "!")
      original4 -= payvalue;  
      original3 += payvalue;    
      document.getElementById("original4").innerHTML=original4;
      document.getElementById("original3").innerHTML=original3;
    }
  }
    
    else if (dot4.offsetTop > taitung.offsetTop && dot4.offsetTop < yilan.offsetTop && dot4.offsetLeft <= 112){
      if (taitung.style.backgroundColor == "white"){
        r = confirm("您要購買土地嗎？將會花費1000元");
      if(r){
        taitung.style.backgroundColor = "rgb(255, 255, 119)";
        original4 -= 1000;
        document.getElementById("original4").innerHTML=original4;
      }
    }
    else if (taitung.style.backgroundColor == "rgb(255, 255, 119)"){
    build = confirm("您要蓋房子嗎？將會花費500元");
      if(build && taitung_house < 5){
          taitung_house += 1;
          original4 -= 500;
          document.getElementById("taitung_house").innerHTML=taitung_house;
          document.getElementById("original4").innerHTML=original4;
        }
      else if(build && taitung_house == 5)
          window.alert("房子最多只能蓋5層！");
        }
    

    else if (taitung.style.backgroundColor == "rgb(119, 221, 255)"){
      payvalue = (taitung_house*500)+500;
      payfor = window.alert("這是玩家1的土地，您需支付共" + payvalue + "!")
      original4 -= payvalue; 
      original1 += payvalue;     
      document.getElementById("original1").innerHTML=original1;
      document.getElementById("original4").innerHTML=original4; 
    }

    else if (taitung.style.backgroundColor = "rgb(255, 164, 136)"){
      payvalue = (taitung_house*500)+500;
      payfor = window.alert("這是玩家2的土地，您需支付共" + payvalue + "!")
      original4 -= payvalue; 
      original2 += payvalue;       
      document.getElementById("original4").innerHTML=original4;
      document.getElementById("original2").innerHTML=original2; 
    }

    else if (taitung.style.backgroundColor = "rgb(187, 255, 0)"){
      payvalue = (taitung_house*500)+500;
      payfor = window.alert("這是玩家3的土地，您需支付共" + payvalue + "!")
      original4 -= payvalue;  
      original3 += payvalue;    
      document.getElementById("original4").innerHTML=original4;
      document.getElementById("original3").innerHTML=original3;
    }
  }

    else if (dot4.offsetTop > chuban.offsetTop && dot4.offsetTop < taitung.offsetTop && dot4.offsetLeft <= 112){
      if (chuban.style.backgroundColor == "white"){
        r = confirm("您要購買土地嗎？將會花費1000元");
      if(r){
        chuban.style.backgroundColor = "rgb(255, 255, 119)";
        original4 -= 1000;
        document.getElementById("original4").innerHTML=original4;
      }
    }
    else if (chuban.style.backgroundColor == "rgb(255, 255, 119)"){
    build = confirm("您要蓋房子嗎？將會花費500元");
      if(build && chuban_house < 5){
          chuban_house += 1;
          original4 -= 500;
          document.getElementById("chuban_house").innerHTML=chuban_house;
          document.getElementById("original4").innerHTML=original4;
        }
      else if(build && chuban_house == 5)
          window.alert("房子最多只能蓋5層！");
        }
    

    else if (chuban.style.backgroundColor == "rgb(119, 221, 255)"){
      payvalue = (chuban_house*500)+500;
      payfor = window.alert("這是玩家1的土地，您需支付共" + payvalue + "!")
      original4 -= payvalue; 
      original1 += payvalue;     
      document.getElementById("original1").innerHTML=original1;
      document.getElementById("original4").innerHTML=original4; 
    }

    else if (chuban.style.backgroundColor = "rgb(255, 164, 136)"){
      payvalue = (chuban_house*500)+500;
      payfor = window.alert("這是玩家2的土地，您需支付共" + payvalue + "!")
      original4 -= payvalue; 
      original2 += payvalue;       
      document.getElementById("original4").innerHTML=original4;
      document.getElementById("original2").innerHTML=original2; 
    }

    else if (chuban.style.backgroundColor = "rgb(187, 255, 0)"){
      payvalue = (chuban_house*500)+500;
      payfor = window.alert("這是玩家3的土地，您需支付共" + payvalue + "!")
      original4 -= payvalue;  
      original3 += payvalue;    
      document.getElementById("original4").innerHTML=original4;
      document.getElementById("original3").innerHTML=original3;
    }
  }
 
  else if  (dot4.offsetTop > kenting.offsetTop && dot4.offsetTop < chuban.offsetTop && dot4.offsetLeft <= 112){
      if (kenting.style.backgroundColor == "white"){
        r = confirm("您要購買土地嗎？將會花費1000元");
      if(r){
        kenting.style.backgroundColor = "rgb(255, 255, 119)";
        original4 -= 1000;
        document.getElementById("original4").innerHTML=original4;
      }
    }
    else if (kenting.style.backgroundColor == "rgb(255, 255, 119)"){
    build = confirm("您要蓋房子嗎？將會花費500元");
      if(build && kenting_house < 5){
          kenting_house += 1;
          original4 -= 500;
          document.getElementById("kenting_house").innerHTML=kenting_house
          document.getElementById("original4").innerHTML=original4;
        }
      else if(build && kenting_house == 5)
          window.alert("房子最多只能蓋5層！");
        }
    

    else if (kenting.style.backgroundColor == "rgb(119, 221, 255)"){
      payvalue = (kenting_house*500)+500;
      payfor = window.alert("這是玩家1的土地，您需支付共" + payvalue + "!")
      original4 -= payvalue; 
      original1 += payvalue;     
      document.getElementById("original1").innerHTML=original1;
      document.getElementById("original4").innerHTML=original4; 
    }

    else if (kenting.style.backgroundColor = "rgb(255, 164, 136)"){
      payvalue = (kenting_house*500)+500;
      payfor = window.alert("這是玩家2的土地，您需支付共" + payvalue + "!")
      original4 -= payvalue; 
      original2 += payvalue;       
      document.getElementById("original4").innerHTML=original4;
      document.getElementById("original4").innerHTML=original2; 
    }

    else if (kenting.style.backgroundColor = "rgb(187, 255, 0)"){
      payvalue = (kenting_house*500)+500;
      payfor = window.alert("這是玩家3的土地，您需支付共" + payvalue + "!")
      original4 -= payvalue;  
      original3 += payvalue;    
      document.getElementById("original4").innerHTML=original4;
      document.getElementById("original3").innerHTML=original3;
    }
  }
}
  else if (original4 < 0)
    var bankruptcy = window.alert("您已破產！遊戲結束！");
}

window.addEventListener( "load", initial, false );
