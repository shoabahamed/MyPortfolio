// for menubar
const sideMenu = document.querySelector('.sidemenu');

function openMenu(){
  sideMenu.style.right = "0";
}

function closeMenu(){
  sideMenu.style.right = "-500px";
}

// for contact form
(function() {
        // https://dashboard.emailjs.com/admin/account
        emailjs.init({
          publicKey: "OzHRXsirDSh5ptb3I",
        });
    })();

    const msg = document.getElementById('msg');
    window.onload = function() {
        form = document.getElementById('contact-form');
        document.getElementById('contact-form').addEventListener('submit', function(event) {
            event.preventDefault();
            emailjs.sendForm('contact_service', 'contact_form', this)
                .then(() => {
                    msg.innerHTML = 'Email send successfully';
                    msg.style.visibility = 'visible';
                    setTimeout(function(){
                      msg.style.visibility = 'hidden';
                    }, 5000);
                    form.reset();
                    console.log('SUCCESS!');
                }, (error) => {
                  msg.style.color = 'red';
                  msg.innerHTML = 'Failure';
                  msg.style.visibility = 'visible';
                  setTimeout(function(){
                    msg.style.visibility = 'hidden';
                  }, 5000);
                  msg.style.color = '#61b752';
                  console.log('FAILED...', error);
                });
        });
    }