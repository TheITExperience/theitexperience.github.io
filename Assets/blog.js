// Used to toggle the menu on small screens when clicking on the menu button
function myFunction() {
  var x = document.getElementById("navDemo");
  if (x.className.indexOf("w3-show") == -1) {
    x.className += " w3-show";
  } else { 
    x.className = x.className.replace(" w3-show", "");
  }
}

document.onkeydown = function(e) {
    if(e.keyCode == 123) {
     return false;
    }
    if(e.ctrlKey && e.shiftKey && e.keyCode == 'I'.charCodeAt(0)){
     return false;
    }
    if(e.ctrlKey && e.shiftKey && e.keyCode == 'J'.charCodeAt(0)){
     return false;
    }
    if(e.ctrlKey && e.keyCode == 'U'.charCodeAt(0)){
     return false;
    }

    if(e.ctrlKey && e.shiftKey && e.keyCode == 'C'.charCodeAt(0)){
     return false;
    }      
 }

 function bigImg(x) {
    x.style.height = "64px";
    x.style.width = "64px";
  }
  
  function normalImg(x) {
    x.style.height = "32px";
    x.style.width = "32px";
  }


  function openMenu(evt, menuName) {
    var i, x, tablinks;
    x = document.getElementsByClassName("menu");
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablink");
    for (i = 0; i < x.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" w3-dark-grey", "");
    }
    document.getElementById(menuName).style.display = "block";
    evt.currentTarget.firstElementChild.className += " w3-dark-grey";
  }
  document.getElementById("myLink").click();




        function display_ct5() {
        var x = new Date()
        var ampm = x.getHours( ) >= 12 ? ' PM' : ' AM';
        
        var x1=x.getMonth() + 1+ "/" + x.getDate() + "/" + x.getFullYear(); 
        x1 = x1 + " - " +  x.getHours( )+ ":" +  x.getMinutes() + ":" +  x.getSeconds() + ":" + ampm;
        document.getElementById('ct5').innerHTML = x1;
        display_c5();
         }
         function display_c5(){
        var refresh=1000; // Refresh rate in milli seconds
        mytime=setTimeout('display_ct5()',refresh)
        }
        display_c5()
       



  
