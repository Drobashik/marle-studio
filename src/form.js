const formButton = document.querySelector('#form-btn');
const formBg = document.querySelector('.form__section');

const nameInput = document.getElementById('name');
const phoneInput = document.getElementById('phone');
const messageInput = document.getElementById('message');

const sendBtn = document.getElementById('send-btn');

emailjs.init('DAfXTVQpsFX_8MnQ_');

formButton.addEventListener('click', () => {
    sendBtn.disabled = false;
    sendBtn.textContent = 'Надіслати';

    formBg.classList.toggle('opened');
})

formBg.addEventListener('click', (event) => {
    if (event.target.className === 'form__section opened')
        formBg.classList.toggle('opened');
})

sendBtn.addEventListener('click', (event) => {
    event.preventDefault();

    if (!nameInput.value || !phoneInput.value) return;

    const params = {
        name: nameInput.value,
        phone: phoneInput.value,
        message: messageInput.value,
    }

    sendBtn.textContent = 'Надсилається...'
    sendBtn.disabled = true;

    emailjs.send("service_4l0e1vi", "template_2eqbael", params)
    .then(() => {
        nameInput.value = '';
        phoneInput.value = '';
        messageInput.value = '';
        sendBtn.disabled = true;
        sendBtn.textContent = 'Надіслано';
    });
})