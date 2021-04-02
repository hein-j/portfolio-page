import '../styles/connect.css';

const toggleEmail = () => {
  document.querySelector('.mail-container > span').classList.toggle('expanded-email');
}

document.querySelector('.mail-container > input').addEventListener('click', toggleEmail)