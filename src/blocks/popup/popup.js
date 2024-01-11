const popup = document.getElementById("popup");

if (popup) {

  popup.addEventListener('submit', sendMsgTelegram);

  const btnsOpen = document.querySelectorAll(".popup-open");
  const closePopup = popup.querySelector(".popup__close");
  const formPopup = popup.querySelector("form");

  function popupClose () {
    popup.classList.remove("js-popup-open");
    unblockScrollBody();
    formPopup.reset();
  }

  btnsOpen.forEach(btnOpen => {
    btnOpen.addEventListener("click", () => {
      popup.classList.add("js-popup-open");
      blockScrollBody();
    });
  });

  closePopup.addEventListener("click", popupClose);

  document.body.addEventListener('click', (evt) => {
    if (evt.target === popup) popupClose();
  });


function submitPopup (submit = true) {
  const popupBody = popup.querySelector(".popup__body");
  const messageSuccess = popup.querySelector(".body-success");
  const messageError = popup.querySelector(".body-error");

  let alert;
  submit ? alert = messageSuccess : alert = messageError;
  popupBody.classList.add("hidden");
  alert.classList.add("visible");

  setTimeout(() => {
    alert.classList.remove("visible");
    popupClose();
    popupBody.classList.remove("hidden");
  }, 5000);
};


function sendMsgTelegram (evt) {

  evt.preventDefault();
  const form = evt.target;

  let message = `<b>Заявка с сайта ООО Система - Монтажные работы</b>\n`;

  message += `<b>Имя отправителя:</b> ${ form.name.value }\n`;
  message += `<b>Телефон:</b> ${ form.phone.value }\n`;
  if (form.email.value) {
    message += `<b>Почта:</b> ${ form.email.value }\n`;
  }


  axios.post(URL_API, {
    chat_id: CHAT_ID,
    parse_mode: 'html',
    text: message,
  })
    .then(() => {
      submitPopup();
    })
    .catch((err) => {
      console.warn(err);
      submitPopup(false);
    })
  form.reset();
};


}