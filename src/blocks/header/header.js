const header = document.querySelector('header.header');

if (header) {
  window.addEventListener('scroll', () => {
    header.classList.toggle('js-scroll', window.scrollY > 0);
  });
}


