

$(document).ready(function() {
    $('.submit').click(function(event) {
        console.log('button clicked');

        var email = $('.email').val();
        var subject = $('.subject').val();
        var message = $('.message').val();
        var statusElnt = $('.status');
        statusElnt.empty();

        if (email.length > 5 && email.includes ('@') && email.includes('.')) {
            statusElnt.append('<div> Email is Valid</div>');
            statusElnt.classList.add('valid');
            
        } else {
            event.preventDefault();
            statusElnt.append('<div> Enter a valid email </div>');
            statusElnt.classList.add('invalid')
        }
        if (subject.length > 2) {
            statusElnt.append('<div> Subject is Valid</div>');
            statusElnt.classList.add('valid');
        } else {
            event.preventDefault();
            statusElnt.append('<div> Enter a valid Subject </div>');
            statusElnt.classList.add('invalid')
        }
        if (message.length > 12) {
            statusElnt.append('<div> Message is Valid</div>');
            statusElnt.classList.add('valid');
        } else {
            event.preventDefault();
            statusElnt.append('<div> Message is too short</div>');
            statusElnt.classList.add('invalid')
        }
    })
});


const body = document.querySelector('body');
const menuCheckbox = document.querySelector('.navigation__checkbox');
const navButton = document.querySelector('.navigation__button');
 
const scroll = window.innerWidth - document.documentElement.clientWidth;
 
menuCheckbox.addEventListener('change', () => {
  if (!body.hasAttribute('style')) {
    body.setAttribute('style', `margin-right: ${scroll}px`);
  } else {
    body.removeAttribute('style');
  }
 
  body.classList.toggle('u-hide-overflow-y');
 
  const newPos = `right: calc(6rem + ${scroll}px);`;
 
  if (!navButton.hasAttribute('style')) {
    navButton.setAttribute('style', newPos);
  } else {
    navButton.removeAttribute('style');
  }
});

