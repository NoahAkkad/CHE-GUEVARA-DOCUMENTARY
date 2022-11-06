let stars = document.getElementById("clouds");
let sun = document.getElementById("sun");
let birds = document.getElementById("birds");
window.onscroll = function(){
 let value = scrollY;
 clouds.style.left = value * 0.5 + "px";
 sun.style.top = value * 1 + "px";
 sun.style.left = value * 6 + "px";
 sun.style.rotate = value * 600 + "px";
 birds.style.left = value * 4 + "px";
 if(scrollY>= 127){
  document.querySelector(".main").style.background =
   "linear-gradient(318deg,#08528a,#2b72a9,#08528a)"
 }
 else{
  document.querySelector(".main").style.background =
   "linear-gradient(318deg,#08528a,#87c6f7)"
 }
} 
function goNext() {
 window.location.href = "page1.html";
}
function goNext2(){
 window.location.href = "page2.html";
}
function movie(){
 window.open("https://www.youtube.com/watch?v=-agiAnRYrrU", "_blank");
}
function movie2(){
  window.open("https://www.youtube.com/watch?v=xELHGR_ur0Q", "_blank");
}
function movie3(){
 window.open("https://www.youtube.com/watch?v=bufHojkoGtw", "_blank");
}

