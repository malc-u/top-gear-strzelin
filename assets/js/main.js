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


const form = document.querySelector('#contact-form');
const sender_name = document.querySelector('#name');
const from_email = document.querySelector('#email');
const msg = document.querySelector('#message');
const nobot = document.querySelector('#nobot');

form.addEventListener("submit", (e)=> {
  e.preventDefault();
  sendmail();
  
  
});

function sendmail() {
    
  emailjs.send("service_xdj3kik","template_18pps3g", {
    to_name: "Top Gear",
    from_name: sender_name.value,
    reply_to: from_email.avlue,
    message: msg.value,
  }).then((response)=> {
    if(response.status==200){
      alertSuccess();
      setTimeout(function(){ 
        refreshFields()
       }, 1000);

    } else {
      alertError();
    }
  }, (error)=>{
    alertError();
    console.log(error)
  })
}

function alertSuccess() {
  swal({
    title: "Dziękujemy!",
    text: "Twoja wiadomość została pomyślnie wysłana.",
    icon: "success",
    button: "OK!",
  });
}

function alertError() {
  swal({
    icon: "error",
    title: "Ups...",
    text: "Coś poszło nie tak! Spróbój ponownie później",
    button: "OK!",
  });
}


function refreshFields(){
  sender_name.value="";
  from_email.value="";
  msg.value="";
}


