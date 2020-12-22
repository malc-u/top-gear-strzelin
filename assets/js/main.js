// Function decreasing size of main top navbar when screen scrolled down
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    document.getElementById("wheel").style.maxHeight = "3rem";
  } else {
    document.getElementById("wheel").style.maxHeight = "7rem";
  }
}


// Navbar collapsing on click 
  $('.navbar-nav>li>a').on('click', function(){
    $('.navbar-collapse').collapse('hide');
});