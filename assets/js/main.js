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




//EmailJS script
const submit = document.querySelector('#contact-btn');
const contactForm = document.querySelector('#contact-form');

submit.addEventListener("click", sendmail);

function sendmail() {
  let name = contactForm.name.value;
  let from_email = contactForm.email.value;
  let msg = contactForm.message.value;
  
  emailjs.send("service_xdj3kik", "template_18pps3g", {
    to_name: "Top Gear",
    from_name: name,
    from_email: from_email,
    message: msg,
  }).then((response)=> {
    alert("success")
    console.log(response, response.status)
  }, (error)=>{
    alert(error)
  });
}
