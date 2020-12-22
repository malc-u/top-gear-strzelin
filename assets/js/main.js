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


/*

EmailJS script to be completed


const contactForm = document.querySelector('#contact-form');

contactForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const data = {
        service_id: 'YOUR_SERVICE_ID',,
        template_id: 'YOUR_TEMPLATE_ID',
        user_id: 'YOUR_USER_ID',
        template_params: {
            "name": contactForm.name.value,
            "email": contactForm.email.value,
            "message": contactForm.message.value
        }
    };

    $.ajax('https://api.emailjs.com/api/v1.0/email/send', {
        type: 'POST',
        data: JSON.stringify(data),
        contentType: 'application/json'
    }).done(function () {
        $('input').val('');
        $('textarea').val('');
        alert('Your email has been sent successfully!');
        window.location.reload(true); 
    }).fail(function (error) {
        console.log('Oops... ' + JSON.stringify(error));
        alert('Oops something went wrong, please try again');
    });
});
*/