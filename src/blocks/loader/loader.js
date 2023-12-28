const loader = document.getElementById('loader');

function hideLoader () {
  loader.classList.add('hide');
  setTimeout(() => {
    loader.remove();
  }, 500)
};

if (loader) window.addEventListener('load', hideLoader);