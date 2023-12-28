// const header = document.querySelector('header.header');
//
// if (header) {
//
//   const menu = header.querySelector('.header__nav');
//   const burger = header.querySelector('.header__burger');
//   const menuClose = header.querySelector('.header__nav-close');
//   const navLinks = header.querySelectorAll(".header__nav-link");
//   const menuActiveClass = "js-menu-open";
//
//   function closeMobileMenu () {
//     menu.classList.remove(menuActiveClass);
//     unblockScrollBody();
//     header.classList.remove(menuActiveClass);
//   };
//
//   burger.addEventListener('click', () => {
//     header.classList.add(menuActiveClass);
//     menu.classList.add(menuActiveClass);
//     blockScrollBody();
//   });
//
//   menuClose.addEventListener('click', closeMobileMenu);
//
//   navLinks.forEach(navLink => {
//     navLink.addEventListener("click", closeMobileMenu)
//   });
// }
