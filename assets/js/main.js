function jumpToTop() {
    window.scroll({ 
    top: 0, 
    behavior: "smooth" 
    });        
}

function jumpToAbout() {
    window.scroll({ 
        top: 520, 
        behavior: "smooth" 
        });    
}

function jumpToServices() {
    window.scroll({ 
        top: 940, 
        behavior: "smooth" 
        });    
}


window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    document.getElementById("wheel").style.maxHeight = "3rem";
  } else {
    document.getElementById("wheel").style.maxHeight = "7rem";

  }
}
