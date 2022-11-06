/*sammankallade alla element i ett (main element) för att
kan göra dem interaktiv och få dem att röra sig med (scroll).*/ 
let stars = document.getElementById("clouds");
let sun = document.getElementById("sun");
let birds = document.getElementById("birds");

//en event (window.onscroll) för att utföra omrörningsfunktionen.
window.onscroll = function(){
  // ställer in en variabel vars värde är (scrollY) property.
 let value = scrollY;
 //röra elementen (bilderna) genom (.style) när jag flyttade rullningen.
 //ge fart med multiplicerar värdet
 clouds.style.left = value * 1 + "px";//från vänster till höger 
 sun.style.top = value * 2 + "px";
 sun.style.left = value * 6 + "px";// från toppen till botten
 sun.style.rotate = value * 600 + "px";
 birds.style.left = value * 4 + "px";
 //från vänster till höger
 /*if-statement, så att tillståndet är när scrollY>= 127,
  vilket är platsen för månens försvinnande,
   den kommer att ändras till dagsljus*/
 if(scrollY>= 127){
  document.querySelector(".main").style.background =
   "linear-gradient(#08528a,#87c6f7)"
 }
 //gå tillbaka till sin grundfärg (natt) när drar upp scroll
 else{
  document.querySelector(".main").style.background =
   "linear-gradient(#08528a,#87c6f7)"
 }
}
/*lagt till två länk till <button> via (window.location.href)
 så att när användaren klickar på den går han till nästa sida*/ 
function goNext() {
 window.location.href = "page1.html";
}
function goNext2(){
 window.location.href = "page2.html";
}
/* lagt till tre länk till <button> för att
gå till hans mest kända filmer på YouTube.*/
function movie(){
 window.location.href = "https://www.youtube.com/watch?v=-agiAnRYrrU";
}
function movie2(){
 window.location.href =
  "https://www.youtube.com/watch?v=xELHGR_ur0Q&t=11s";
}
function movie3(){
 window.location.href = "https://www.youtube.com/watch?v=bufHojkoGtw";
}

