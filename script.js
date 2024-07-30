function myFunction() {
    var x = document.getElementById("mySideBar");
    if (x.className.indexOf("w3-show") == -1) {
      x.className += " w3-show";
    } else { 
      x.className = x.className.replace(" w3-show", "");
    }
  }
  
  var slideIndex = 1;
  showDivs(slideIndex);
  
  function plusDivs(n) {
    showDivs(slideIndex += n);
  }
  
  function currentDiv(n) {
    showDivs(slideIndex = n);
  }
  
  function showDivs(n) {
    var i;
    var x = document.getElementsByClassName("mySlides");
    var captions = document.getElementsByClassName("caption"); // Get all captions
    var dots = document.getElementsByClassName("demo");
    if (n > x.length) {slideIndex = 1}  
    if (n < 1) {slideIndex = x.length}

    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none"; 
      captions[i].style.display = "none"; // Hide all captions 
    }

    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace("w3-teal", "");
    }
    
    x[slideIndex-1].style.display = "block";  
    dots[slideIndex-1].className += " w3-teal";
    captions[slideIndex-1].style.display = "block"; //corresponding caption

  }