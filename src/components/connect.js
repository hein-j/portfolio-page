import '../styles/connect.css';

const mailSpan = document.querySelector('.mail-container > span');

const address = 'hein.jeong' + '@' + 'gmai' + 'l.com';

const link = 'mai' + 'lto:' + address;

const toggleEmail = () => {
  mailSpan.innerHTML = `<a href=${link}>${address}</a>`
  mailSpan.classList.toggle('expanded-email');
}

document.querySelector('.mail-container > input').addEventListener('click', toggleEmail)