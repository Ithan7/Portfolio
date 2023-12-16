/*!
* Start Bootstrap - Grayscale v7.0.6 (https://startbootstrap.com/theme/grayscale)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-grayscale/blob/master/LICENSE)
*/
//
// Scripts
// 

window.addEventListener('DOMContentLoaded', event => {

    // Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }

    };

    // Shrink the navbar 
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);

    // Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            rootMargin: '0px 0px -40%',
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

});

    emailjs.init('service_3lopcto'); // Replace with your actual User ID


    document.getElementById('contactForm').addEventListener('submit', function(event) {
      event.preventDefault();



    name = document.getElementById('name').value,
    email = document.getElementById('email').value,
    message = document.getElementById('message').value


    emailjs
      .send(

        'service_3lopcto',

        'template_t39kaoc',

      {

        from_name: name,

        to_name: 'Ithan',

        from_email: email,

        to_email: 'ithan.portfolio@gmail.com',

        message: message,

      },

      'b63RnKkB7vfpWIZ-f',

    )

    .then(

      () => {


        alert('Thank you. I will get back to you as soon as possible.');



        setForm({

          name: '',

          email: '',

          message: '',

        });

      },

      (error) => {

        console.error(error);



        alert('Ahh, something went wrong. Please try again.');
        });
    });