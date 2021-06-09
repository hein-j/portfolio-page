import '../styles/work.css';
import spring from '../assets/videos/spring.mp4';
import summer from '../assets/videos/summer.mp4';
import fall from '../assets/videos/fall.mp4';
import winter from '../assets/videos/winter.mp4';
import github from '../assets/icons/github.svg';
import website from '../assets/icons/website.svg';

const icons = {
  github: {
    img: github,
    alt: 'github'
  },
  website: {
    img: website,
    alt: 'website'
  }
}

const makeIcon = (iconObj, url) => {
  return `<a target="_blank" rel="noreferrer" href=${url}><img src=${iconObj.img} alt=${iconObj.alt}></a>`
}

const content = [
  {
    class: 'spring',
    video: spring,
    description: 'Conceptualized by a psychologist, Hero’s Journey Interactive is a multimedia application serving clinical and research purposes. I played key roles in development and single-handedly deployed to the cloud.',
    icons: 'Website launching soon!',
    stack: 'Angular, Node.js (Express), Postgres, AWS'
  },
  {
    class: 'voronoi',
    video: summer,
    description: 'Built at the request of an ophthalmological researcher, this web app generates the Voronoi diagram of a given set of coordinates and performs statistical analysis on the areas of the resulting polygons.',
    icons: `${makeIcon(icons.website, 'https://voronoianalyzer.com/')} ${makeIcon(icons.github, 'https://github.com/hein-j/voronoi-analyzer')}`,
    stack: 'React, Sass, D3.js'
  },
  {
    class: 'ayurveda',
    video: fall,
    description: 'Ayurveda is a system of traditional medicine with roots in ancient India. This REST API provides information on what it says about specific food items, so that end users can make dietary choices informed by ayurveda.',
    icons: `${makeIcon(icons.website, 'https://doc.ayurvedaapi.com/')} ${makeIcon(icons.github, 'https://github.com/hein-j/ayurveda-api')}`,
    stack: 'Node.js (Express), MongoDB, Digital Ocean'
  },
  {
    class: 'reddit',
    video: winter,
    description: 'Ever wonder how a subreddit feels about a certain subject? This script can provide insight. Input the name of a subreddit and a key word/phrase to view bar plot representations of the sentiment analysis.',
    icons: `${makeIcon(icons.github, 'https://github.com/hein-j/reddit-sentiment-analysis')}`,
    stack: 'Python3, NLTK, PRAW'
  }
]

Number.prototype.mod = function() {
  const n = content.length;
  return ((this%n)+n)%n;
};

const sliderFrame = document.querySelector(".slider-frame");

const buttons = [... document.querySelectorAll(".slider-button-container")];

const toggleButtons = () => {
  buttons.forEach((button) => button.classList.toggle('disabled'))
}

const makeSlide = (index) => {
  const item = content[index];
  let slide = document.createElement('div');
  slide.classList.add('slide', item.class, 'init-fade');
  slide.innerHTML = 
    `<video muted autoplay loop playsinline>` +
      `<source src=${item.video} type="video/mp4">` +
      `Sorry, your browser does not support embedded videos` +
    `</video>` +
    `<div class="work-copy">` +
      `<p class="description-copy">${item.description}</p>` +
      `<div class="work-icon-container">${item.icons}</div>` +
      `<p class="stack-copy">${item.stack}</p>` +
    `</div>`

  return slide;
}

// actual transition duration plus buffer
const Transition = 300 + 100;

let currIndex = 0;

const change = (direction) => {
  toggleButtons();
  if (direction === 'previous') {
    currIndex = (currIndex - 1).mod();
  } else if (direction === 'next') {
    currIndex = (currIndex + 1).mod();
  }
  let slide = makeSlide(currIndex);
  sliderFrame.appendChild(slide);
  if (direction === 'init') {
    slide.classList.remove('init-fade');
    toggleButtons();
    return;
  }
  let video = slide.children[0];
  const whenReady = () => {
    // canplaythrough seems to fire multiple times
    video.removeEventListener('canplaythrough', whenReady);
    slide.classList.add('end-fade');
    // wait for animation to finish
    setTimeout (() => {
      // remove former slide
      sliderFrame.children[1].remove();
      // reactivate buttons
      toggleButtons();
    }, Transition)
  }
  video.addEventListener('canplaythrough', whenReady);
}

change('init');

buttons[0].addEventListener('click', () => change('previous'));
buttons[1].addEventListener('click', () => change('next'));
