import '../styles/tools.css';

const expandAWSbutton = document.querySelector('.expand-aws-button');
const awsDetails = document.querySelector('.aws-details');

const toggleAWSDetails = () => {
  if (expandAWSbutton.innerText === '+') {
    expandAWSbutton.innerText = '—';
  } else {
    expandAWSbutton.innerText = '+'
  }
  awsDetails.classList.toggle('expanded-aws-details');
}

document.querySelector('.expand-aws').addEventListener('click', toggleAWSDetails)