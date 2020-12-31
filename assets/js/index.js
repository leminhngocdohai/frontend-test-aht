// Bar

function myMenu() {
  var x = document.getElementById("myMenuItem");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}

function myClose() {
  var x = document.getElementById("myMenuItem");
  x.style.display = "none";
}


// Slide

var slideIndex = 1;
showDivs(slideIndex, k);

function plusDivs(n, k) {
  showDivs(slideIndex += n, k);
}


function showDivs(n, k) {
  var i;
  var x = document.getElementsByClassName("mySlides-" + k);
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";  
  }
  x[slideIndex-1].style.display = "block";  
}

