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


//1

var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("mySlides-1");
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
     x[i].style.display = "none";  
  }
  x[slideIndex-1].style.display = "block";  
}

//2

showDivs2(slideIndex);

function plusDivs2(n) {
  showDivs2(slideIndex += n);
}

function showDivs2(n) {
  var i;
  var x = document.getElementsByClassName("mySlides-2");
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
     x[i].style.display = "none";  
  }
  x[slideIndex-1].style.display = "block";  
}

//3

showDivs3(slideIndex);

function plusDivs3(n) {
  showDivs3(slideIndex += n);
}

function showDivs3(n) {
  var i;
  var x = document.getElementsByClassName("mySlides-3");
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
     x[i].style.display = "none";  
  }
  x[slideIndex-1].style.display = "block";  
}

//4

showDivs4(slideIndex);

function plusDivs4(n) {
  showDivs4(slideIndex += n);
}

function showDivs4(n) {
  var i;
  var x = document.getElementsByClassName("mySlides-4");
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
     x[i].style.display = "none";  
  }
  x[slideIndex-1].style.display = "block";  
}

//5

showDivs5(slideIndex);

function plusDivs5(n) {
  showDivs5(slideIndex += n);
}

function showDivs5(n) {
  var i;
  var x = document.getElementsByClassName("mySlides-5");
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
     x[i].style.display = "none";  
  }
  x[slideIndex-1].style.display = "block";  
}

//6

showDivs6(slideIndex);

function plusDivs6(n) {
  showDivs6(slideIndex += n);
}

function showDivs6(n) {
  var i;
  var x = document.getElementsByClassName("mySlides-6");
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
     x[i].style.display = "none";  
  }
  x[slideIndex-1].style.display = "block";  
}

//7

showDivs7(slideIndex);

function plusDivs7(n) {
  showDivs7(slideIndex += n);
}

function showDivs7(n) {
  var i;
  var x = document.getElementsByClassName("mySlides-7");
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
     x[i].style.display = "none";  
  }
  x[slideIndex-1].style.display = "block";  
}

//8

showDivs8(slideIndex);

function plusDivs8(n) {
  showDivs8(slideIndex += n);
}

function showDivs8(n) {
  var i;
  var x = document.getElementsByClassName("mySlides-8");
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
     x[i].style.display = "none";  
  }
  x[slideIndex-1].style.display = "block";  
}