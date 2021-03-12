const burgerMenu = document.querySelector('.icon-menu')

burgerMenu.addEventListener('click', () => {
  const headerMenu = document.querySelector('.header__menu')
  if (headerMenu.classList.contains('header__menu--closed')) {
    burgerMenu.innerHTML = 'close'
    headerMenu.classList.remove('header__menu--closed')
    headerMenu.classList.add('header__menu--open')    
  } else {
    headerMenu.classList.remove('header__menu--open')
    headerMenu.classList.add('header__menu--closed')
    burgerMenu.innerHTML = 'menu'
  }
})