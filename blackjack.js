var cards=["2.png","3.png","4.png","5.png","6.png","7.png","8.png","9.png","10.png","a.png","j.png","k.png","q.png"];
var p1c=document.querySelector(".p1cardimg")
var p2c= document.querySelector(".p2cardimg")
var swish= document.getElementById("swish")
var p1score=document.querySelector("#p1score")
var p2score=document.querySelector("#p2score")
var fin= document.querySelector("#finalresult")
var y=0;
var z=0;
var m=0;
var p1s=0;
var p2s=0;
var fins1=0;
var fins2=0;
var d=0;
var aud1=new Audio("static/sound/swish.m4a");
var aud2=new Audio("static/sound/cash.mp3");
var aud3 = new Audio("static/sound/aww.mp3");
function random()
{
   var x=Math.floor(Math.random()*13);
   var img= document.createElement("img");
   aud1.play();
   img.setAttribute("src","static/cards/"+cards[x]);
   img.setAttribute("id","dd");
   if(m%2==0){
   p1c.appendChild(img);
   p1s=p1addscore(img)
   return console.log("0")}
   console.log(m)
   if(m%2!=0){
   p2c.appendChild(img);
   p2s=p2addscore(img)
   wincheck(p1s,p2s);
   return console.log("0");
 }
}
function p1addscore(img) {
    if (img.src=="file:///D:/Java%20Script%20Projects/blackjack/static/cards/2.png"){
      y=y+2
    }
    if (img.src=="file:///D:/Java%20Script%20Projects/blackjack/static/cards/3.png"){
      y=y+3
    }
    if (img.src=="file:///D:/Java%20Script%20Projects/blackjack/static/cards/4.png"){
      y=y+4
    }
    if (img.src=="file:///D:/Java%20Script%20Projects/blackjack/static/cards/5.png"){
      y=y+5
    }
    if (img.src=="file:///D:/Java%20Script%20Projects/blackjack/static/cards/6.png"){
      y=y+6
    }
    if (img.src=="file:///D:/Java%20Script%20Projects/blackjack/static/cards/7.png"){
      y=y+7
    }
    if (img.src=="file:///D:/Java%20Script%20Projects/blackjack/static/cards/8.png"){
      y=y+8
    }
    if (img.src=="file:///D:/Java%20Script%20Projects/blackjack/static/cards/9.png"){
      y=y+9
    }
    if (img.src=="file:///D:/Java%20Script%20Projects/blackjack/static/cards/10.png"){
      y=y+10
    }
    if (img.src=="file:///D:/Java%20Script%20Projects/blackjack/static/cards/j.png"){
      y=y+8
    }
    if (img.src=="file:///D:/Java%20Script%20Projects/blackjack/static/cards/k.png"){
      y=y+9
    }
    if (img.src=="file:///D:/Java%20Script%20Projects/blackjack/static/cards/a.png"){
      y=y+11
    }
    if (img.src=="file:///D:/Java%20Script%20Projects/blackjack/static/cards/q.png"){
      y=y+7
    }
    if(y>21){
    fin.innerHTML="Player2 Won";
    aud2.play();
    p1score.innerHTML=y;
    m=m+1
    return y}
    if(y<=21){
    p1score.innerHTML=y;
    return y;
  }

}
function p2addscore(img) {
    if (img.src=="file:///D:/Java%20Script%20Projects/blackjack/static/cards/2.png"){
      z=z+2
    }
    if (img.src=="file:///D:/Java%20Script%20Projects/blackjack/static/cards/3.png"){
      z=z+3
    }
    if (img.src=="file:///D:/Java%20Script%20Projects/blackjack/static/cards/4.png"){
      z=z+4
    }
    if (img.src=="file:///D:/Java%20Script%20Projects/blackjack/static/cards/5.png"){
      z=z+5
    }
    if (img.src=="file:///D:/Java%20Script%20Projects/blackjack/static/cards/6.png"){
      z=z+6
    }
    if (img.src=="file:///D:/Java%20Script%20Projects/blackjack/static/cards/7.png"){
      z=z+7
    }
    if (img.src=="file:///D:/Java%20Script%20Projects/blackjack/static/cards/8.png"){
      z=z+8
    }
    if (img.src=="file:///D:/Java%20Script%20Projects/blackjack/static/cards/9.png"){
      z=z+9
    }
    if (img.src=="file:///D:/Java%20Script%20Projects/blackjack/static/cards/10.png"){
    z=z+10
    }
    if (img.src=="file:///D:/Java%20Script%20Projects/blackjack/static/cards/j.png"){
      z=z+8
    }
    if (img.src=="file:///D:/Java%20Script%20Projects/blackjack/static/cards/k.png"){
      z=z+9
    }
    if (img.src=="file:///D:/Java%20Script%20Projects/blackjack/static/cards/a.png"){
      z=z+11
    }
    if (img.src=="file:///D:/Java%20Script%20Projects/blackjack/static/cards/q.png"){
      z=z+7
    }
    if(z>21){
    fin.innerHTML="Player1 Won";
    p2score.innerHTML=z;
    aud2.play()
    m=m+1;
    return z}
    if(z<=21){
    p2score.innerHTML=z;
    return z;
  }

}
function hold(){
  m+=1;
  if(p1s==p2s&&p1s!=0){
    fin.innerHTML="Draw";
    aud3.play()
  }
  if(p1s>p2s && p2s!=0){
    fin.innerHTML="Player1 Won"
    aud2.play()
  }
  return m;
}
function wincheck(p1s,p2s){
  if(p1s==21&&p2s==21){
    aud3.play();
    return fin.innerHTML="Draw"
  }
  if(p2s>21){
    aud2.play()
    return fin.innerHTML="Player1 Won"
  }
    if(21-p1s>21-p2s){
      aud2.play()
      return fin.innerHTML="Player2 Won"

    }
}
function playagain(){
   if(fin.innerHTML=="Player1 Won"){
     fins1=fins1+1;
     document.getElementById("p1w").innerText=fins1;
   }
   if(fin.innerHTML=="Player2 Won"){
     fins2=fins2+1;
     document.getElementById("p2w").innerText = fins2;
   }
   if(fin.innerHTML=="Draw"){
     d=d+1;
     document.getElementById("d1").innerText = d;
     document.getElementById("d2").innerText = d;
   }

   var ig=document.querySelectorAll("img")
   for(i=0;i<ig.length;i++)
   {
     ig[i].remove();
   }
   p1score.innerHTML=0;
   p2score.innerHTML=0;
   fin.innerHTML="Let's Play"
   y=0;
   z=0;
   m=0;
   p1s=0;
   p2s=0;
   return y,z,m,p1s,p2s;
}
