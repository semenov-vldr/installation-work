// Подключен axios.min.js в шаблоне
const TOKEN = "6439049822:AAHuQyECo9HqHDpzRcj9qwrt384oisaNJYY";
const CHAT_ID = "-1002094796235";
const URL_API = `https://api.telegram.org/bot${ TOKEN }/sendMessage`;

const feedback = document.getElementById("feedback");

if (feedback) {
  feedback.addEventListener('submit', sendMsgTelegram);

  function submitQuestion (submit = true) {
    const feedbackContainer = feedback.querySelector(".feedback__container");
    const messageSuccess = feedback.querySelector(".body-success");
    const messageError = feedback.querySelector(".body-error");

    let alert;
    submit ? alert = messageSuccess : alert = messageError;
    feedbackContainer.classList.add("hidden");
    alert.classList.add("visible");

    setTimeout(() => {
      feedbackContainer.classList.remove("hidden");
      alert.classList.remove("visible");
    }, 5000);
  };


  function sendMsgTelegram (evt) {
    evt.preventDefault();
    const form = evt.target;

    let message = `<b>Заявка с сайта ООО Система - Монтажные работы</b>\n`;

    message += `<b>Имя отправителя:</b> ${ form.name.value }\n`;
    message += `<b>Телефон:</b> ${ form.phone.value }\n`;

    axios.post(URL_API, {
      chat_id: CHAT_ID,
      parse_mode: 'html',
      text: message,
    })
      .then(() => {
        submitQuestion();
      })
      .catch((err) => {
        console.warn(err);
        submitQuestion(false);
      })
    form.reset();
  };

}

