  let navMenu = document.querySelector('.nav-menu');
  let navToggle = document.querySelector('.nav-menu__toggle');

  navToggle.addEventListener('click', function() {
    if (navMenu.classList.contains('nav-menu--closed')) {
    navMenu.classList.remove('nav-menu--closed');
  navMenu.classList.add('nav-menu--opened');
    } else {
    navMenu.classList.add('nav-menu--closed');
  navMenu.classList.remove('nav-menu--opened');
    }
  });
