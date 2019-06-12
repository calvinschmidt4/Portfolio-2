// window.onresize = function(){ location.reload(); }
w = document.documentElement.clientWidth || document.body.clientWidth || window.innerWidth;
var targetWidth = 900;

if ( w <= targetWidth) {     

  document.getElementById("togglemenu").onclick =
    function toggle_visibility() {
      var m = document.getElementById("hide");
      if(m.style.display == 'block')
          m.style.display = 'none';
      else
          m.style.display = 'block';

      var s = document.getElementById("hamburger");
      if(s.style.display == 'none')
          s.style.display = 'block';
      else
          s.style.display = 'none';  
      
      var d = document.getElementById("x");
      if(d.style.display == 'block')
          d.style.display = 'none';
      else
          d.style.display = 'block';
    }

  document.getElementById("toggle").onclick =
    function toggle_visibility(hide) {
      var l = document.getElementById("hide");
      if(l.style.display == 'block')
          l.style.display = 'none';
      else
          l.style.display = 'block';
          
      var s = document.getElementById("hamburger");
      if(s.style.display == 'none')
          s.style.display = 'block';
      else
          s.style.display = 'none';  
      
      var d = document.getElementById("x");
      if(d.style.display == 'block')
          d.style.display = 'none';
      else
          d.style.display = 'block';
    }    
    

  document.getElementById("toggletwee").onclick =
    function toggle_visibility(hide) {
      var l = document.getElementById("hide");
      if(l.style.display == 'block')
          l.style.display = 'none';
      else
          l.style.display = 'block';
          
      var s = document.getElementById("hamburger");
      if(s.style.display == 'none')
          s.style.display = 'block';
      else
          s.style.display = 'none';  
      
      var d = document.getElementById("x");
      if(d.style.display == 'block')
          d.style.display = 'none';
      else
          d.style.display = 'block';
    }    
   

  document.getElementById("toggledrie").onclick =
    function toggle_visibility(hide) {
      var l = document.getElementById("hide");
      if(l.style.display == 'block')
          l.style.display = 'none';
      else
          l.style.display = 'block';
          
      var s = document.getElementById("hamburger");
      if(s.style.display == 'none')
          s.style.display = 'block';
      else
          s.style.display = 'none';  
      
      var d = document.getElementById("x");
      if(d.style.display == 'block')
          d.style.display = 'none';
      else
          d.style.display = 'block';
    }    
}   

window.onresize = function(){ 
    
 }

// var slideIndex = 1;
// showDivs(slideIndex);

// function plusDivs(n) {
//   showDivs(slideIndex += n);
// }

// function showDivs(n) {
//   var i;
//   var x = document.getElementsByClassName("mySlides");
//   if (n > x.length) {slideIndex = 1}
//   if (n < 1) {slideIndex = x.length}
//   for (i = 0; i < x.length; i++) {
//     x[i].style.display = "none";  
//   }
//   x[slideIndex-1].style.display = "block";  
// }