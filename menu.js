  // window.onresize = function(){ location.reload(); }
  w = document.documentElement.clientWidth || document.body.clientWidth || window.innerWidth;
  var targetWidth = 600;
  if ( w <= targetWidth) {     
  //Add your javascript for screens wider than or equal to 768 here
  document.getElementById("togglemenu").onclick =
  function toggle_visibility(hide) {
         var e = document.getElementById("hide");
         if(e.style.display == 'block')
            e.style.display = 'none';
         else
            e.style.display = 'block';
      }

  document.getElementById("toggle").onclick =
  function toggle_visibility(hide) {
         var e = document.getElementById("hide");
         if(e.style.display == 'block')
            e.style.display = 'none';
         else
            e.style.display = 'block';
      }    
  }      