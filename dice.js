// all about for dice changing to 1 to 6;
var random0=Math.ceil(Math.random()*6);
var random1=Math.ceil(Math.random()*6);

var dice0="images/dice"+random0+".png";
var dice1="images/dice"+random1+".png";

var source=document.querySelectorAll("img")[0];
source.setAttribute("src",dice0);
document.querySelectorAll("img")[1].setAttribute("src",dice1);
//
//now this for refresh me
if(random0>random1)
{
  document.querySelector("h1").innerHTML="Player 1 Wins! 	&#127937";
}
else if(random1>random0)
{
  document.querySelector("h1").innerHTML="Player 2 Wins! 	&#127937";
}
else
{
  document.querySelector("h1").innerHTML="Draw!";
}
function refreshPage() {
       // What do I put here?
       window.location.reload();
   }
